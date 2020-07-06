import { SELL_CAR_ACTION, SELL_CAR_ACTION_SUCCESS, SELL_CAR_ACTION_FAIL } from "../actions/sell.action";

const initialState = {
    data: {},
    response: {}
}

export default function (state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SELL_CAR_ACTION:
            { return { ...state, data: action.data, response: null } }
        case SELL_CAR_ACTION_SUCCESS: { return { ...state, data: null, response: action.response } }
        case SELL_CAR_ACTION_FAIL: { return { ...state, data: null, response: action.response } }
    }
    return state
}
