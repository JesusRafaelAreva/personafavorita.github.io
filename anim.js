// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres la persona mas importante en mi vida ❤️", time: 15 },
  { text: "Te quiero mucho❤️", time: 18 },
  { text: "Siempre voy a estar para ti", time: 27 },
  { text: "Eres muy importante para mi", time: 32 },
  { text: "y recuerda a Melendi", time: 33 },
  { text: "Yo no quiero pasar por tu vida ", time: 41 },
  { text: "como las modas.", time: 47 },
  { text: "quiero estar contigo siempre", time: 54 },
  { text: "luchar por ti.", time: 57 },
  { text: "quiero cuidarte,", time: 59 },
  { text: "protegerte. ", time: 67 },
  { text: "recuerda que nunca estaras sola,", time: 72 },
  { text: "áseñpqie pase estare ay para ti.", time: 78 },
  { text: "Te quiero mucho", time: 83 },
  { text: "Hoy", time: 91 },
  { text: "mañana", time: 97 },
  { text: "y siempre te quedre", time: 104 },
  { text: "Recuerda no estas y nunca estaras sola ❤️💙", time: 120 },
  { text: "Me encantas ❤️💙", time: 128 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
