import React from 'react';
import { Route, createHashRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Root from './layout/Root';
import Homepage from './pages/Homepage';
import GirlChild from './pages/GirlChild';
import AboutUs from './pages/AboutUs';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root/> }>
      <Route index element={ <Homepage/> }/>
      <Route path='/about' element={ <AboutUs/> }/>
      <Route path='/girl-child' element={ <GirlChild/> }/>
    </Route>
  )
)
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
