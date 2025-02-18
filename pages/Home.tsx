'use client';
import React from 'react';
import HomeClient from '../src/components/HomeClient';
import TopBar from '../src/components/TopBar';
import Footer from '../src/components/Footer';

const Home = () => {

  return (
    <><div className="xl:px-3 xxl:px-0">
        <TopBar isLogin={false}/>
      <HomeClient />
      <Footer />
    </div>
    </>
  )
}

export default Home;
