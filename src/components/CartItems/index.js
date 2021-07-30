import {useSelector, useDispatch} from 'react-redux'
import { Grid, Button, Paper } from '@material-ui/core'
import { removeCartThunk } from '../../store/modules/cart/thunks'


    const CartItems = () => {
        const {items} = useSelector((state) => state.cart)
        const bat = useSelector((state) => state.cart)
        console.log(bat)
        const dispatch = useDispatch()


        const handleClick = (a) => {
            dispatch(removeCartThunk(a))
        }
        
        return (
            <div>
        <Grid container justifyContent = "center" spacing = {1}   alignItems="center">
            {items.map((a) => <Grid item xs= {2}  sm= {3} key = {a.name} >
                <Paper>
                    <h3>{a.name}</h3>
                    <figure>
                        <img style = {{width: "150px"}} src={a.image} alt={a.name} />
                    </figure>     
                    <h4> R$ {a.price} </h4>
                    <Button  onClick = {() => handleClick(a) } variant = "outlined">  Remover carrinho  </Button>
                </Paper>
            </Grid>)}
        </Grid>
            </div>
        )
    }


    export default CartItems