export default class Direccion{
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroExt 
     * @param {number} numeroInt 
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle, numeroExt, numeroInt, colonia, codigoPostal, ciudad, municipio){
        this.calle = calle
        this.numeroExt = numeroExt
        this.numeroInt = numeroInt
        this.colonia = colonia
        this.codigoPostal = codigoPostal
        this.ciudad = ciudad
        this.municipio = municipio
        }
    getFormatoCorto(){
        return (`calle ${this.calle}, numExt ${this.numeroExt}`)
    }
    getFormatoExtendido(){
        return (`calle ${this.calle}, numExt ${this.numeroExt}, numInt ${this.numeroInt}, colonia ${this.colonia}, codigo Postal ${this.codigoPostal}, ciudad ${this.ciudad}, municipio ${this.municipio}`)
    }
}
let prueba = new Direccion("Pinos", 34, 36,"Las Palmas", 345623, "Colima", "Colima")
console.log(prueba.getFormatoExtendido())