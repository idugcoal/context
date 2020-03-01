import React from 'react'
import './App.css'
import { MyContext } from './Context.js'

const CardDetail = () => {
  return (
    <div>
      <p>Hello I'm a Card Detail</p>
      <MyContext.Consumer>
        {context => (
          <React.Fragment>
            <p>{context.name}</p>
            <p>{context.age}</p>
          </React.Fragment>
        )}
      </MyContext.Consumer>
    </div>
  )
}

export default CardDetail
