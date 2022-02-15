import React, { useContext, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import { CartContext } from "../../context/CartContext";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UserForm from '../UserForm/index'

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Cart = ({greeting}) => {
    const classes = useStyles();
    const {carrito}=useContext(CartContext)
    const [total, setTotal]=useState(0)
    const [descuento, setDescuento]=useState(10)

    const subtotal=(items) =>{
        setTotal(items.map(item =>item.cantidad*item.precio).reduce((sum, i) => sum + i, 0))
    }
    
    useEffect(() => { 
        subtotal(carrito)
    }, [carrito]) 
    
    return (
        <div>
            {carrito.length > 0 ? 
                <>
                    <Typography variant="h4" gutterBottom >
                        {greeting}
                    </Typography>
                    <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="spanning table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                            Detalles
                            </TableCell>
                            <TableCell align="right">Precio</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Producto</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Suma</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                    
                            {carrito.map((row) => (
                                <TableRow key={row.id}>
                                <TableCell>{row.title}</TableCell>
                                <TableCell align="right">{row.cantidad}</TableCell>
                                <TableCell align="right">{row.precio}</TableCell>
                                <TableCell align="right">{row.cantidad*row.precio}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2}>Subtotal</TableCell>
                                    <TableCell align="right">{total}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Descuento</TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right">{descuento + "%"}</TableCell>
                                </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">{total-total*descuento/100}</TableCell>
                            </TableRow>
                        
                        </TableBody>
                    </Table>
                    </TableContainer >
                    <UserForm carrito={carrito}/>
            </>
            :
                    <div>
                        <h2>Carrito vacio</h2>
                        <span>
                            <img src='/Cart.png' alt="carrito"/>
                        </span>
                    </div>
            }
        </div>
    );
}




export default Cart
