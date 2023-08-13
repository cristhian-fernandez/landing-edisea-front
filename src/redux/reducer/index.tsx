import {
    GET_DATA_CARROUSEL
} from "../constants";

const initialState = {
    carrers : [],
    countries : [],
    dataCarrousel : {}
};

interface actionProps {
    type: 'GET_CAREERS' | 'GET_COUNTRIES' | 'GET_DATA_CARROUSEL'
    payload: never
}

const rootReducer = (state = initialState, action:actionProps) => {
    switch(action.type) {
        case GET_DATA_CARROUSEL:
            return {
                ...state,
                dataCarrousel : action.payload
            }
        default: return state;
    };

};

export default rootReducer;