import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING,IS_VISIBLE,NOT_VISIBLE, MOVIE_DATA } from './types'
import axios from 'axios';
import { APIKey } from '../../APIKey'
export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}
export const fetchMovies = text => dispatch => {
    axios
        .get(`http://www.omdbapi.com?apikey=${APIKey}&s=${text}`)
        .then(response => dispatch(
            {
                type: FETCH_MOVIES,
                payload: response.data
                
            }
        ))
        .catch(err => console.error(err))

}
export const fetchMovie = id => dispatch => {
    axios
        .get(`http://www.omdbapi.com?apikey=${APIKey}&i=${id}`)
        .then(response => dispatch(
            {
                type: FETCH_MOVIE,
                payload: response.data
            }
        ))
        .catch(err => console.error(err))
}
export const setLoading = () => (
    {
        type: LOADING
    })
    export const setVisibleTrue = () => (
        {
            type: IS_VISIBLE
        })
        export const setVisibleFalse = () => (
            {
                type: NOT_VISIBLE
            })
            export const setMovieData = (movieData) => (
                {
                    type: MOVIE_DATA,
                    payload: movieData

                })