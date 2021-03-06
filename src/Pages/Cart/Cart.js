import { useContext, useEffect, useState } from "react"
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import PaginationFrame from "../../Components/PaginationFrame";
import ProductCard from "../../Components/ProductCard";
import CartContext from "../../Context/cartContext"
import Payment from "../Payment/Payment";

export default function Cart() {
  const context = useContext(CartContext);
  const [show, setShow] = useState(false);
  const showDetails = () => setShow(true);
  const onClose = () => setShow(false);
  const [newData, setNewData] = useState(context.items);
  const numberOfPageFrames = Math.ceil(context.items.length / 5)
  function moveToNextPage(startIndex) {
    let start;
    if (startIndex == 0) {
      start = 0;
    }
    else {
      start = (startIndex + 1) * 5 - 5;
    }
    const newArray = [];
    for (let index = start; index < start + 5 && index < context.items.length; index++) {
      newArray.push(context.items[index])
    }
    setNewData(newArray)
  }
  useEffect(() => {
    moveToNextPage(0)
  }, [newData])
  if (newData.length == 0) {
    return (
      <Container className="d-flex" fluid>
        <h3 className="justify-content-center m-2">No Products In Cart!!!!</h3>
      </Container>
    )
  }
  let totalPrice = 0;
  context.items.forEach((item) => {
    totalPrice += item.price;
  })

  return (
    <>
      <Container>
        <Row md={3}>
          {newData.map((item) => (
            <Col>
              <ProductCard data={item} disableButtons={false} screenIsCart={true} screeIsWishList={false}></ProductCard>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-3 mb-3">
            <PaginationFrame length={numberOfPageFrames} onChangeFrame={moveToNextPage}></PaginationFrame>
          </Col>
        </Row>
        <Row >
          <Col className="d-flex" >
            <Container className="d-flex justify-content-end me-3 mt-3 mb-3">
              <b>Total Price: Rs.{totalPrice}/-</b>

            </Container>

          </Col>
        </Row>
        
        <Row>
          <Col className="d-flex">
            <Container className="d-flex justify-content-end me-3  mb-3">

              <Button variant="warning" onClick={showDetails} >Check Out</Button>
            </Container>
          </Col>
        </Row>

      </Container>

      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton >
          <Modal.Title >Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Payment products={context.items} notFromCart={false}></Payment>
        </Modal.Body>
      </Modal>
    </>
  )
}

