import { createContext, useState } from "react";

const OrderContext=createContext({
    orders:[],
    addItems:()=>{}
})

export function OrderContextProvider(porps){

    const [orderList,setOrderList]=useState([])
    function addItemsToOrders(items){
        const itemData=JSON.stringify(items)
        setOrderList((previous)=>{
            return previous.concat(items)
        })
        console.log(`ordersw ${itemData}`);
    }
    const context={
        orders:orderList,
        addItems:addItemsToOrders
    }

    return(
        <OrderContext.Provider value={context}>
            {porps.children}
        </OrderContext.Provider>
    )
}

export default OrderContext;