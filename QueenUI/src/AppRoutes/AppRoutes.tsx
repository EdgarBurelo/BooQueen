import React from "react";
import { Route, Routes } from 'react-router-dom';
import CarsPage from '../Cars/CarsPage';
import OfficePage from "../Offices/OfficePage";
import BookingPage from "../Bookings/BookingPage";

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<div>Home</div>} />
            <Route path='/cars' element={<CarsPage />} />
            <Route path='/offices' element={<OfficePage />} />
            <Route path='/bookings' element={<BookingPage />} />
        </Routes>
    );
};
