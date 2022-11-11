import { Router } from 'express'
import { buscarCupom } from '../repository/cupomRepository.js';
import { ListarTodosProdutosPorId } from '../repository/mostrarprodutorepository.js';
import { inserirPagamento, inserirPedido, inserirPedidoItem } from '../repository/pedidoRepository.js';
import { acharCupom, criarNotaFiscal, criarNovoPedido } from '../services/novoProdutoService.js';
const server = Router();

server.post('/api/pedido/:idUsuario/', async (req, resp) => {
    try{
        const { idUsuario } = req.params;
        const info = req.body;

        const idCupom = await acharCupom(info.cupom);

        const novoPedido = criarNovoPedido(idUsuario, idCupom, info);

        const idPedidoCriado = await inserirPedido(novoPedido);
        console.log(idPedidoCriado)
        const idPagCriado = await inserirPagamento(idPedidoCriado, info.cartao);

        for (let item of info.produtos) {
            const prod = await ListarTodosProdutosPorId(item.id);
            const idPedidoItemCriado = await inserirPedidoItem(idPedidoCriado, prod.id, item.qtd, prod.preco);
        }

        resp.status(204).send();
        
    }
    catch (err) {
        //console.log(err)
        resp.status(400).send({
            erro: err.message
        })
    }

})

export default server;