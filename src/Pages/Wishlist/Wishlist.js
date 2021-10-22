import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../Components/ProductCard";
import WishListContext from "../../Context/wishListContext";

export default function WishList(){
    const context=useContext(WishListContext)
    if(context.items.length==0){
        return(
            <Container className="d-flex" fluid>
                <h3 className="justify-content-center m-2">No Products In Wishlist!!!!</h3>
            </Container>
        )
    }
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

