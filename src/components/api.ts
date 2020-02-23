import axios from 'axios';
import { Donor } from '../../server/src/types';

const createUser = async (donor: Donor) => {
    const data = await axios.post('localhost:3001/create/user', donor);
    console.log(data);
    return data;
}

const isUserPasswordValid = async (email: string, password: string) => {
    const data = await axios.post('localhost:3001/create/user', { email, password });
    console.log(data);
    return data;
}
