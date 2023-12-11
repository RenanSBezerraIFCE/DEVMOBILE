const express = require("express")
const server = express();

const api = require('./api.json')
const apiP = require('./products.json')



server.listen(5000, () => {
    console.log("API rodando na porta 5000")
})

server.get("/Users", (req, res
    ) => {
    return res.json(api)
})

server.get("/Products", (req, res
    ) => {
    return res.json(apiP)
})
