'use client';
import React from 'react';
import Dangnhap from '../src/components/Dangnhap';
import TopBar from '../src/components/TopBar';
import Footer from '../src/components/Footer';

const Login = () => {

  return (
    <><TopBar isLogin={true} />
      <Dangnhap />
      <Footer />
    </>
  )
}

export default Login;
