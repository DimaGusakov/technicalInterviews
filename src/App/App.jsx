import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.scss';

import Education from '@/pages/Education/Education';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/education" element={<Education/>}/>
            </Routes>
        </BrowserRouter>
    )
}
