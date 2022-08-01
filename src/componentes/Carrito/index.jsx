import {React,useState} from "react"
const CarritoCompra = () => {
    const [carrito,setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")))

    setInterval(() => {
        setCarrito(JSON.parse(localStorage.getItem("carrito")))
    }, 1000);

    return (
    <div className="row">
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            {(carrito ) ? (
                carrito.map(element => (
          <div className="card mb-5 border">
            <div className="card-body">
              
              <div className="card">
                <div className="card-body bg-light">
                  <div className="row">
                    <div className="col-6 col-lg-2">
                      <h6 className="text-muted">Pedido N°:</h6>
                      <p className="mb-lg-0 fw-bold">
                        {element.codigo}
                      </p>
                    </div>
                    <div className="col-6 col-lg-2">
                      <h6 className="text-muted">Fecha de envío:</h6>
                      <p className="mb-lg-0 fw-bold">
                        <time datetime="2019-10-01">
                            2022-07-31
                        </time>
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      <h6 className="text-muted">Estado:</h6>
                      <p className="mb-0 fw-bold">
                       2022-07-31
                      </p>
                    </div>
                    <div className="col-6 col-lg-3">
                      <h6 className="text-muted">Monto del pedio:</h6>
                      <p className="mb-0 fw-bold">
                        S/ 2000
                      </p>
                    </div>
                    <div className="col-12 col-lg-2 mt-xs-3">
                      <a className="btn btn-sm btn-outline-success mb-md-2" href="">
                        Ver Detalle
                      </a>
                      <a className="btn btn-sm btn-outline-info" href="">
                        Tracking
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ) : (
            <div classNameName="row">
                <div classNameName="col-12">
                    Carrito vacio
                </div>
            </div>
        )}
          <nav className="d-flex justify-content-center justify-content-md-end mt-10">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link page-link-arrow" href="#">
                  <i className="fa fa-caret-left"></i>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">4</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">5</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">6</a>
              </li>
              <li className="page-item">
                <a className="page-link page-link-arrow" href="#">
                  <i className="fa fa-caret-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
    </div>
    )
}
export default CarritoCompra