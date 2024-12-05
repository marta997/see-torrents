import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

const BasicSelect = (props) => {
  const { label, items, selection, setSelection } = props

  const handleChange = (event) => {
    setSelection(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel color="warning">{label}</InputLabel>
        <Select
          disabled={items.length == 0}
          value={selection}
          label={label}
          onChange={handleChange}
          color="warning"
        >
          {items.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
export default BasicSelect
