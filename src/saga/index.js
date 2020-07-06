import { all,takeLatest } from 'redux-saga/effects';
import { SELL_CAR_ACTION } from '../redux/actions/sell.action';
import { sellCarSaga } from './sell.saga';

export default function* rootSaga() {
    yield all([
        yield takeLatest(SELL_CAR_ACTION, sellCarSaga),
    ]);
}