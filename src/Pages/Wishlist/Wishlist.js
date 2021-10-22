import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../Components/ProductCard";
import WishListContext from "../../Context/wishListContext";

export default function WishList(){
    const context=useContext(WishListContext)
    return(
        <Container>
        <Row md={3}>
         {context.items.map((item) => (
           <Col>
             <ProductCard data={item} screenIsCart={false} screeIsWishList={true}></ProductCard>
           </Col>
         ))}
       </Row>
 
     </Container> 
    )
}

