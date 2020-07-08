
import { put, call } from 'redux-saga/effects';
import { SellService } from '../services/sell.service';
import { getBrandActionSuccess, getBrandActionFailure } from '../redux/actions/brand.action';

export function* getBrandsSaga(action) {
    try {
        const response = yield call(SellService.getBrands);
        yield put(getBrandActionSuccess({ response: response.data }))
    } catch (error) {
        yield put(getBrandActionFailure({ response: error }))
    }
}

