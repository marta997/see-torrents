import { useEffect, useState } from "react"
import "./App.css"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { getServers } from "./services/api"
import { Box, CircularProgress, TextField } from "@mui/material"
import Header from "./components/Header"
import Results from "./components/Results"
import Searcher from "./components/Searcher"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

function App() {
  const [servers, setServers] = useState([])
  // TODO: use a context or something?
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  async function getServersData() {
    const data = await getServers()
    setServers(data?.supported_sites)
  }

  useEffect(() => {
    getServersData()
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginBottom: "1rem" }}>
            <Header />
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <Searcher
              servers={servers}
              setResults={setResults}
              setLoading={setLoading}
            />
          </Box>
          <Box>{loading && <CircularProgress color="secondary" />}</Box>
          <Box>{results && <Results results={results} />}</Box>
        </Box>
    </ThemeProvider>
  )
}

export default App
