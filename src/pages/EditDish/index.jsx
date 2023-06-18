//Import useState
import { useState, useEffect } from 'react'
//Import styles
import { Container, Content, Form, Image } from "./styles"
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
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"
import { FiUpload } from "react-icons/fi"
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'
import imagePlaceholder from '../../assets/error-img/no_image_defaut.svg';


export function EditDish(){
  const navigate = useNavigate()
  const { user } = useAuth()
  const {id} = useParams();

  const[data, setData] = useState(null)

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null)

  const [name, setName] = useState("")
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [description, setDescription] = useState("")

  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  

  function handleBack(){
    navigate('/')
  }

  function handleImageChange(event) {
      const file = event.target.files[0];
      setImageFile(file);
  
      const imagePreviewURL = URL.createObjectURL(file);
      setImage(imagePreviewURL);
  }

  function handleAddIngredient() {
    if (newIngredient.trim() !== '') {
      setIngredients(prevState => [...prevState, newIngredient.trim()]);
      setNewIngredient('');
    }
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleUpdateDish(){
    if(!name){
      return alert("Field dish name in blank")
    }

    if(!category){
      return alert("Select one category for dish")
  }

  //Para não deletar os igredientes todos e apagar logo em seguida
  if (ingredients.length < 1) {
    return alert("Erro: Adicione pelo menos um ingrediente!")
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
  formData.append("image", imageFile);
  formData.append("name", name);
  formData.append("category", category);
  formData.append("price", price);
  formData.append("description", description);

  ingredients.map(ingredient => (
    formData.append("ingredients", ingredient)
  ))
  
  await api.put(`/dishes/${id}`, formData).then(alert("Dish updated!"), navigate(-1)).catch((error) => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Error to update");
      }
    });  
    setLoading(false);
  }

  useEffect(() => {
    async function fetchDish() {
        const response = await api.get(`/dishes/${id}`);

        setData(response.data);

        const { name, description, category, price, ingredients } = response.data;

        setName(name);
        setDescription(description);
        setCategory(category);
        setPrice(price);
        setIngredients(ingredients.map(ingredient => ingredient.name));
    }
    fetchDish();
    }, [])

    async function handleDeleteDish() {
      setLoadingDelete(true);
      const isConfirmDelete = confirm("Are you sure about deleting this item");
  
      if(isConfirmDelete) {
          await api.delete(`/dishes/${id}`)
          .then(() => {
              alert("Item deleted!");
              navigate(-1);
              setLoadingDelete(false);
          })
      } else {
          return
      }
  }

  return(
    <Container>
      <Header/>
      {
        user.isAdmin ?
      <Content>
        {
          data&&
        
        <Form>
          <header>
            <ButtonText
              icon={RiArrowLeftSLine}
              title="Back"
              onClick={handleBack}
            />
              <h1>Edit Dish</h1>
          </header>

          <div className="details">
            <div className="dishImage">
              <p>Dish Image</p>

              <Image>
                <img
                  src={image ? image : imageURL} 
                  alt="Foto do prato" 
                />

                <label htmlFor="image">
                  <FiUpload/> 

                  <input
                    type="file"
                    id="image" 
                    name="image"
                    accept="image/*" 
                    onChange={handleImageChange}
                  />
                </label>
              </Image>

            </div>

          <div className="name">
            <p>Name</p>
              <Input
                placeholder="Ex.: Salada Caesar"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                />
          </div>

          <div className="category">
            <p>Category</p>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
            >

              <option value="dishes">Dishes</option>
              <option value="drinks">Drinks</option>
              <option value="dessert">Desserts</option>

            </select> 
          </div>
          </div>
          
          <div className="ingredientsPricing">
            <div>
              <p>Ingredients</p>
                <div className="ingredients">
                  {ingredients.map((ingredient, index) => (
                  <DishIngredient 
                    key={String(index)} 
                    value={ingredient} 
                    onClick={() => handleRemoveIngredient(ingredient) }
                  />))
                  }

                <DishIngredient
                  isNew
                  placeholder="Add"
                  onChange={e => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredient}
                />

                </div>
              </div>

          <div className="price">
            <p>Price</p>
            <Input
              placeholder="R$ 00,00"
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          </div>
          
          <div className="description">
            <p>Description</p>
            <TextArea
              placeholder="Briefly talk about the dish, its ingredients and composition"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />
          </div>
        <div className="buttons">
        <Button 
          title={loading ? "Updating" : "Update"}
          onClick={handleUpdateDish}
          disabled={loading}
        />
        <Button
          className="delete" 
          title={loading ? "Deleting" : "Delete"}
          disabled={loading}
          onClick={handleDeleteDish}
        />
        </div>
        </Form>
        }
      </Content>
      
      :
      <PageError401 />
    }
      <Footer/>  
    </Container>
  )
}
