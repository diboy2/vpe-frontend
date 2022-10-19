import '../styles/globals.css'
import Grid from '@mui/material/Grid';
function MyApp({ Component, pageProps }) {
  return (
    <Grid container display="flex" justifyContent="center" height="100vh">
      <Grid item xs={6} md={8}>
        <Component {...pageProps} />
      </Grid>
    </Grid>
  );
}

export default MyApp
