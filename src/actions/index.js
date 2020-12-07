import ableSamaritanApi from "../apis/ableSamaritanApi";
import * as actionTypes from "./types"
import { dummyDonations } from "./dummyData";

// error helper
export const errorActionCreator = (errorType, error) => {
  return {
    type: errorType,
    error: true,
    payload: error,
  };
};

// Donations
export const getDonations = () => async (dispatch) => {
  // Replace dummy payload with real data from server
  const payload = dummyDonations;
  try {
    // const response = await ableSamaritanApi.get('/donation');
    dispatch({
      type: actionTypes.GET_DONATIONS,
      // payload: response.data.data,
      payload,
    });
  } catch (error) {
    dispatch(errorActionCreator(actionTypes.GET_DONATIONS_ERROR, error));
  }
};
export const getADonation = (id) => async (dispatch) => {
  // Replace dummy payload with real data from server
  const payload = dummyDonations.filter((a) => a.id === id)[0];
  try {
    // const response = await ableSamaritanApi.get(`/donation/${id}`);
    dispatch({
      type: actionTypes.GET_A_DONATION,
      // payload: response.data.data,
      payload,
    });
  } catch (error) {
    dispatch(errorActionCreator(actionTypes.GET_A_DONATION_ERROR, error));
  }
};
