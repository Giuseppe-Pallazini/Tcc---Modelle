import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function filtroTodosGucci(){
    const resposta = await api.get('/api/Todos/marca/gucci');
    return resposta.data;
}

export async function filtroTodosBalenciaga(){
    const resposta = await api.get('/api/Todos/marca/balenciaga');
    return resposta.data;
}

export async function filtroTodosDolceGabanna(){
    const resposta = await api.get('/api/Todos/marca/dolcegabanna');
    return resposta.data;
}

export async function filtroTodosBurberry(){
    const resposta = await api.get('/api/Todos/marca/burberry');
    return resposta.data;
}

export async function filtroTodosMorley(){
    const resposta = await api.get('/api/Todos/marca/morley');
    return resposta.data;
}

export async function filtroTodosKenzo(){
    const resposta = await api.get('/api/Todos/marca/kenzo');
    return resposta.data;
}

export async function filtroTodosModelle(){
    const resposta = await api.get('/api/Todos/marca/modelle');
    return resposta.data;
}

export async function filtroTodosZegna(){
    const resposta = await api.get('/api/Todos/marca/zegna');
    return resposta.data;
}

export async function filtroTodosLouisVuitton(){
    const resposta = await api.get('/api/Todos/marca/louisvuitton');
    return resposta.data;
}

export async function filtroTodosVersace(){
    const resposta = await api.get('/api/Todos/marca/versace');
    return resposta.data;
}

export async function filtroTodosPrada(){
    const resposta = await api.get('/api/Todos/marca/prada');
    return resposta.data;
}

export async function filtroTodosPP(){
    const resposta = await api.get('/api/Todos/tamanho/pp');
    return resposta.data;
}

export async function filtroTodosP(){
    const resposta = await api.get('/api/Todos/tamanho/p');
    return resposta.data;
}

export async function filtroTodosM(){
    const resposta = await api.get('/api/Todos/tamanho/m');
    return resposta.data;
}

export async function filtroTodosG(){
    const resposta = await api.get('/api/Todos/tamanho/g');
    return resposta.data;
}

export async function filtroTodosGG(){
    const resposta = await api.get('/api/Todos/tamanho/gg');
    return resposta.data;
}

export async function filtroTodosCamisa(){
    const resposta = await api.get('/api/Todos/modelo/camisa');
    return resposta.data;
}

export async function filtroTodosCalca(){
    const resposta = await api.get('/api/Todos/modelo/calca');
    return resposta.data;
}

export async function filtroTodosMoletom(){
    const resposta = await api.get('/api/Todos/modelo/moletom');
    return resposta.data;
}

export async function filtroTodosCasaco(){
    const resposta = await api.get('/api/Todos/modelo/casaco');
    return resposta.data;
}

export async function filtroTodosBermuda(){
    const resposta = await api.get('/api/Todos/modelo/bermuda');
    return resposta.data;
}

export async function filtroTodosPolo(){
    const resposta = await api.get('/api/Todos/modelo/polo');
    return resposta.data;
}

export async function filtroTodosSueter(){
    const resposta = await api.get('/api/Todos/modelo/sueter');
    return resposta.data;
}

export async function filtroTodosBlusa(){
    const resposta = await api.get('/api/Todos/modelo/blusa');
    return resposta.data;
}