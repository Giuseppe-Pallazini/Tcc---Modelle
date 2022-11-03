import randomstring from 'randomstring'

import { buscarCupom } from '../repository/cupomRepository';

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

export function valorFrete(frete) {
    if (frete == 'Normal')
        return 10.0;
    else
        return 25.0;

}

export function criarNovoPedido(idUsuario, idCupom, info) {
    let agora = new Date();
    let valorFrete = valorFrete(info.frete);
    let notaFiscal = criarNotaFiscal();


    return {
        idUsuario: idUsuario,
        idEndereco: info.idEndereco,
        idCupom: idCupom,
        data: agora,
        notaFiscal: notaFiscal,
        tipoFrete: info.frete,
        valorFrete: valorFrete,
        status: 'Confirmando Pagamento',
        tipoPagamento: 'Cartão'

    }
}