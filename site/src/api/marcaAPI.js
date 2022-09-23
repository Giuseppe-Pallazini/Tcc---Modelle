import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function ListarMarca() {
    const r = await api.get('/api/marca');
    return r.data;
}