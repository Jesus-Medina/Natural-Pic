import { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import MyContext from "../context/MyContext";

export default function Home() {

  const { photos, setPhotos } = useContext(MyContext)

  function changeFilled(photoID){
    const arregloTemporal = [...photos] 
    const index = arregloTemporal.findIndex(elemento => elemento.id === photoID)
    
    arregloTemporal[index].liked = !arregloTemporal[index].liked
    setPhotos(arregloTemporal)
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {
        photos !== null
          ? photos.map((photo) => {
            return (
              <div
                className="foto"
                style={{ backgroundImage: `url(${photo.src.tiny})` }}
                alt={photo.alt}
                key={photo.id}
                id={photo.id}
                onClick={() => changeFilled(photo.id)}
              >
                <Heart filled={photo.liked} />
                <p>{photo.alt}</p>
              </div>
            )
          })

          : <p>Todavia no cargan las fotos</p>
      }
    </div>
  );
}
