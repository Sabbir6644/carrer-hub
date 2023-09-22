import { useEffect, useState } from "react";
import Jobs from "./Jobs";


const FeaturedJobs = () => {
     const [jobs, setJobs]= useState([]);
     useEffect(()=>{
          fetch('jobs.json')
          .then(res=> res.json())
          .then(data=> setJobs(data))
     },[])
     return (
          <div className="my-7">
               <div>
                    <h2 className="text-center font-semibold text-4xl">Featured Jobs</h2>
                    <p className="text-center font-medium">Explore thousands of job opportunities
                     with all the information you need. Its your future</p>
               <div className="grid grid-cols-2 gap-5 mt-7">
                    {
                         jobs.map(job=><Jobs key={job.id} job={job}></Jobs>)
                    }

               </div>
               <div className="flex justify-center mt-5">
               <button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">See All Jobs</button>
               </div>
               </div>
          </div>
     );
};

export default FeaturedJobs;