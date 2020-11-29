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

export { getCars };
