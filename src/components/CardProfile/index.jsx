//Import styles.js
import { Container, Content } from './styles'
//Import useState
import { useState, useFavorite } from 'react'
//Import components
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
import { AddCart } from '../AddCart'
//Import icons
import { AiOutlinePlus, AiOutlineMinus, AiFillHeart, AiOutlineHeart, AiOutlineEdit, AiOutlineRight } from 'react-icons/ai'
import {CgDetailsMore} from 'react-icons/cg'
import imagePlaceholder from '../../assets/error-img/no_image_defaut.svg';
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api';
import { Link } from 'react-router-dom'


export function CardProfile({title, data, ...rest}){
  const { user } = useAuth()

  // const imageURL = data.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder;

  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const plusQuantity = () => {
    if (quantity > 9) {
      alert("Limit of 10 per inclusion")
      return;
    }
      setQuantity(count => count + 1);
  };

  const minusQuantity = () => {
    if (quantity < 2) {
      alert("At least one item")
      return;
    }
      setQuantity(count => count - 1);
  };

  return(
    <Container>
      {
        user.isAdmin ?

      <Content>
        {/* <Link to={`/edit`}> */}
          <button 
            className="favButton"
          >
            <AiOutlineEdit/>
          </button>
        {/* </Link> */}
        <div className='cardData'>
          <img src={imagePlaceholder} alt="Plate Preview" />
          
          
            <div className='teste'>
            <Link to={`/details`}>
              <h2>
                {title}
                <CgDetailsMore/> 
              </h2>
            </Link>
            <p>Alguma descrição medianamente longa para esse prato</p>

            <h1>R$ 10,00</h1>
            </div>
        </div>
      </Content> 
        
        :
      
      <Content>
      <button 
        className="favButton"
        onClick={handleFavoriteClick}
      >
        {isFavorite ? <AiFillHeart color="#750310" /> : <AiOutlineHeart />}
      </button>
      <div className='cardData'>
        <img src={imagePlaceholder} alt="Plate Preview" />
        
        
          <div className='teste'>
          <h2>{title}</h2>

          <p>Alguma descrição medianamente longa para esse prato</p>

          <h1>R$ 10,00</h1>
          </div>
        
        <AddCart/>
        
        {/* <AddCart>
          <ButtonText 
            icon={AiOutlineMinus}
            onClick={minusQuantity}
          />
          
          <span>{quantity.toString().padStart(2, '0')}</span>
          
          <ButtonText
            icon={AiOutlinePlus}
            onClick={plusQuantity}
          />
          
          <Button title='Add to Cart'/>
        </AddCart> */}
      </div>
      </Content> 
      } 
    </Container>
  )
}