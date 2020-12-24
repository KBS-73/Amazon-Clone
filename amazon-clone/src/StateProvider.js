import React, { createContext,useContext,useReducer } from 'react';

//Prepares the dataLayer
export const StateContext = createContext();

//Wraps the app and provides the data layer
export const StateProvider = ({reducer,initalState,children}) => (
    <StateContext.Provider value = {useReducer(reducer,initalState)}>
        {children}
    </StateContext.Provider>
)

//Pulls information from the data layer
export const useStateValue = () => useContext(StateContext);