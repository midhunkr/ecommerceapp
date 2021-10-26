import { useContext, useState } from "react"
import ProductCard from "../../Components/ProductCard";
import OrderContext from "../../Context/orderContex"
import { Container, Row, Col, Button } from "react-bootstrap";
import PaginationFrame from "../../Components/PaginationFrame";

export default function Orders(){
    const orderContext=useContext(OrderContext);
    const [newData,setNewData]=useState(orderContext.orders);
    const numberOfPageFrames = Math.ceil(orderContext.orders.length / 5);
    function moveToNextPage(startIndex) {
      let start;
      if (startIndex == 0) {
        start = 0;
      }
      else {
        start = (startIndex + 1) * 5 - 5;
      }
      const newArray = [];
      for (let index = start; index < start + 5 && index < orderContext.orders.length; index++) {
        newArray.push(orderContext.orders[index])
      }
      setNewData(newArray)
    }
    useState(()=>{
      moveToNextPage(0);
    },[])
    if (newData.length == 0) {
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
        {newData.map((item)=>(<Col><ProductCard data={item} disableButtons={true}></ProductCard></Col>))}
         
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-3 mb-3">
            <PaginationFrame length={numberOfPageFrames} onChangeFrame={moveToNextPage}></PaginationFrame>
          </Col>
        </Row>
        </Container>
          
        </div>
    )
}