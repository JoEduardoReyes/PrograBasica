

function dibujarEntregado() {
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
}
