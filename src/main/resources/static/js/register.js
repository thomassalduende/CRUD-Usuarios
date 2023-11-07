// Call the dataTables jQuery plugin
$(document).ready(function () {

});

async function registrarUsuarios() {

    const nombre = document.getElementById('exampleFirstName').value;
    const apellido = document.getElementById('exampleLastName').value;
    const email = document.getElementById('exampleInputEmail').value;
    const password = document.getElementById('exampleInputPassword').value;
    const repeatPassword = document.getElementById('exampleRepeatPassword').value;

    // Verifica que los campos no estén vacíos (puedes agregar más validaciones si es necesario)
    if (!nombre || !apellido || !email || !password || !repeatPassword) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Crea un objeto con los valores
    const usuario = {
        nombre,
        apellido,
        email,
        password
    };

    await fetch('http://localhost:8080/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });

    window.location.href = 'login.html'
}
