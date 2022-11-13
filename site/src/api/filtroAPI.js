import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export async function filtroMarcaGucci(){
    const resposta = await api.get('/api/filtro/marca/gucci');
    return resposta.data;
}

export async function filtroMarcaBalenciaga(){
    const resposta = await api.get('/api/filtro/marca/balenciaga');
    return resposta.data;
}

export async function filtroMarcaDolceGabanna(){
    const resposta = await api.get('/api/filtro/marca/dolcegabanna');
    return resposta.data;
}

export async function filtroMarcaBurberry(){
    const resposta = await api.get('/api/filtro/marca/burberry');
    return resposta.data;
}

export async function filtroMarcaMorley(){
    const resposta = await api.get('/api/filtro/marca/morley');
    return resposta.data;
}

export async function filtroMarcaKenzo(){
    const resposta = await api.get('/api/filtro/marca/kenzo');
    return resposta.data;
}

export async function filtroMarcaModelle(){
    const resposta = await api.get('/api/filtro/marca/modelle');
    return resposta.data;
}

export async function filtroMarcaZegna(){
    const resposta = await api.get('/api/filtro/marca/zegna');
    return resposta.data;
}

export async function filtroMarcaLouisVuitton(){
    const resposta = await api.get('/api/filtro/marca/louisvuitton');
    return resposta.data;
}

export async function filtroMarcaVersace(){
    const resposta = await api.get('/api/filtro/marca/versace');
    return resposta.data;
}

export async function filtroMarcaPrada(){
    const resposta = await api.get('/api/filtro/marca/prada');
    return resposta.data;
}