
import { put, call } from 'redux-saga/effects';
import { SellService } from '../services/sell.service';
import { sellCarActionSuccess, sellCarActionFailure } from '../redux/actions/sell.action';

export function* sellCarSaga(action) {
    try {
        const response = yield call(SellService.sellCar, action.data);
        yield put(sellCarActionSuccess({ response: response }))
    } catch (error) {
        yield put(sellCarActionFailure({ response: error }))
    }
}

