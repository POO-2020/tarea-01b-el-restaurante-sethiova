import Producto from "./producto.js"
export default class ElementoProducto{
    /**
     * 
     * @param {string} producto 
     * @param {number} cantidad 
     */
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
    getDescripcion(){
        return (`${this.cantidad} x ${this.producto.getDescripcion()}`)
    }
}
let prueba = new ElementoProducto(new Producto("Pizza Hawaina Mediana", 400), 2)
console.log(prueba.getDescripcion())