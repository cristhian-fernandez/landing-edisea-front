import {
  GET_DATA_CARROUSEL,
  GET_ALL_CAREERS,
  GET_ALL_CHALLENGES,
  GET_ALL_INSTRUCTORS,
  GET_MESSAGES_MODAL,
  SEARCH_CHALLENGES,
  SEARCH_CHALLENGES_CAREER,
  GET_CAREER_BY_ID,
  GET_INSTRUCTOR_BY_ID,
  SELECT_CAREER,
  SEARCH_WORDS,
  GET_ALL_PAYMENT,
  GET_PAYMENT_MAKE,
  GET_COUPONS,
  GET_COUPON,
  GET_ACCORDION_LIST,

  ADD_TO_CART,
  REMOVE_TO_CART,
  ADD_ONE_FROM_CART,
  REMOVE_ONE_FROM_CART,
  // CREATE_CART,
  CLEAR_CART,
} from "../constants/";
import { Dispatch } from 'redux';
import {GetDispatchAction} from "./../../types"
import apiCarrousel from './../../api/apiCarrousel.json'
import apiCareers from './../../api/apiCareers.json'
import apiChallenges from './../../api/apiChallenges.json'
import apiInstructors from './../../api/apiInstructors.json'
import apiMessagesModal from './../../api/apiMessagesModal.json'
import apiPayment from './../../api/apiPayment.json'
import apiCoupons from './../../api/apiCoupons.json'
import apiAccordionList from './../../api/apiAccordionList.json'

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

export const getMessagesModal = () => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
    try {
      const response = apiMessagesModal;
      dispatch({
        type: GET_MESSAGES_MODAL,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllPayment = () => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
    try {
      const response = apiPayment;
      dispatch({
        type: GET_ALL_PAYMENT,
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

export const getPaymentMake = (payment: number) => {
  return {
      type : GET_PAYMENT_MAKE,
      payload : payment
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

export const addToCart = (cart: any) => {
  return {
      type: ADD_TO_CART,
      payload : cart
  }
}

export const removeToCart = (id: number) => {
  return {
      type: REMOVE_TO_CART,
      payload : id
  }
}

export const addOneFromCart = (id: number) => {
  return {
      type: ADD_ONE_FROM_CART,
      payload : id
  }
}
export const removeOneFromCart = (id: number) => {
  return {
      type: REMOVE_ONE_FROM_CART,
      payload : id
  }
}

// export const createCart = (values) => {
//   return async (dispatch) => {
//       axios.post(urlTest, values)
//       .then(responde => {
//           dispatch({
//               type : CREATE_CART,
//               payload : responde.data
//           })
//       })
//       .catch( e => console.log(e));
//   }
// }

export const clearCart = () => {
  return {
      type: CLEAR_CART
  }
}

export const getAllCoupons = () => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
    try {
      const response = apiCoupons;
      dispatch({
        type: GET_COUPONS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getValidCoupon = (payment: string) => {
  return {
      type : GET_COUPON,
      payload : payment
  }
}

export const getAllAccordionList = () => {
  return async (dispatch: Dispatch<GetDispatchAction>) => {
    try {
      const response = apiAccordionList;
      dispatch({
        type: GET_ACCORDION_LIST,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};