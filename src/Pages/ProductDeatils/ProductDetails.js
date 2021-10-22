import { Col, Container, Row, Table } from "react-bootstrap";
import { useLocation } from "react-router";

export default function ProductDetails(props) {
    // const productData = props.data;

    const location = useLocation();
    const productData = location.state;
    return (
        <Container>
            <Row>

                <Col md={12}>
                    <Container className="d-flex " fluid>
                        <h3 className="justify-content-center m-2">Product Details</h3>
                    </Container>

                    <Table striped bordered hover>
                        <tbody>

                            <tr>
                                <td rowSpan="5" >
                                    <img src={productData.imageUrl} style={{ width: '300px', height: '250px' }} className="m-3"></img>
                                </td>
                                <td>Product Name</td>
                                <td>{productData.name}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{productData.price}</td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>{productData.company}</td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>{productData.category}</td>
                            </tr>
                            <tr>
                                <td>Rating</td>
                                <td>{productData.rating}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

