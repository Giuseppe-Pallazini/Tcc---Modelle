export async function validarCupom(cupom) {
    if (cupom.codCupom == undefined || cupom.codCupom == '') {
        throw new Error('Codigo do Cupom é obrigatório!');
    }
    else if (cupom.valor == undefined || cupom.valor == '') {
        throw new Error('Valor do cupom é obrigatório!');
    }
    else if (cupom.quantidade == undefined || cupom.quantidade == '' || cupom.quantidade <= 0) {
        throw new Error('Quantidade de cupons é obrigatório!');
    }
}