import CatagoryJobs from "../CatagoryJobs/CatagoryJobs";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import userPic from "../Banner/user.png";

const Banner = () => {
     
     return (
<div>
<div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={userPic} className="max-w-2xl max-h-[744px]" />
    <div className="max-w-3xl pl-9">
      <h1 className="text-7xl font-bold">One Step <br /> Closer To Your <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Dream Job</span></h1>
      <p className="py-6 pr-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
      <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
    </div>
  </div>
  
</div>
<CatagoryJobs></CatagoryJobs>

<FeaturedJobs></FeaturedJobs>
  </div>
     );
};

export default Banner;