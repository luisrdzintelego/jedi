// import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { CustomVarContext } from './Context/CustomVarContext';
import './App.css';


import Login from './Secciones/Login';
import Introduccion from "./Secciones/Introduccion";

function App() {
  return (

    <>
    <CustomVarContext>
      <BrowserRouter basename="/" >
        <div className="App">

          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="introduccion" element={<Introduccion/>}/>
          {/* <Route exact path='journey/:itemId' element={<Journey/>} />
          <Route path="Paso2" element={<Paso2/>}/>
          <Route path="Paso3" element={<Paso3/>}/> */}
          {/* <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
        /> */}

            {/* <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={'hola Bienvenidos a categorias'} />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/CheckOut' element={ <CheckOut/> } /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </CustomVarContext>
    </>
  );
}

export default App;
