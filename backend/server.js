const express = require('express')

const cors = require('cors')

const conexao = require('./database/conexao')

const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req,res)=>{

    res.send('Servidor funcionando')

})

teste

app.listen(3000, ()=>{

    console.log('Servidor ligado')

})