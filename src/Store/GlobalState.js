import React, { createContext, useReducer } from "react"
import AppReducer from "./Reducer"

// Initial state
const initialState = {
    User: [{
        name: "zubair",
        email: "zubair@gmail.com"
    }],
    User_Register : 1
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function addUser(transaction) {
        console.log("TRAJJHJDS", transaction)
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    function deleteUser(key){
        console.log("TRAJJHJDS", key)
        dispatch({
            type:"DELETE_USER",
            key:key
        })
    }



    return (
        <GlobalContext.Provider
            value={{
                User: state.User,
                User_Register:state.User_Register,
                addUser,
                deleteUser

            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}