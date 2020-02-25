export default class Precio{
    /**
     * 
     * @param {number} valor 
     */
    constructor(valor){
        this.valor = valor
    }
    getPrecio(){
        if (this.valor % 1 == 0){
            return (`$${this.valor}.00`)
        }
        else{
            return (`$${this.valor}`)
        }   
    }
}
let test = new Precio(359)
console.log(`${test.getPrecio()}`)