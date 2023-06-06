import { Container, Form } from "./styles"

import { Link } from 'react-router-dom'

// import {  FiMail, FiLogIn, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input"

import { Button } from "../../components/Button"

export function SignUp(){
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
          placeholder="Name"
          type="text"
        />

        <Input
          placeholder="email@email.com"
          type="text"
        />

        <Input
          placeholder="Password"
          type="password"
        />

        <Button title="Create"/>

        <Link to="/">Back to Log In</Link>

      </Form>
    </Container>
  )

}