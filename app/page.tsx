import React from 'react';
import myApp from './api/hello/_app';



// call myApp() from api/hello/_app.tsx
// and render it in the page



const index = () => {
  return (
    <div>
    {myApp()}    
    </div>
  );
};

export default index;