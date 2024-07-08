import React from 'react'
import { Route, Routes } from "react-router-dom"
import Posts from "../pages/Posts"
import Home from "../pages/Home"
import Contacts from "../pages/Contacts"
import PostIdPage from '../pages/PostIdPage'


const AppRuoter = () => {
    return (
        <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/posts/:id" element={<PostIdPage/>} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}

export default AppRuoter