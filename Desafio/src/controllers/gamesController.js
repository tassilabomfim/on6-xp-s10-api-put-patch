const games = require('../models/games.json')

//put alterar o dado de name

const updateName = (request, response) => {
    const gameAtualizado = request.body
    const id = parseInt(request.params.id)

    const gameId = games.map(game => game.id)
    const atualizadaId = gameId.indexOf(id)

    const gameAtualizadaComId = {id, ...gameAtualizado}

    games.splice(atualizadaId, 1, gameAtualizadaComId)

    response.status(200).send(games.find(game => game.id === id))

    console.log(games)
}

//patch alterar o dado de name

const updateNamePatch = (request, response) => {
    const gameAtualizando = request.body
    const id = parseInt(request.params.id)

    const gameParaAtualizar = games.find(game => game.id == id)

    for (key in gameAtualizando) {
        gameParaAtualizar[key] = gameAtualizando[key]
    }
    
    response.status(200).send(games)

    console.log(games)

}

//put alterar o dado de company

const updateCompany = (request, response) => {
    const gameAtualizado = request.body
    const id = parseInt(request.params.id)

    const gameId = games.map(game => game.id)
    const atualizadaId = gameId.indexOf(id)

    const gameAtualizadaComId = {id, ...gameAtualizado}

    games.splice(atualizadaId, 1, gameAtualizadaComId)

    response.status(200).send(games.find(game => game.id === id))

    console.log(games)
}

const updateCompanyPatch = (request, response) => {
    const gameAtualizando = request.body
    const id = parseInt(request.params.id)

    const gameParaAtualizar = games.find(game => game.id == id)

    for (key in gameAtualizando) {
        gameParaAtualizar[key] = gameAtualizando[key]
    }
    
    response.status(200).send(games)

    console.log(games)

}




module.exports = {
    updateName,
    updateNamePatch,
    updateCompany,
    updateCompanyPatch
}