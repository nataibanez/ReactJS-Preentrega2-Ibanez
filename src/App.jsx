import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/Errors/Error404/Error404';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={ <ItemListContainer motd={"Hola! Este es el mensaje props del día! 20% de descuento en.. algo por definir"}/>}/>
            <Route path="/category/:categoryId" element={ <ItemListContainer/>}/>
            <Route path="/detail/:productId" element={ <ItemDetailContainer/>}/>
            <Route path="*" element={ <Error404/>}/>
          </Routes>
      </BrowserRouter>

  )
}

export default App