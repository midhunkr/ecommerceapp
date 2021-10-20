import { createContext,useState } from "react";
//createContext returns an object that contains a react
//component so capitalise the variable 
const FavContext=createContext({
    fav:[],
    totalFav:0,
    addFav:(favMeetUp)=>{},
    removeFav:(meetUpId)=>{}
})

//function definitions for auto completion

export function FavContextProvider(props){
    const [userFavourites,setUserFav]=useState([])

    const addFavourite=(favMeetUp)=>{
        // this may not get reflected instantly
        // setUserFav(userFavourites.concat(favMeetUp))

        setUserFav((previousFav)=>{
            return previousFav.concat(favMeetUp);
        })
    }
    const removeFavourite=(meetUpId)=>{
        setUserFav((previousFav)=>{
            return previousFav.filter((meetup)=>meetup.id!=meetUpId)
        });
    }
    const itemIsFavourite=()=>{
        
    }

    //current value
    const context={
        fav:userFavourites,
        totalFav:userFavourites.length,
        addFav:addFavourite,
        removeFav:removeFavourite
    };
    //all the components that are listening to this context wiil
    //re render once the state changes here
    //wrap it in the root element
    //inside the value  pros we pass the current context
    return(
        <FavContext.Provider value={context}>
            {props.children}
        </FavContext.Provider>
    );
}
export default FavContext;