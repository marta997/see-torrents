import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'

export default function DenseTable(props) {
  const { rowNames, rows, onClickLink } = props

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {rowNames.map((name) => (
              <TableCell key={name}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {row.map((field, index) => (
                index == 0 ?
                  <TableCell key={index}>
                    <Link onClick={onClickLink}>{field}</Link>
                  </TableCell>
                  :
                  <TableCell key={index}>
                    {field}
                  </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}