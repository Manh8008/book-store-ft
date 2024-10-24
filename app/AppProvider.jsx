'use client'
import { createContext, useContext, useState } from 'react'

const AppContext = createContext({
    sessionToken: '',
    setSessionToken: () => {}
})

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error('UseAppContext must be used within an AppProvider')
    }

    return context
}

export default function AppProvider({ children, initialSessionToken = '' }) {
    const [sessionToken, setSessionToken] = useState(initialSessionToken)

    return (
        <AppContext.Provider value={{ sessionToken, setSessionToken }}>
            {children}
        </AppContext.Provider>
    )
}
