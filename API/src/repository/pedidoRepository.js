import { con } from "./connection.js"


export async function inserirPedido(novoPedido) {
    const comando = `
        INSERT INTO tb_pedido (
            id_usuario,
            id_cupom,
            dt_pedido,
            cod_nota_fiscal,
            tp_frete,
            vl_frete,
            ds_status,
            tp_pagamento
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `
    const [info] = await con.query(comando, [
        novoPedido.idUsuario,
        novoPedido.idCupom,
        novoPedido.data,
        novoPedido.notaFiscal,
        novoPedido.tipoFrete,
        novoPedido.valorFrete,
        novoPedido.status,
        novoPedido.tipoPagamento
    ]);
    return info.insertId;
}

export async function inserirPagamento(idPedido, novoPagamento) {
    const comando = `
        INSERT INTO tb_pagamento_cartao (
            id_pedido,
            nm_cartao,
            nr_cartao,
            dt_vencimento,
            cod_seguranca,
            nr_parcelas,
            ds_forma_pagmento
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
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

export async function inserirPedidoItem(idPedido, idProduto, qtd, preco) {
    const comando = `
        INSERT INTO tb_pedido_item (
            id_pedido,
            id_produto,
            qtd_itens,
            vl_produto
        )
        VALUES (?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [idPedido, idProduto, qtd, preco]);
    return info.affectedRows;
}