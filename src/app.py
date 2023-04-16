import pickle
from pathlib import Path
root = Path("C:/Users/ksdee/Desktop/courseai/models")
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
