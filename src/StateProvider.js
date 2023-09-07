import { ChildCareRounded } from '@mui/icons-material';
import React, { createContext, useContext, useReducer } from 'react';

//prepare the data layer
export const StateContext = createContext();

//wrap app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {ChildCareRounded}
  </StateContext.Provider>;
};

//Pull info from the data layer
export const useStateValue = () => useContext(StateContext);
