import React from 'react';
import SideBar from '@/components/_sidebar';

// import globals from '../app/globals.css';


function myApp() {
  return (
    <div className="grid grid-cols-12 gap-6 px-6 lg:my-12 lg:px-48 sm:px-25 md:px-32">
        <div className="col-span-12 text-center bg-white lg:col-span-3 rounded-2xl">
            <SideBar />
        </div>
        <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl">
            <p className="px-10 text-xl">This is a test</p>
        </div>
      
    </div>
  );
}

export default myApp;