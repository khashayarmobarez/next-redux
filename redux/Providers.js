'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

function Providers({children}) {

  return (
    <Provider store={store}>
        {/* children components will go here */}
        {children}
    </Provider>
  )
}

export default Providers
