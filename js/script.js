function obtenerDatos() {

    const nombreFormulario = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;


    const nombrePrompt = prompt("¿Cuál es tu nombre?");


    alert(`Hola ${nombrePrompt || nombreFormulario}, se ha enviado tu información.`);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
      <strong>Nombre (formulario):</strong> ${nombreFormulario}<br>
      <strong>Nombre (prompt):</strong> ${nombrePrompt}<br>
      <strong>Correo:</strong> ${correo}
    `;
}
