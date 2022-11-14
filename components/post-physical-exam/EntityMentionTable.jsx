import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

const EntityMentionTable = ({ entityMentions }) => {
    return (
        <TableContainer>
            <Typography variant="h6" component="h6" align="center">
                Entity Mentions
            </Typography>
            <Table aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell>Text Content</TableCell>
                        <TableCell align="right">Medical Knowledge Category</TableCell>
                        <TableCell align="right">Confidence</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {entityMentions.map((row, index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.textContent}
                    </TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.confidence}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default EntityMentionTable