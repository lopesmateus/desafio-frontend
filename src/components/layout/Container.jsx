import Footer from "./Footer"
import Header from "./Header"
import styles from './Container.module.scss'
import { Button, MessageBox } from '@ui5/webcomponents-react'; // loads ui5-button wrapped in a ui5-webcomponents-react component
import { Input } from '@ui5/webcomponents-react'; // loads ui5-button wrapped in a ui5-webcomponents-react component
import { BsHeart } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa';
import { useState } from "react";
import axios from 'axios'

function Container() {
  const [valorInput, setValorInput] = useState('');
  const [dadosDaResposta, setDadosDaResposta] = useState(null);
  const [notFoundMovie, setNotFoundMovie] = useState(null);
  const [rating, setRating] = useState(null);

  const handleChange = (event) => {
    setValorInput(event.target.value);
  };

    const handleKeyPress = async (event) => {
      if (event.key === 'Enter') {
        await searchButton();
      }
    }
  
  const searchButton = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/movies/${valorInput}`);
      if (response.data.Title ){
        setDadosDaResposta(response.data);
        setNotFoundMovie(false)
        setRating(response.data.imdbRating)
      }else {
        setDadosDaResposta(false)
        setNotFoundMovie(true)
        return
      }
      
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const stars = Array.from({ length: rating }, (_, index) => (
    <FaStar key={index} />
  ));

  const resetButton =() =>{
    setNotFoundMovie(null)
    setDadosDaResposta(null)
    setValorInput('')
  }


  return (
    <div className={styles.container}>
      <div className={styles.title} >
        <h1>CineFlix: Explore the World of Cinema with a Click</h1>
        <p>Discover the movies you love and delve into all the details you want to know with CineFlix. Simply enter the movie title in the search bar and uncover engaging synopses, ratings, cast information, and stunning posters.</p>
      </div>
      <div className={styles.search}>
        <div className={styles.divInput}> 
          <Input className={styles.searchField} type="text" onKeyUp={handleKeyPress} placeholder="Type the movie title" onChange={handleChange} value={valorInput}></Input>
        </div>
        <div className={styles.divButtons}>
          <Button className={styles.Button} icon="search" design="Emphasized" onClick={searchButton}>Search</Button>
          <Button className={styles.Button} icon="refresh" onClick={resetButton} >Reset</Button>
        </div>
      </div>

      {dadosDaResposta && dadosDaResposta.Title &&(
        <div className={styles.movieContainer} >
          <div className={styles.box} > 
            <h1>{dadosDaResposta.Title}</h1>
            <p className={styles.synopsis}>{dadosDaResposta.Plot}</p>
            <p><strong>Actor:</strong> {dadosDaResposta ? dadosDaResposta.Actors : 'Carregado'}</p>
            <p className={styles.review}><strong>Review:</strong> {stars} </p>
            <Button className={styles.FavoriteButton} design="Emphasized" icon="like" iconEnd>Favorite <BsHeart/> </Button>
          </div>
          <div className={styles.box}>
            <img src={dadosDaResposta.Poster} alt="" className={styles.img} />
          </div>
        </div>
      )}
      {notFoundMovie &&(
        <div className={styles.notFoundMovie}>
          <p>Sorry, we couldn't find any results. Please try again.</p>
        </div>
      )}
    </div>
  )
}
  
export default Container