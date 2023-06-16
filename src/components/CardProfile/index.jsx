//Import styles.js
import { Container, Content } from './styles'
//Import useState
import { useState, useFavorite } from 'react'
//Import components
import { AddCart } from '../AddCart'
//Import icons
import { AiFillHeart, AiOutlineHeart, AiOutlineEdit } from 'react-icons/ai'
import {CgDetailsMore} from 'react-icons/cg'
import imagePlaceholder from '../../assets/error-img/no_image_defaut.svg';
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api';
import { Link } from 'react-router-dom'


export function CardProfile({title, data, ...rest}){
  const { user } = useAuth()

  const imageURL =  imagePlaceholder;
  // const imageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  

  return(
    <Container {...rest}>
      {
        user.isAdmin ?

      <Content>
          <button 
            className="svgButton"
          >
            <Link to={`/edit/`}>
              <AiOutlineEdit/>
            </Link>
          </button>
          <div className='cardData'>
            <img src={imageURL} alt="Plate Preview" />
              <div className='teste'>
              <Link to={`/details/`}>
                <h2>
                  {/* {data.name} */}
                  {title}
                  <CgDetailsMore/> 
                </h2>
              </Link>
              <p>
                {/* {data.description} */}
                placeholder description
              </p>

              <h1>
              R$ 99,99
                {/* R$ {
                    data.price.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                      })
                    } */}
              </h1>

              </div>
          </div>
      </Content> 
        
        :
      
      <Content>
      <button 
        className="svgButton"
        onClick={handleFavoriteClick}
      >
        {isFavorite ? <AiFillHeart color="#750310" /> : <AiOutlineHeart />}
      </button>
      <div className='cardData'>
        <img src={imagePlaceholder} alt="Plate Preview" />
        
        
          <div className='teste'>
          <h2>
          {/* {data.name} */}
          {title}
          </h2>

          <p>
                {/* {data.description} */}
                placeholder description
              </p>

          <h1>
              R$ 99,99
                {/* R$ {
                    data.price.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                      })
                    } */}
              </h1>
              
          </div>
        
        <AddCart/>
      </div>
      </Content> 
      } 
    </Container>
  )
}