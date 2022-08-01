import refri from '../../assets/refri1.webp'
import './Detalle.css'
import {Button,Grid,Card,CardMedia,CardContent,Container} from "@mui/material"
import {useState,useEffect} from "react"
import { Padding } from '@mui/icons-material'
import { useParams } from 'react-router-dom';
import { getCells } from "../../firebase/db";
const Detalle = () => {
    const { codigo } = useParams()
    const [cantidad, setCantidad] = useState(1)
    const [cell, setCell] = useState([]);
    const getItems = async () => {
        const querySnapshot = await getCells();
        // onGetLinks((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setCell(docs);
        // });
        console.log(docs);
      };
    useEffect(()=>{
        getItems()
    },[])
    return (
<Container>
    <section className="detalle">
        {cell.map(item => (
            (item.codigo == codigo) ? (
            <>
                <div className="imag_producto">
                    <img src={item.imagen} alt="Imagen" />
                </div>
                <div className="info_producto">
                    <h2 className="marca_producto">{item.marca}</h2>
                    <h1 className="titulo_producto">
                        {item.nombre}
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores perspiciatis iste sequi obcaecati officia enim cumque praesentium voluptatum totam nisi sint, vero perferendis voluptatem. Similique omnis magnam error repudiandae qui.</p>
                    <h4>Codigo: {item.codigo}</h4>
                    <span className="precio_online">
                        <span>S/ {item["precio-online"]}</span>
                    </span>
                    <p className="precio_normal">Precio normal S/ {item["precio-normal"]}</p>
                    <div className="opcion_compra">
                        <div className="cant_compra">
                            <button className="btn_add" onClick={()=>{(cantidad == 1) ? setCantidad(1): setCantidad(cantidad - 1)} }>-</button>
                            <input className="cant_comp" type="number" value={cantidad}/>
                            <button className="btn_add" onClick={()=>{setCantidad(cantidad + 1)}}>+</button>
                        </div>
                        <div className="comprar">
                            <Button fullWidth variant="contained" color="error" >
                                <b>A&Ntilde;ADIR AL CARRO</b>
                            </Button>
                        </div>
                    </div>
                    <div className="info_compra">
                        <h5>Disponibilidad y tiempos de entrega</h5>
                        <p>Disponible para despacho a domicilio</p>
                    </div>
                </div>
            </>
            ) : ("")
            
        ))}
        
    </section>
</Container>
    )
}
export default Detalle
/*
<div className="imag_producto">
                <img src={item.imagen} alt="Imagen" />
            </div>
            <div className="info_producto">
                <h2 className="marca_producto">ELECTROLUX</h2>
                <h1 className="titulo_producto">
                    Refrigeradora Side by Side Electrolux ERS052B2HUS No Frost 517L
                </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores perspiciatis iste sequi obcaecati officia enim cumque praesentium voluptatum totam nisi sint, vero perferendis voluptatem. Similique omnis magnam error repudiandae qui.</p>
                <h4>Codigo: 120123</h4>
                <span className="precio_online">
                    <span>S/ 2,099.00</span>
                </span>
                <p className="precio_normal">Precio normal S/ 3,719.00</p>
                <div className="opcion_compra">
                    <div className="cant_compra">
                        <button className="btn_add" onClick={()=>{(cantidad == 1) ? setCantidad(1): setCantidad(cantidad - 1)} }>-</button>
                        <input className="cant_comp" type="number" value={cantidad}/>
                        <button className="btn_add" onClick={()=>{setCantidad(cantidad + 1)}}>+</button>
                    </div>
                    <div className="comprar">
                        <Button fullWidth variant="contained" color="error" >
                            <b>A&Ntilde;ADIR AL CARRO</b>
                        </Button>
                    </div>
                </div>
                <div className="info_compra">
                    <h5>Disponibilidad y tiempos de entrega</h5>
                    <p>Disponible para despacho a domicilio</p>
                </div>
            </div>
*/

/*
<Container mt={3} mb={3}>
    <Grid container className="detail">
        <Grid className="detail_item" item xs={12} md={6} >
            <Card >
                <CardMedia ClassName="detail_img" component="img" image={refri} alt="Imagen del producto"/>
            </Card>
        </Grid>
        <Grid item xs={12} md={6}>
            <Card>
                <CardContent >
                    <h2 class="marca_producto">ELECTROLUX</h2>
                    <h1 class="titulo_producto">Refrigeradora Side by Side Electrolux ERS052B2HUS No Frost 517L</h1>
                    <p>Capacidad de 517 L. Sistema de enfriamiento No Frost. Iluminación interior. Temperatura máximo de congelamiento -18°. Máquina de hielo. Bandejas ajustables. Alarma de puerta abierta. Control de temperatura. Eficiencia energética A</p>
                    <h4>Codigo: 121730</h4>
                    <span class="precio_online">
                        <span>S/ 2,099.00</span>
                    </span>
                    <p class="precio_normal">Precio normal S/ 3,719.00</p>
                    <div class="opcion_compra">
                        <h3>Disponible más de 10 unidades</h3>
                        <div class="cant_compra">
                            <button class="btn_add">-</button>
                            <input class="cant_comp" type="text" value="0" />
                            <button class="btn_add">+</button>
                        </div>
                        <Button fullWidth variant="contained" color="error">
                            <b>A&Ntilde;ADIR AL CARRO</b>
                        </Button>
                    </div>
                    <div class="info_compra">
                        <h5>Disponibilidad y tiempos de entrega</h5>
                        <p>Disponible para despacho a domicilio</p>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
</Container>
*/
/*
    <section class="detalle">
        <div class="imag_producto">
            <img src={refri} alt="refri 1" />
        </div>
        <div class="info_producto">
            <h2 class="marca_producto">ELECTROLUX</h2>
            <h1 class="titulo_producto">Refrigeradora Side by Side Electrolux ERS052B2HUS No Frost 517L</h1>
            <p>Capacidad de 517 L. Sistema de enfriamiento No Frost. Iluminación interior. Temperatura máximo de congelamiento -18°. Máquina de hielo. Bandejas ajustables. Alarma de puerta abierta. Control de temperatura. Eficiencia energética A</p>
            <h4>Codigo: 121730</h4>
            <span class="precio_online">
                <span>S/ 2,099.00</span>
            </span>
            <p class="precio_normal">Precio normal S/ 3,719.00</p>
            <div class="opcion_compra">
                <h3>Disponible más de 10 unidades</h3>
                <div class="cant_compra">
                    <button class="btn_add">-</button>
                    <input class="cant_comp" type="text" value="0" />
                    <button class="btn_add">+</button>
                </div>
                <div class="">
                    <Button fullWidth variant="contained" color="error">
                        <b>A&Ntilde;ADIR AL CARRO</b>
                    </Button>
                </div>
            </div>
            <div class="info_compra">
                <h5>Disponibilidad y tiempos de entrega</h5>
                <p>Disponible para despacho a domicilio</p>
            </div>
        </div>
    </section>
*/