import { useContext, useState } from "react";
import { Container, Navbar, Nav, Card, Button, Modal } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import speaker from "../Assets/Images/bag.jpg"
import CartContext from "../Context/cartContext";
import WishListContext from "../Context/wishListContext";
export default function ProductCard(props) {
    const data = props.data;
    const screenIsCart = props.screenIsCart;
    const screenIsWishList = props.screeIsWishList;
    const disableButtons = false;

    const context = useContext(CartContext);
    const wishListContext = useContext(WishListContext);
    const [isAdded, setIsAdded] = useState(false);
    const [isAddedToWishList, setIsAddedToWishList] = useState(false);
    const alreadyAdded = context.isInCart(props.data.name);
    const addedToWishListContext = wishListContext.isInWishList(props.data.name);

    // console.log(alreadyAdded);
    const history = useHistory();
    const showDetails = () => {
        history.push(
            '/productdetails',
            props.data
        )
    }


    const addToCart = () => {
        context.addToCart(props.data);
        context.isInCart(props.data.name);
        setIsAdded(true)
    }
    const addToWishList = () => {
        wishListContext.addToWishList(props.data);
        setIsAddedToWishList(true);
    }
    const removeFromWishList = () => {
        wishListContext.removeFromWishList(props.data.name);
    }
    const remove = () => {
        context.removeFromCart(props.data.name);
    }
    return (
        <>
            <Card style={{ width: '20rem', height: '600px' }} className="mt-3">
                <Card.Img src={props.data.imageUrl} onClick={showDetails} />

                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    <Card.Text>
                        Price: {props.data.price}
                        <div>
                            Rating: {props.data.rating}
                        </div>
                    </Card.Text>
                    { !props.disableButtons && <>
                        {!screenIsCart ? <Button variant="primary" onClick={addToCart}>{isAdded || alreadyAdded ? 'AddedToCart' : 'Add To Cart'}</Button> : <Button onClick={remove}>Remove</Button>}
                        {screenIsCart ? <Button variant="danger" className="d-inline ms-2">Buy</Button> : addedToWishListContext || isAddedToWishList ? screenIsWishList ? <Button variant="danger" className="d-inline ms-2" onClick={removeFromWishList}>Remove</Button> : <Button variant="danger" className="d-inline ms-2">AddedToWishList</Button> : <Button variant="danger" className="d-inline ms-2" onClick={addToWishList}>Add To WishList</Button>}
                    </>}



                </Card.Body>
            </Card>


        </>
    )
}