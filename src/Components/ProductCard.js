import { Container, Navbar, Nav, Card, Button } from "react-bootstrap";
import speaker from "../Assets/Images/bag.jpg"
export default function ProductCard(props) {

    return (
        <Card style={{ width: '20rem', height: '600px' }} className="mt-3">
            <Card.Img src={props.data.imageUrl} />

            <Card.Body>
                <Card.Title>{props.data.name}</Card.Title>
                <Card.Text>
                    Price: {props.data.price}
                    <div>
                        Rating: {props.data.rating}
                    </div>
                </Card.Text>
                <Button variant="primary">Add To Cart</Button>
                <Button variant="danger" className="d-inline ms-2">Add To WishList</Button>

            </Card.Body>
        </Card>
    )
}