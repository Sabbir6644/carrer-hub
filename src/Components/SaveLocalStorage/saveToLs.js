import Swal from "sweetalert2";

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
          return Swal.fire(
               'Application Submitted!',
               'Please clicked the button!',
               'success'
             )
     }else{
          return Swal.fire({
               icon: 'error',
               title: 'Sorry...',
               text: 'Already Applied !',
               
             })
     }
}
export {getStoredApplications, SaveToLocalStorage}