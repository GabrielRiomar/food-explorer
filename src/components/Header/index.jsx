//Import styles
import { Container, Content, Search, Brand, Profile, ButtonMenu} from "./styles";
//Import components
import { ButtonHeader } from '../ButtonHeader'
import { ButtonText } from '../ButtonText'
//Import react icons
import { FiLogOut, FiUser, FiShoppingBag, FiHeart } from "react-icons/fi"

//Import Hook, API and Navigate for logout function
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../assets/images/logoUser.svg'
import LogoAdmin from '../../assets/images/logoAdmin.svg'
import { useState } from 'react'

export function Header({ search }){
  const { signOut, user } = useAuth()
  // const [cart, setCart] = useState(0)

  const navigate = useNavigate()

  function handleSignOut(){
    signOut()
    navigate("/")
  }

  // const { cart, orders } = useCart();
    
    function mobileMenu() {
        document.getElementById('hamburger').classList.toggle('active')
        document.getElementById('nav-menu').classList.toggle('active')
    }

    function userMenu() {
        document.getElementById('user-menu').classList.toggle('active')
    }

  return(
    <Container>
      <Content>
        <Brand to={"/"}>
        {user.isAdmin
          ?
          <div className="logo">
          <img src={LogoAdmin} alt="Icone Food Explorer" />
          </div>
          :
          <div className="logo">
          <img src={Logo} alt="Icone Food Explorer" />
          </div>
        }
        </Brand>

        <div className="hamburger" id="hamburger" onClick={mobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="nav-menu" id="nav-menu"></div>

        <Search>
          <input 
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            autocomplete='off'
            className="search"
            onChange={e => { search(e.target.value) }}
          >
          </input>
        </Search>

        {user.isAdmin
          ?
            <ButtonHeader
              title="Add Dish"
              link="/new"
            />
          :
            <ButtonHeader
              title="Cart (0)"
            />
        }
        

        {user.isAdmin
          ?
            <Link to="/profile">
              <Profile>
                <FiUser />
              </Profile>
            </Link>

          :

            <Profile onClick={userMenu}>
              <FiUser />
                <div className="user-menu" id="user-menu">
                  <Link to="/orders">
                    <ButtonMenu>
                      <FiShoppingBag size={24}/>
                        My Orders
                    </ButtonMenu>
                  </Link>

                  <Link to="/">
                    <ButtonMenu>
                      <FiHeart size={24}/>
                        My Favorites
                      </ButtonMenu>
                  </Link>

                  <Link to="/profile">
                    <ButtonMenu>
                      <FiUser size={24}/>
                        My Profile
                    </ButtonMenu>
                  </Link>
                </div>
            </Profile>
        }
        <ButtonText
          icon={FiLogOut}
          onClick={handleSignOut}
        />
      </Content>
    </Container>
  )
}