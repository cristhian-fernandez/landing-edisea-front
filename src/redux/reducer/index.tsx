import {
    GET_DATA_CARROUSEL,
    GET_ALL_CAREERS,
    GET_ALL_INSTRUCTORS,
    GET_ALL_CHALLENGES,
    SEARCH_CHALLENGES,
    SEARCH_CHALLENGES_CAREER,
    GET_CAREER_BY_ID,
    GET_INSTRUCTOR_BY_ID,
    SELECT_CAREER,
    SEARCH_WORDS,

    ADD_TO_CART,
    REMOVE_TO_CART,
    ADD_ONE_FROM_CART,
    REMOVE_ONE_FROM_CART,
    CLEAR_CART
} from "../constants";
import {CareersProps, ChallengesProps, actionProps} from "./../../types"

const initialState = {
    carrers : [],
    instructors : [],
    countries : [],
    dataCarrousel : {},
    challenges : [],
    allChallenges : [],
    carrerDetail: {},
    instructorDetail: {},
    search: false,
    selectedCareer: -1,
    searchWords: '',
    cart : JSON.parse(window.localStorage.getItem('cart') || '[]'),
};

const rootReducer = (state = initialState, action:actionProps) => {
    const challenges = [...state.allChallenges];
    const careers = [...state.carrers];
    let search = false;
    switch(action.type) {
        case GET_DATA_CARROUSEL:
            return {
                ...state,
                dataCarrousel : action.payload
            }
        case GET_ALL_CAREERS:
            return {
                ...state,
                carrers : [...action.payload],
            } 
        case GET_ALL_INSTRUCTORS:
            return {
                ...state,
                instructors : [...action.payload],
            } 
        case GET_ALL_CHALLENGES:
            return {
                ...state,
                challenges : [...action.payload],
                allChallenges : [...action.payload],
            } 
        case SEARCH_CHALLENGES:
            const filteredChallenges = challenges.filter((challenge: ChallengesProps) => {
                const foundCareer: any = careers.find((career:CareersProps) => career.idCareer === challenge.idCareer)
                return String(challenge.name).toLowerCase().includes(action.payload.toLowerCase()) || String(foundCareer.name).toLowerCase().includes(action.payload.toLowerCase());
            })
            search = filteredChallenges.length > 0 ? false : true; 
            return {
                ...state,
                challenges : filteredChallenges,
                search : search
            } 
        case SEARCH_CHALLENGES_CAREER:
            const filteredChallengesCareer = challenges.filter((challenge: ChallengesProps) => {
                const foundCareer: any = careers.find((career:CareersProps) => career.idCareer === challenge.idCareer)
                return action.payload === 0 ? foundCareer : foundCareer.idCareer === action.payload
            })
            search = filteredChallengesCareer.length > 0 ? false : true; 
            return {
                ...state,
                challenges : filteredChallengesCareer,
                search : search
            } 
        case GET_CAREER_BY_ID:
            return{
                ...state,
                carrerDetail: action.payload[0]
            }
        case GET_INSTRUCTOR_BY_ID:
            return{
                ...state,
                instructorDetail: action.payload[0]
            }
        case SELECT_CAREER:
            return {
                ...state,
                selectedCareer : action.payload
            }
        case SEARCH_WORDS:
            return {
                ...state,
                searchWords : action.payload
            }
        case ADD_TO_CART:
            const addValue = [...state.cart, action.payload];
            window.localStorage.setItem('cart', JSON.stringify(addValue));
            return {
                ...state,
                cart : JSON.parse(window.localStorage.getItem('cart') || '')
            } 
        default: return state;
    };

};

export default rootReducer;