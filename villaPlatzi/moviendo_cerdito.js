//Obteniendo imagenes//
var vp = document.getElementById('movimientoCerdito');
var papel = vp.getContext('2d')
var fondo = {
  url : 'tile.webp',
  cargaOK : false
}
fondo.imagen = new Image;
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo);
function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function dibujar() {
  if (fondo.cargaOK == true) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
}

//moviendo cerdito//
var cerdo = {
  url : 'cerdo.png',
  cargaOK : false
}
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener('load', cargarCerdo);
document.addEventListener('keydown', moverCerdito)

var xi = aleatorio(0,5);
var yi = aleatorio(0,5);
xi = xi * 80;
yi = yi * 80;
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujarCerdito(xi, yi);
}

function moverCerdito(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarCerdito(xi, yi);
      yi = yi - 5;
      break;
    case teclas.DOWN:
      dibujarCerdito(xi, yi);
      yi = yi + 5;
      break;
    case teclas.LEFT:
      dibujarCerdito(xi, yi);
      xi = xi - 5;
      break;
    case teclas.RIGHT:
      dibujarCerdito(xi, yi);
      xi = xi + 5;
      break;
  }

}

function dibujarCerdito(xf, yf) {
    dibujar();
    papel.drawImage(cerdo.imagen, xf, yf);
}

//generacion intrevalos aleatorios//
function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor( Math.random() * (max - min + 1)) + min;
  return resultado;
}
