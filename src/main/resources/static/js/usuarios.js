// Call the dataTables jQuery plugin
$(document).ready(function () {
  cargarUsuarios();
  $('#usuarios').DataTable();
});

async function cargarUsuarios() {
  const response = await fetch('http://localhost:8080/usuarios', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const usuarios = await response.json();

  let listadoHtml = '';
  for (let usuario of usuarios) {
    let botonEliminar = '<a href="#" onClick="deleteUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';

    let telefonoTexto = usuario.telefono == null ? '-' : usuario.telefono;
    let usuarioHtml = '<tr><td>' + usuario.id + '</td><td>' + usuario.nombre + ' ' + usuario.apellido + '</td><td>'
      + usuario.email + '</td><td>' + telefonoTexto
      + '</td><td>' + botonEliminar + '</td></tr>';
    listadoHtml += usuarioHtml;
  }

  document.querySelector('#usuarios tbody').outerHTML = listadoHtml;

}

async function deleteUsuario(id) {
  if (!confirm('Desea eliminar a este usuario?')) {
    return;
  }

  await fetch(`http://localhost:8080/usuarios/${id}`, {
    method: 'DELETE'
  });

  location.reload();
}