import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


function Copyright() {
  return (
    <Typography variant="body2" color="white">
      <Link color="inherit" href="https://github.com/lisagarcia13" textDecoration='none'>
        GitHub
      </Link>{' '}
      <Link color="inherit" href="https://www.linkedin.com/in/lisa-garcia-4028a4221/">
        LinkedIn
      </Link>{' '}
      
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#d50000',
          color: 'whitesmoke'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
          Created by: Lisa Garcia
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}