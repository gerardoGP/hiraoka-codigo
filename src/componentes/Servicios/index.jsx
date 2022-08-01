import {Grid,Card} from "@mui/material"
const NuestrosServicios = () => {

return (
<section className="bg-light w100">
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="d-flex align-items-center p-4 w-100">
            <i className="fas fa-truck fa-lg"></i>
            <div className="ms-3">
              <h6 className="mb-1 text-uppercase">Envío gratis</h6>
              <p className="small text-muted mb-0">Para todos los pedidos superiores a S/99.00</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex align-items-center p-4 w-100">
            <i className="fas fa-exchange-alt fa-lg"></i>
            <div className="ms-3">
              <h6 className="mb-1 text-uppercase">30 días de devolución</h6>
              <p className="small text-muted mb-0">Si los productos tienen problemas</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex align-items-center p-4 w-100">
            <i className="fas fa-shield-alt fa-lg"></i>
            <div className="ms-3">
              <h6 className="mb-1 text-uppercase">Pago seguro</h6>
              <p className="small text-muted mb-0">Pago 100% seguro</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="d-flex align-items-center p-4 w-100">
            <i className="fas fa-phone-alt fa-lg"></i>
            <div className="ms-3">
              <h6 className="mb-1 text-uppercase">Soporte 24/7</h6>
              <p className="small text-muted mb-0">Soporte dedicado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
)
}
export default NuestrosServicios