//Import useState
import { useState } from "react"
//Import styles
import { Container, Content, Form } from "./styles"
//Import Components
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { DishIngredient } from "../../components/DishIngredient"
import { TextArea } from "../../components/TextArea"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { PageError401 } from "../../components/PageError401"
//Import Navigate and API
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { FiUpload } from "react-icons/fi"
import { RiArrowLeftSLine } from 'react-icons/ri';


export function NewDish(){
  const [preview_img, setPreviewImg] = useState(null);

  const [name, setName] = useState('')
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleNewDish(){
    if(!name){
      return alert("Field dish name in blank")
    }

    if(!category){
      return alert("Select one category for dish")
  }

  if(newIngredient){
    return alert("There's an ingredient on the field below Ingredients that you didn't added")
  }

    if(!price){
      return alert("Insert a price")
    }

    if(!description){
      return alert("Adicione uma descrição para o prato que deseja adicionar ao cardápio")
  }
  
  setLoading(true);

  const formData = new FormData();
  formData.append("preview_img", preview_img);
  formData.append("name", name);
  formData.append("category", category);
  formData.append("price", price);
  formData.append("description", description);

  ingredients.map(ingredient => (
    formData.append("ingredients", ingredient)
  ))
  
  await api
    .post("/dishes", formData)
    .then(alert("Prato adicionado com sucesso!"), navigate("/"))
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao criar o prato!");
      }
    });  
    setLoading(false);
    navigate(-1)
    alert ('Dish added successfully')
  }
    

  return(
    <Container>
      <Header/>
      {/* {
        user.isAdmin ? */}
      <Content>
        <Form>
          <header>
            <ButtonText
              icon={RiArrowLeftSLine}
              title="Back"
              onClick={handleBack}
              />
              <h1>Add Dish</h1>
          </header>

          <div className="details">
            <div className="dishImage">
              <p>Dish Image</p>
              <label htmlFor="image">
                <FiUpload size={24}/> 
                Select Image 
              </label>

              <Input 
                type="file"
                id="image" 
                name="image"
                accept="image/*" 
                // onChange={e => setPreviewImg(e.target.files[0])}
              />

            </div>
            

          <div className="name">
            <p>Name</p>
              <Input
                placeholder="Ex.: Salada Caesar"
                type="text"
                // onChange={e => setName(e.target.value)}
                />
          </div>

          <div className="category">
            <p>Category</p>
            <select
              defaultValue={'default'}
              // onChange={e => setCategory(e.target.value)}
            >

              <option value="default" disabled>Select</option>
              <option value="dishes">Dishes</option>
              <option value="drinks">Drinks</option>
              <option value="dessert">Desserts</option>

            </select> 
          </div>
          </div>
          
          <div className="ingredientsTag">
            <div>
              <p>Ingredients</p>
                <div className="ingredients">
                  {ingredients.map((ingredient, index) => (
                  <DishIngredient 
                    key={String(index)} 
                    value={ingredient} 
                    // onClick={() => handleRemoveIngredient(ingredient) }
                  />))
                  }

                <DishIngredient
                  isNew
                  placeholder="Add"
                  onChange={e => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  // onClick={handleAddIngredient}
                />

                </div>
              </div>

          <div className="price">
            <p>Price</p>
            <Input
              placeholder="R$ 00,00"
              type="number"
              // onChange={e => setPrice(e.target.value)}
            />
          </div>
          </div>
          
          <div>
            <p>Description</p>
            <TextArea placeholder="Briefly talk about the dish, its ingredients and composition"
            // onChange={e => setDescription(e.target.value)}
            />
          </div>

          <Button 
            title="Save"
            // onClick={handleNewDish}
          />
        </Form>
      </Content>
      {/* :
      <PageError401 />
      } */}
      <Footer/>  
    </Container>
  )
}
