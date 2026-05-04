console.log("Servidor funcionando");
require('dotenv').config();
const http = require('http');

function requestController(req, res) {
    console.log("Bienvenidos al curso");
}

const server = http.createServer(requestController);

const port = process.env.PORT;

server.listen(port, () => {
    console.log("Aplicacion corriendo en: " + PORT);
});
