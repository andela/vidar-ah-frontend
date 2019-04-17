import { START_FETCHING, STOP_FETCHING } from './actionTypes';


export const startFetching = () => (
  {
    type: START_FETCHING
  }
);

export const stopFetching = (fetchSuccess = true, message = []) => (

  {
    type: STOP_FETCHING,
    payload: {
      error: !fetchSuccess,
      message
    }
  });
