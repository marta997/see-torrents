import { useEffect, useState } from "react"
import "./App.css"
import BasicSelect from "./components/Selector"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { getServers, searchTorrent } from "./services/api"
import { Alert, Box, Button, CircularProgress, TextField } from "@mui/material"
import Header from "./components/Header"
import Results from "./components/Results"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

function App() {
  const [server, setServer] = useState("")
  const [servers, setServers] = useState([])
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  async function getServersData() {
    const data = await getServers()
    setServers(data?.supported_sites)
  }

  async function getResults() {
    setLoading(true)
    const data = await searchTorrent(server, search)
    setResults(data?.data)
    setLoading(false)
  }

  const handleClick = () => {
    getResults()
  }

  useEffect(() => {
    getServersData()
  }, [])

  useEffect(() => {
    console.log(results)
  }, [results])

  return (
    <ThemeProvider theme={darkTheme}>
      <Header />
      <br />
      <p>
        <code>Select the torrent server:</code>
      </p>
      <Box
        sx={{ width: "32rem", display: "flex", justifyContent: "space-around" }}
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
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
      <br />
      <p className="read-the-docs">
        Going to look for "{search}" in "{server}"
      </p>
      {loading && <CircularProgress color="secondary" />}
      {results && <Results results={results} />}
    </ThemeProvider>
  )
}

export default App
