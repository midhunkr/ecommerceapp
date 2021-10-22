import { useContext } from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import PaymentCardContex from "../../Context/cardContext";

export default function Profile() {
    const cardContext = useContext(PaymentCardContex);
    return (
        <div>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Basic Info</Accordion.Header>
                                <Accordion.Body></Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Card</Accordion.Header>
                                <Accordion.Body>
                                    {cardContext.cards.length == 0 ? 'NoCards Available' : 'Card'}
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

