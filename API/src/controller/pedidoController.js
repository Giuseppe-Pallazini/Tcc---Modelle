import { Router } from 'express'
import { buscarCupom } from '../repository/cupomRepository';
import { inserirPagamento, inserirPedido } from '../repository/pedidoRepository';
import { acharCupom, criarNotaFiscal, criarNovoPedido } from '../services/novoProdutoService';
const server = Router();

server.post('api/pedido/:idUsuario/', async (req, resp) => {
    try{
        const { idUsuario } = req.params;
        const info = req.body;

        const idCupom = await acharCupom(info.cupom);

        const novoPedido = criarNovoPedido(idUsuario, idCupom, info);

        const idPedidoCriado = await inserirPedido(novoPedido);
        const idPagCriado = await inserirPagamento(idPedidoCriado, info.cartao);

        for (let item of info.produtos) {
            const prod = await buscarProdu
             
        }




    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})