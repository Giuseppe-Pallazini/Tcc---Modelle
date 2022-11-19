import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function listaDeDesejo(){
    const resposta = await api.post('/favorito/usuario/avaliacao');
    return resposta.data;
}

export async function deletarFavorito(idUser, idProd){
    const resposta = await api.delete('/favorito/usuario/deletar/'+ idUser + '/' +idProd);
    return resposta.data;
}

export async function verificarProdutoFavoritado(idUsuario, idProduto){
    const resposta = await api.get('/verificar/favoritado/' + idUsuario + '/' + idProduto);
    return resposta.data;
}