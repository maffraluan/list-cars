import axios from 'axios';

const url = 'http://157.230.213.199:3000/api/cars';

async function getCars() {
  try {
    const response = await axios.get(url);

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function postCars(newPost) {
  try {
    await axios.post(url, newPost);
    return alert('Criado com sucesso!');
  } catch (error) {
    return alert(error, 'Erro ao criar!');
  }
}

async function deleteCar(id) {
  try {
    await axios.delete(`${url}/${id}`);
    return alert('Apagado com sucesso!');
  } catch (error) {
    return alert(error, 'Erro ao apagar!');
  }
}

export { getCars, postCars, deleteCar };
