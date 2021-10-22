import { createContext, useState } from "react";

const WishListContext=createContext({
    items:[],
    addToWishList:()=>{},
    removeFromWishList:()=>{},
    isInWishList:()=>{}
});

export function WishListContextProvider(props){
    const [wishListItems,setWishList]=useState([])
    const context={
        items:wishListItems,
        addToWishList:addItemToWishList,
        removeFromWishList:removeItemFromWishList,
        isInWishList:productIsInWishList
    };
    function addItemToWishList(product){
        setWishList((previous)=>{
            return previous.concat(product)
        })
    }
    function removeItemFromWishList(productName){
        setWishList((previous)=>{
            return previous.filter((item)=>item.name!=productName)
        })
    }
    function productIsInWishList(productName){
       return wishListItems.some((item)=>item.name==productName)
    }  
    return(
        <WishListContext.Provider value={context}>
            {props.children}
        </WishListContext.Provider>
    )
}

export default WishListContext;