const express = require("express");
const { addonBuilder } = require("stremio-addon-sdk");

const app = express();

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
    const [showId, season, episode] = id.split(":");
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

app.use(builder.getInterface().middleware());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`VidFast addon running on port ${PORT}`);
});
