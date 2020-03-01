import React from 'react'
import './App.css'
import { MyContext } from './Context.js'

const CardDetail = () => {
  const context = React.useContext(MyContext)
  return (
    <div>
      <p>Hello I'm a Card Detail</p>
      <React.Fragment>
        <p>{context.name}</p>
        <p>{context.age}</p>
        <button onClick={e => context.dispatch({ type: 'ADD_TO_AGE' })}>
          click me
        </button>
      </React.Fragment>
    </div>
  )
}

export default CardDetail
