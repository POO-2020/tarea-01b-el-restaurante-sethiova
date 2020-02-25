export default class Fecha {

    constructor(fecha){
        this.fecha = fecha
        this.fechaActual = new Date
        this.mes = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre")
        this.dia = new Array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo")
    }
    getAños(){
        return(`${this.fechaActual.getFullYear() - this.fecha.getFullYear()} años`)

    }
    getMeses(){
        let mes = (this.fechaActual.getFullYear() - this.fecha.getFullYear()) * 12 + (this.fechaActual.getMonth())
        return (`${mes} meses`)
    }
    getSemanas(){
        let semana = (this.fechaActual.getFullYear() - this.fecha.getFullYear()) * 52 + ((this.fechaActual.getMonth()) * 4 + (Math.round((this.fechaActual.getDate()) / 7 )))
        return(`${semana} semanas`)

    }
    getDias(){
        let dia = (this.fechaActual.getFullYear() - this.fecha.getFullYear()) * 365 + ((this.fechaActual.getMonth()) * 30) 
        return(`${dia} dias`)
    }
    getFecha(){
        let mes = this.mes[this.fecha.getMonth()]
        return(`${this.fecha.getDate()}/${mes}/${this.fecha.getFullYear()}`)
    }
    getDiaFecha(){
        let dia = this.dia[this.fecha.getDay()-1]
        return(`Es el dia ${dia}`)
    }
}
