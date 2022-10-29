import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function inserirProduto( nome, complementoProduto, preco, composicao, detalhes, juros, parcela,disponivel, cor, idMarca, idModelo, idCategoria, tamanhos
     ) {
    const r = await api.post('/admin/produto', 
    {
        nome,
        complementoProduto, 
        preco,
        composicao,
        detalhes,
        juros,
        parcela,
        disponivel,
        cor,
        idMarca,
        idModelo,
        idCategoria,
        tamanhos
    }
    );
    return r.data;
}


export async function alterarProduto(id, nome, complementoProduto, preco, composicao, detalhes, juros, parcela,disponivel, cor, idMarca, catSelecionadas, modSelecionadas, tamSelecionadas,
    ) {
   const r = await api.put('/admin/produto/' + id, 
   {
       nome: nome,
       complementoProduto: complementoProduto , 
       preco: preco ,
       composicao: composicao,
       detalhes: detalhes ,
       juros: juros,
       parcela: parcela,
       disponivel: disponivel,
       cor: cor,
       idMarca: idMarca,
       idCategoria: catSelecionadas,
       idModelo: modSelecionadas,
       tamanhos: tamSelecionadas,
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
    form.append('imagens', imagem);
    form.append('imagens', imagem2);
    form.append('imagens', imagem3);
    form.append('imagens', imagem4);

    const r = await api.put(`/admin/produto/${id}/imagem`, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return r.data;
}

export async function removerProduto(id){
    const resposta = await api.delete('/admin/produto/' + id)
    return resposta.data;

}


export async function buscarProdutoPorId(id){
    const resposta = await api.get('/admin/produto/' + id)
    return resposta.data;

}

export async function buscarProdutoPorIdUsuario(id){
    const resposta = await api.get('/api/produto/' + id)
    return resposta.data;

}

