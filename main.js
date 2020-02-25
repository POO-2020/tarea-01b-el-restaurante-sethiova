import Fecha from "./fecha"
import Tiempo from "./tiempo"
import Precio from "./precio"
import Direccion from "./direccion"
import Producto from "./producto"
import ElementoPedido from "./elemento-pedido"
import Cliente from "./cliente"
import Pedido from "./pedido"
import Restaurante from "./restaurante"
class Main {
    constructor() {
      this.pedido = new Pedido(
        new Fecha(new Date()),
        new Tiempo(new Date()),
        new Cliente('Edson',
          new Direccion('Paseo de Azaleaz', 24, 20, 'Juarez','Colima', 'Noruega'),
          3121135597))
  
      this.restau = new Restaurante('Gusteau', 911, 'Marte, luna sur')
    }
  
  
    testElementoPedido() {
      let x = new ElementoPedido(new Producto("Pizza", new Precio(2500.5)), 2)
      console.log(x.getDescripcion())
    }
  
    testPedido() {
      console.log(this.pedido.getNumeroElementos())
      console.log(this.pedido.getCostoTotal())
      console.log(this.pedido.getProductos())
      console.log(this.pedido.getResumen())
    }
  
    agregarElemento() {
      let elem1 = new ElementoPedido(new Producto('Pizza de  champiñones', new Precio(45.5)), 2)
      let elem2 = new ElementoPedido(new Producto('Doritos negros', new Precio(12.5)), 4)
      this.pedido.agregarElemento(elem1)
      this.pedido.agregarElemento(elem2)
      this.pedido.listarElementos()
    }
  
    testRestaurante() {
      this.restau.registrarProducto(new Producto('Sopa do Makako', new Precio(200.500)))
      this.restau.registrarProducto(new Producto('Coca de piña', new Precio(25.500)))
      this.restau.listarProductos()
  
  
      let pedido1 = new Pedido(
        new Fecha(new Date()),
        new Tiempo(new Date()),
        new Cliente('Edson', new Direccion('Paseo de Azaleaz', 24, 20, 'Gomez', 'Colima', 'Noruega'), 3121135597))
  
      let elem1 = new ElementoPedido(new Producto('Pizza de  champiñones', new Precio(45.5)), 2)
      let elem2 = new ElementoPedido(new Producto('Doritos negros', new Precio(12.5)), 4)
      pedido1.agregarElemento(elem1);
      pedido1.agregarElemento(elem2);
  
      let pedido2 = new Pedido(
        new Fecha(new Date()),
        new Tiempo(new Date()),
        new Cliente('Jhonny', new Direccion('Solidaridad', 24, 20, 'Juarez', 'Colima', 'Árboledas del crimen'), 3121135597))
  
      let elem4 = new ElementoPedido(new Producto('Sopa do Makako', new Precio(102.500)), 4)
      let elem3 = new ElementoPedido(new Producto('Coca de piña', new Precio(25.500)), 10)
      pedido2.agregarElemento(elem3);
      pedido2.agregarElemento(elem4);
  
      this.restau.registrarPedido(pedido1);
      this.restau.registrarPedido(pedido2);
  
      this.restau.listarPedidos()
  
    }
  }
  
  let app = new Main()
  
  app.testRestaurante()