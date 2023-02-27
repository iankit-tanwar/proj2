import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './routes/Route'

export const App=()=> {
  return (
    <BrowserRouter>
    <Routes>
        {
            routes.map((currentValue,index,arr)=>{
                return <Route key ={index} path={currentValue.path} element={currentValue.element}/>

            })
        }
      
        
        
        </Routes></BrowserRouter>
  )
}
