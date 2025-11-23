import { Box } from "@mui/material"
import logo from "/kj-logo.png"

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "170px",
          height: "170px",
        }}
        src={logo}
        className="logo"
      />
      <h1>See Torrents</h1>
    </Box>
  )
}
export default Header
