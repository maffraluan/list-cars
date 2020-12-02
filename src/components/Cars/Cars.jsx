import { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Car from './Car/Car';
import { axios } from '../../api';
import useStyles from './styles';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [shown, setShown] = useState(4);

  const classes = useStyles();

  const noCars = !cars || (cars && cars.length === 0);

  const getCars = async () => {
    const response = await axios.get("/cars").catch((err) => {
      console.log("Error:", err);
    });
    if (response && response.data) {
      await setCars(response.data);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  const handleScrollToPageBottom = () => {
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
    const isPageBottomAlmostReached =
      scrollTop + clientHeight >= scrollHeight - 10;

    if (isPageBottomAlmostReached) {
      setShown((prevShown) => prevShown + 4);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleScrollToPageBottom();
    }, 2000);
  }, [shown]);

  return noCars ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {cars.slice(0, shown).map((car) => (
        <Grid key={car._id} item xs={12} sm={6}>
          <Car car={car} getCars={getCars()} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cars;
