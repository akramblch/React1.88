import React from 'react';
import Home from '../pages/Home/Home';
import Footer from './Footer/Footer';
import Header from "./Header/Header";
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header/>
            {/* <Home/> */}
            <Outlet/>
            <Footer/>
            
        </>
    );
};

export default Layout;