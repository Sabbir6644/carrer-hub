import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

const Home = () => {
     const loc = useLocation();
     useEffect(() => {
          if (loc.pathname=== '/'){
               document.title = `Carrer-hub/home`;
          }else{
               document.title = `Carrer-hub ${loc.pathname}`;
          }
          if (loc.state) {
               document.title = `Carrer-hub/job-title/ ${loc.state}`;
          }

     }, [loc.pathname,loc.state])
     return (
          <div>
               <Header></Header>
               <div className="min-h-[50vh] max-w-7xl mx-auto">
                    <Outlet></Outlet>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default Home;