import { Container, Navbar, Nav, Card, Button,Row,Col } from "react-bootstrap";
import CustomNavbar from "../../Components/NavBar";
import '../../Styles/main.css'
import speaker from '../../Assets/Images/speaker.jpg'
import ProductCard from "../../Components/ProductCard";
import { productData } from "../../Data/products.js"
export default function ProductPage() {
   
    return (
        <>
            <CustomNavbar></CustomNavbar>
            <Row md={4}>
                {productData.map((item) => (
                    <Col>
                         <ProductCard data={item}></ProductCard>
                    </Col>
                ))}
            </Row>

        </>
    )
}


