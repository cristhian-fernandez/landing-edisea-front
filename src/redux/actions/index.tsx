import {
  GET_DATA_CARROUSEL
} from "../constants/";
import { Dispatch } from 'redux';

interface GetDataCarouselAction {
  type: string;
  payload: any;
}

import apiCarrousel from './../../api/apiCarrousel.json'

// import axios from "axios";

export const getDataCarrousel = () => {
  return async (dispatch: Dispatch<GetDataCarouselAction>) => {
    try {
      const response = apiCarrousel;
      dispatch({
        type: GET_DATA_CARROUSEL,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};