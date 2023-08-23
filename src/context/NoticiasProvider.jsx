import React, { useState, createContext, useEffect } from 'react'

const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {

    return (
        <NoticiasContext.Provider
            value={{

            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext