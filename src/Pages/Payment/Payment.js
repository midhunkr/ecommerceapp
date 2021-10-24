import { useContext } from "react";
import { Container, Form, FormLabel, Table,Row,Col } from "react-bootstrap";
import PaymentCardContex from "../../Context/cardContext";

export default function Payment(props) {
    const cardContext=useContext(PaymentCardContex);
    return (
        <Container>
            {/* <Row>
                <Col>
                <Table>
                    <tbody>
                        {props.prouctData.map((item)=><tr><td>{item.name}</td>
                        <td>{item.price}</td>
                        </tr>)}
                    </tbody>
                </Table>
                </Col>
            </Row> */}
            <Row>
                <Col>
                <Form>
                   <Form.Label>
                       Choose Card
                   </Form.Label>
                   <Form.Select>
                       <option value={cardContext.cards[0].name}>{cardContext.cards[0].name}</option>
                   </Form.Select>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}

