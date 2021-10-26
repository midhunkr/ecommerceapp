import { useContext,useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import PaginationFrame from "../../Components/PaginationFrame";
import ProductCard from "../../Components/ProductCard";
import WishListContext from "../../Context/wishListContext";

export default function WishList() {
  const context = useContext(WishListContext)
  const [newData, setNewData] = useState(context.items);
  const numberOfPageFrames = Math.ceil(context.items.length / 5);
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
  useState(() => {
    moveToNextPage(0);
  }, [])
  if (newData.length == 0) {
    return (
      <Container className="d-flex" fluid>
        <h3 className="justify-content-center m-2">No Products In Wishlist!!!!</h3>
      </Container>
    )
  }
  return (
    <Container>
      <Row md={3}>
        {newData.map((item) => (
          <Col>
            <ProductCard data={item} screenIsCart={false} screeIsWishList={true} disableButtons={false}></ProductCard>
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mt-3 mb-3">
          <PaginationFrame length={numberOfPageFrames} onChangeFrame={moveToNextPage}></PaginationFrame>
        </Col>
      </Row>

    </Container>
  )
}

