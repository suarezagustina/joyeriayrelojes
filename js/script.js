document.addEventListener('DOMContentLoaded', function() {
    const productos = [
      { codigo: '001', nombre: 'Diamond', detalle: 'Bañado en oro', precio: 35000, categoria: 'Relog' },
      { codigo: '002', nombre: 'Diamond Black', detalle: '17 diamantes', precio: 38000, categoria: 'Relog' },
      { codigo: '003', nombre: 'RC One', detalle: '170 diamantes', precio: 40000, categoria: 'Relog' },
      { codigo: '004', nombre: 'Medusa Diamond', detalle: '100 diamantes', precio: 60000, categoria: 'Relog' },
      { codigo: '005', nombre: 'Resplandeciente', detalle: 'Plata esterlina', precio: 30000, categoria: 'Collares' },
      { codigo: '006', nombre: 'Estrella fugaz', detalle: 'Oro de 14k', precio: 35000, categoria: 'Collares' },
      { codigo: '007', nombre: 'Arbol de vida y luna', detalle: 'Plata', precio: 21000, categoria: 'Collares' },
      { codigo: '008', nombre: 'Corazon reluciente', detalle: 'Oro rosa de 14k', precio: 36000, categoria: 'Collares' },
      { codigo: '008', nombre: 'Circulo de semillas', detalle: 'Oro de 18k', precio: 25000, categoria: 'Anillos' },
      { codigo: '010', nombre: 'Corona de margaritas', detalle: 'Oro rosa de 14k', precio: 18000, categoria: 'Anillos' },
      { codigo: '011', nombre: 'Corona reluciente', detalle: 'Oro de 14k', precio: 20000, categoria: 'Anillos' },
      { codigo: '012', nombre: 'Dulce promesa', detalle: 'Plata esterlina', precio: 10000, categoria: 'Anillos' },
    ];
    const tableBody = document.querySelector('#productTable tbody');
    function cargarTabla() {
      tableBody.innerHTML = '';
      for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const row = tableBody.insertRow();
        row.innerHTML = `
          <td>${producto.codigo}</td>
          <td>${producto.nombre}</td>
          <td>${producto.detalle}</td>
          <td>${producto.precio}</td>
          <td>${producto.categoria}</td>
          <td>
            <button onclick="editarProducto('${producto.codigo}')">Editar</button>
            <button onclick="eliminarProducto('${producto.codigo}')">Eliminar</button>
          </td>
        `;
      }
    }
    function darDeAltaProducto() {
      
    }
    window.editarProducto = function(codigo) {
      
    };
    window.eliminarProducto = function(codigo) {
    
    };
    cargarTabla();
  });
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

class Usuario {
    constructor(nombre, correo, contrasena) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
    }
}

function registrarUsuario(nombre, correo, contrasena) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.some(usuario => usuario.correo === correo)) {
        alert('El correo ya está registrado. Inicia sesión o utiliza otro correo.');
        return false;
    }

    const nuevoUsuario = new Usuario(nombre, correo, contrasena);

    usuarios.push(nuevoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('¡Registro exitoso!');
    return true;
}

document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    if (nombre.trim() === '' || correo.trim() === '' || contrasena.trim() === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        if (registrarUsuario(nombre, correo, contrasena)) {
            this.reset();
        }
    }
});

document.querySelector('.form-login').addEventListener('submit', function (e) {
    e.preventDefault();

    const correoInicio = document.getElementById('correoInicio').value;
    const contrasenaInicio = document.getElementById('contrasenaInicio').value;

    if (correoInicio.trim() === '' || contrasenaInicio.trim() === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioAutenticado = usuarios.find(usuario => usuario.correo === correoInicio && usuario.contrasena === contrasenaInicio);

        if (usuarioAutenticado) {
            alert(`¡Bienvenido, ${usuarioAutenticado.nombre}! Inicio de sesión exitoso.`);
        } else {
            alert('Inicio de sesión fallido. Verifica tus credenciales.');
        }
    }
});
