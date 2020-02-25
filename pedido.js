import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import ElementoPedido from "./elemento-pedido.js"
import Cliente from "./cliente.js"
import Direccion from "./direccion.js"
import Producto from "./producto.js"
import Precio from "./precio.js"
export default class Pedido{
    /**
     * 
     * @param {date} fecha 
     * @param {number} hora 
     * @param {string} cliente 
     * @param {string} elementosPedidos 
     */
    constructor(fecha, hora, cliente, elementosPedidos){
        this.fecha = new Fecha(fecha)
        this.hora = hora
        this.cliente = cliente
        this.elementosPedidos = []
    }
    getResumen(){
        return (`${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getNumeroProductos()} productos - total: ${this.getCostoTotal()}`)
    }
    getNumeroElementos(){
       return (`${this.elementosPedidos.length}`)
    }
    getNumeroProductos(){
        let productos = 0
        this.elementosPedidos.forEach((elementoP) =>{
            productos += elementoP.cantidad
        })
        return productos
    }
    getCostoTotal(){
        let costo = 0
        this.elementosPedidos.forEach((elementosP2) =>{
            costo += (elementosP2.cantidad * elementosP2.producto.precio.valor)
        })
        return (`${new Precio(costo).getPrecio()}`)
    }
    agregarElemento(elementosP2){
        return (`${this.elementosPedidos.push(elementosP2)}`)
    }
    listarElementos(){
        this.elementosPedidos.forEach((elemento, i) => {
            console.log(`${i}, ${elemento.getDescripcion()}`)
        })
    }
}
let prueba = new Pedido(new Date(), new Tiempo(new Date()), new Cliente("Juan") , 24)
console.log(prueba.getResumen())