import React from 'react'
import './App.css'
import Card from './Card'
import ContextProvider from './Context'

const App = () => {
  return (
    <div className='App'>
      <ContextProvider>
        <p>Hello I'm the app</p>
        <Card />
      </ContextProvider>
    </div>
  )
}

export default App
