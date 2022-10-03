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


export async function CadastroUsuario (nome, dtNascimento, numero, email, senha){
    const r = await api.post('/usuario/cadastro',
    {
        nome: nome,
        dtNascimento: dtNascimento,
        numero: numero,
        email: email,
        senha: senha
    });

    return r.data;

}

//http://localhost:5000/usuario/login