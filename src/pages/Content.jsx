import React, { useEffect, useContext, useState } from 'react';
import { Contexto } from '../contexto/Contexto';

const Content = () => {
  const deportes = [
    { imagen: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/FIA_F1_Austria_2018_Nr._3_Ricciardo.jpg',
      title: 'Formula 1', 
      descripcion: 'La principal competición de automovilismo internacional y el campeonato de deportes de motor más popular y prestigioso del mundo. La entidad que la dirige es la Federación Internacional del Automóvil',
      categoria:'Motor', equipo: 'Red Bull',
      link:'https://es.wikipedia.org/wiki/Red_Bull_Racing'},
    { imagen: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Opening_chess_position_from_black_side.jpg',
      title: 'Ajedrez', 
      descripcion: 'Es un juego de tablero entre dos contrincantes en el que cada uno dispone al inicio de dieciséis piezas móviles que se colocan sobre un tablero dividido en sesenta y cuatro casillas o escaques',
      categoria:'Mesa', equipo: 'Noruega',
      link:'https://es.wikipedia.org/wiki/Ranking_FIDE'},
    { imagen: 'https://concepto.de/wp-content/uploads/2015/02/futbol-1-e1550783405750.jpg',
      title: 'Futbol', 
      descripcion: 'Es un deporte de equipo jugado entre dos conjuntos de once jugadores cada uno, mientras los árbitros se ocupan de que las normas se cumplan correctamente',
      categoria:'Equipo', equipo: 'Real Madrid',
      link:'https://es.wikipedia.org/wiki/Real_Madrid_Club_de_F%C3%BAtbol'},
    { imagen: 'https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_xl/f_auto/v1676561114/primary/lfvgiw4kvq869vb1ze0v',
      title: 'Beisbol', 
      descripcion: 'Se juega en un gran campo cubierto por césped, con excepción de una zona llamada línea del corredor donde los jugadores corren para alcanzar las bases y anotar en el terreno que es una loma de tierra',
      categoria:'Equipo', equipo: 'Yankees',
      link:'https://es.wikipedia.org/wiki/New_York_Yankees'},
    { imagen: 'https://concepto.de/wp-content/uploads/2019/12/basquetbol-baloncesto-e1575657099957-800x399.jpg',
      title: 'Baloncesto', 
      descripcion: 'Es un deporte de equipo, jugado entre dos conjuntos de cinco jugadores cada uno en cuatro períodos de cuartos de diez minutos cada uno (doce minutos cada cuarto en la NBA)',
      categoria:'Equipo', equipo: 'Lakers',
      link:'https://es.wikipedia.org/wiki/Los_Angeles_Lakers'},
    { imagen: 'https://previews.123rf.com/images/hanohiki/hanohiki1612/hanohiki161200083/66783586-los-n%C3%BAmeros-de-los-domin%C3%B3s-fichas-de-juego-de-domin%C3%B3.jpg',
      title: 'Domino', 
      descripcion: 'La modalidad de juego más común en el Dominó es la de parejas, con cuatro jugadores, también está la modalidad individual y por equipos (compuestos por dos o tres parejas cada uno)',
      categoria:'Mesa', equipo: 'RD',
      link:'https://colimdo.org/atletard/campeones-mundiales-de-domino/'},
    { imagen: 'https://cdn-6.motorsport.com/images/amp/6O1v3mG2/s1000/john-h-nemechek-front-row-moto.jpg',
      title: 'Nascar',
      descripcion: 'Es la categoría automovilística más comercial y popular de los Estados Unidos, y la competición de stock cars ("automóviles de serie") más importante del mundo',
      categoria:'Motor', equipo: 'Hendrick',
      link:'https://es.wikipedia.org/wiki/Hendrick_Motorsports'},
    { imagen: 'https://www.firestone.com.mx/content/dam/consumer/fst/la/mx/tips/otros/rally_b.jpg',
      title: 'Rally', 
      descripcion: 'Es una competición automovilística que se disputa en carreteras abiertas al tráfico pero que se cierran especialmente para su celebración',
      categoria:'Motor', equipo: 'Citroen Racing',
      link:'https://es.wikipedia.org/wiki/S%C3%A9bastien_Loeb'},
    { imagen: 'https://www.miamiherald.com/reviews/wp-content/uploads/2022/03/ping-pong-set-MH.jpg',
      title: 'Ping Pong', 
      descripcion: 'Es un deporte de raqueta que se disputa entre dos jugadores. Es un deporte olímpico desde Seúl 1988, el deporte con mayor número de practicantes con 40M de jugadores compitiendo en todo el mundo',
      categoria:'Mesa', equipo: 'Shandong Weiqiao',
      link:'https://es.wikipedia.org/wiki/Ma_Long'}
  ]

  const {lista, setLista} = useContext(Contexto)

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  useEffect(()=>{
    //Obtener los datos existentes de localStorage
    const tarjetasGuardadas = JSON.parse(localStorage.getItem('tarjetas')) || [];

    //Combina las tarjetas existentes con las tarjetas de localStorage
    const tarjetasCombinadas = [...deportes, ...tarjetasGuardadas];

    //Actualiza lista con todas las tarjetas
    setLista(tarjetasCombinadas);
  },[categoriaSeleccionada]);

  //Funcion para manejar cambios en el ComboBox de categoria
  const handleCategoriaChange = (event) => {
    setCategoriaSeleccionada(event.target.value);
  };

  //Funcion para filtrar la lista de deportes por categoría
  const filteredDeportes = categoriaSeleccionada
    ? lista.filter((deporte) => deporte.categoria === categoriaSeleccionada)
    : lista;

  return (
    <div className="container mt-4">
      <div className="col-md-6 mb-3 mx-auto">
          <select
            className="form-select"
            value={categoriaSeleccionada}
            onChange={handleCategoriaChange}
          >
            <option value="">Todas las categorías</option>
            <option value="Motor">Motor</option>
            <option value="Mesa">Mesa</option>
            <option value="Equipo">Equipo</option>
          </select>
        </div>
      <div className="row">
      {filteredDeportes.map((deporte, index) => (
        <div className='col-md-6 col-sm-6 mb-3 col-lg-4' key={index}>
          <div className="card shadow-lg zoom-on-hover d-flex h-100">
          <img className='card-img-top card-image' src={deporte.imagen} alt="" />
          <div className='card-body'>
              <h4 className='card-title'>{deporte.title} </h4>
              <p className='card-text'>{deporte.descripcion}</p>
              <p className='card-text'><span className='fw-bold'>Categoria:</span> {deporte.categoria}</p>
              <p className='card-text'><span className='fw-bold'>Equipo:</span> <a target="_blank" href={deporte.link}>{deporte.equipo}</a></p>
          </div>
        </div>
      </div>
      ))}  
    </div>
    </div>
  )
}

export default Content