//setup data layer 
// we need this to track the basket
import React, { createContext, useContext, useReducer } from "react"
//This is a data layer
export const StateContext = createContext()

//Build a provider
export const StateProvider = ({ reducer, initialState, children }) =>
  (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )

//This is how we use inside a component
export const useStateValue = () => useContext(StateContext)