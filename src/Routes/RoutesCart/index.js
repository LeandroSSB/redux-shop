import { Switch, Route as Caminho } from "react-router-dom"
import CartItems from "../../components/CartItems"
import Header from "../../components/Header"
import Products from "../../components/Products"



const RoutesCart = () => {

    return (
        <Switch>
            <Caminho exact path = "/">
                <Header/>
                <Products/>
            </Caminho>
            <Caminho exact path = "/cart">
                <Header  />
                <CartItems/>
            </Caminho>
        </Switch>
    )

}

export default RoutesCart