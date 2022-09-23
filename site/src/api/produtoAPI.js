
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000"
})
export async function enviarImagemProduto(id, imagem){
    const formData = new FormData();
    formData.append('foto', imagem);

    const resposta = await api.put(`/roupa/${id}/foto`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
    return resposta.status;
}

export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}