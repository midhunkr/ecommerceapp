
import { useContext, useRef, useState } from "react";
import { Accordion, Col, Container, Row, Button, Form } from "react-bootstrap";
import AddCard from "../../Components/AddCard";
import PaymentCardContex from "../../Context/cardContext";
import LoginContext from "../../Context/loginContext";

export default function Profile() {
    const cardContext = useContext(PaymentCardContex);
    
    const loginContext = useContext(LoginContext);
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
                                       <AddCard/>
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

