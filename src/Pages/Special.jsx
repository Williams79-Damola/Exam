import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Navbar from "../Navbar/Navbar";

const Special =() =>{
    return(
        <div>
            <div>
                <Navbar/>
                <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='faq' element={<FAQ/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Special