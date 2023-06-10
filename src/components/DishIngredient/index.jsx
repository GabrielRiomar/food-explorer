//Import styles.js
import { Container } from "./styles";
//Import icons
import { FiPlus, FiX } from 'react-icons/fi'

export function DishIngredient({ isNew = false, value, onClick, ...rest }){
  return(
    <Container isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
      type='button'
      onClick={onClick}
      className={isNew ? 'button-add' : 'button-delete'}>
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}