import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import useStyles from '../styles/styles';

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Typography className={classes.footerText}>
        Discover the power of personalized customer relationships with our CRM solution.
      </Typography>
      <Typography className={classes.footerText}>
        © {date} Your Company Name. All rights reserved.
      </Typography>
      <Typography className={classes.footerText}>
        <Link href="#" target="_blank" underline="none">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link href="#" target="_blank" underline="none">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
