import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function ListarTamanho() {
    const r = await api.get('/api/tamanho');
    return r.data;
}

export async function ListarTamanhoPorId(id) {
    const r = await api.get(`/api/tamanho/${id}`);
    return r.data
}