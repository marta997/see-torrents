import { Box } from "@mui/material"
import logo from "/icon.png"

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
      <div style={{ width: "170px", height: "170px", overflow: "hidden" }}>
        <img
          style={{
            width: "400px",
            height: "300px",
            margin: "-80px 0 0 -100px",
          }}
          src={logo}
          className="logo"
        />
      </div>
      <h1>See Torrent</h1>
    </Box>
  )
}
export default Header
