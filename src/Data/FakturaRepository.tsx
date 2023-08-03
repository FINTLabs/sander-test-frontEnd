import axios from 'axios';
import {IFakturaItem, IFakturaPage} from './types';
import * as url from "url";

const getPage = () => {

    let url = `/okonomi/faktura/fakturautsteder`;

    return axios.get<IFakturaPage>(url);

}

const FakturaRepository = {
    getAllFaktura: getPage,
};

export default FakturaRepository;