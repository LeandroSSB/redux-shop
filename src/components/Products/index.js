import { Grid, Paper, Button } from "@material-ui/core"
import { Img , Div } from "./styles"
import { products } from "../../productsItems"
import { useSelector , useDispatch } from "react-redux"
import { addCartThunk } from './../../store/modules/cart/thunks'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Products = () => {
    
    const dispatch = useDispatch()
    const { items } = useSelector((state) => state.cart)
    


    const handleClick = (a) =>  {
        if(items.includes(a)){
            toast.error("Item ja adicionado!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }  )
        }else{
            dispatch(addCartThunk(a))
        }
    }

    return (
        <Div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        <Grid container justifyContent = "center" spacing = {1}   alignItems="center">
            {products.map((a) => <Grid item xs= {2}  sm= {3} key = {a.name} >
                <Paper>
                    <h3>{a.name}</h3>
                    <figure>
                        <Img src={a.image} alt={a.name} />
                    </figure>     
                    <h4> R$ {a.price} </h4>
                    <Button  onClick = {() => handleClick(a) } variant = "outlined">  Adicionar Carrinho </Button>
                </Paper>
            </Grid>)}
        </Grid>
        </Div>
    )
}


export default Products 