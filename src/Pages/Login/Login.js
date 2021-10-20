import { Form, Button, Container, Row } from 'react-bootstrap'
import { useRef } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios';
export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    const validateCredentials = (event) => {
        event.preventDefault();

        const emailId = emailRef.current.value;
        const password = passwordRef.current.value;
        axios.get('https://ecommapp-2c4a3-default-rtdb.firebaseio.com/userData.json'
        ).then((response)=>{
            if(response.status==200){
                const data=response.data;
                const userData=[];
                for(const key in data){
                    const user={
                        id:key,
                        ...data[key]
                    }
                    userData.push(user)
                }
                console.log(userData);
                const validCredentials = userData.some(
                    (item) => item.email == emailId && item.password == password);
                const index = userData.findIndex((item) => item.email == emailId && item.password == password);
                const userInfo = userData[index];
                if(validCredentials){
                    history.replace('/products')
                    // alert("success")
                }
                else{
                    alert("wrong credentials")
                }                
            }
        })
       
    }
    return (
        <Container className="w-25 mt-5">
            <Row className="d-flex justify-content-center h1">

                Login

            </Row>
            <Form onSubmit={validateCredentials}>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Container className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" className="w-50 rounded-pill rounded-3  border  ">
                        Submit
                    </Button>
                </Container>
            </Form>
        </Container>
    )
}

