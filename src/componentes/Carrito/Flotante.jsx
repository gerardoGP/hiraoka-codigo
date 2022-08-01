import {Button} from "@mui/material"
import {React,useEffect,useState} from "react"
const Carrito = () => {
    //const carrito = JSON.parse(localStorage.getItem("carrito"))
    const precio = 1200
    const total = 1400

    const [carritoFlotante,setCarritoFlotante] = useState(JSON.parse(localStorage.getItem("carrito")))
    
    setInterval(() => {
        setCarritoFlotante(JSON.parse(localStorage.getItem("carrito")))
    }, 1000);
    return (
        <div className="offcanvas offcanvas-end"  id="offcanvasRight" tabindex="-1" aria-labelledby="offcanvasRightLabel" >
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Carrito de compras</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="list-group list-group-lg list-group-flush">
                    
                    <li className="list-group-item">
                        {(carritoFlotante ) ? (
                            carritoFlotante.map(element => (
                                <div className="row">
                                    <div className="col-4">

                                        <a href="producto.html">
                                            <img className="img-fluid" src={element.imagen} alt="producto" />
                                        </a>
                                    </div>
                                    <div className="col-8">
                                        <p className="font-size-sm font-weight-bold mb-6">
                                            <a className="text-body" href="producto.html"> {element.producto}</a> <br />
                                            <span className="text-muted">S/ {element.precio_online} x {element.cantidad}</span>
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <div>S/ {element.precio_online * element.cantidad}</div>
                                            <a className="font-size-xs text-gray-400 ml-auto" href="/carrito/eliminar/12">
                                            Eliminar <i className="fas fa-times"></i> 
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="row">
                                <div className="col-12">
                                    Carrito vacio
                                </div>
                            </div>
                        )}
                    </li>
                    
                </ul>
                
                <div className="d-grid gap-2">
                    <Button variant="contained" >Pagar</Button>
                    <Button variant="outlined" >Ver carrito</Button>
                </div>
            </div>
        </div>
    )
}
export default Carrito
/* 
<div className="line-height-fixed font-size-sm bg-light p-4 d-flex justify-content-between">
                    <strong>Subtotal</strong> <strong className="ml-auto">S/ {total}</strong>
</div>
*/