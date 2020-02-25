import Direccion from "./direccion.js"
export default class Cliente{
    /**
     * 
     * @param {string} nombre 
     * @param {string} direccion 
     * @param {number} telefono 
     */
    constructor(nombre, direccion, telefono){
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
    }
    getPerfil(){
        return (`${this.nombre}, ${this.direccion.getFormatoCorto()}, ${this.telefono}`)
    }
}
let prueba = new Cliente("Fernando Cobian Ramos", new Direccion("De las lomas", 34), 3121345322)
console.log(prueba.getPerfil())