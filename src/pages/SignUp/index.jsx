import { useState } from "react"
import { Container, Form } from "./styles"

import{api} from '../../services/api'
import { Link, useNavigate } from 'react-router-dom'

import { Input } from "../../components/Input"

import { Button } from "../../components/Button"

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    console.log(name, email, password)
    if(!name || !email || !password){
      return alert('Fill all the fields!')
    }

    api.post('/users', { name, email, password})
    .then(() => {
      alert('User successfully created')
      navigate('/')
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('Failed to create user')
      }
    })
  }

  return(
    <Container>
      <div>

        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0318 0.216515L43.4349 12.0919V35.8426L22.0318 47.7179L0.628698 35.8426V12.0919L22.0318 0.216515Z" fill="#065E7C"/>
        </svg>

        <h1>food explorer</h1>

      </div>

      <Form>
        <h2>Create your account</h2>
        
        <Input
          placeholder="Username"
          type="text"
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="email@email.com"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          title="Create"
          onClick={handleSignUp}
        />

        <Link to="/">Back to Log In</Link>

      </Form>
    </Container>
  )

}