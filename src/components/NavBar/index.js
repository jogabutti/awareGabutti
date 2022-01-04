import React from 'react'
import CartWidget from '../CartWidget'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Link} from  'react-router-dom'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    links:{
        textDecoration:"none",
        color:"white",
        padding:"2%"
    },
    navBar:{
      backgroundColor:"#87AAAA"
    }
})

const pages = [
  {id:"1", address:"/", text:"Ver todo"},
  {id:"2", address:"/category/exterior", text:"Exterior"},
  {id:"3", address:"/category/interior", text:"Interior"}
];

const NavBar = ({titulo}) => {
  const classes = useStyles();
  return (
    <AppBar position='static' >
      <Container maxWidth="xl" className={classes.navBar}>
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
              <Link to={page.address} className={classes.links}>
                {page.text}
              </Link>
            ))}
          </Box>
          <CartWidget/>
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default NavBar
