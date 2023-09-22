import PropTypes from 'prop-types';
const Catagory = ({ catJob }) => {
     return (
          <div>
               <div className="card pl-6 w-80 bg-blue-50">
                    <div className="w-16 h-16 ml-6 mt-6 flex justify-center items-center rounded-lg bg-blue-200">
                         <img className="w-10 h-10" src={catJob.logo} alt="Shoes" /></div>
                    <div className="card-body">
                         <h2 className="card-title">{catJob.category_name}</h2>
                         <p>{catJob.availability}</p>
                    </div>
               </div>
          </div>
     );
};
Catagory.propTypes = {
     catJob: PropTypes.array
};
export default Catagory;

