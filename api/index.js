const { addonBuilder } = require("stremio-addon-sdk");

const manifest = {
  id: "community.vidfast",
  version: "1.0.0",
  name: "VidFast Streaming",
  description: "Stream movies and shows from VidFast using IMDB or TMDB IDs",
  resources: ["stream"],
  types: ["movie", "series"],
  idPrefixes: ["tt", ""],
  catalogs: [],
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(({ id }) => {
  if (id.includes(":")) {
    const parts = id.split(":");
    const showId = parts[0];
    const season = parts[1];
    const episode = parts[2];
    const url = `https://vidfast.pro/tv/${showId}/${season}/${episode}?autoPlay=true`;

    return Promise.resolve({
      streams: [{ title: `S${season}E${episode} - Watch on VidFast`, url }],
    });
  }

  const movieUrl = `https://vidfast.pro/movie/${id}?autoPlay=true`;
  return Promise.resolve({
    streams: [{ title: "Watch on VidFast", url: movieUrl }],
  });
});

const addonInterface = builder.getInterface();

// ✅ كود Vercel
module.exports = async (req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  addonInterface.middleware(req, res, () => {
    res.statusCode = 404;
    res.end("Not Found");
  });
};
