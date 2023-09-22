import { useEffect, useState } from "react";
import Catagory from "./Catagory";


const CatagoryJobs = () => {
     const [catagoryJobs, setCatagoryJobs]= useState([]);
     useEffect(()=>{
          fetch('categories.json')
          .then(res => res.json())
          .then(data => setCatagoryJobs(data))
     },[])
     
     return (
          <div>
              
               <div className="my-7">
<h2 className="text-center font-semibold text-4xl">Job Category List</h2>
<p className="text-center font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
</div>
{/* Card Section */}

<div className=" flex gap-4 justify-between">
{
                    catagoryJobs.map(catJob =><Catagory key={catJob.id} catJob={catJob}></Catagory>)
               }

</div>
          </div>
     );
};

export default CatagoryJobs;