
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import HomeAdmin from './pages/Admin/home.js'
import Music from './pages/Music'
import Students from './pages/Students'
import StudentsCadastre from './pages/Students/cadastre.js'
import Col from './pages/Col'
import Courses from './pages/Courses'
import FormUser from './pages/User/form'
import Books from './pages/Books/index.js'
import FormBooks from './pages/Books/form.js'
import Menu from './components/Menu/menu.js'
import MenuAdmin from './components/MenuAdmin/menu.js'
import Nav from './components/Nav'

import FormUserAdmin from './pages/Admin/User/form'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppRoutes() {
    return (
        <BrowserRouter>
        
            <Nav />

            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/music" element={<Music />}> </Route>
                <Route path="/col" element={<Col />}> </Route>
                <Route path="/courses" element={<Courses />}> </Route>
                <Route path="/home.js" element={<HomeAdmin />}> </Route>
                <Route path="/user/form.js" element={<FormUser />}> </Route>
                <Route path="/books" element={<Books />}> </Route>
                <Route path="/books/form.js" element={<FormBooks />}> </Route>
                <Route path="/students" element={<Students />}> </Route>
                <Route path="/Students/cadastre.js" element={<StudentsCadastre />}> </Route>

                <Route path="admin/user/form.js" element={<FormUserAdmin />}> </Route>

            </Routes>
        </BrowserRouter>
    )
}