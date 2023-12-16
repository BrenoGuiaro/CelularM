import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Videos } from './pages/Videos';
import { Fotos } from './pages/Fotos';
import { Pergunta } from './pages/Pergunta';
import { Sobre } from './pages/Sobre';
import { FotosDela } from './pages/FotosDela';
import { FotosNossas } from './pages/FotosNossas';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/video' element={<Videos/>}></Route>
        <Route path='/galeria' element={<Fotos/>}></Route>
        <Route path='/pergunta' element={<Pergunta/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>

        <Route path='/ela' element={<FotosDela/>}></Route>
        <Route path='/nossa' element={<FotosNossas/>}></Route>

        

      </Routes>
    </div>
  );
}

export default App;
