import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.scss';

import ProfileNavigation from '@/pages/ProfileNavigation/ProfileNavigation';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profileNavigation" element={<ProfileNavigation/>}>
                    <Route path="profile"/>
                    <Route path='edit'/>
                </Route>                
            </Routes>
        </BrowserRouter>
    )
}
