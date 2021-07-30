import { Div , Item} from "./styles"
import { CardHeader } from '@material-ui/core'
import {BiCart} from 'react-icons/bi'
import {useHistory} from 'react-router-dom'


    const Header = () => {
        const history = useHistory()
        const handleRedirect = () => history.push("/cart")

        return (
            <CardHeader component = "div" title = {
            <Div >
                <Item onClick = {() => history.push("/")}>
                    KenzieShop
                </Item>
                <BiCart onClick = {handleRedirect} style = {{width: "50%" }}/>
            </Div>
        
        }/>
        )
    }



    export default Header