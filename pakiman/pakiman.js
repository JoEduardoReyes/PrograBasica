class pakiman {
  constructor(n, v, a) {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.imagen.src = imagenes[this.nombre]
  }
  hablar() {
    alert(this.nombre);
  }
  mostrar() {
    document.body.appendChild(this.imagen);
    document.write('<p>');
    document.write('<strong>' + this.nombre + '</strong></br>');
    document.write('Vida: ' + this.vida + '<br/>');
    document.write('ataque: ' + this.ataque + '<br/><hr/><br/>'  );
    document.write('</p>');
  }
}
