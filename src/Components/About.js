import CustomCard from "../common/Card";
const About = () => {
  return (
    <div className="container mt-10 text-white bg-[#00242c] min-h-screen">
      <div className="Recommender mb-5">
        <h1 className="header text-5xl italic pt-8 pb-4">Course Recommender System</h1>
        <div className=' flex flex-col space-y-8 md:flex-row md:space-y-0  md:space-x-8'>
          <p className="text-xl flex-auto italic">
            Recommender System is a software system that provides specific
            suggestions to users according to their preferences. These techniques
            may provide decision-making capabilities to the user. Items refer to
            any product that the recommender system suggests to its user like
            movies, music, news, travel packages, e-commerce products, etc.
          </p>
          <p className="text-xl flex-auto italic">
          According to the latest Pearson study, in 2019, 62 percent of Indians liked the concept of combining the 
          convenience of passive learning online, with the quality of active learning in-person and experienced taking 
          classes online. And nowadays there are many courses available for students, and sometimes it is hard for a 
          student to perceive information related to those courses and decide which course to take. This is where our 
          application CourseAI can be very pivotal and helpful to students to shortlist the top and relevant courses 
          and choose the right one amongst them.
          </p>
        </div>
        <div className=' flex flex-col space-y-8 md:flex-row md:space-y-0  md:space-x-8'>
          <p className="text-xl flex-auto italic">
          <h1 className="text-2xl mt-10 italic">Objectives</h1>
          The main objective of our project is to help the user in selecting a course that is relevant to him.
          He/she should choose a course that suits his/her interests and matches the prerequisite knowledge so as to 
          be able to adjust easily to the course curriculum.
          </p>
          <p className="text-xl flex-auto italic">
          <h1 className="text-2xl mt-10 italic">Methodology</h1>
          First, we take the input of the user as his skills and pre-Knowledge , then we pass it to courseAI’s machine learning algorithm which will mostly use a random forest algorithm to classify this data.
          Then by using this classified data with the courses prerequisites , the matches of these both are displayed as recommended courses to the user.
          Courses from udemy and coursera are shown and futher platform will be added soon.
          </p>
        </div>
        <h1 className="text-2xl mt-10 italic">Devoleped By:</h1>
        <ul className="text-xl italic font-semibold pb-12">
          <li>Gautham Mallipeddi</li>
          <li>Kommineni Srinivasa Deepesh</li>
          <li>Kottakota Akhilesh Kumandan</li>
          <li>Naram Tapan Ganesh</li>
        </ul>
      </div>
      
    </div>
  );
};

export default About;
