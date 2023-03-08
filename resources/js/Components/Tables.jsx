import React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Tables({Title, Category, num, title, link}) {
    return(
        <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{Title}</TableCell>
                    <TableCell>{Category}</TableCell>
                    <TableCell align="right">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {num.map((row) => (
                        <>
                            <TableRow
                              key={row.title}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            { row.title &&
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                            }
                            { row.aim &&
                                <TableCell component="th" scope="row">
                                    {row.aim}
                                </TableCell>
                            }
                            <TableCell align="left">{row.category}</TableCell>
                            <TableCell align="right">{row.created_at}</TableCell>
                            <Button variant="contained" href={link + row.id}
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >OPEN</Button>
                            </TableRow>
                        </>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>    
        </>
        );
}