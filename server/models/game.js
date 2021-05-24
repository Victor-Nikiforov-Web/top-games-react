const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    description:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 80
    },
    genre:[],
    releaseDate:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    systemRequirements:[{},{}],
    screenshots:[],
    imgUrl:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 200
    },
    downloadLink:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 200
    },
    topGame:Boolean
});


const Game = mongoose.model("Game", GameSchema, "games");

module.exports = Game;