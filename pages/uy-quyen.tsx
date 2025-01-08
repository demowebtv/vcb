'use client';
import React from 'react';
import AccreditClient from '../src/components/AccreditClient';
import TopBar from '../src/components/TopBar';
import Footer from '../src/components/Footer';

const UyQuyen = () => {

  return (
    <><div className="xl:px-3 xxl:px-0">
        <TopBar isLogin={false}/>
      <AccreditClient />
      <Footer />
    </div>
    </>
  )
}

export default UyQuyen;
