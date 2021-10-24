
import { useContext } from "react";
import { Container, Form, FormLabel, Table, Row, Col, Button } from "react-bootstrap";
import AddCard from "../../Components/AddCard";
import PaymentCardContex from "../../Context/cardContext";
import CartContext from "../../Context/cartContext";
import OrderContext from "../../Context/orderContex";

export default function Payment(props) {
    const notFromCart=props.notFromCart
    const cardContext = useContext(PaymentCardContex);
    const cartContext=useContext(CartContext);
    const orderContext=useContext(OrderContext);
    const moveToOrders = () => {
        orderContext.addItems(props.products)
        if(!notFromCart){
            cartContext.clearCart()
        }
        
    }
    return (
        <Container>

            <Row>
                <Col>
                    {cardContext.cards.length == 0 ? <AddCard></AddCard> :
                        <Form>
                            <Form.Label>
                                Choose Card
                            </Form.Label>
                            <Form.Select>
                                <option value={cardContext.cards[0].name}>{cardContext.cards[0].name}</option>
                            </Form.Select>
                            <Row>
                                <Col>
                                    <Button variant="success" className="m-2" onClick={moveToOrders}>Pay</Button>
                                </Col>
                            </Row>
                        </Form>}
                </Col>
            </Row>
        </Container>
    )
}

