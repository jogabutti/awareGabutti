import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { getFirestore } from "../../firebase";
import Alert from '@mui/material/Alert';

const UserForm = ({carrito}) => {
    const [orders, setOrders]=useState("")
    const [ user, setUser]= useState({
        "nombre":"",
        "apellido":"",
        "telefono":"",
        "email":"",
        "confirmacion":""})

    const onChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    const formComplete = ()=>{
        return  (
            user.nombre.trim() !== "" && user.apellido.trim() !== "" && user.telefono.trim() !== "" && user.email.trim() !== "" && user.confirmacion.trim() !== ""  &&  user.email === user.confirmacion
        )
    }
    const finish = () =>{

        const db = getFirestore()

        let ordenCompra = {
            buyer: {name:user.nombre,lastName:user.apellido,phone:user.telefono,email:user.email,},
            productos:{...carrito},
        }
        db.collection("orders").add(ordenCompra).then(res=> {
            setOrders(res.id ? res.id : "")})
    }
    return (
        <>
            <TextField 
                id="nombre" 
                name="nombre"
                label="Nombre" 
                onChange={onChange}
            />
            <TextField 
                id="apellido" 
                name="apellido"
                label="Apellido" 
                onChange={onChange}
            />
            <TextField 
                id="telefono" 
                name="telefono"
                label="Telefono" 
                onChange={onChange}
            />
            <TextField 
                id="email" 
                name="email"
                label="Email" 
                onChange={onChange}
            />
            <TextField 
                id="confirmacion" 
                name="confirmacion"
                label="Confirmación" 
                onChange={onChange}
            />
            {formComplete() && 
                <Button size="medium" onClick={()=>finish()}>
                    Terminar mi compra
                </Button>
            } 
            {orders && 
                <Alert severity="success">
                    Id de la compra: {orders}
                </Alert>
            } 
        </>
    )
}
export default UserForm

    