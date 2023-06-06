import { Container, Form} from "./styles"

import {  FiMail, FiLogIn, FiLock } from "react-icons/fi"

import { Link } from 'react-router-dom'

import { Input } from "../../components/Input"

import { Button } from "../../components/Button"

export function SignIn(){
  return (
    <Container>

      <div>

        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0318 0.216515L43.4349 12.0919V35.8426L22.0318 47.7179L0.628698 35.8426V12.0919L22.0318 0.216515Z" fill="#065E7C"/>
        </svg>

        <h1>food explorer</h1>

      </div>

        <Form>
          <h2>Login</h2>

          <Input 
            title="Email"
            type="email"
            label="Email"
            placeholder = "Example: email@email.com" 
            required
          />

          <Input 
            title="Password"
            label="Password"
            type="password" 
            placeholder = "At least 6 characters"
            minLength = "6" 
            required 
          />

          <Button 
            title="Sign-in"
          />
            
          <Link to='/register'>
            Create an Account
          </Link>

        </Form>
        
    </Container>
  )
}