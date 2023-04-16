import pickle
from pathlib import Path
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask import Flask,request,jsonify
from flask_cors import CORS
root = Path(r"C:\Users\Akhilesh\REACT\course-ai\models")
file=root/'data.pkl'
fileobj=open(file,'rb')
domain=pickle.load(fileobj)

#Jaccard Function
def jaccard(list1, list2):
    intersection = len(list(set(list1).intersection(list2)))
    union = (len(list1) + len(list2)) - intersection
    return float(intersection) / union
dict_score={}
import operator
import itertools
sort_by_val=operator.itemgetter(1)

#Function that fetches jaccard function
# import operator
import itertools
sort_by_val=operator.itemgetter(1)
def domain_tosearch(words):
    dict_score={}
    for i in range(len(domain)):
        temp=jaccard(domain[i],words)
        dict_score[i]=temp
    dict_score=sorted(dict_score.items(),key=sort_by_val,reverse=True)
    dict_score={k:v for k,v in dict_score}
    dict_score=dict(itertools.islice(dict_score.items(), 10))
    final_domain=[]
    for key in dict_score:
        final_domain.extend(domain[key])
    set_res=set(final_domain)
    final_domain=list(set_res)
    final_domain=[i for i in final_domain if i not in words]
    ans=""
    for i in final_domain:
        ans=ans+i+','
    return ans

#Reading Data
df= pd.read_csv(r'C:\Users\Akhilesh\REACT\course-ai\data\data_with_tags.csv')
 
#Recommendation Function
def get_recommendation_tfidf_cosinSim(user_record,data=df):
  df1=df
  df1.loc[len(df1)]=user_record
  tfv= TfidfVectorizer(min_df=3, max_features=None, strip_accents='unicode',analyzer='word',token_pattern=r'\w{1,}',ngram_range=(1,3),stop_words='english')
  df1['tags']=df1['tags'].fillna('')
  tfv_matrix=tfv.fit_transform(df1['tags'])
  cos_sim=cosine_similarity(tfv_matrix,tfv_matrix)
  indices=pd.Series(df1.index,index=df1['Title']).drop_duplicates()
  idx=indices[user_record['Title']]
  # print('title',user_record['Title'])
  # print('idx',idx)
  cosSim_scores=list(enumerate(cos_sim[idx]))
  cosSim_scores=sorted(cosSim_scores,key=lambda x:x[1],reverse=True)
  cosSim_scores=cosSim_scores[1:16]
  course_indices=[i[0] for i in cosSim_scores]
  df1_new=df1.iloc[course_indices]
  df1_new=df1_new.sort_values(by=['Stars'],ascending=False)
  return df1_new



app = Flask(__name__)
CORS(app)
@app.route('/data',methods=["POST"])
def predict():
    tagsArray = request.get_json()
    tagsArray = tagsArray["arg"]
    print(tagsArray)
    id=df.shape[0]+1
    title='user_rec'+str(id)
    domains=domain_tosearch(tagsArray)
    print(domains)
    user_record={'Sno':id,'Title':title,'Stars':'0','Link':'none','tags':domains}
    # print(df.shape)
    recommendations=get_recommendation_tfidf_cosinSim(user_record)
    # print(recommendations)
    return recommendations.to_dict(orient='records')
    

if __name__ == '__main__':
    app.run(debug=True)