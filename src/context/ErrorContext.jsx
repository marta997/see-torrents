import React, { useState, createContext } from 'react'

const ErrorContext = createContext()

export const ErrorContextProvider = ({ children }) => {
  const [error, setError] = useState(false)
  // TODO: to get and show more info
  // const [errorInfo, setErrorInfo] = useState("")

  return (
    <ErrorContext.Provider
      value={{
        error: error,
        setError: setError
      }}>
      {children}
    </ErrorContext.Provider>
  )
}

export default ErrorContext