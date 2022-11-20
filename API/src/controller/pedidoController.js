import { Router } from 'express'
import { buscarCupom } from '../repository/cupomRepository.js';
import { ListarTodosProdutosPorId } from '../repository/mostrarprodutorepository.js';
import { inserirPagamento, inserirPedido, inserirPedidoItem } from '../repository/pedidoRepository.js';
import { acharCupom, criarNotaFiscal, criarNovoPedido } from '../services/novoProdutoService.js';
import { validarPagamento } from '../services/pagamentoCartaoValidacao.js';
import { validarnovoPedido } from '../services/pagamentoValidacao.js';
const server = Router();

server.post('/api/pedido/:idUsuario/', async (req, resp) => {
    try{
        const { idUsuario } = req.params;
        const info = req.body;

        const idCupom = await acharCupom(info.cupom);

        const novoPedido = criarNovoPedido(idUsuario, idCupom, info);
        console.log(novoPedido)
        await validarnovoPedido(novoPedido);
        await validarPagamento(info.cartao)
        const idPedidoCriado = await inserirPedido(novoPedido);
        await inserirPagamento(idPedidoCriado, info.cartao);
        console.log(inserirPagamento)
        

        for (let item of info.produtos) {
            const prod = await ListarTodosProdutosPorId(item.id);
            const idPedidoItemCriado = await inserirPedidoItem(idPedidoCriado, item.id, item.qtd, item.tam, prod.preco);
        }

        resp.status(204).send();
        
    }
    catch (err) {
        console.log(err)
        resp.status(400).send({
            erro: err.message
        })
    }

})

export default server;