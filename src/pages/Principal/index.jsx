import Carousel from "../../componentes/Carousel";
import Card from "../../componentes/Card";
import "./Principal.css";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getCells } from "../../firebase/db";
import NuestrosServicios from "../../componentes/Servicios"
const Principal = () => {
  const [cells, setCells] = useState([]);

  const getItems = async () => {
    const querySnapshot = await getCells();
    // onGetLinks((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setCells(docs);
    // });
    console.log(docs);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container mt={3}>
      <Grid container>
        <Grid item mt={2} mb={3}>
          <Grid item md={12} sm={12} lg={12}>
            <Carousel />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2} mb={3}>
        <div className="section_title"><h2>Nuevos</h2></div>
          {cells.map(item => (
            <Card
              marca={item.marca}
              stock={item.stock}
              titulo={item.nombre}
              codigo={item.codigo}
              precio={item['precio-normal']}
              ponline={item['precio-online']}
              img={item.imagen}
            />
          ))}
      </Grid>
      <Grid container mt={2} mb={3}>
        <Grid item xs={12}>
          <NuestrosServicios /> 
        </Grid>
      </Grid>
    </Container>
  );
};
export default Principal;