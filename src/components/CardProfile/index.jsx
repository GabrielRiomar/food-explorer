//Import styles.js
import { Container, AddCart } from './styles'
//Import useState
import { useState, useFavorite } from 'react'
//Import components
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'
//Import icons
import { AiOutlinePlus, AiOutlineMinus, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import imagePlaceholder from '../../assets/error-img/no_image_defaut.svg';

export function CardProfile({title, data, ...rest}){

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
      
      <button 
        className="favButton"
        onClick={handleFavoriteClick}
      >
        {isFavorite ? <AiFillHeart color="#750310" /> : <AiOutlineHeart />}
      </button>
      <div className='cardData'>
        <img src={imagePlaceholder} alt="Plate Preview" />
        
        {/* <Content> */}
          <div className='teste'>
          <h2>{title}</h2>

          <p>Alguma descrição medianamente longa para esse prato</p>

          <h1>R$ 10,00</h1>
          </div>
        
        {/* </Content> */}
        
        <AddCart>
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
        </AddCart>
      </div>  


    </Container>
  )
}