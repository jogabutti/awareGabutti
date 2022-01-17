import React, {useState} from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export const ItemCount = ({ stock, initial, addItems, prodId}) =>{
    const [cantidad, setCantidad] = useState(initial)
    let history = useNavigate();

    const add = ()=>{
        if (cantidad<=stock){
            setCantidad(cantidad+1)
        }
    }
    const put = ()=>{
        if (cantidad>0){
            setCantidad(cantidad-1)
        }
    }

    const finish=(prodId, cantidad)=>{
        addItems(prodId, cantidad)
        setCantidad(initial)
        history("/cart");
    }

    return(
    <>
        <Button size="small" onClick={()=>add()}>+</Button>
        <Button size="small" >{cantidad}</Button>
        <Button size="small" onClick={()=>put()}>-</Button>
        {cantidad>0 && 
            <Button size="small" onClick={()=>finish(prodId, cantidad)}>Terminar mi compra</Button>
        }
    </>
    )
}