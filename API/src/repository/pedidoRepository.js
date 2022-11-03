import { con } from "./connection.js"


export async function inserirPedido(novoPedido) {
    const comando = `
        INSERT INTO tb_pedido (

        )

    `
}

export async function inserirPagamento(idPedido, novoPagamento) {
    const comando = `
        INSERT INTO tb_pagamento_cartao (

        )
    
    `

    const [info] = await con.query(comando, [
        idPedido,
        novoPagamento.nomeCartao,
        novoPagamento.numeroCartao,
        novoPagamento.vencimento,
        novoPagamento.codSeguranca,
        novoPagamento.parcelas,
        nomePagamento.formaPagamento
    ]);
    return info.affectedRows;
}