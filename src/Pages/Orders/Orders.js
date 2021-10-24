import { useContext } from "react"
import ProductCard from "../../Components/ProductCard";
import OrderContext from "../../Context/orderContex"
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Orders(){
    const orderContext=useContext(OrderContext);
    return(
        <div>
            <Container>
        <Row md={3}>
        {orderContext.orders.map((item)=>(<Col><ProductCard data={item} disableButtons={true}></ProductCard></Col>))}
         
        </Row>
        </Container>
          
        </div>
    )
}