import { Link as RouterLink } from "react-router-dom";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { AuthLayout } from "../layouts/AuthLayout";

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <AuthLayout title="Register">
        <Box component={"form"}>
          <Grid
            container
            justifyContent={"center"}
            direction={"column"}
            alignItems={"center"}
          >
            <Grid item xs={12}>
              <TextField
                label="nombre"
                placeholder="nombre completo"
                type="text"
                id="nombre"
                variant="outlined"
                value={""}
                sx={{ m: 1, width: "25ch"}}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="email"
                type="email"
                id="email"
                variant="outlined"
                value={""}
                sx={{ m: 1, width: "25ch" }}
                fullWidth
              />
            </Grid>



            <Grid item xs={12}>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  // value={"los valores"}
                />
              </FormControl>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction={"row"} justifyContent={"end"}>
              <Link
                component={RouterLink}
                color={"inherit"}
                to={"/auth/login"}
              >
                Ya tengo una cuenta?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </AuthLayout>
    </>
  );
}
