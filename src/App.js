import { useState,useEffect } from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Main from './Componentes/Main/Main';

function App() {
  const [width, setWidth] = useState(window.matchMedia("(min-width: 1024px)").matches)

  useEffect(()=>{
    const setResponsive = ()=> setWidth(window.matchMedia("(min-width: 1024px)").matches)
    window.addEventListener("resize", setResponsive)
    return()=>{
      window.removeEventListener("resize",setResponsive)
    }
  })
  return (
    <div className="App">
      <Header width={width}/>
      <Main width={width}/>
    </div>
  );
}

export default App;
