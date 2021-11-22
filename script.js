//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}

//Inicializo arrays para las categorias de los productos
const remeras = [];
const buzos = [];
const pantalones = [];

//Cargo el stock de productos segun su categoria
//REMERAS
remeras.push(new Producto("Remera Cobra", 1, 1500, "Negro", 30));
remeras.push(new Producto("Musculosa Good Times", 2, 1400, "Blanco", 10));
remeras.push(new Producto("Remera Aeternum", 3, 1000, "Blanco", 20));
remeras.push(new Producto("Remera Good Times", 4, 2500, "Blanco", 15));
//BUZOS
buzos.push(new Producto("Buzo Scream", 5, 4000, "Negro", 20));
buzos.push(new Producto("Buzo Negro Oversized", 6, 4500, "Negro", 40));
buzos.push(new Producto("Buzo Batik", 7, 3800, "Negro", 40));
//PANTALONES
pantalones.push(new Producto("Short Notte", 9, 1000, "Negro", 10));
pantalones.push(new Producto("Jogging NC", 8, 2500, "Negro", 10));

//Funcion que ordena los productos por precio de mayor a menor
function OrdenarPorPrecio (a,b) {
    return (b.precio - a.precio);
}

//Salidas de consola ordenando por precio
console.log(remeras.sort(OrdenarPorPrecio));
console.log(buzos.sort(OrdenarPorPrecio));
console.log(pantalones.sort(OrdenarPorPrecio));