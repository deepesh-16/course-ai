import CustomCard from "../common/Card";
const About = () => {
  return (
    <div className="container mt-3 text-white bg-[#00242c] min-h-screen">
      <div className="Recommender mb-5">
        <h1 className="header h2 ">Course Recommender System</h1>
        <p>
          Recommender System is a software system that provides specific
          suggestions to users according to their preferences. These techniques
          may provide decision-making capabilities to the user. Items refer to
          any product that the recommender system suggests to its user like
          movies, music, news, travel packages, e-commerce products, etc.
        </p>
      </div>
      <div>
        <h4 className="mb-5">
          Based on your preferences , your recommendations will be shown to you
          as such :
        </h4>
        <div className="cards flex justify-content-evenly container mt-4 flex-wrap">
          <CustomCard
            Title="A Crash Course in Data Science"
            rating="4.7"
            link="https://www.coursera.org/learn/data-science-course?recoOrder=19&utm_source=gg&utm_medium=sem&utm_campaign=B2C_INDIA_google-it-automation_FTCOF_professional-certificates_arte-re-PMAX_non-nrl_after14D&utm_content=B2C&campaignid=19201532531&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adpostion=&creativeid=&hide_mobile_promo&gclid=CjwKCAjwue6hBhBVEiwA9YTx8EIWZYC49QcFmGKjw9-smT-bcXwdO4BIwJ3f4XeGGv1Ejo9rg7U8lRoCJFwQAvD_BwE"
          />
          <CustomCard
            Title="The Complete SQL Bootcamp 2020: Go from Zero to Hero"
            rating="4.6"
            link="https://www.udemy.com/course/the-complete-sql-bootcamp/"
          />
          <CustomCard
            Title="The Business Intelligence Analyst Course 2020"
            rating="4.5"
            link="https://www.udemy.com/course/the-business-intelligence-analyst-course-2018/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
