import {
  GET_DATA_CARROUSEL,
  GET_ALL_CAREERS,
  GET_ALL_CHALLENGES,
  GET_ALL_INSTRUCTORS,
  SEARCH_CHALLENGES,
  SEARCH_CHALLENGES_CAREER,
  GET_CAREER_BY_ID,
  GET_INSTRUCTOR_BY_ID,
  SELECT_CAREER,
  SEARCH_WORDS,
} from "../constants/";
import { Dispatch } from 'redux';
import {GetDispatchAction} from "./../../types"
import apiCarrousel from './../../api/apiCarrousel.json'
import apiCareers from './../../api/apiCareers.json'
import apiChallenges from './../../api/apiChallenges.json'
import apiInstructors from './../../api/apiInstructors.json'

export const getDataCarrousel = () => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
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

export const getAllCareers = () => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
    try {
      const response = apiCareers;
      dispatch({
        type: GET_ALL_CAREERS,
        payload: response.data.careers.filter(career => career.active)
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllChallenges = () => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
    try {
      const response = apiChallenges;
      dispatch({
        type: GET_ALL_CHALLENGES,
        payload: response.data.challenges
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllInstructors = () => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
    try {
      const response = apiInstructors;
      dispatch({
        type: GET_ALL_INSTRUCTORS,
        payload: response.data.instructors
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCareerDetail = (id: number) => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
    try {
      const response = apiCareers;
      dispatch({
        type: GET_CAREER_BY_ID,
        payload: response.data.careers.filter(career => career.idCareer === id)
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getInstructorDetail = (id: number) => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
    try {
      const response = apiInstructors;
      dispatch({
        type: GET_INSTRUCTOR_BY_ID,
        payload: response.data.instructors.filter(instructor => instructor.idInstructor === id)
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchWords = (search: string) => {
  return {
      type : SEARCH_WORDS,
      payload : search
  }
}

export const searchChallenges = (search: string) => {
  return {
      type : SEARCH_CHALLENGES,
      payload : search
  }
}

export const searchChallengesCareer = (id: number) => {
  return {
      type : SEARCH_CHALLENGES_CAREER,
      payload : id
  }
}

export const selectCareer = (id: number) => {
  return {
      type : SELECT_CAREER,
      payload : id
  }
}