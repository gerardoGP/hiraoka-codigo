import Carousel from '../../componentes/Carousel'
import img126444_2 from '../../assets/126444_2.webp'
import img126445_3 from '../../assets/126445_3.webp'
import img126446_4 from '../../assets/126446_4.webp'
import img126447_2 from '../../assets/126447_2.webp'
import img126448_1 from '../../assets/126448_1.webp'
import img127463_0 from '../../assets/127463-0.webp'
import img127581_0 from '../../assets/127581-0.webp'
import img127583_3 from '../../assets/127583-3.webp'
import img1_324 from '../../assets/1_324.webp'
import bars from '../../assets/bars.png'
import group_5 from '../../assets/group-5.webp'
import group_3 from '../../assets/group-3.webp'
import imga22_64gb from '../../assets/a22-64gb.webp'
import img1_319 from '../../assets/1_319.webp'
import img123832 from '../../assets/galaxy-a32-negro-sm-a325mzkmltp---0.webp'
import Card from '../../componentes/Card'
import './Principal.css'
import {Container,Grid} from '@mui/material'
import Recomend from "../../componentes/Carousel/Recomendado"
import NuestrosServicios from "../../componentes/Servicios"
const Principal = () => {
    return (
        <Container>
            <Grid container>
                <Grid item mt={3} mb={3}>
                    < Carousel/> 
                </Grid>
            </Grid>
            <Grid container spacing={2} mt={2} mb={3}>
                <div className="section_title"><h2>Nuevos</h2></div>
                <Card marca="SAMSUNG" stock="12" titulo="Celular Libre Samsung Galaxy M22 6.4 128GB Azul" codigo="125151" precio="919.00" ponline="799.00" img={img1_324}/>
                <Card marca="XIAOMI" stock="12" titulo="Celular Libre Xiaomi Redmi Note 11S 5G 128GB 4GB RAM S..." codigo="127583" precio="999.00" ponline="1,199.00" img={img127583_3}/>
                <Card marca="XIAOMI" stock="12" titulo="Celular Libre Xiaomi Redmi 10 2022 128GB 4GB RAM Pebbl..." codigo="127581" precio="899.00" ponline="699.00" img={img127581_0}/>
                <Card marca="XIAOMI" stock="12" titulo="Celular Libre Xiaomi Redmi 10 2022 128GB 4GB RAM Pebbl..." codigo="127582" precio="899.00" ponline="699.00" img={img127581_0}/>
                <Card marca="SAMSUNG" stock="12" titulo="Celular Libre Samsung Galaxy A22 6.4 64GB Negro" codigo="125325" precio="949.00" ponline="699.00" img={imga22_64gb}/>
                <Card marca="XIAOMI"stock="12" titulo="Celular Libre Xiaomi Redmi 10C 6.71 64GB 4GB RAM..." codigo="127463" precio="749.00" ponline="499.00" img={img127463_0}/>
                <Card marca="SAMSUNG" stock="12" titulo="Celular Libre Samsung Galaxy A03S 6.5 32GB Negro" codigo="125128" precio="599.00" ponline="449.00" img={img1_319}/>
                <Card marca="SAMSUNG"stock="12"  titulo="Celular Libre Samsung A32 6.4 128GB Negro" codigo="123832" precio="1,199.00" ponline="899.00" img={img123832}/>
                <Card marca="SAMSUNG" stock="12" titulo="Celular Libre Samsung Galaxy S22+ 6.6 128GB 8GB ..." codigo="126448" precio="5500.00" ponline="4599.00" img={img126448_1}/>
                <Card marca="SAMSUNG" stock="12" titulo="Celular Libre Samsung Galaxy S22+ 6.6 64GB 8GB ..." codigo="126449" precio="4900.00" ponline="4590.00" img={img126447_2}/>
                <Card marca="SAMSUNG" stock="12" titulo="Celular Libre Samsung Galaxy S22 Ultra 6.8 128GB..." codigo="126446" precio="5200.00" ponline="5599.00" img={img126446_4}/>
                <Card marca="SAMSUNG" stock="12" titulo="Celular Libre Samsung Galaxy S22 Ultra 6.8 128GB..." codigo="126440" precio="5200.00" ponline="5599.00" img={img126445_3}/>
                <Card marca="SAMSUNG" stock="12" titulo="Celular Libre Samsung Galaxy S22 6.1 128GB 8GB R..." codigo="126441" precio="2909.00" ponline="3999.00" img={img126444_2}/>
            </Grid>

            <Grid container mt={2} mb={3}>
                <Grid item xs={12}>
                    <NuestrosServicios /> 
                </Grid>
            </Grid>
        </Container>
    )
}
export default Principal