import {useLoaderData, useParams } from "react-router-dom";
import { SaveToLocalStorage } from "../SaveLocalStorage/saveToLs";
// import PropTypes from 'prop-types';

// JobDetails.propTypes = {

// };

function JobDetails() {
     const jobs = useLoaderData();
     const {id} = useParams()
     const jobId = parseInt(id);
     const job = jobs.find(job => job.id === jobId);
const handleApply =()=>{
SaveToLocalStorage(jobId);
}
     return (
          <div>
               <div>
               <h2 className="text-center font-semibold text-4xl mb-16">Job Details</h2>
               </div>
               <div className="my-8">
               <div className="grid grid-cols-4 gap-4">
                         <div className=" col-span-3">
                              <h2><span className="font-bold">Job Description:</span> {job.job_description}</h2>
                                     <h2 className=" py-4"> <span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</h2>
                                     <h2 className="font-bold pb-4">Educational Requirements:</h2>
                                     <p>{job.educational_requirements}</p>
                                     <h2 className="font-bold py-4">Experiences:</h2>
                                     <p>{job.experiences}</p>
                         </div>


                         <div className="col-span-1 card card-body bg-blue-50">
                              <h2 className="card-title">Job Details</h2>
                              <hr />
                              <p>Salary : {job.salary} (Per Month)</p>
                              <p>Job Title : {job.job_title}</p>
                              <h2 className="card-title">Contact Information</h2>
                              <hr />
                              <p>Phone : {job.contact_information.phone}</p>
                              <p>Email : {job.contact_information.email}</p>
                              <p>Address : {job.contact_information.address}</p>
                              <button onClick={handleApply} className="btn w-full text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now</button>
                         </div>
                    </div>
               </div>
          </div>


     );
}

export default JobDetails;