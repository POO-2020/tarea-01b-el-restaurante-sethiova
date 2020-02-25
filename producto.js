import Precio from "./precio.js"
export default class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = new Precio(precio)
    }
    getDescripcion(){
        return (`${this.nombre} ${this.precio.getPrecio()}`)
    }

}
let prueba = new Producto("Pizza con peperoni Mediana", 139)
console.log(prueba.getDescripcion())