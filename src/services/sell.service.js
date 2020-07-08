import { base } from "./base.service";
import axios from 'axios'
export const SellService = {
    sellCar: (data) => {
        const url = base.url + base.sellCar;
        const headers = { 'Content-Type': 'application/json' };
        return axios.post(url, data,  {headers: headers});
    },
    getBrands : () => {
        const url = base.url + base.getBrands;
        const headers = { 'Content-Type': 'application/json' };
        return axios.get(url,  {headers: headers});
    }
}