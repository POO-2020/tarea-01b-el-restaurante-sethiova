export default class Tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodo 
     */
    constructor(fecha){
        this.fecha = fecha
        this.hora = this.fecha.getHours()
        this.minutos = this.fecha.getMinutes()
        this.periodo = new Array("Am","Pm")
    }
    getFormato12(){
        if (this.hora >= 12){
            let hora = (`${this.hora - 12}:${this.minutos} ${this.periodo[1]}`)
            return(`${hora}`)
        }
        else{
            let hora = (`${this.hora}:${this.minutos} ${this.periodo[0]}`)
            return(`${hora}`)
        }
      
    }
    getFormato24(){
        let hora = (`${this.hora}:${this.minutos}`)
        return(`${hora}`)
    }
}
