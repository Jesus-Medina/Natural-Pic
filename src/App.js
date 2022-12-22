/* Styles */
import "./styles.css";

/* Components */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

/* Views */
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

/* Context */
import MyContext from './context/MyContext';

/* States */
import { useState, useEffect } from 'react';


export default function App() {
  /* URL de la API */
  const endpoint = "/fotos.json";

  /* Estados */
  const [colored, setColored] = useState(false)
  const [photos, setPhotos] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        const petition = await fetch(endpoint)
        const data = await petition.json()
        console.log(data.photos)
  
        setPhotos(await data.photos)
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [])

  /* Objeto context para pasarle como value a MyContext */
  const sharedContext = {
    endpoint,
    colored,
    setColored,
    photos,
    setPhotos,
  }

  return (
    <div className="App">
      <MyContext.Provider value={sharedContext}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
