import {SEARCH_MOVIE, FETCH_MOVIES,FETCH_MOVIE, LOADING,IS_VISIBLE,NOT_VISIBLE} from '../actions/types'
const initialState = {
    text: '',
    movies: [],
    movie: [],
    loading: false,
    visible:false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
            case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }

            case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            }
            case LOADING:
            return {
                ...state,
                loading: true
            }
            case IS_VISIBLE:
            return {
                ...state,
                visible: true
            }
            case NOT_VISIBLE:
            return {
                ...state,
                visible: false
            }
        default:
            return state
    }
}