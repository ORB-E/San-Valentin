function buttonNo() {
  const buttonNo = document.getElementById("buttonNo");
  const buttonYes = document.getElementById("buttonYes");

  // Obtener tamaños actuales
  let currentNoWidth = parseFloat(buttonNo.style.width) || 80;
  let currentNoHeight = parseFloat(buttonNo.style.height) || 40; // Ahora tiene un valor por defecto

  let currentYesWidth = parseFloat(buttonYes.style.width) || 80;
  let currentYesHeight = parseFloat(buttonYes.style.height) || 40;

  // Disminuir tamaño del botón "No" de manera gradual y sin brusquedad
  currentNoWidth = Math.max(currentNoWidth - 5, 10); // Mínimo 10%
  currentNoHeight = Math.max(currentNoHeight - 2.5, 10); // Mínimo 10px

  buttonNo.style.width = `${currentNoWidth}%`;
  buttonNo.style.height = `${currentNoHeight}px`;

  // Aumentar tamaño del botón "Sí" con límites
  currentYesWidth = Math.min(currentYesWidth + 5, 95); // Máximo 95%
  currentYesHeight = Math.min(currentYesHeight + 5, 95); // Máximo 95px

  buttonYes.style.width = `${currentYesWidth}%`;
  buttonYes.style.height = `${currentYesHeight}px`;
}

function buttonYes() {
  window.location.href = "second.html";
}