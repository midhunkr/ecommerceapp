import { useContext } from "react"
import ProductCard from "../../Components/ProductCard";
import OrderContext from "../../Context/orderContex"
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Orders(){
    const orderContext=useContext(OrderContext);
    if (orderContext.orders.length == 0) {
        return (
          <Container className="d-flex" fluid>
            <h3 className="justify-content-center m-2">No Orders Yet!!!!</h3>
          </Container>
        )
      }
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