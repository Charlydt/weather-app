const request = require("request");

const geoCode = (city, callback) => {
  const a = "Not encountered";
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiY2hhcmx5ZHQiLCJhIjoiY2s4bzZlNWd2MHhraDNobzg0dTRyc2l0ZiJ9.NR9JaZEgerQX0sk9naEJvw`;
  request({ url, json: true }, (error, { body }) => {
    if (body.features.length === 0) {
      callback({ error: "Not encountered" });
    } else {
      callback(error, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
      });
    }
  });
};

module.exports = geoCode;
