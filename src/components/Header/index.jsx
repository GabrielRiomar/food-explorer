//Import styles
import { Container, Search, Brand} from "./styles";
//Import components
import { ButtonHeader } from '../ButtonHeader'
import { ButtonText } from '../ButtonText'
//Import react icons
import { FiSearch, FiLogOut } from "react-icons/fi"
import { CiReceipt } from 'react-icons/ci'
//Import Hook, API and Navigate for logout function
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import Icon from '../../assets/images/icon.svg'
import { useState } from 'react'

export function Header({ search }){
  const { signOut, user } = useAuth()
  const [cart, setCart] = useState(0)

  const navigate = useNavigate()

  function handleSignOut(){
    navigate("/")
    signOut()
  }

  return(
    <Container>
      <Brand to={"/"}>
        <img src={Icon} alt="Icone Food Explorer" />
        <h2>food explorer</h2>
      </Brand>
      <Search>
        {<FiSearch size={20}/>}
        <input 
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          onChange={e => { search(e.target.value) }}
        >
        </input>
      </Search>
      {
        user.isAdmin
        ?
          <ButtonHeader title="Add Dish" link="/new"/>
        :
        <ButtonHeader  title="Cart (0)"/>
      }
      <ButtonText icon={FiLogOut} onClick={handleSignOut}/>
    </Container>
  )
}