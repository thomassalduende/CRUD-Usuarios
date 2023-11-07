// Call the dataTables jQuery plugin
$(document).ready(function () {

});

async function loginUsuario() {

    const email = document.getElementById('txtEmail').value;
    const password = document.getElementById('txtPassword').value;

    // Crea un objeto con los valores
    const usuario = {
        email,
        password
    };

    const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })

    try {
        const responseBody = await response.text();

        if (responseBody === 'OK') {
            window.location.href = 'usuarios.html';
        } else {
            alert('Credenciales incorrectas');
        }
    } catch (error) {
        console.error('Error al obtener el cuerpo de la respuesta:', error);
    }
}
