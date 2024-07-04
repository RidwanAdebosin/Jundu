
import Home from "../Pages/Home";
import Header  from "../components/Header/Header";
import Hero  from "../components/Hero/Hero";
import { Outlet } from "react-router";


const Layout = () => {
  return (
    <div className="app-container">
        <main-app-holder>
            <section-app-content>
                <Header/>
                <Hero/>
                <Home/>
                <div className="app-items">
                    <Outlet/>
                </div>
            </section-app-content>
        </main-app-holder>
    </div>
  );
};

export default Layout;
