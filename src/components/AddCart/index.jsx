//Import stylesjs
import { Container } from './styles'
//Import icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
//Import components
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { useState } from "react"

export function AddCart({ dish_id, price }) {
  const [quantity, setQuantity] = useState(1);
  const [priceProduct, setPriceProduct] = useState(Number(price));

  const plusQuantity = (count) => {
    if (count > 10) {
      alert("Limit of 10 per inclusion");
      return;
    }
    setQuantity(count);
    setPriceProduct(Number(price) * count);
  };

  const minusQuantity = (count) => {
    if (count < 1) {
      alert("At least one item");
      return;
    }
    setQuantity(count);
    setPriceProduct(Number(price) * count);
  };

  async function handleAddDish() {
    await api
      .post("/carts", { dish_id, quantity })
      .then(() => {
        alert("Item added with success!");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Error to add item");
        }
      });
  }

  return (
    <Container>
      <ButtonText
        icon={AiOutlineMinus}
        onClick={() => minusQuantity(quantity - 1)}
      />

      <span>{quantity.toString().padStart(2, "0")}</span>

      <ButtonText
        icon={AiOutlinePlus}
        onClick={() => plusQuantity(quantity + 1)}
      />

      <Button
        title={`Add ${
          price
            ? `∙ ${priceProduct.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            : ""
        }`}
        onClick={handleAddDish}
      />
    </Container>
  );
}
