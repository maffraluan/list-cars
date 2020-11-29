import { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import Car from './Car/Car';
import { getCars } from '../../api';

import useStyles from './styles';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [shown, setShown] = useState(4);

  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      let response = await getCars();

      let data = response.data;
      setCars(data);
    }
    fetchData();
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

  return !cars.length ? (
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
          <Car car={car} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cars;
