import { Satellite } from '@material-ui/icons';
import React, { useEffect, useReducer } from 'react';
import AuthReducer from "./AuthReducer"

const initialState = {
    usuer:JSON.parse(localStorage.getItem(state.user)),
    isFetching:false,
    error:false
}

export const AuthContext = createContext(initialState)

export const AuthContextProvider =({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])
    
    return <AuthContext.Provider value={{
       user:state.user,
       isFetching:state.isFetching,
       error:state.error,
       dispatch
    }}>
        {children}    
    </AuthContext.Provider>
}
