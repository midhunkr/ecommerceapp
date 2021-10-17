import { Form, Row, Col, Container, Button, Alert } from 'react-bootstrap'
import { useState, useRef} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
export default function RegisterUser() {
    const history=useHistory();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const genderRef = useRef();
    const mobileRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [isLoading, setLoading] = useState(false)
    // const [accountExists, setAccountExits] = useState(true)
    const push = () => {

        history.push('/login')
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        var regex = /^[A-Za-z0-9 ]+$/
        // localStorage.clear()
        const isPassWordValid = regex.test(passwordRef.current.value);
        const passwordLength = passwordRef.current.value.length;
        if (isPassWordValid && passwordLength <= 15) {
            const dataObject = {
                email: emailRef.current.value,
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                gender: genderRef.current.value,
                mobile: mobileRef.current.value,
                password: passwordRef.current.value
            }
            axios.post('https://ecommapp-2c4a3-default-rtdb.firebaseio.com/userData.json',
             dataObject).then((response) =>response.status==200?alert("Successfully registered"):alert("Error"));
        }
        else if (!isPassWordValid) {
            alert("Special Charcters not allowed!!");
        }
        else if (passwordLength > 15) {
            alert("Length exceeds 15 characters!!");
        }
        else {
            alert("Invalid")
        }



    }
 
    return (
        <div>
            <Container className="mt-5 ">
                <Row className="d-flex justify-content-center h1">

                    Register

                </Row>
                <Form onSubmit={handleSubmit} >
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" required ref={firstNameRef} />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="text" ref={lastNameRef} required />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" ref={passwordRef} required />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Gender</Form.Label>
                            <Form.Select ref={genderRef}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" ref={mobileRef} required />
                        </Form.Group>

                    </Row>
                    <Container className="d-flex justify-content-center">
                        <Button variant="danger" type="submit" className="w-50 rounded-pill rounded-3  border  ">
                            Submit
                        </Button>
                    </Container>
                </Form>
                <Container className="d-flex justify-content-center m-3">
                    Already have an account? <Alert.Link className="ms-2" onClick={push}>Login</Alert.Link>
                </Container>
            </Container>
        </div>
    )
    
}

