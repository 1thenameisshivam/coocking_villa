import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import appStore from './assets/appStore'

function App() {
  return (
    <>
       <Provider store={appStore}>
       <Header/>
       <Outlet/>
       </Provider>
    </>
     
  )
}

export default App
