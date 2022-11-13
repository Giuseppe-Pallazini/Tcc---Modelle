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

//FILTRAR PRO TAMANHO

export async function filtroTamanhoPP(){
    const resposta = await api.get('/api/filtro/tamanho/pp');
    return resposta.data;
}

export async function filtroTamanhoP(){
    const resposta = await api.get('/api/filtro/tamanho/p');
    return resposta.data;
}

export async function filtroTamanhoM(){
    const resposta = await api.get('/api/filtro/tamanho/m');
    return resposta.data;
}

export async function filtroTamanhoG(){
    const resposta = await api.get('/api/filtro/tamanho/g');
    return resposta.data;
}

export async function filtroTamanhoGG(){
    const resposta = await api.get('/api/filtro/tamanho/gg');
    return resposta.data;
}

//FILTRAR POR MODELOS

export async function filtroModeloCamisa(){
    const resposta = await api.get('/api/filtro/modelo/camisa');
    return resposta.data;
}

export async function filtroModeloCalca(){
    const resposta = await api.get('/api/filtro/modelo/calca');
    return resposta.data;
}

export async function filtroModeloMoletom(){
    const resposta = await api.get('/api/filtro/modelo/moletom');
    return resposta.data;
}

export async function filtroModeloCasaco(){
    const resposta = await api.get('/api/filtro/modelo/casaco');
    return resposta.data;
}

export async function filtroModeloBermuda(){
    const resposta = await api.get('/api/filtro/modelo/bermuda');
    return resposta.data;
}

export async function filtroModeloPolo(){
    const resposta = await api.get('/api/filtro/modelo/polo');
    return resposta.data;
}

export async function filtroModeloSueter(){
    const resposta = await api.get('/api/filtro/modelo/sueter');
    return resposta.data;
}

export async function filtroModeloBlusa(){
    const resposta = await api.get('/api/filtro/modelo/blusa');
    return resposta.data;
}