import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.scss';

import Profile from '@/pages/Profile/Profile';
import EditingProfile from '@/components/EditingProfile/EditingProfile';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profileNavigation" >
                    <Route path="profile" element={<Profile/>} />
                    <Route path='edit' element={<EditingProfile/>} />
                </Route>                
            </Routes>
        </BrowserRouter>
    )
}
