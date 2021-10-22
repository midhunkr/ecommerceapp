import { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router";
import LoginContext from "../Context/loginContext";
export default function CustomNavbar() {
    const context = useContext(LoginContext);
    const history = useHistory();
    const goToHome=()=>{
        history.replace('/products')
    }
    const goToCart = () => {
        history.replace('/cart');
    }
    const goToProfile = () => {
        history.replace('/profile');
    }
    const goToWishList = () => {
        history.replace('/wishlist');
    }
    const logOut = () => {
        context.changeToLogOut()
        history.replace('/register')
    }
    return (
        <Navbar bg="success" variant="dark">
            <Navbar.Brand className="ps-5">E-Commerce App</Navbar.Brand>
            <Container className="d-flex justify-content-end">
                {context.isLoggedIn && <Nav className="d-flex justify-content-end">
                    <Nav.Link onClick={goToHome}>Home</Nav.Link>
                    <Nav.Link onClick={goToCart}>Cart</Nav.Link>
                   
                    <Nav.Link onClick={goToWishList}>WishList</Nav.Link>
                    <Nav.Link onClick={goToWishList}>Orders</Nav.Link>
                    <Nav.Link onClick={goToProfile}>Profile</Nav.Link>
                    <Nav.Link onClick={logOut}>Log Out</Nav.Link>
                </Nav>}

            </Container>
        </Navbar>
    )
}