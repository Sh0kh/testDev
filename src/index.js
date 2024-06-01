import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './Pages/Error';
import Home from './Pages/Home';
import AboutUS from './Pages/AboutUs';
import ServicePage from './Pages/ServicePage';
import Portfolio from './Pages/Portfolio';



const appRouter  = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/AboutUs",
        element:<AboutUS/>
      },
      {
        path:"/Service",
        element:<ServicePage/>
      },
      {
        path:"/Portfolio",
        element:<Portfolio/>
      },
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);


reportWebVitals();
