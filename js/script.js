const btnIniSesion = document.getElementById("ini-sesion"),
      btnregistro = document.getElementById("registro"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnIniSesion.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})

btnregistro.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
})

// Define una clase Usuario para manejar la lógica de usuarios
class Usuario {
    constructor(nombre, correo, contrasena) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
    }
}

// Función para registrar un nuevo usuario
function registrarUsuario(nombre, correo, contrasena) {
    // Obtén la lista de usuarios del localStorage o crea una nueva si no existe
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica si el correo ya está registrado
    if (usuarios.some(usuario => usuario.correo === correo)) {
        alert('El correo ya está registrado. Inicia sesión o utiliza otro correo.');
        return false;
    }

    // Crea un nuevo objeto Usuario
    const nuevoUsuario = new Usuario(nombre, correo, contrasena);

    // Agrega el nuevo usuario a la lista
    usuarios.push(nuevoUsuario);

    // Almacena la lista actualizada en el localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('¡Registro exitoso!');
    return true;
}

// Event Listener para el formulario de registro
document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtén los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    // Realiza las validaciones
    if (nombre.trim() === '' || correo.trim() === '' || contrasena.trim() === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        // Registra al usuario y limpia el formulario si el registro es exitoso
        if (registrarUsuario(nombre, correo, contrasena)) {
            this.reset();
        }
    }
});

// Event Listener para el formulario de inicio de sesión
document.querySelector('.form-login').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtén los valores de los campos
    const correoInicio = document.getElementById('correoInicio').value;
    const contrasenaInicio = document.getElementById('contrasenaInicio').value;

    // Realiza las validaciones
    if (correoInicio.trim() === '' || contrasenaInicio.trim() === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        // Simula la autenticación comparando con usuarios registrados
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioAutenticado = usuarios.find(usuario => usuario.correo === correoInicio && usuario.contrasena === contrasenaInicio);

        if (usuarioAutenticado) {
            alert(`¡Bienvenido, ${usuarioAutenticado.nombre}! Inicio de sesión exitoso.`);
        } else {
            alert('Inicio de sesión fallido. Verifica tus credenciales.');
        }
    }
});
