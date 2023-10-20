import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/home';
import { ErrorPage } from './components/errorPage/errorPage';

export default (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} /> 
    </Routes>
);