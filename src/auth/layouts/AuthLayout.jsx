import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({children, title = ''}) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          minHeight: "100vh",
          backgroundColor: "primary.main",
          p: 4,
        }}
      >
        <Grid
          item
          className="box-shadow"
          xs={3}
          sx={{
            width: {md:350},
            backgroundColor: "#fff",
            padding: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            {title}
          </Typography>
          {children}
        </Grid>
      </Grid>
    </>
  );
};
