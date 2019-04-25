import axios from 'axios';

const apiurl = 'https://vidar-ah-backend-production.herokuapp.com/api/v1';

export const reportArticle = (reportData, slug) => async () => {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.post(
      `${apiurl}/report/`,
      { ...reportData, slug },
      {
        headers: {
          'x-access-token': token
        }
      }
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};
