import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.scss';
import Home from '../pages/Home/Home';

import ProfileNavigation from '@/pages/ProfileNavigation/ProfileNavigation';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/profileNavigation" element={<ProfileNavigation/>}>
                    <Route path="profile"/>
                    <Route path='edit'/>
                </Route>       
            </Routes>
        </BrowserRouter>
    )
}
