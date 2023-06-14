//Import styles
import { Container, Search, Brand} from "./styles";
//Import components
import { ButtonHeader } from '../ButtonHeader'
import { ButtonText } from '../ButtonText'
import { Link } from 'react-router-dom';
//Import react icons
import { FiSearch } from "react-icons/fi"
import { FiLogOut } from 'react-icons/fi'
//Import Hook, API and Navigate for logout function
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function Header(){
  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  function handleSignOut(){
    navigate("/")
    signOut()
  }

  return(
    <Container>
      <Brand>
        <svg width="30" height="36" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
        </svg>
        <h2>food explorer</h2>
      </Brand>
      <Search>
        {<FiSearch size={20}/>}
        <input type="text" placeholder="Search">
        </input>
      </Search>
      <ButtonHeader title="Cart (0)"/>
      <ButtonText icon={FiLogOut} onClick={handleSignOut}/>
    </Container>
  )
}