import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function inserirProduto(idTamanho, idModelo, nome, complementoProduto, preco, composicao, detalhes, juros, parcela,disponivel, cor, idMarca, idCategoria) {
    const r = await api.post('/admin/produto', 
    {   
        idTamanho: idTamanho ,
        idModelo: idModelo ,
        nome: nome ,
        complementoProduto: complementoProduto , 
        preco: preco ,
        composicao: composicao,
        detalhes: detalhes ,
        juros: juros,
        parcela: parcela,
        disponivel: disponivel,
        cor: cor,
        idMarca: idMarca,
        idCategoria: idCategoria

    }
    );
    return r.data;
}

export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}

export async function listarTodos(){
    const resposta = await api.get('/admin/todasroupas')
    return resposta.data;

}

export async function buscarPorNome(nome){
    const resposta = await api.get(`/produto/busca?nome=${nome}`)
    return resposta.data;
}

export async function salvarImagem(id, imagem, imagem2, imagem3, imagem4){

    let form = new FormData();
    form.append('imagens', imagem)
    form.append('imagens', imagem2)
    form.append('imagens', imagem3)
    form.append('imagens', imagem4)

    const r = await api.put('/admin/produto/' + id, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    } );

    return r.data;
}

export async function removerProduto(id){
    const resposta = await api.delete('/admin/produto/' + id)
    return resposta.data;

}
