export const SET_DATA = 'SET_DATA';
export const LOADING_DATA = 'LOADING_DATA';
export const SET_CURRENT_SERIES = 'SET_CURRENT_SERIES';

let initialState = {
    //in case we would want to pre-load anything, not really necessary here
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                isLoadingData: true
            }
        case SET_DATA:
            return {
                ...state,
                seriesList: action.payload,
                isLoadingData: false
            }
        case SET_CURRENT_SERIES:
            return {
                ...state,
                currentSeries: action.payload,
                isLoadingData: false
            }
        default:
            return state
        }
}
