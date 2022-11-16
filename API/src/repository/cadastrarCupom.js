import { con } from './connection.js'

export default async function CadastrarCupom(cupom){
    const comando =`
        insert into tb_cupom (cod_cupom, vl_cupom, qtd_disponivel)
                values(?, ?, ?) `

    const [resposta] = await con.query(comando, [
        cupom.codCupom,
        cupom.valor,
        cupom.quantidade]);
        return resposta.insertId
}

