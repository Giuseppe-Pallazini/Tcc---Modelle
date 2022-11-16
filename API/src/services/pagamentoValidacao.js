
export async function validarnovoPedido(novoPedido) {
    if (novoPedido.endereco == undefined || novoPedido.endereco == '') {
        throw new Error('Endereço é obrigatório!');
    }
    else if (isNaN(novoPedido.numerocasa) || novoPedido.numerocasa <= 0) {
        throw new Error('Numero da residência é obrigatório!');
    }
    else if (novoPedido.cidade == undefined || novoPedido.cidade == '') {
        throw new Error('Cidade é obrigatório!');
    }
    else if (novoPedido.cep == undefined || novoPedido.cep == '' || novoPedido.cep <= 0) {
        throw new Error('CEP é obrigatório!');
    }
    else if (novoPedido.complemento == undefined || novoPedido.complemento == '') {
        throw new Error('Complemento da casa é obrigatório!');
    }
}