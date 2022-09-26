
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function inserirProduto(idTamanho, idModelo, nome, complementoProduto, preco, composicao, detalhes, juros, parcela, cor, idMarca, idCategoria) {
    const r = await api.post('/admin/produto', 
    { 
        idTamanho: idTamanho,
        idModelo: idModelo,
        nome: nome,
        complementoProduto: complementoProduto,
        preco: preco,
        composicao: composicao,
        detalhes: detalhes,
        juros: juros,
        parcela: parcela,
        cor: cor,
        idMarca: idMarca,
        idCategoria: idCategoria    
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