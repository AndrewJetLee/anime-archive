const axios = require("axios");

module.exports = {
    getTrending: async (req, res) => {
        try {
            const popularManga = await axios.get('https://kitsu.io/api/edge/trending/manga');
            res.status(200).json(popularManga.data.data);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}