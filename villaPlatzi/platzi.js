//Obteniendo imagenes//
var vp = document.getElementById('villaplatzi');
var papel = vp.getContext('2d')

//estableciando objetos literales de los animales//

var vaca = {
  url : 'vaca.png',
  cargaOK : false
}
var pollo = {
  url : 'pollo.png',
  cargaOK : false
}
var cerdo = {
  url : 'cerdo.png',
  cargaOK : false
}

//generando objetos de imagen//

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener('load', cargarVaca);
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener('load', cargarPollo);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener('load', cargarCerdo);

//Verificaion de Carga//

function cargarVaca() {
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollo() {
  pollo.cargaOK = true;
  dibujar();
}
function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujar();
}

//dibujando//
function dibujar() {
  if (cerdo.cargaOK == true) {
    var cantidadCerdos = aleatorio(1, 8);
    for (var c = 0; c < cantidadCerdos; c++) {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if (vaca.cargaOK == true) {
    var cantidadVacas = aleatorio(1, 8);
    for (var v = 0; v < cantidadVacas;v ++) {
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      x = x * 80;
      y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
    if (pollo.cargaOK == true) {
      var cantidadPollos = aleatorio(1, 8);
      for (var p = 0; p < cantidadPollos; p++) {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        x = x * 80;
        y = y * 80;
        papel.drawImage(pollo.imagen, x, y);
      }
    }
}




//generacion intrevalos aleatorios//
function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor( Math.random() * (max - min + 1)) + min;
  return resultado;
}
