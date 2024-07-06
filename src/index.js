import React from 'react';
import ReactDOM from 'react-dom/client';

import {Router, RouterProvider} from "react-router-dom"
import "./Main.css"
import Routers from './Routers';


 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
 <RouterProvider router={Routers}/>
 
 

  </React.StrictMode>
);

