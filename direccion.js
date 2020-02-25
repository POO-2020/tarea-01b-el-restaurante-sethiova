export default class Direccion{
    constructor(calle, numeroExt, numeroInt = "", colonia, codigoPostal, ciudad, municipio){
        this.calle = calle
        this.numeroExt = numeroExt
        this.numeroInt = numeroInt
        this.colonia = colonia
        this.codigoPostal = codigoPostal
        this.ciudad = ciudad
        this.municipio = municipio
        }
    getFormatoCorto(){

    }
    getFormatoExtendido(){
        
    }
}
