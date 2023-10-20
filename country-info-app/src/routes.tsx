import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/home';
import { CountryAppStore } from './store/countryAppStore';

export default (
    <Routes>
        <Route path="/" element={<Home store={new CountryAppStore()}/>} />
    </Routes>
);