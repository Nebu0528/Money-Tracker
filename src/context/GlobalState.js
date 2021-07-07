import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//set InitialState
const initialState = {
    transactions: []
}

//Create the Context
export const GlobalContext = createContext (initialState);

// Create the Provider Component
export const GlobalProvider = ({ children }) => {
     const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
function deleteTransaction(id) {
dispatch({
     type: 'DELETE_TRANSACTION',
     payload: id
});
}

function addTransaction(transaction) {
     dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
     });
}

     return (<GlobalContext.Provider value={{
         transactions: state.transactions, deleteTransaction, addTransaction
         }}>
        {children} 
     </GlobalContext.Provider>)
}