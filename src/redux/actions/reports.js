import axios from 'axios';
import { GET_REPORTS } from './actionTypes';

const apiurl = 'http://localhost:4000/api/v1';

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


export const getReports = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.get(
      `${apiurl}/reports/`,
      {
        headers: {
          'x-access-token': token
        }
      }
    );
    dispatch({
      type: GET_REPORTS,
      data: data.reports
    });
    return data;
  } catch (error) {
    return error.response.data;
  }
};
