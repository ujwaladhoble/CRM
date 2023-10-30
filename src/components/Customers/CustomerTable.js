import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  customerRow: {
    '&:hover': {
      backgroundColor: '#E8F5E9',
      transition: 'background-color 0.3s',
    },
  },
  customerHead: {
      backgroundColor: '#E8F5E9',
  },
  primaryButton: {
    backgroundColor: '#1976D2',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1565C0',
    },
  },
});

const CustomerTable = ({ customers, onEdit, onDelete }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className={classes.customerHead}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact No.</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer, index) => (
            <TableRow key={index} className={classes.customerRow}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" className={classes.primaryButton} onClick={() => onEdit(index)}>
                  Edit
                </Button>
                <Button variant="contained" color="secondary" onClick={() => onDelete(index)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;

