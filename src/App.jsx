
import './App.css'
// import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
// import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home';
import ContactMe from './Components/ContactMe/ContactMe';
import Portfolio from './Components/Portfolio/Portfolio';
import NotFoundError from './Components/NotFoundError/NotFoundError';

import {  createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

const router = createHashRouter([
  {
    path: '', element: <Layout />, children: [
      { index:true, element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/ContactMe', element: <ContactMe /> },
      { path: '/Portfolio', element: <Portfolio /> },
      { path: '*', element: <NotFoundError /> },
    ]
  }
]
);


export default function App() {

  return (
    <>
      <RouterProvider router={router}/>
        {/* <Navbar />
      <Home/>
      <Portfolio/>
      <About/>
      <ContactMe/>
      <Footer/>
      <NotFoundError/> */}
      </>
      )
}
