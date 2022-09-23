import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function ListarModelo() {
    const r = await api.get('/api/modelo');
    return r.data;
}