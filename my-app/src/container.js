import React from 'react';
import Footer from './footer';
import Header from './header';



function Container() {
  return (
    <div>
    <Header title="Welcome to my website" />
    <main>
        <h2>this is my project</h2>
    </main>

    <Footer copyright="@ 2024 my website" /> 
    </div>
  );
}

export default Container;