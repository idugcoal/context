import React from 'react'

export const MyContext = React.createContext()

const ContextProvider = props => {
  const state = {
    name: 'Doug',
    age: 100,
    cool: true,
  }

  return <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
}

export default ContextProvider
