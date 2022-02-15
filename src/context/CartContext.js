import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [carrito, setCarrito] = useState([])

    const removeItems = (prodId)=>{
        const foundItem = carrito.find((carr)=>carr.prodId === prodId)
        if (foundItem){
            if (foundItem.cantidad===1){
                clear(prodId)
            } else {
                foundItem.cantidad = foundItem.cantidad -1
                setCarrito([...carrito])
            }
        }
    }
    const clear = (prodId)=>{
        const auxArr = carrito.filter((producto=>producto.prodId !== prodId))
        setCarrito(auxArr)
    }

    const isInCart = (prodId)=>{
        return carrito.find((carr)=>carr.prodId===prodId)!==undefined
    }
    const addItems = (producto, cantidad)=>{
        const foundItem = carrito.find((carr)=>carr.prodId===producto.prodId)
        if (foundItem){
            foundItem.cantidad = foundItem.cantidad + cantidad
            setCarrito([...carrito])
        }else{
            setCarrito([...carrito, {
                "prodId": producto.prodId,
                "title": producto.title,
                "need": producto.need,
                "dificult": producto.dificult,
                "precio": producto.precio,
                "image": producto.image,
                "category": producto.category,
                "cantidad": cantidad} 
            ])
        }
    
    }

    return (
        <CartContext.Provider value={{carrito, removeItems, addItems, clear, isInCart}}>
            {children}
        </CartContext.Provider>  
    );
};