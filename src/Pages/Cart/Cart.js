import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../Components/ProductCard";
import CartContext from "../../Context/cartContext"

export default function Cart() {
  const context = useContext(CartContext);
  if(context.items.length==0){
    return(
        <Container className="d-flex" fluid>
            <h3 className="justify-content-center m-2">No Products In Cart!!!!</h3>
        </Container>
    )
}

  return (
    <Container>
       <Row md={3}>
        {context.items.map((item) => (
          <Col>
            <ProductCard data={item} screenIsCart={true} screeIsWishList={false}></ProductCard>
          </Col>
        ))}
      </Row>

    </Container> 
  )
}

