import React from "react";
import Header from "../Header/Header";
import FrontPage from "../FrontPage/FrontPage";
import Footer from "../Footer/Footer";
import User from "../User/User";
import Instructions from "../Instructions/Instructions";

const App = ()=>{
    return(
        <div>
            <Header />
            <FrontPage />
            <Instructions />
            <Footer />
            <User />
        </div>
    )
}
export default App;