import {React,useState} from 'react'
import {Link} from "react-router-dom"
import bars from '../../assets/bars.png'
import {Button,Card,Grid,CardContent,CardMedia} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Swal from "sweetalert2"
const Tarjeta = (props) => {
    const [estado, setEstado] = useState(0)
    const handleAddPedido = (event) => {
        event.preventDefault()
        const carrito = JSON.parse(localStorage.getItem("carrito"))
        if (carrito){
            const nuevo = 
                {
                    "codigo" : props.codigo,
                    "cantidad" : 1,
                    "producto" : props.titulo,
                    "precio_normal" : props.precio,
                    "precio_online" : props.ponline,
                    "imagen" : props.img,
                    "marca" : props.marca
                }
            
            carrito.map(function(element) {
                if (element.codigo == props.codigo) {
                    element.cantidad = parseInt(element.cantidad) + 1;
                    return setEstado(1),element
                }
            })
            if(estado == 0){
                carrito.push(nuevo)
            }
            localStorage.setItem("carrito", JSON.stringify(carrito))     
        }else{
            const nuevo = [
                {
                    "codigo" : props.codigo,
                    "cantidad" : 1,
                    "producto" : props.titulo,
                    "precio_normal" : props.precio,
                    "precio_online" : props.ponline,
                    "imagen" : props.img,
                    "marca" : props.marca
                }
            ]
            localStorage.setItem("carrito", JSON.stringify(nuevo))
        }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregado al carrito',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
    <Grid item mt={2} mb={2} xs={12} sm={6} md={4} lg={3}>
        <Card>
            <Link to={"/detalle/"+props.codigo}>
                <CardMedia component="img" image={props.img} alt={props.titulo} />
            </Link>
            <CardContent>
                <form onSubmit={handleAddPedido}>
                    <h5>{props.marca}</h5>
                    <Link to={"/detalle/"+props.codigo} >
                        <h4 className="card-title">{props.titulo}</h4>
                    </Link>
                    <p>Código: {props.codigo}</p>
                    <p>Stock: {props.stock}</p>
                    <div>
                        <span className="tag">PRECIO ONLINE</span>
                        <span className="price">S/ {props.ponline}</span>
                    </div>
                    <p>Normal S/ {props.precio}</p>
                    <Button type="submit" fullWidth variant="contained" color="primary" startIcon={<ShoppingCartIcon/>}>
                        Agregar al carro
                    </Button>
                </form>
            </CardContent>
        </Card>
    </Grid>
    )
}
export default Tarjeta