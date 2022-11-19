import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function listaDeDesejo(){
    const resposta = await api.post('/favorito/usuario/avaliacao');
    return resposta.data;

}