import Producto from "./producto.js"
export default class ElementoPedido{
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
let prueba = new ElementoPedido(new Producto("Pizza Hawaina Mediana", 400), 2)
console.log(prueba.getDescripcion())