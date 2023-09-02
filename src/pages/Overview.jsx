import React, { useState, useEffect } from 'react';

const Overview = () => {
  const [personajes, setPersonajes] = useState ([
    { imagen: 'https://depor.com/resizer/oPf-2Xij6G_oA4sfJ7Y5DGDQYhM=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DAYT2F5NUNB7VPAFKUPHNDXVQA.jpg',
      title: 'Son Gokū', text: 'Gokū aterrizó en la Tierra, un anciano artista marcial de las montañas, llamado Son Gohan, encontró a Kakarotto cerca de un cráter formado en el suelo por la pequeña nave espacial en la que fue enviado y le puso un nuevo nombre, Gokū.'},
    { imagen: 'https://tierragamer.com/wp-content/uploads/2022/04/test-que-vegeta-eres.jpg', 
      title: 'Vegeta', text: 'Vegeta es presentado como el orgulloso príncipe de la raza Saiyajin (サイヤ人) y el primer villano importante de la serie Dragon Ball Z. Viaja a la Tierra con su compañero Nappa para usar las Dragón Balls y desear la inmortalidad.'},
    { imagen: 'https://www.mundodeportivo.com/alfabeta/hero/2018/10/153805.alfabetajuega-gohan-mistico-180616-4.jpg?width=1200&aspect_ratio=16:9', 
      title: 'Son Gohan', text: 'Es el primer hijo de Son Gokū y Chi-Chi, hermano mayor de Son Goten, esposo de Videl, con quien tiene una hija llamada Pan. Es mitad Saiyajin y mitad humano. En la saga de Cell tomó un rol importante ya que él terminó vencedor en la batalla con Cell.'},
      { imagen: 'https://www.mundodeportivo.com/alfabeta/hero/2022/02/Dragon-ball-krillin-imagen.jpg?width=1200', 
      title: 'Krilin', text: 'El terrícola más poderoso en el manga, en el anime solo es superado por Uub en Dragon Ball GT, pero Krilin carece de cualquier origen sobrenatural, es así que ha desarrollado sus habilidades solo con su propio esfuerzo.'}
  ])

  //Cargar datos de favoritos desde el local storage al cargar la página
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const updatedPersonajes = personajes.map((personaje) => ({
      ...personaje,
      isFavorite: storedFavorites.includes(personaje.title),
    }));

    setPersonajes(updatedPersonajes);
  }, []);

  //Funcion para manejar el clic en el botón de favoritos
  const handleToggleFavorite = (index) => {
    const updatedPersonajes = [...personajes];

    updatedPersonajes[index].isFavorite = !updatedPersonajes[index].isFavorite;
    setPersonajes(updatedPersonajes);

    //Guardar en el localstorage la lista de favoritos actualizada
    const favoritos = updatedPersonajes
      .filter((personaje) => personaje.isFavorite)
      .map((personaje) => personaje.title);
    localStorage.setItem('favorites', JSON.stringify(favoritos));
  };

  return (
    <div className="container mt-4">
      <div className="row">
      {personajes.map((item, index) => (
        <div className='col-md-6 col-sm-6 mb-3 col-lg-4' key={index}>
          <div className={`card shadow-lg zoom-on-hover ${item.isFavorite ? 'border-warning' : ''}`}
              >
          <img className='card-img-top' src={item.imagen} alt="" />
          <div className='card-body'>
            <h4 className='card-title'>{item.title} </h4>
            <p className='card-text'>{item.text}</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-primary">Details</button>
              <button className={`btn btn-success ${item.isFavorite ? 'btn-warning' : ''}`}
                    onClick={() => handleToggleFavorite(index)}>
                <span>★</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      ))}  
    </div>
    </div>
  )
}

export default Overview