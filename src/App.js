import React from 'react'
import './styles/App.css'
import AppRuoter from "./compotents/AppRuoter";
import {
    BrowserRouter
} from "react-router-dom";
import MyNavbar from "./compotents/MyNavbar/MyNavbar";
import Footer from './compotents/footer/Footer';



function App() {
    
   return (
       <div>
           <BrowserRouter>
                <MyNavbar/>
                <AppRuoter/>
                <Footer/>
           </BrowserRouter>
       </div>
   )
}

export default App;