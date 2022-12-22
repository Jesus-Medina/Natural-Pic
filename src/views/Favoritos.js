import MyContext from "../context/MyContext";
import { useContext } from 'react';

export default function Favoritos() {

  const { photos } = useContext(MyContext)
  const favoritos = photos.filter((photo) => photo.liked === true)

  return (
    <div className="galeria grid-columns-5 p-3">
      {
        favoritos !== null
          ? favoritos.map((photo) => {
            return (
              <div
                className="foto"
                style={{ backgroundImage: `url(${photo.src.tiny})` }}
                alt={photo.alt}
                key={photo.id}
                id={photo.id}
              >
              </div>
            )
          })
          : <p>Todavia no cargan las fotos</p>
      }
    </div>
  );
}
