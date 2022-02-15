const axios = require("axios");

module.exports = {
    getTrending: async (req, res) => {
        try {
            const popularAnime = await axios.get('https://kitsu.io/api/edge/trending/anime');
            res.status(200).json(popularAnime.data.data);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}