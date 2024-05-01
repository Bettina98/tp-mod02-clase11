const importar = require('./collectibles');

const hotToys = importar("Hot Toys");
const bandai = importar("Bandai");
const starWars = importar("Star Wars");

const unifiedCollectibles = [
    ...hotToys,
    ...bandai,
    ...starWars
]

const collectibles = {
    figuras : unifiedCollectibles,
    listFigures : function(array = this.figuras) {
        array.forEach(({marca, nombre, precio, stock}) => {
        console.log(`
        -----------------------------
        Marca : ${marca}
        Nombre : ${nombre}
        Precio : ${precio}
        Stock : ${stock}
        ----------------------------
        `)
    })
    },
    figuresByBrand : function (marca) {
        const figurasPorMarca = this.figuras.filter(figura => figura.marca === marca)
        this.listFigures(figurasPorMarca)
    }
    
}
//collectibles.figuresByBrand("Star Wars");

module.exports = collectibles;

