
export async function validarPagamento(novoPagamento) {
    if (novoPagamento.nome == undefined || novoPagamento.nome == '') {
        throw new Error('Nome do titular é obrigatório!');
    }
    else if (novoPagamento.numero == undefined || novoPagamento.numero == '') {
        throw new Error('Numero do cartão é obrigatório!');
    }
    else if (novoPagamento.codSeguranca == undefined || novoPagamento.codSeguranca == ''|| novoPagamento.codSeguranca <= 0) {
        throw new Error('CVV é obrigatório!');
    }
    else if (novoPagamento.vencimento == undefined || novoPagamento.vencimento == ''|| novoPagamento.vencimento <= 0) {
        throw new Error('Vencimento do cartão é obrigatório!');
    }
}