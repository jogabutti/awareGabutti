import React, {useEffect, useState} from 'react'
import ItemList from "../Item/ItemList"

//lista de productos disponibles
const Productos=[
    {
        "prodId":1,
        "title": "Rosa Rococo",
        "need": "Sol",
        "dificult":3,
        "precio":850,
        "image": "./rosa.jpg"
    },
    {
        "prodId":2,
        "title": "Margarita",
        "need": "Sol",
        "dificult":1,
        "precio":150,
        "image": "./margarita.jpg"
    },
    {
        "prodId":3,
        "title": "Geranio",
        "need": "Sombra",
        "dificult":1,
        "precio":300,
        "image": "./geranio.jpg"
    }
]

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos]= useState([])
    useEffect(() => {
        const productosPromise = new Promise ((res, rej)=>{
            setTimeout(function(){
                res(Productos);
            }, 200);
        });
        productosPromise.then((res)=> setProductos(res))
    }, [productos])

    return (
        <div>
            <h1> {greeting}</h1>
            <ItemList productos={productos}/> 
        </div>
    )
}
export default ItemListContainer

    