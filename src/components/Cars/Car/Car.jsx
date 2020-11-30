import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';
import carImage from '../../../assets/car.png';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteCar } from '../../../api';
import useStyles from './styles';

const Car = ({ car }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={[classes.media, classes.carImage]}
        image={carImage}
        alt="Car"
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{car.brand.toUpperCase()}</Typography>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="secondary" component="h2">
          Modelo: {car.title.toUpperCase()}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        variant="h5"
        color="textSecondary"
        gutterBottom
      >
        Marca: {car.brand.toUpperCase()}
      </Typography>
      <CardContent>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Preço: {car.price}
        </Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>
          Ano: {car.age}
        </Typography>

        <Button>
          <DeleteIcon
            size="small"
            color="primary"
            onClick={() => deleteCar(car._id)}
          />
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default Car;
