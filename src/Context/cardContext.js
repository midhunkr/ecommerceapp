import { createContext, useState } from "react";

const PaymentCardContex=createContext({
    cards:[],
    addCard:()=>{}
})

export function PaymentCardProvider(props){
    const [userCards,setUserCards]=useState([])
    const context={
        cards:userCards,
        addCard:addNewCard
    }
    function addNewCard(cardData){
        setUserCards((previous)=>{
            return previous.concat(cardData);
        })
    }
    return(
        <PaymentCardContex.Provider value={context}>
            {props.children}
        </PaymentCardContex.Provider>
    )
}

export default PaymentCardContex;
   
