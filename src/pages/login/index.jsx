import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Container,
} from "@mui/material";
import { createUser } from "../../firebase/db";
import Swal from "sweetalert2"
const initialState = {
  name: "",
  lastname: "",
  address: "",
  email: "",
  password: "",
};

const Login = () => {
  const [register, setRegister] = useState(initialState)

  const handleInputChange = ({ target: { name, value } }) =>
  setRegister({ ...register, [name]: value });

  const handleRegister = async (e) => {
    e.preventDefault();
    await createUser(register);
    setRegister(initialState);
  }

  return (
  <Container >
    <Grid container alignItems="center" mt={10} mb={10} spacing={6}>
      <Grid item md={6}>
        <Card fullWidth>
          <CardContent>
            <h5>Bienvenidos</h5>
            <Grid container md={12} mt={4} fullWidth>
              <TextField
                label="Email"
                fullWidth
                name="email"
                autoComplete="off"
              />
            </Grid>
            <Grid container md={12} mt={4} fullWidth>
              <TextField
                label="Password"
                fullWidth
                name="password"
                autoComplete="off"
                type="password"
              />
            </Grid>
            <Grid container md={12} mt={4}>
              <Button variant="contained" size="large" fullWidth>
                Login
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={6}>
        <Card fullWidth>
          <CardContent>
            <h5>Registrate</h5>
            <Grid container>
              <Grid item md={6} mt={4}>
                <TextField
                  label="Nombres"
                  name="name"
                  value={register.name}
                  autoComplete="off"
                  fullWidth
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item md={6} mt={4}>
                <TextField
                  label="Apellidos"
                  name="lastname"
                  value={register.lastname}
                  autoComplete="off"
                  fullWidth
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Grid container md={12} mt={4}>
              <TextField
                label="Direccion"
                name="address"
                value={register.address}
                autoComplete="off"
                fullWidth
                onChange={handleInputChange}
              />
            </Grid>
            <Grid container md={12} mt={4}>
              <TextField
                label="Email"
                name="email"
                value={register.email}
                autoComplete="off"
                fullWidth
                onChange={handleInputChange}
              />
            </Grid>
            <Grid container md={12} mt={4}>
              <TextField
                label="Password"
                name="password"
                type="password"
                value={register.password}
                autoComplete="off"
                fullWidth
                onChange={handleInputChange}
              />
            </Grid>
            <Grid container md={12} mt={4}>
              <Button
                variant="contained"
                size="xlarge"
                onClick={handleRegister}
                fullWidth
              >
                Registrar
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
  );
};
export default Login;