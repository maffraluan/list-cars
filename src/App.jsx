import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Cars from './components/Cars/Cars';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography
          className={classes.heading}
          variant="h2"
          color="secondary"
          align="center"
        >
          List of Cars
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={7}>
              <Cars />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
