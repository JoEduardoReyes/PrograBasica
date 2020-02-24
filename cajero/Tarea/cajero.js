class Billete {
  constructor(v, c) {
    this.valor=v;
    this.cantidad=c;
    this.imagen = new Image;
    this.imagen.src = this.valor + ".jpg"
    this.cargaImagen=false;
  }
}

var entregado = [];
entregado.push(new Billete(200, 0));
entregado.push(new Billete(100, 0));
entregado.push(new Billete(50, 0));
entregado.push(new Billete(20, 0));
entregado.push(new Billete(10, 0));
entregado.push(new Billete(5, 0));
entregado.push(new Billete(1, 0));

var caja = [];
caja.push(new Billete(200, 50));
caja.push(new Billete(100, 100));
caja.push(new Billete(50, 200));
caja.push(new Billete(20, 500));
caja.push(new Billete(10, 1000));
caja.push(new Billete(5, 2000));
caja.push(new Billete(1, 1000));

var dinero = 0;
var div = 0;
var papeles = 0;
var quedan = 0;
var mostrando = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");
var restantes = document.getElementById("queda");
var bn = document.getElementById("bandeja");
var bandeja = bn.getContext("2d");


function entregarDinero() {

  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for (bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }
      for (en of entregado) {
        if (bi.valor == en.valor) {
          en.cantidad = papeles;
        }
      }
      bi.cantidad = bi.cantidad - papeles;
      dinero = dinero - (bi.valor * papeles);
    }
  }

  for (q of caja) {
  quedan = quedan + (q.valor * q.cantidad)
  }
  restantes.innerHTML= "Aún quedan $" + quedan;
  quedan = 0;

  if (dinero > 0) {
    mostrando = "No puedo darte esa cantidad";
  }
  else {
    for(var e of entregado){
      if (e.cantidad > 0) {
      mostrando = mostrando + e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
  resultado.innerHTML = mostrando;
  mostrando = 0;

  bandeja.clearRect(0, 0, 325, 150);
  var y = 0;
  var x = 0;
  for (dibujo of entregado) {
    for (var dib = 0; dib < dibujo.cantidad; dib ++){
      bandeja.drawImage(dibujo.imagen, x, y);
      x += 6;
      y += 3;
    }
  }
  for (ent of entregado) {
    ent.cantidad = 0;
  }
}
