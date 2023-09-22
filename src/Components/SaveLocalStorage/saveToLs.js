const getStoredApplications = ()=>{
     const StoredApplications = localStorage.getItem('job-applications');
if(StoredApplications){
     return JSON.parse(StoredApplications);
}
return [];
}
const SaveToLocalStorage = (id)=>{
     const storedJobApplication = getStoredApplications();
     const exists = storedJobApplication.find(jobId=> jobId === id);
     if(!exists){
          storedJobApplication.push(id);
          localStorage.setItem('job-applications', JSON.stringify(storedJobApplication))
     }
}
export {getStoredApplications, SaveToLocalStorage}