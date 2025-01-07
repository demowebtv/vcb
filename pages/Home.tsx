'use client';
import React from 'react';
import HomeClient from '../src/components/HomeClient';
import TopBar from '../src/components/TopBar';
import Footer from '../src/components/Footer';

const Home = () => {

  return (
    <><TopBar isLogin={false}/>
      <HomeClient />
      <Footer />
    </>
  )
}

export default Home;
