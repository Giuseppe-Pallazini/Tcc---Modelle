import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function filtroFemininoGucci(){
    const resposta = await api.get('/api/feminino/marca/gucci');
    return resposta.data;
}

export async function filtroFemininoBalenciaga(){
    const resposta = await api.get('/api/feminino/marca/balenciaga');
    return resposta.data;
}

export async function filtroFemininoDolceGabanna(){
    const resposta = await api.get('/api/feminino/marca/dolcegabanna');
    return resposta.data;
}

export async function filtroFemininoBurberry(){
    const resposta = await api.get('/api/feminino/marca/burberry');
    return resposta.data;
}

export async function filtroFemininoMorley(){
    const resposta = await api.get('/api/feminino/marca/morley');
    return resposta.data;
}

export async function filtroFemininoKenzo(){
    const resposta = await api.get('/api/feminino/marca/kenzo');
    return resposta.data;
}

export async function filtroFemininoModelle(){
    const resposta = await api.get('/api/feminino/marca/modelle');
    return resposta.data;
}

export async function filtroFemininoZegna(){
    const resposta = await api.get('/api/feminino/marca/zegna');
    return resposta.data;
}

export async function filtroFemininoLouisVuitton(){
    const resposta = await api.get('/api/feminino/marca/louisvuitton');
    return resposta.data;
}

export async function filtroFemininoVersace(){
    const resposta = await api.get('/api/feminino/marca/versace');
    return resposta.data;
}

export async function filtroFemininoPrada(){
    const resposta = await api.get('/api/feminino/marca/prada');
    return resposta.data;
}

export async function filtroFemininoPP(){
    const resposta = await api.get('/api/feminino/tamanho/pp');
    return resposta.data;
}

export async function filtroFemininoP(){
    const resposta = await api.get('/api/feminino/tamanho/p');
    return resposta.data;
}

export async function filtroFemininoM(){
    const resposta = await api.get('/api/feminino/tamanho/m');
    return resposta.data;
}

export async function filtroFemininoG(){
    const resposta = await api.get('/api/feminino/tamanho/g');
    return resposta.data;
}

export async function filtroFemininoGG(){
    const resposta = await api.get('/api/feminino/tamanho/gg');
    return resposta.data;
}

export async function filtroFemininoCamisa(){
    const resposta = await api.get('/api/feminino/modelo/camisa');
    return resposta.data;
}

export async function filtroFemininoCalca(){
    const resposta = await api.get('/api/feminino/modelo/calca');
    return resposta.data;
}

export async function filtroFemininoMoletom(){
    const resposta = await api.get('/api/feminino/modelo/moletom');
    return resposta.data;
}

export async function filtroFemininoCasaco(){
    const resposta = await api.get('/api/feminino/modelo/casaco');
    return resposta.data;
}

export async function filtroFemininoBermuda(){
    const resposta = await api.get('/api/feminino/modelo/bermuda');
    return resposta.data;
}

export async function filtroFemininoPolo(){
    const resposta = await api.get('/api/feminino/modelo/polo');
    return resposta.data;
}

export async function filtroFemininoSueter(){
    const resposta = await api.get('/api/feminino/modelo/sueter');
    return resposta.data;
}

export async function filtroFemininoBlusa(){
    const resposta = await api.get('/api/feminino/modelo/blusa');
    return resposta.data;
}