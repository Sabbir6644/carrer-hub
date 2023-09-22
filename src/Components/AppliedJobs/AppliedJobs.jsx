
// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredApplications } from "../SaveLocalStorage/saveToLs";
import Details from "../FeaturedJobs/Details";



// AppliedJobs.propTypes = {

// };

function AppliedJobs() {
     const [jobsApply, setJobsApply] = useState([]);
     const jobs = useLoaderData();
     useEffect(() => {
          const storedId = getStoredApplications();
          if (jobs.length > 0) {
               const jobApplied = jobs.filter(job => storedId.includes(job.id))
               setJobsApply(jobApplied);
          }
     }, [])


     return (
          <div>
               <h2 className="text-center font-semibold text-4xl mb-16">Applied Jobs</h2>


               <div className="flex justify-end mb-3">
                    <div className="dropdown">
                         <label tabIndex={0} className="btn m-1">Filter By <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                         </svg></label>
                         <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                              <li><Link>All</Link></li>
                              <li><Link>Remote</Link></li>
                              <li><Link>On Site</Link></li>
                         </ul>
                    </div>
               </div>
               <div>
                    {
                         jobsApply.map(job=><Details key={job.id} job={job}></Details>)
                    }

                    
               </div>
          </div>
     );
}

export default AppliedJobs;