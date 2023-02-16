import React from "react"
import './header.css'
import { NavLink } from 'reactstrap'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { Container, Row } from 'reactstrap'

const Header = () => {
  return (
    <Header>
        <Container>
            <Row>
                <div className='navWrapper'>
                  <div className='logo'>
                    <img src={logo} alt="logo"/>
                    <div>
                        <h1>Ice Cream Shop</h1>
                        <p>Since 1998</p>
                    </div>
                  </div>
                  <div className='navs'>
                    <ul className="menu">
                        <li className="nav">
                            <NavLink to='home'>Home</NavLink>
                        </li>
                        <li className="nav">
                            <NavLink to='shop'>Shop</NavLink>
                        </li>
                        <li className="nav">
                            <NavLink to='cart'>Cart</NavLink>
                        </li>
                    </ul>
                  </div>
                  <div className="nav_icons">
                    <span className='heart'>
                        <i className='FiHeart'></i>
                    </span>
                    <span className='cart'>
                        <i className='FiShoppingBag'></i>
                    </span>
                    <span>
                        <img src={userIcon} alt='userIcon'/>
                    </span>
                  </div>
                  <div className='mobile_menu'>
                    <span>
                        <i className='FcMenu'></i>
                    </span>
                  </div>
                </div>
            </Row>
        </Container>
    </Header>
  )
}

export default Header
