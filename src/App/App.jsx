import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.scss';
import Home from '../pages/Home/Home';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
             <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
