import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import favicon from '../favicon.ico'

const Header = ({backgroundColor}) => {
  return (
    <header>
      <Navbar style={{backgroundColor}} className='nav' bg="custom" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='zombmart' variant='zombie'><img className='zom' src={favicon}/>ZombMart</Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            <LinkContainer to='/cart'>
              <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
            <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
            </LinkContainer>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )

}

Header.defaultProps = {
  backgroundColor: '#A51010'
}

export default Header
