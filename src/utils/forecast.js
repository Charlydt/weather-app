const request = require("request");

const foreCast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6c09e0da65732f90c3e32b2bf7a62996`;
  request({ url, json: true }, (error, { body }) => {
    callback(error, body.weather[0].description);
  });
};

module.exports = foreCast;
