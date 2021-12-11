import React from 'react'
import CartWidget from '../CartWidget'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['Productos', 'Login', 'Contacto'];

const NavBar = ({titulo}) => {

  return (
    <AppBar position='static'>
      <Container maxWidth="xl">
        <Toolbar>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <img src='./logo.png' style={{width:"60px", height:"60px", borderRadius: "100px"}}/>
            </IconButton>
          <Box sx={{ flexGrow: 1, display:'flex' }}>
            {titulo}
          </Box>
          <Box sx={{ flexGrow: 1, display: { display: 'flex', direction:'row', justifyContent:'flex-end'  } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <CartWidget/>
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default NavBar
