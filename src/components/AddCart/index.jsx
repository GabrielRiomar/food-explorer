//Import stylesjs
import { Container } from './styles'
//Import icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
//Import components
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { useState } from "react"

export function AddCart(){
  const [quantity, setQuantity] = useState(1)

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
    </Container>
  )
}