const Aportes = {
  jubilacion: 0.11,
  obraSocial: 0.03,
  pami: 0.03,
};

let historial = [];

const form = document.getElementById("form");
const sueldoBrutoInput = document.getElementById("sueldoBruto");
const historialDiv = document.getElementById("historial");
const plantillaDivResultado = document.createElement("div");

function limpiarFormulario() {
  historial = [];
  form.reset();
  historialDiv.innerHTML = "";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  calcularSueldoNeto();
});

function calcularSueldoNeto() {
  let sueldoBruto = sueldoBrutoInput.value;

  if (isNaN(sueldoBruto) || sueldoBruto <= 0) {
    alert("Por favor ingrese un valor numérico y positivo");
    form.reset();
    return;
  }

  const componentesSueldoNeto = {
    sueldoBruto: sueldoBruto,
  };

  let sueldoNeto = sueldoBruto;

  for (let descuento in Aportes) {
    componentesSueldoNeto[descuento] = (
      sueldoBruto * Aportes[descuento]
    ).toFixed(2);
    sueldoNeto -= componentesSueldoNeto[descuento];
  }

  componentesSueldoNeto.sueldoNeto = sueldoNeto.toFixed(2);

  let resultado = `
    Sueldo Bruto Ingresado: $${componentesSueldoNeto.sueldoBruto}<br>
    Jubilacion: $${componentesSueldoNeto.jubilacion}<br>
    Obra Social: $${componentesSueldoNeto.obraSocial}<br>
    PAMI: $${componentesSueldoNeto.pami} <br>
    Sueldo neto: $${componentesSueldoNeto.sueldoNeto}<br><br>
  `;

  historial.push(resultado);
  agregarAlHistorial(historial);
  form.reset();
}

function agregarAlHistorial(historial) {
  historialDiv.innerHTML = "";

  for (let i = historial.length - 1; i >= 0; i--) {
    let divResultado = plantillaDivResultado.cloneNode();
    divResultado.innerHTML = historial[i];
    historialDiv.appendChild(divResultado);
  }
}