import * as React from 'react';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(textContent, medicalKnowledgeCategory, confidence) {
  return { textContent, medicalKnowledgeCategory, confidence };
}
const rows = [
  createData('low', 'BM_RESULT', 0.7348012328147888),
  createData('heart rate', 'BODY_MEASUREMENT', 0.6831492185592651),
  createData('atrial fibrillation', 'PROBLEM', 0.9956623315811157),
  createData('stressful', 'PROBLEM', 0.40164223313331604)
];
const PostPhysicalExamination = () => { 

    return (
        <Grid container display="flex" height="100%">
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Text Content</TableCell>
                        <TableCell align="right">Medical Knowledge Category</TableCell>
                        <TableCell align="right">Confidence</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.textContent}
                        </TableCell>
                        <TableCell align="right">{row.medicalKnowledgeCategory}</TableCell>
                        <TableCell align="right">{row.confidence}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>  
        </Grid>
    )
};

export default PostPhysicalExamination