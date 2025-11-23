import { useState, useContext } from "react"

import { Box, Button, TextField } from "@mui/material"

import ErrorContext from "../context/ErrorContext"
import { ERROR, searchTorrent } from "../services/api"

import BasicSelect from "./Selector"

const Searcher = (props) => {
  const { servers, setResults, setLoading } = props
  const [search, setSearch] = useState("")
  const [server, setServer] = useState("")
  const { setError } = useContext(ErrorContext)

  async function getResults() {
    setLoading(true)
    const data = await searchTorrent(server, search)
    if (data == ERROR) {
      setError(true)
      setResults([])
    } else {
      setResults(data?.data)
    }
    setLoading(false)
  }

  const handleClick = () => {
    setError(false)
    getResults()
  }

  return (
    <Box sx={{ dislay: "flex", justifyContent: "center", width: "34rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <TextField
          id="outlined-basic"
          label="What do you want to search...?"
          variant="outlined"
          color="warning"
          sx={{ width: "70%" }}
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
        {servers && (
          <BasicSelect
            label={"Server"}
            items={servers}
            selection={server}
            setSelection={setServer}
          />
        )}
      </Box>
      <br />
      <Button
        disabled={search == "" || server == ""}
        color="warning"
        variant="contained"
        onClick={handleClick}
      >
        Search!
      </Button>
    </Box>
  )
}
export default Searcher
