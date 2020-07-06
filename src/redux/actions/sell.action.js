export const SELL_CAR_ACTION = 'SELL_CAR_ACTION';
export const SELL_CAR_ACTION_SUCCESS = "SELL_CAR_ACTION_SUCCESS";
export const SELL_CAR_ACTION_FAIL = 'SELL_CAR_ACTION_FAIL';

export function sellCarAction(data) {
    return {
        type: SELL_CAR_ACTION,
        data: data
    }
}

export function sellCarActionSuccess(action) {
    return {
        type: SELL_CAR_ACTION_SUCCESS,
        response: action.response
    }
}

export function sellCarActionFailure(action) {
    return {
        type: SELL_CAR_ACTION_FAIL,
        response: action.response
    }
}