import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Modal, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  background: 'white',
  padding: 20,
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  borderRadius: 8,
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const CustomerModal = ({ open, onClose, customerData, onSubmit }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div style={overlayStyle}>
                <div style={modalStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>{customerData ? 'Edit Customer' : 'Add Customer'}</h2>
          <IconButton onClick={onClose} color="secondary">
            <CloseIcon />
          </IconButton>
        </div>
        <Formik
          initialValues={{
            name: customerData ? customerData.name : '',
            email: customerData ? customerData.email : '',
            phone: customerData ? customerData.phone : '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            phone: Yup.string().required('Phone is required'),
          })}
          onSubmit={(values) => onSubmit(values)}
        >
          <Form>
            <Field as={TextField} name="name" label="Name" variant="outlined" fullWidth className="pt-4"/>
            <ErrorMessage name="name" component="div" className="error" style={{color:"red"}}/>
            <Field as={TextField} name="email" label="Email" variant="outlined" fullWidth className="pt-4"/>
            <ErrorMessage name="email" component="div" className="error" style={{color:"red"}}/>
            <Field as={TextField} name="phone" label="Phone" variant="outlined" fullWidth className="pt-4"/>
            <ErrorMessage name="phone" component="div" className="error" style={{color:"red"}}/>
            <Button variant="contained" color="primary" type="submit">
              {customerData ? 'Update' : 'Add'}
            </Button>
          </Form>
        </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default CustomerModal;
