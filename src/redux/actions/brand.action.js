export const GET_BRANDS = 'GET_BRANDS';
export const GET_BRANDS_SUCCESS = "GET_BRANDS_SUCCESS";
export const GET_BRANDS_FAILURE = 'GET_BRANDS_FAILURE';

export function getBrandAction(data) {
    return {
        type: GET_BRANDS,
    }
}

export function getBrandActionSuccess(action) {
    return {
        type: GET_BRANDS_SUCCESS,
        response: action.response
    }
}

export function getBrandActionFailure(action) {
    return {
        type: GET_BRANDS_FAILURE,
        response: action.response
    }
}