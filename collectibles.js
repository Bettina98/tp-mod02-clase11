const fs = require('fs');

function importar(marca) {
    switch (marca.toLowerCase()) {
        case "hot toys":
            return JSON.parse(fs.readFileSync(`./datos/figuras1.json`));
        case "bandai":
            return JSON.parse(fs.readFileSync(`./datos/figuras2.json`));
        case "star wars":
            return JSON.parse(fs.readFileSync(`./datos/figuras3.json`));
        default:
            break;
    }
}

//console.log(importar("Hot Toys"));
module.exports = importar;