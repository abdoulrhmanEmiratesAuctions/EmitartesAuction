import { base } from "./base.service";
import axios from 'axios'
export const SellService = {
    sellCar: (data) => {
        const url = base.url + base.sellCar;
        const headers = { 'Content-Type': 'application/json' };
        return axios.post(url, data,  {headers: headers});
    }
}