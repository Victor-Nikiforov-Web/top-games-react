const Game = require('../models/game');

function getAllGames(){
    return Game.find({}).exec();
}

function getOneGame(id){
    return Game.findOne({_id : id}).exec();
}

function getTopGames(){
    return Game.find({topGame : true}).exec();
}

module.exports = {
    getAllGames,
    getTopGames,
    getOneGame
}