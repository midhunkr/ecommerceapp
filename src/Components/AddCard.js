import { useContext, useRef, useState } from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import PaymentCardContex from "../Context/cardContext";
export default function AddCard(props) {
    
    const cardContext = useContext(PaymentCardContex);
    const [showForm, setShowForm] = useState(false)
    const [showAddButon, setShowAddButton] = useState(true)
    
    const cardNameRef = useRef();
    const cardNumberRef = useRef();

    const cardCvvRef = useRef();
    const showCardForm = () => {
        setShowAddButton(false)
        setShowForm(true)
    }
    const submitCard = () => {
        const cardData = {
            name: cardNameRef.current.value,
            cvv: cardCvvRef.current.value,
            number: cardNumberRef.current.value
        }
        cardContext.addCard(cardData);
        setShowForm(false)
    }
    return (
        <>
            <Container>NoCards Available
                {showAddButon && <Button variant="danger" className="ms-2" onClick={showCardForm}> Add Card</Button>}
                {showForm &&
                    <Form>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Card Name</Form.Label>
                                <Form.Control type="text" ref={cardNameRef} />
                                <Form.Text className="text-muted">
                                    eg:HDFC,SBI etc
                                </Form.Text>
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Card Number</Form.Label>
                                    <Form.Control type="text" ref={cardNumberRef} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>CVV</Form.Label>
                                    <Form.Control type="text" ref={cardCvvRef} />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit" onClick={submitCard}>
                                Submit
                            </Button>
                        </Form>
                    </Form>}
            </Container>
        </>
    )
}