
import { useState} from "react";
import Landing from './components/Landig.jsx'
import Principal from './components/Principal.jsx'
import './App.css';

function App() {
  const [animacion, setAnimacion] = useState(false)
  setTimeout(() => {
    setAnimacion(true)
  }, 3000);

  return (
    <> 
     {animacion ?  <Principal/> :  <Landing/>  }
     </>
  );
}

export default App;
