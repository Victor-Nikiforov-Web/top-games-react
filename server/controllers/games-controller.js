const express = require('express');
const router = express.Router();
const gamesLogic = require('../business-logic/games-logic');

router.get('/', async (req, res) => {
    try {
        const games = await gamesLogic.getAllGames();
        res.json(games);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/top-games', async (req, res) => {
    try {
        const topGames = await gamesLogic.getTopGames();
        res.json(topGames);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/get-one-game/:_id', async (req, res) => {
    try {
        const _id = req.params._id;
        const game = await gamesLogic.getOneGame(_id);
        res.json(game);
    } catch (error) {
        res.status(500).send(error.message);

    }
});

router.get('/search-game/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const games = await gamesLogic.getAllGames();
        const game = games.filter(game => game.name.toLowerCase().includes(name.toLowerCase()));
        res.json(game);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;