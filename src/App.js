import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <NavBar titulo='Aware' />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting="Lista de articulos"/>}/>
        <Route exact path="/category/:catId" element= {<ItemListContainer greeting="Lista de articulos filtrados"/>}/>
        <Route exact path="/producto/:prodId" element= {<ItemDetailContainer greeting="Producto"/>}/>
        <Route exact path="/cart" element= {<Cart greeting="Carrito"/>}/>
        <Route path="*" element={<h4> 404 - NOT FOUND</h4>}/>
      </Routes>
    </BrowserRouter>
  </CartProvider>
)

export default App;
