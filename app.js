// Registrar el Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((reg) => console.log("Service Worker registrado"))
      .catch((err) =>
        console.log("Error al registrar Service Worker:", err)
      );
  });
}

// Función para limpiar todos los campos
function limpiarCampos() {
  document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.value = "";
  });
  document.getElementById("resultado").innerHTML = "";
}

// Función para asegurar que los valores estén en el rango correcto
function validarInput(input) {
  const value = parseInt(input.value);
  const min = parseInt(input.min);
  const max = parseInt(input.max);

  if (value < min) input.value = min;
  if (value > max) input.value = max;
  if (input.value.length > 2) input.value = input.value.slice(0, 2);
}

// Agregar validación a todos los inputs
document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.addEventListener("input", () => validarInput(input));
  input.addEventListener("blur", () => {
    if (input.value === "") input.value = "";
    else if (input.value.length === 1) input.value = "0" + input.value;
  });
});

// Función para calcular el tiempo transcurrido
function calcularTiempo() {
  const horaInicio = document.getElementById("horaInicio").value;
  const minutoInicio = document.getElementById("minutoInicio").value;

  if (!horaInicio || !minutoInicio) {
    alert("Por favor complete todos los campos");
    return;
  }

  // Obtener la hora actual del dispositivo
  const ahora = new Date();
  const horaFin = ahora.getHours();
  const minutoFin = ahora.getMinutes();

  // Crear objetos Date para comparar
  const fechaInicio = new Date(
    2024,
    0,
    1,
    parseInt(horaInicio),
    parseInt(minutoInicio)
  );
  const fechaFin = new Date(2024, 0, 1, horaFin, minutoFin);

  // Si la hora final es menor, asumimos que es del día siguiente
  if (fechaFin < fechaInicio) {
    fechaFin.setDate(fechaFin.getDate() + 1);
  }

  // Calcular la diferencia en minutos
  let diferencia = (fechaFin - fechaInicio) / (1000 * 60);

  // Convertir a horas y minutos
  const horas = Math.floor(diferencia / 60);
  const minutos = Math.floor(diferencia % 60);

  // Mostrar el resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Tiempo transcurrido: ${horas} horas y ${minutos} minutos`;
}
