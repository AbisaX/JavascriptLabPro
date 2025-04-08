function obtenerDatos() {
    const nombreFormulario = document.getElementById('nombre16').value;
    const correo = document.getElementById('correo16').value;

    const nombrePrompt = prompt("¿Cuál es tu nombre?");

    alert(`Hola ${nombrePrompt || nombreFormulario}, se ha enviado tu información.`);

    const resultado = document.getElementById('resultado16');
    resultado.innerHTML = `
      <strong>Nombre (formulario):</strong> ${nombreFormulario}<br>
      <strong>Nombre (prompt):</strong> ${nombrePrompt}<br>
      <strong>Correo:</strong> ${correo}
    `;
}
