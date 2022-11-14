import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

const EntityTable = ({ entities }) => {
    return (
        <TableContainer>
            <Typography variant="h6" component="h6" align="center">
                Entities
            </Typography>
            <Table  aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Preferred Term</TableCell>
                        <TableCell align="right">Vocabulary Code</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {entities.map((row, index) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.preferredTerm}
                        </TableCell>
                        <TableCell align="right">{row.vocabularyCodes}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default EntityTable