//Import stylesjs
import { Container, Content, DetailsInfo, Action } from './styles'
//Import useState, useNavigate
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
//Import useState
import { useState } from "react"
import { useNavigate, Link } from 'react-router-dom';
//Import components
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { AddCart } from '../../components/AddCart'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
//Import icons
import { RiArrowLeftSLine } from 'react-icons/ri'
import imagePlaceholder from '../../assets/error-img/no_image_defaut.svg';

export function Details(){
  const { signOut, user } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  
  function handleGoBack() {
    navigate(-1)
  }

  async function handleRemoveDish() {
    setLoading(true)

    const isConfirm = confirm('Tem certeza que deseja remover este item?')

    if (isConfirm) {
        await api.delete(`/dishes/${params.id}`)
            .then(() => {
                alert('Item removed with sucess!')

                navigate(-1)

                setLoading(false)
            })
    } else {
        setLoading(false)
    }
}

  return (
    <Container>
      <Header/>
        <Content>
          <DetailsInfo>
            <ButtonText
              title="Back"
              icon={RiArrowLeftSLine}
              onClick={handleGoBack}
            />
              <div className='description'>
                <img src={imagePlaceholder} alt='Dish Image' />
                <div>
                  <h1>Dish Name</h1>
                  <p>Something really long to be like a description for that plate so we can see how it looks like on the preview and measure its size</p>
                {/* {
                  dish.ingredients.map(ingredient => (
                    <Ingredients
                      key={String(ingredient.id)}
                      title={ingredient.name}
                    />
                  ))
                } */}
                <Action>
                  {
                    user.isAdmin ?
                      <>
                      <Button className='delete'
                        title={loading ? 'Deleting' : 'Delete dish'}
                        disabled={loading}
                        // onClick={handleRemoveDish}
                      />
                      <Link to={`/editdish/`}>
                      {/* <Link to={`/editdish/${dish.id}`}> */}
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
        </Content>
        <Footer/>
    </Container>
)
}