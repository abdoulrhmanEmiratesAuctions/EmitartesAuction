import { all,takeLatest } from 'redux-saga/effects';
import { SELL_CAR_ACTION } from '../redux/actions/sell.action';
import { sellCarSaga } from './sell.saga';
import { getBrandsSaga } from "./brand.saga";
import { GET_BRANDS } from '../redux/actions/brand.action';
export default function* rootSaga() {
    yield all([
        yield takeLatest(SELL_CAR_ACTION, sellCarSaga),
        yield takeLatest(GET_BRANDS, getBrandsSaga),

    ]);
}