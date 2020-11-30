import { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';
import { postCars } from '../../api';

const Form = () => {
  const [postData, setPostData] = useState({
    title: '', brand: '', price: '', age: '' 
  });

  const classes = useStyles();


  const handleSubmit = (e) => {
    e.preventDefault();

    postCars(postData);
    handleClear();
  };

  const handleClear = () => {
    setPostData({ title: '', brand: '', price: '', age: '' })
  };
  
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
        <Typography variant="h6">Criar um Carro</Typography>
        <TextField 
          name="title" 
          variant="outlined" 
          label="Modelo" 
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}  
         />

         <TextField 
          name="brand" 
          variant="outlined" 
          label="Marca" 
          fullWidth
          value={postData.brand}
          onChange={(e) => setPostData({ ...postData, brand: e.target.value })}  
         />

         <TextField 
          name="price" 
          variant="outlined" 
          label="Preço" 
          fullWidth
          value={postData.price}
          onChange={(e) => setPostData({ ...postData, price: e.target.value })}  
         />

         <TextField 
          name="age" 
          variant="outlined" 
          label="Ano" 
          fullWidth
          value={postData.age}
          onChange={(e) => setPostData({ ...postData, age: e.target.value })}  
         />

         <Button 
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth>Submit
          </Button>

          <Button 
          variant="contained"
          color="secondary"
          size="small"
          onClick={() => {}}
          fullWidth>Clear
          </Button>
      </form>
    </Paper>
  );
};

export default Form;