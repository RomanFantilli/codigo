let cursorEspada;
let pantallaInicio, imgIntro, imgPantalla1, imgPantalla2, imgPantalla3, imgPantalla4, imgPantalla5, imgPantalla6;
let font;
let estado = 0;

function preload() {
  pantallaInicio = loadImage('assets/pantallas.hda/pantallaInicio.png');
  imgIntro = loadImage('assets/pantallas.hda/intro.png');
  cursorEspada = loadImage('assets/cursorEspada.png');
  imgPantalla1 = loadImage('assets/pantallas.hda/pantalla1.png');
  imgPantalla2 = loadImage('assets/pantallas.hda/pantalla2.png');
  imgPantalla3 = loadImage('assets/pantallas.hda/pantalla3.png');
  imgPantalla4 = loadImage('assets/pantallas.hda/pantalla4.png');
  imgPantalla5 = loadImage('assets/pantallas.hda/pantalla5.png');
  imgPantalla6 = loadImage('assets/pantallas.hda/pantalla6.png');
  font = loadFont('assets/Pieces_of_Eight.ttf');

  console.log('cursorEspada width:', cursorEspada.width, 'height:', cursorEspada.height);
}

function setup() {
  createCanvas(640, 480);
  noCursor();
  textFont(font);
  textSize(35);
  fill(0);
}

function draw() {
  if (estado == 0) {
    menu();
  } else if (estado == 1) {
    introScreen();
  } else if (estado == 2) {
    pantalla1();
  }
}
function menu() {
  background(140);
  if (pantallaInicio) image(pantallaInicio, 0, 0);

  fill(0);
  textSize(35);
  text("Comenzar", 30, 360);
  text("Créditos", 30, 400);

  textSize(20);
  fill(0);
  text(int(millis() / 1000) + " SEGUNDOS", 10, 460);

  if (cursorEspada) {
    image(cursorEspada, mouseX, mouseY, 32, 32);
  }
}

function introScreen() {
  background(130);
   if(imgIntro) image(imgIntro, 0, 0);
  noStroke();
  fill(200, 50, 60);
  rect(0, 0, 640, 40);
  fill(255);
  textSize(29);
  text("Una tarde en la tierra de Ooo", 30, 30);
  if (cursorEspada) {
    image(cursorEspada, mouseX, mouseY, 32, 32);
  }
}

function pantalla1() {
  background(130);
  if  (imgPantalla1) image(imgPantalla1, 0, 0);
  noStroke();
  fill(200, 50, 60);
  rect(0, 0, 640, 40);
  fill(255);
  textSize(29);
  text("Finn mira por la ventana.", 30, 30);

  if (cursorEspada) {
    image(cursorEspada, mouseX, mouseY, 32, 32);
  }
}

function mousePressed() {

  console.log("click:", mouseX, mouseY);

  if (estado == 0) {
    if (mouseX > 23 && mouseX < 200 && mouseY > 330 && mouseY < 370) {
      estado = 1;
    }
  }
  else if (estado == 1) {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < 480) {
      estado = 2;
    }
  }
}
