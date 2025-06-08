import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import ForgotPasswordPage from "@/pages/auth/ForgotPassword/ForgotPassword.jsx";
import RegisterPage from "@/pages/auth/Registration/Registration.jsx";
import LoginPage from "@/pages/auth/Login/LoginPage.jsx";
import './App.scss';
import Home from '../pages/Home/Home';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
