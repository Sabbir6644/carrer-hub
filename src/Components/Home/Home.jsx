import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
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