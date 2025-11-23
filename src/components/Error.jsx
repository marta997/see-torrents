import { useContext } from "react"

import ErrorContext from "../context/ErrorContext"

import { Alert } from "@mui/material"

const Error = () => {
  const { error, setError } = useContext(ErrorContext)

  return (
    error && (
      <Alert variant="outlined" severity="warning" onClose={() => setError(false)} >
        There was an error...
      </Alert>
    )
  )
}
export default Error
