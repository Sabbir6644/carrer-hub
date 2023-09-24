import { useEffect, useState } from "react";
import { getStoredApplications } from "../SaveLocalStorage/saveToLs";
import Details from "../FeaturedJobs/Details";

function AppliedJobs() {
     const [jobsApply, setJobsApply] = useState([]);
     const [getJobs, setGetJobs] = useState([]);
     const [allJobs, setAllJobs] = useState('All');
     const [isShow, setIsShow] = useState(false);

     const handleDelete = () => {
          localStorage.clear()
          setJobsApply([])
          setGetJobs([])
     }

     useEffect(() => {
          fetch('jobs.json')
               .then(res => res.json())
               .then(data => {
                    const storedId = getStoredApplications();
                    const jobApplied = data.filter(job => storedId.includes(job.id))
                    setGetJobs(jobApplied);
                    setJobsApply(jobApplied);
               })

     }, []);

     const handleSeeByFilter = (filter) => {
          if (filter === 'All') {
               setJobsApply(getJobs);
          } else if (filter === 'Remote') {
               const remote = getJobs.filter(job => job.remote_or_onsite === 'Remote');
               setJobsApply(remote);
          } else if (filter === 'On Site') {
               const onSite = getJobs.filter(job => job.remote_or_onsite === 'Onsite');
               setJobsApply(onSite)
          }
     }
     useEffect(() => {
          handleSeeByFilter(allJobs)
     }, [allJobs])

     const handleFilter = (filtered) => {
          setAllJobs(filtered)
     }

     return (
          <div>
               <h2 className="text-center font-semibold text-4xl mb-16">Applied Jobs: {getJobs.length}</h2>


               <div className="flex justify-end mb-3">
                    <div className="dropdown">
                         <label tabIndex={0} className="btn m-1">Filter By <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                         </svg></label>
                         <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                              <li><button onClick={() => handleFilter('All')}>All</button></li>
                              <li><button onClick={() => handleFilter('Remote')}>Remote</button></li>
                              <li><button onClick={() => handleFilter('On Site')}>On Site</button></li>
                         </ul>
                    </div>
               </div>
               <div className="flex justify-center">
                    {
                         jobsApply.length > 0 ? <button onClick={handleDelete} className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Delete All</button> : ""

                    }
               </div>
               <div className="my-8">

                    {
                         isShow ? jobsApply.map(job => <Details key={job.id} job={job}></Details>) : jobsApply.slice(0, 2).map(job => <Details key={job.id} job={job}></Details>)
                    }


               </div>
               <div className="flex justify-center mb-8">
                    {
                         jobsApply.length > 2 ? <button onClick={() => setIsShow(!isShow)} className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">{isShow ? 'See Less' : 'See All'}</button> : ""
                    }
               </div>
          </div>
     );
}

export default AppliedJobs; 



