const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

const app = require("./application")(ENV);
const server = require("http").Server(app);

const apiRequest = ()=> {
  fetch('http://localhost:8001/api/photos')
    .then(response => response.json())
    .then(photosData => {
      console.log(photosData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
