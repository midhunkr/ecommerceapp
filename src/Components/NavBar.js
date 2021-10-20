import { Container, Navbar, Nav } from "react-bootstrap";
export default function CustomNavbar() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home" className="ps-5">E-Commerce App</Navbar.Brand>
            <Container className="d-flex justify-content-end">

                <Nav className="d-flex justify-content-end">
                    <Nav.Link href="#home">Cart</Nav.Link>
                    <Nav.Link href="#features">Profile</Nav.Link>
                    <Nav.Link href="#pricing">WishList</Nav.Link>
                    <Nav.Link href="#pricing">Log Out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}