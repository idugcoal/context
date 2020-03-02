import React from 'react'

export const MyContext = React.createContext()

const ContextProvider = props => {
  const reducer = (state, action) => {
    if (action.type === 'ADD_TO_AGE') {
      return { ...state, age: state.age + 1 }
    }
  }
  const [state, setState] = React.useState({
    name: 'Doug',
    age: 100,
    cool: true,
    dispatch: action => setState(state => reducer(state, action)),
  })

  return <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
}

export default ContextProvider
