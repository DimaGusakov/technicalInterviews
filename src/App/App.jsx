import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.scss';

import ProfileNavigation from '@/pages/ProfileNavigation/ProfileNavigation';
import Profile from '@/pages/Profile/Profile';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profileNavigation" element={<ProfileNavigation/>}>
                    <Route path="profile" element={<Profile/>} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}
