import { Box } from "@mui/material"
import logo from "/kj-logo.png"

const Header = () => {
  return (
    <Box
      sx={{
        width: "32rem",
        display: "flex",
        justifyContent: "space-around",
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
      <h1>See Torrent</h1>
    </Box>
  )
}
export default Header
