// import React, { useState, useEffect } from 'react';
// import CustomerModal from './CustomerModal';
// import CustomerTable from './CustomerTable';
// import { Button, TablePagination, Paper } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   paginationContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     padding: theme.spacing(2),
//   },
//   pagination: {
//     '& .MuiTablePagination-toolbar': {
//       backgroundColor: '#f2f2f2', // Background color
//       borderRadius: '8px',
//     },
//     '& .MuiTablePagination-input': {
//       color: 'primary', // Text color
//     },
//     '& .MuiTablePagination-caption': {
//       color: 'primary', // Text color
//     },
//   },
// }));

// function Customer() {
//   // const [customers, setCustomers] = useState([]);
//   const [customers, setCustomers] = useState([
//     { name: 'John Doe', email: 'john@example.com' },
//     { name: 'Jane Smith', email: 'jane@example.com' },
//     // Add more user data as needed
//   ]);
//   const [openModal, setOpenModal] = useState(false);
//   const [editCustomer, setEditCustomer] = useState(null);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const classes = useStyles();

//   useEffect(() => {
//     const storedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
//     setCustomers(storedCustomers);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('customers', JSON.stringify(customers));
//   }, [customers]);

//   const addCustomer = (values) => {
//     if (editCustomer === null) {
//       setCustomers([...customers, values]);
//     } else {
//       customers[editCustomer] = values;
//       setCustomers([...customers]);
//     }
//     setOpenModal(false);
//     setEditCustomer(null);
//   };

//   const deleteCustomer = (customerIndex) => {
//     const updatedCustomers = [...customers];
//     updatedCustomers.splice(customerIndex, 1);
//     setCustomers(updatedCustomers);
//   };

//   const editCustomerModal = (customerIndex) => {
//     setEditCustomer(customerIndex);
//     setOpenModal(true);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const paginatedCustomers = customers.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

//   return (
//     <div>
//       <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
//         Add Customer
//       </Button>

//       <CustomerTable
//         customers={paginatedCustomers}
//         onEdit={editCustomerModal}
//         onDelete={deleteCustomer}
//       />
//       <Paper className={classes.paginationContainer}>
//         <TablePagination
//           className={classes.pagination}
//           component="div"
//           count={customers.length}
//           page={page}
//           onPageChange={handleChangePage}
//           rowsPerPage={rowsPerPage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>

//       <CustomerModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         customerData={editCustomer !== null ? customers[editCustomer] : null}
//         onSubmit={(values) => addCustomer(values)}
//       />
//     </div>
//   );
// }

// export default Customer;

// Customer.js
import React, { useState, useEffect } from 'react';
import CustomerModal from './CustomerModal';
import CustomerTable from './CustomerTable';
import { Button, TablePagination, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  pagination: {
    '& .MuiTablePagination-toolbar': {
      backgroundColor: '#f2f2f2', // Background color
      borderRadius: '8px',
    },
    '& .MuiTablePagination-input': {
      color: 'primary', // Text color
    },
    '& .MuiTablePagination-caption': {
      color: 'primary', // Text color
    },
  },
}));

function Customer() {
  const classes = useStyles();
  
  const [customers, setCustomers] = useState([
    { name: 'John Doe', email: 'john@example.com',phone:'1234567898' },
    { name: 'Jane Smith', email: 'jane@example.com',phone:'9876543217' },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [editCustomer, setEditCustomer] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);

  const addCustomer = (values) => {
    if (editCustomer === null) {
      setCustomers([...customers, values]);
    } else {
      customers[editCustomer] = values;
      setCustomers([...customers]);
    }
    setOpenModal(false);
    setEditCustomer(null);
  };

  const deleteCustomer = (customerIndex) => {
    const updatedCustomers = [...customers];
    updatedCustomers.splice(customerIndex, 1);
    setCustomers(updatedCustomers);
  };

  const editCustomerModal = (customerIndex) => {
    setEditCustomer(customerIndex);
    setOpenModal(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedCustomers = customers.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return (
    <div>
      <h1>Customer Details</h1>
      <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
        Add Customer
      </Button>

      <CustomerTable
        customers={paginatedCustomers}
        onEdit={editCustomerModal}
        onDelete={deleteCustomer}
      />

      <Paper className={classes.paginationContainer}>
        <TablePagination
          className={classes.pagination}
          component="div"
          count={customers.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <CustomerModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        customerData={editCustomer !== null ? customers[editCustomer] : null}
        onSubmit={(values) => addCustomer(values)}
      />
    </div>
  );
}

export default Customer;
