import randomstring from 'randomstring'

import { buscarCupom } from '../repository/cupomRepository.js';

export async function acharCupom(cod) {

    let idCupom = null;

    const cupom = await buscarCupom(cod);
    if (cupom) {
        if (cupom.disponivel > 0) {
            idCupom = cupom.id;
        }

    }

    return idCupom;
}

export function criarNotaFiscal() {
    return randomstring.generate(11);
}

export function lerValorFrete(frete) {
    if (frete == 'Normal')
        return 10.0;
    else
        return 25.0;

}

export function criarNovoPedido(idUsuario, idCupom, info) {
    let agora = new Date();
    let valorFrete = lerValorFrete(info.frete);
    let notaFiscal = criarNotaFiscal();


    return {
        idUsuario: idUsuario,
        idCupom: idCupom,
        data: agora,
        notaFiscal: notaFiscal,
        tipoFrete: info.frete,
        valorFrete: valorFrete,
        status: 'Confirmando Pagamento',
        tipoPagamento: 'Cartão',
        endereco: info.endereco,
        numero: info.numero,
        cidade: info.cidade,
        cep: info.cep,
        complemento: info.complemento

    }
}