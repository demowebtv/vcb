'use client';
import React from 'react';
import AccreditForm from '../src/components/AccreditForm';
import TopBar from '../src/components/TopBar';
import Footer from '../src/components/Footer';

const ThemUyQuyen = () => {

  return (
    <><div className="xl:px-3 xxl:px-0">
        <TopBar isLogin={false}/>
      <AccreditForm />
      <Footer />
    </div>
    </>
  )
}

export default ThemUyQuyen;
