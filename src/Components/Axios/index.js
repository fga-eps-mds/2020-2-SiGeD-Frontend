import axios from 'axios';

export const defaultPost = async (URL, object) => {
  try {
    await axios.post(URL, {
      object,
    });
  } catch (error) {
    console.error(error);
  }
};

export const defaultGet = async (URL, objeto) => {
  await axios
    .get(URL)
    .then((response) => objeto(response.data));
};

export const defaultPut = async (URL, objeto) => {
  try {
    await axios.put(URL, {
      objeto,
    })
      .then((response) => {
        console.log(response);
      });
  } catch (error) {
    console.error(error);
  }
};

export const delaultDelete = async (URL, message) => {
  try {
    await axios.delete(URL)
      .then((response) => {
        console.log(response);
      });
  } catch (error) {
    alert(message);
  }
};
