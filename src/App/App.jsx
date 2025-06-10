import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import ForgotPasswordPage from "@/pages/auth/ForgotPassword/ForgotPassword.jsx";
import RegisterPage from "@/pages/auth/Registration/Registration.jsx";
import LoginPage from "@/pages/auth/Login/LoginPage.jsx";
import './App.scss';
import Home from '../pages/Home/Home';

import ProfileNavigation from '@/pages/ProfileNavigation/ProfileNavigation';

import TestBlock from '@/pages/TestBlock/TestBlock';
import Results from '@/pages/Results/Results';

import EducationPage from '@/pages/EducationPage/EducationPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/profileNavigation" element={<ProfileNavigation/>}>
                    <Route path="profile"/>
                    <Route path='edit'/>
                    <Route path='learning' element={<EducationPage />}/>
                    <Route path='questions' element={<TestBlock/>}/>
                    <Route path='results' element={<Results/>}/>
                </Route>       
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
