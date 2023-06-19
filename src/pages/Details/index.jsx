//Import stylesjs
import { Container, Content, DetailsInfo, Action } from './styles'
//Import useState, useNavigate
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
//Import useState
import { useState, useEffect } from "react"
import { useNavigate, Link, useParams } from 'react-router-dom';
//Import components
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { AddCart } from '../../components/AddCart'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { IngredientTag } from '../../components/IngredientTag'
//Import icons
import { RiArrowLeftSLine } from 'react-icons/ri'
import imagePlaceholder from '../../assets/error-img/no_image_defaut.svg';

export function Details(){
  const { user } = useAuth()

  const [dish, setDish] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const imageURL = dish && `${api.defaults.baseURL}/files/${dish.image}`
  
  const navigate = useNavigate()
  const params = useParams()
  

  async function handleRemoveDish() {
    setLoading(true)

    const isConfirmDelete = confirm('Are you sure about that?')

    if (isConfirmDelete) {
        await api.delete(`/dishes/${params.id}`)
            .then(() => {
                alert('Item removed with sucess!')

                navigate('/')

                setLoading(false)
            })
    } else {
        setLoading(false)
    }
}

    useEffect(() => {
      async function fetchDishDetail() {
          const response = await api.get(`/dishes/${params.id}`)
          setDish(response.data)
      }

      fetchDishDetail()
    }, [])

  return (
    <Container>
      <Header/>
        <Content>
          {dish &&
          <DetailsInfo>
            <ButtonText
              title="Back"
              icon={RiArrowLeftSLine}
              to='/'
            />
              <div className='description'>
                <img src={imageURL ? imageURL : imagePlaceholder} alt='Dish Image' />
                <div>

                  <h1>{dish.name}</h1>

                  <p>{dish.description}</p>

                    {
                      dish.ingredients.map(ingredient => (
                        <IngredientTag
                          key={String(ingredient.id)}
                          title={ingredient.name}
                        />
                      ))
                    }

                <Action>
                  {
                    user.isAdmin ?
                      <>
                      <Button className='delete'
                        title={loading ? 'Deleting' : 'Delete dish'}
                        disabled={loading}
                        onClick={handleRemoveDish}
                      />

                      <Link to={`/edit/${params.id}`}>
                        <Button
                          title='Edit Dish'
                        />
                      </Link>
                      </>
                      :
                      <>
                        <AddCart
                          // dish_id={dish.id}
                          // price={dish.price}
                        />
                      </>
                  }
                </Action>
                </div>
              </div>
          </DetailsInfo>
          }
        </Content>
        <Footer/>
    </Container>
)
}