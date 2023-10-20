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
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AuthLayout } from "../layouts/AuthLayout";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <AuthLayout title="Login">
        <Box component={"form"}>
          <Grid
            container
            justifyContent={"center"}
            direction={"column"}
            alignItems={"center"}
          >
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
              <Grid item xs={12} sm={6}>
                <Button variant="contained" sx={{ width: "12.5ch", ml: 1 }}>
                  Ingresar
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button variant="contained" sx={{ width: "12.5ch", ml: 0.5 }}>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction={"row"} justifyContent={"end"}>
              <Link
                component={RouterLink}
                color={"inherit"}
                to={"/auth/register"}
              >
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </Box>
      </AuthLayout>
    </>
  );
};
