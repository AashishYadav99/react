import React from 'react';
import ReactDOM from 'react-dom/client';
// import Parent from './Parent_component';
// import Child from './child_component';
import './index.css'
import Footer from './footer.js';
import Conatiner from './container.js';
import Header from './header.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Parent />
    <Child /> */}
    <Header />
    <Footer/>
    <Conatiner/>
  </React.StrictMode>
);

