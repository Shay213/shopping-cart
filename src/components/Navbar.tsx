import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import shoppingCartSvg from '../assets/shopping-cart.svg'

export default () => {
    return (
        <NavbarBs className='bg-white shadow-sm mb-3' sticky='top'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to='/' as={NavLink}>Home</Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>About</Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>Store</Nav.Link>
                </Nav>
                <Button 
                    className='rounded-circle'
                    style={{width: '3rem', height: '3rem', position: 'relative'}}
                >
                    <img src={shoppingCartSvg} />
                    <div 
                        className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                        style={{color: '#fff', width: '1.5rem', height: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform: 'translate(25%, 25%)'}}
                    >3</div>
                </Button>
            </Container>
        </NavbarBs>
    );
};