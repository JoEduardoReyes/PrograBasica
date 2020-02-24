var colorcito = document.getElementById('tucolor')
var marco = document.getElementById('pizarra');
var papel = marco.getContext('2d');
var pizarronAlto = marco.height;
var pizarronAncho = marco.width;
var x;
var y;
var pintar;
marco.addEventListener('mousedown', marcadorPuesto);
marco.addEventListener('mousemove', tinta);
marco.addEventListener('mouseup', alzar);

function marcadorPuesto(event) {
    pintar = 1;
}
function alzar(event) {
  pintar = 0;
}
function tinta(evento) {
  if (pintar == 1) {
    x = evento.layerX
    y = evento.layerY
    dibujarLinea(colorcito.value, x, y, x-2, y-2, papel)
  } else {
    dibujarLinea(colorcito.value, x, y, x-2, y-2, papel)
  }
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLinea("black", 1, 1, 1, pizarronAlto - 1, papel)
dibujarLinea("black", 1, 1, pizarronAncho - 1, 1, papel)
dibujarLinea("black", 1, pizarronAlto - 1, pizarronAncho - 1, pizarronAlto - 1, papel)
dibujarLinea("black", pizarronAncho - 1, 1, pizarronAncho - 1, pizarronAlto - 1, papel)
