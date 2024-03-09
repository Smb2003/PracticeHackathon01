import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from '../pages/Home'
import { LoginPage } from '../pages/LoginPage'
import { Register } from '../pages/Register'
import { Products } from '../pages/Products'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
                <Route path="LoginPage" element={<LoginPage/>}/>
                <Route path="Register" element={<Register/>}/>

            <Route>
                <Route path="" element={<Home/>}/>
                <Route path="Products" element={<Products/>}/>

            </Route>
        </Route>
    )
)

export const Routing = () => {
  return (
    <RouterProvider router={router}/>
  )
}
