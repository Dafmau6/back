document.addEventListener("DOMContentLoaded", function() {
  const tablaUsuarios = document.getElementById('tabla-usuarios');

  fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then(data => {
      data.forEach(usuario => {
        const caja = document.createElement('div');
        caja.className = 'caja-usuario';

        const titulo = document.createElement('h3');
        titulo.className = 'titulo-caja'; // Agregamos la clase 'titulo-caja' al título
        titulo.textContent = `ID: ${usuario.id}`;
        caja.appendChild(titulo);

        const nombre = document.createElement('p');
        nombre.textContent = `Nombre: ${usuario.nombres}`;
        caja.appendChild(nombre);

        const contrato = document.createElement('p');
        contrato.textContent = `Tipo de Contrato: ${usuario.tipocontrato}`;
        caja.appendChild(contrato);

        // Verificamos el género y agregamos el ícono correspondiente
        if (usuario.genero === 'masculino') {
          const iconoMasculino = document.createElement('img');
          iconoMasculino.src = 'masculino.png'; // Ruta de la imagen del muñeco masculino
          caja.appendChild(iconoMasculino);
        } else if (usuario.genero === 'femenino') {
          const iconoFemenino = document.createElement('img');
          iconoFemenino.src = 'femenino.png'; // Ruta de la imagen del muñeco femenino
          caja.appendChild(iconoFemenino);
        }

        tablaUsuarios.appendChild(caja);
      });
    });
});