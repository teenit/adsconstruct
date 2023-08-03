import React from "react";
import Header from "../Header/Header";
import FrontPage from "../Pages/FrontPage/FrontPage";
import Footer from "../Footer/Footer";
import Instructions from "../Pages/Instructions/Instructions";
import { Route, Routes } from "react-router-dom";
import Profile from "../Pages/Profile/Profile";
import Police from "../Pages/Police/Police";
const App = ()=>{
    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/instruction" element={<Instructions />} />
                <Route path="/police" element={<Police/> } />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
        </>
    )
}
export default App;