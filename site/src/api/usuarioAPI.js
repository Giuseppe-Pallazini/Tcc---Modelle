import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:5000"
})

export async function login (email, senha){
    const r = await api.post('/usuario/login',
    {
        email:email,
        senha:senha
    });

    return r.data;

}


export async function CadastroUsuario (nome, dtNascimento, telefone, email, senha){
    const r = await api.post('/usuario/cadastro',
    {
        nome: nome,
        dtNascimento: dtNascimento,
        telefone: telefone,
        email: email,
        senha: senha
    });

    return r.data; 
}

export async function listarUsuarios(){
    const resposta = await api.get('/admin/listarUsuarios');
    return resposta.data;
}

export async function  removerUsuario(id){
    const resposta = await api.delete(`/admin/deletarUsuario/${id}`);
    return resposta.data
}

export async function buscarUsuario(nome){
    const resposta = await api.get(`/admin/buscarUsuario?nome=${nome}`)
    return resposta.data;
}

//http://localhost:5000/usuario/login
