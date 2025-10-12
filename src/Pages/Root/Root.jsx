import React from 'react';
import Navbar from '../../Component/Header/Navbar';
import { Outlet,useNavigation } from 'react-router';
import Footer from '../../Component/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Loading from '../../Component/Loading/Loading';

const Root = () => {
    const navigation =useNavigation();

    return (

        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            {
                navigation.state === "loading"?<Loading></Loading>:<Outlet></Outlet>
            }
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;