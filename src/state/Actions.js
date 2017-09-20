import {
    SET_DATA,
    LOADING_DATA,
    SET_CURRENT_SERIES
} from './Reducers'

const apiEndpoint = 'https://content.viaplay.se/pc-se';

export const getSeries = (slug) => dispatch => {
    dispatch({type: LOADING_DATA})
    return fetch(`${apiEndpoint}/serier/samtliga`).then((data) => data.json()).then((jsonObject)=> {
        return dispatch({
            type: SET_DATA,
            payload: jsonObject._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
        })
    }).catch((error) => {
        return dispatch({
            type: SET_DATA,
            payload: null
        })
    })
}

//getting details for a series, in the same way as for 'samtliga', but with a slightly different data format
export const getSeriesDetails = (slug) => dispatch => {
    dispatch({type: LOADING_DATA})
    return fetch(`${apiEndpoint}/serier/${slug}`).then((data) => data.json()).then((jsonObject)=> {
        return dispatch({
            type: SET_CURRENT_SERIES,
            payload: jsonObject._embedded['viaplay:blocks'][0]._embedded['viaplay:article']
        })
    }).catch((error) => {
        return dispatch({
            type: SET_CURRENT_SERIES,
            payload: null
        })
    })
}

export const setCurrentSeriesFromAllSeriesList = (item) => dispatch => {
    //if the current series is set locally using data from /serier/samtliga, we need to format the data
    //a bit compared to if you request the series from /serier/:slug
    if (item && item.content && item.content.series) {
        dispatch({
            type: SET_CURRENT_SERIES,
            payload: {
                ...item,
                content: {
                    ...item.content,
                    title: item.content.series.title,
                    synopsis: item.content.series.synopsis
                }
            }
        })
    }
}
