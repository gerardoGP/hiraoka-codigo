import {Container,Grid,Card,CardContent,CardMedia} from "@mui/material"
import img126447_2 from '../../assets/126447_2.webp'
import img126448_1 from '../../assets/126448_1.webp'
import img127463_0 from '../../assets/127463-0.webp'
import img127581_0 from '../../assets/127581-0.webp'
import {Link} from "react-router-dom"
import "./Recomend.css"
const Recomend = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={3}>
                    <Link to="/detalle" >
                        <Card className="recomend_card">
                            <CardMedia className="recomend_card_img" component="img" image={img126447_2}/>
                            <CardContent>
                                <h5>SAMSUNG</h5>
                                <h6>Celular Libre Samsung Galaxy S22+ 6.6 128GB 8GB ...</h6>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/detalle" >
                        <Card xs={6} className="recomend_card">
                            <CardMedia className="recomend_card_img" component="img" image={img126448_1}/>
                            <CardContent>
                                <h5>SAMSUNG</h5>
                                <h6>Celular Libre Samsung Galaxy S22+ 6.6 128GB 8GB ...</h6>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/detalle" > 
                        <Card xs={3} className="recomend_card">
                            <CardMedia className="recomend_card_img" component="img" image={img127463_0}/>
                            <CardContent>
                                <h5>SAMSUNG</h5>
                                <h6>Celular Libre Samsung Galaxy S22+ 6.6 128GB 8GB ...</h6>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/detalle">
                        <Card xs={3} className="recomend_card">
                            <CardMedia className="recomend_card_img" component="img" image={img127581_0}/>
                            <CardContent>
                                <h5>SAMSUNG</h5>
                                <h6>Celular Libre Samsung Galaxy S22+ 6.6 128GB 8GB ...</h6>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Recomend