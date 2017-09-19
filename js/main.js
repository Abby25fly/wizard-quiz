
var preguntas= [
  {
    pregunta:"¿Cuál es la aerolínea más antigua del mundo?",
    opcion1:"Avianca",
    opcion2:"KML",
    opcion3:"Qantas",
    respuesta:"2"
  },
  {
    pregunta:"¿Cuál es el puerto más grande del mundo?",
    opcion1:"Puerto de Shanghai",
    opcion2:"Puerto de Singapur",
    opcion3:"Puerto de Rotterdam",
    respuesta:"1"
  },
  {
    pregunta:"¿Cuál es la distancia más larga que recorre una bicicleta hacia atrás?",
    opcion1:"89.9 Km",
    opcion2:"570.5 Km",
    opcion3:"337.60 km",
    respuesta:"3"
  },
  {
    pregunta:"¿Cuál es la velociad más alta alcanzada por un bus escolar?",
    opcion1:"590 km/h",
    opcion2:"320 Km/h",
    opcion3:"245 Km/h",
    respuesta:"1"
  },
  {
    pregunta:"¿Cuál es el viaje más largo en carro con un tanque de gas?",
    opcion1:"3568 Km",
    opcion2:"2617 km",
    opcion3:"1732 Km",
    respuesta:"2"
  }
];

var preguntaActual = 0;
var puntos = 0;
var totalPreguntas = preguntas.length;

var contenedor = document.getElementById('contenedor');
var pregText = document.getElementById('preguntaText');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var sigBtn = document.getElementById('sigBtn');
var resultCont = document.getElementById('result');

function mostrar (textPreg) {
	var q = preguntas[textPreg];
	pregText.textContent = (textPreg + 1) + '. ' + q.pregunta;
	op1.textContent = q.opcion1;
	op2.textContent = q.opcion2;
	op3.textContent = q.opcion3;
};

function siguientePregunta () {
	var opcionSelec = document.querySelector('input[type=radio]:checked');
	if(!opcionSelec){
		alert('Elige una respuesta!');
		return;
	}
	var resCorrecta = opcionSelec.value;
	if(preguntas[preguntaActual].respuesta == resCorrecta){
		puntos += 1;
	}
	opcionSelec.checked = false;
	preguntaActual++;
	if(preguntaActual == totalPreguntas - 1){
		sigBtn.textContent = 'Resultado';
	}
	if(preguntaActual == totalPreguntas){
		contenedor.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Respondiste correctamente ' + puntos + " de 5 preguntas";
		return;
	}
	mostrar(preguntaActual);
}

mostrar(preguntaActual);
