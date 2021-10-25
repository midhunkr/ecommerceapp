import { Container, Navbar, Nav, Card, Button, Row, Col, Accordion, Form } from "react-bootstrap";
import CustomNavbar from "../../Components/NavBar";
import '../../Styles/main.css'
import speaker from '../../Assets/Images/speaker.jpg'
import ProductCard from "../../Components/ProductCard";
import { productData } from "../../Data/products.js"
import { useEffect, useState } from "react";
import SearchBar from "../../Components/SearchBar";
import PaginationFrame from "../../Components/PaginationFrame";
export default function ProductPage() {
    
    
    const [data, setNewData] = useState(productData)
    const [isLoading, setIsLoading] = useState(false)
    const numberOfPageFrames=Math.ceil(productData.length/5)
    function moveToNextPage(startIndex){
        let start;
        if(startIndex==0){
            start=0;
        }
        else{
            start=(startIndex+1)*5-5;
        }
        const newArray=[];
        for(let index=start;index<start+5&&index<productData.length;index++){
            newArray.push(productData[index])
        }
        setNewData(newArray)
    }
    function applyTypeFilter(type) {
        // console.log(`the type is ${type}`);
        setNewData((previous) => {
            return productData.filter((item) => item.category.includes(type))
        })
        // moveToNextPage(0);
    }
    function searchProduct(searchKey) {
        setNewData((previous) => {
            return productData.filter((item) => item.name.includes(searchKey));
        })
    }
    function applyPriceFilter(range) {
        console.log(`function triggered ${range}`);
        if (range == 'high-low') {
            console.log(`inside ${range}`);

            const dataNew = productData;
            const newItemData = dataNew.sort((item1, item2) => item2.price - item1.price)
            setNewData(newItemData)

        }
        else if ('low-high') {
            console.log(`inside ${range}`);

            const data = productData;
            const newData = data.sort((item1, item2) => item1.price - item2.price)
            setNewData(newData)

        }
    }
    useEffect(()=>{
        moveToNextPage(0)
    },[])

    return (
        <>

            <Container fluid>
                <Row >
                    <Container className="d-flex justify-content-center" fluid>
                        <SearchBar searchFunction={searchProduct}></SearchBar>
                    </Container>

                </Row>
                <Row>
                    <Col md={3} >
                        <Row className="mt-3">
                            <Container className="m-2">
                                <b>Filter By</b>
                            </Container>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Type</Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <Form.Check type="radio" label="Electronics" name="type" onClick={() => { applyTypeFilter("electronics") }}></Form.Check>
                                            <Form.Check type="radio" label="TV" name="type" onClick={() => { applyTypeFilter("TV") }}></Form.Check>
                                            <Form.Check type="radio" label="Book" id="3" name="type" onClick={() => { applyTypeFilter("books") }}></Form.Check>
                                            <Form.Check type="radio" label="Mobile" id="4" name="type" onClick={() => { applyTypeFilter("mobilephone") }}></Form.Check>
                                            <Form.Check type="radio" label="Bag" id="5" name="type" onClick={() => { applyTypeFilter("backpacks") }}></Form.Check>
                                            <Form.Check type="radio" label="Laptop" id="6" name="type" onClick={() => { applyTypeFilter("laptop") }}></Form.Check>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Price</Accordion.Header>
                                    <Accordion.Body>
                                        <Form>
                                            <Form.Check type="radio" label="Low-High" name="price" onClick={() => { applyPriceFilter('low-high') }}></Form.Check>
                                            <Form.Check type="radio" label="High-Low" name="price" onClick={() => { applyPriceFilter('high-low') }}></Form.Check>
                                        </Form>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Row>
                    </Col>
                    <Col md={9}>

                        {isLoading ? <div>Loading</div> : <Row md={3}>
                            {data.map((item) => (
                                <Col>
                                    <ProductCard data={item} screenIsCart={false} screeIsWishList={false} screenIsHome={true}></ProductCard>
                                </Col>
                            ))}
                        </Row>}
                        <Row>
                            <Col className="d-flex justify-content-center mt-3 mb-3">
                                <PaginationFrame length={numberOfPageFrames} onChangeFrame={moveToNextPage}></PaginationFrame>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Container>

        </>
    )
}


