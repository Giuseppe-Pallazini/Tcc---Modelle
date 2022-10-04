
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function inserirProduto(nome, complementoProduto, preco, composicao, detalhes, juros, parcela, cor, tamanho, categoria) {
    const r = await api.post('/admin/produto', 
    { 
        nome: nome,
        complementoProduto: complementoProduto,
        preco: preco,
        composicao: composicao,
        detalhes: detalhes,
        juros: juros,
        parcela: parcela,
        cor: cor,
        tamanho: tamanho,
        categoria: categoria
    }
    );
    return r.data;
}

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

export async function listarTodos(){
    const resposta = await api.get('/admin/produto')
    return resposta.data;

}

export async function buscarPorNome(nome){
    const resposta = await api.get(`/produto/busca?nome=${nome}`)
    return resposta.data;
}

export async function removerProduto(id){
    const resposta = await api.delete('/admin/produto/' + id)
    return resposta.data;
}