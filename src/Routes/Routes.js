import { Route, Switch, Redirect } from "react-router";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import Payment from "../Pages/Payment/Payment";
import ProductDetails from "../Pages/ProductDeatils/ProductDetails";
import ProductPage from "../Pages/Products/Products";
import Profile from "../Pages/Profile/Profile";
import RegisterUser from "../Pages/Register/Register";
import WishList from "../Pages/Wishlist/Wishlist";
export default function Routes() {
    return (
        <Switch>
            <Route path='/register' exact>
                <RegisterUser></RegisterUser>
            </Route>
            <Route path='/login' exact>
                <Login></Login>
            </Route>
            <Route path='/products' exact>
                <ProductPage></ProductPage>
            </Route>
            <Route path='/productdetails' exact>
              <ProductDetails></ProductDetails>
            </Route>
            <Route path='/payment' exact>
                <Payment></Payment>
            </Route>
            <Route path='/profile' exact>
                <Profile></Profile>
            </Route>
            <Route path='/cart' exact>
                <Cart></Cart>
            </Route>
            <Route path='/orders' exact>
               <Orders></Orders>
            </Route>
            <Route path='/wishlist' exact>
                <WishList></WishList>
            </Route>
            
            <Redirect exact from="/" to="/register" push />
        </Switch>
    )
}