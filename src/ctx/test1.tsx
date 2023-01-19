import {  createContext } from 'react'
import { proxy, useSnapshot } from 'valtio'

const MyContext = createContext({})

export const MyProvider = ({children}) => {
    const state = 'wa'
    return (
        <MyContext.Provider value={state}>
        {children}
        </MyContext.Provider>
    )
}