import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Product from './components/Product'
import Dashboard from './components/Dashboard';
import Carts from './components/Carts';
import RootLayout from './components/RootLayout';

function App() {
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Dashboard />}></Route>
    <Route path="/carts" element={<Carts />}></Route>
  </Route>
))

  return (
    <>
      <RouterProvider  router={router}   />
       
    </>
  )
}

export default App
