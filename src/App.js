import Animacion from './components/Animacion.jsx'
import { useState} from "react";
import Landing from './components/Landig.jsx'
import './App.css';

function App() {
  const [animacion, setAnimacion] = useState(false)
  setTimeout(() => {
    setAnimacion(true)
  }, 2000);

  return (
    <div>
     {animacion ?  <Animacion/> :  <Landing/>  }
     
    </div>
  );
}

export default App;
