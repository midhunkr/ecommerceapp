
import { useContext, useRef, useState } from "react";
import { Accordion, Col, Container, Row, Button, Form } from "react-bootstrap";
import PaymentCardContex from "../../Context/cardContext";
import LoginContext from "../../Context/loginContext";

export default function Profile() {
    const cardContext = useContext(PaymentCardContex);
    const [showForm, setShowForm] = useState(false)
    const [showAddButon, setShowAddButton] = useState(true)
    const loginContext = useContext(LoginContext);
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
        <div>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Basic Info</Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col md={4} >
                                            User Name:<b>{loginContext.userInfo.firstName}</b>
                                        </Col>
                                        <Col md={4} >
                                            Email:<b><i>{loginContext.userInfo.email}</i></b>
                                        </Col>
                                        <Col md={4} >
                                            Phone Number:<b><i>{loginContext.userInfo.mobile}</i></b>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col md={4}>
                                            Gender:<b>{loginContext.userInfo.gender.toUpperCase()}</b>
                                        </Col>
                                        <Col md={4}>
                                            Password:<b><i>{loginContext.userInfo.password}</i></b>
                                        </Col>

                                    </Row>
                                    <Row className="mt-2">
                                        <Col>
                                            <Container className="d-flex justify-content-end">
                                                <Button variant="warning" >Edit Details</Button>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Card</Accordion.Header>
                                <Accordion.Body>
                                    {cardContext.cards.length == 0 ?
                                        <Container>NoCards Available
                                            {showAddButon && <Button variant="danger" className="ms-2" onClick={showCardForm}> Add Card</Button>}
                                            {showForm && <Form>

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
                                        : <Container>
                                            <Row>
                                                <b style={{ color: "succcess" }}>Card Details</b>

                                            </Row>
                                            <Row>
                                                <Col md={4}>
                                                    <b>Crad Name:{cardContext.cards[0].name}</b>
                                                </Col>
                                                <Col md={4}>
                                                    <b>Crad Number:{cardContext.cards[0].number}</b>
                                                </Col>
                                                <Col md={4}>
                                                    <b>Crad CVV:{cardContext.cards[0].cvv}</b>
                                                </Col>
                                            </Row>
                                        </Container>

                                    }
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

