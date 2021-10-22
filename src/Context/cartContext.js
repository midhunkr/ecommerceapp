import { createContext, useState } from "react";

const CartContext=createContext(
    {
        items:[],
        addToCart:()=>{},
        removeFromCart:()=>{},
        isInCart:()=>{}
    }
)

export function CartContextProvider(props){
    const [cartItems,setCartItems]=useState([])
    const context={
        items:cartItems,
        addToCart:addProductToCart,
        removeFromCart:removeProductFromCart,
        isInCart:productIsInCart
    }
    function addProductToCart(product){
        setCartItems((prev)=>{
            return prev.concat(product)
        });
    }
    function removeProductFromCart(productName){
       
        setCartItems((prev)=>{
            return prev.filter((item)=>item.name!=productName);
        })
      
    }
    function productIsInCart(productName){
       return cartItems.some((item)=>item.name==productName)
    }  
    return(
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;