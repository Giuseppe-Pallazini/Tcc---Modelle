import {login, login2} from '../repository/loginRepository.js'

import { Router } from 'express'
const server = Router();


server.post('/usuario/login', async (req,resp) => {
    try {
        const {email , senha } = req.body

        const resposta = await login2(email, senha);

        if(!resposta) {
            throw new Error ('Credenciais Inválidas')
        }
        resp.send({
            id: resposta.id,
            nome: resposta.nome
        })

    } catch (err) {
        resp.status(401).send({
            erro: err.message
                
        })}
})

export default server;