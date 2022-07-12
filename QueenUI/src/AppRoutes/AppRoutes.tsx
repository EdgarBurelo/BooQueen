import React from "react";
import { Route, Routes } from 'react-router-dom';


export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<div>Home</div>} />
            <Route path='/cars' element={<div>Cars</div>} />
            <Route path='/offices' element={<div>Offices</div>} />
            <Route path='/bookings' element={<div>Bookings</div>} />
        </Routes>
    );
};
