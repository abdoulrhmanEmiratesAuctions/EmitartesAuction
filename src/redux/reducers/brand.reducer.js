import { GET_BRANDS, GET_BRANDS_SUCCESS, GET_BRANDS_FAILURE } from "../actions/brand.action"

const initialState = {
    response: {}
}

export default function (state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case GET_BRANDS: { return { ...state, response: null } }
        case GET_BRANDS_SUCCESS: { return { ...state, response: action.response } }
        case GET_BRANDS_FAILURE: { return { ...state, response: action.response } }
    }
    return state
}
