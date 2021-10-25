import { useRef } from "react";
import { Container, Form } from "react-bootstrap";

export default function SearchBar(props) {
    const searchFunction = props.searchFunction;
    const searchKeyRef = useRef();
    const search = () => {
        console.log(`search key ${searchKeyRef.current.value}`);
        searchFunction(searchKeyRef.current.value)
    }
    return (

        <Container className=" m-2 w-50" >
            <Form>
                <Form.Control type="text" placeholder="Search" onChange={search} ref={searchKeyRef} />
            </Form>
        </Container>

    )
}