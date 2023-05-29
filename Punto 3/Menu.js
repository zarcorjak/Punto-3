// Obtener todos los elementos <li> que contienen submenús
var liHasSubmenu = document.querySelectorAll('nav ul li');

// Obtener todos los elementos <li> que contienen submenús
var liHasSubmenu = document.querySelectorAll('nav ul li');

// Agregar eventos a cada elemento <li>
for (var i = 0; i < liHasSubmenu.length; i++) {
  liHasSubmenu[i].addEventListener('mouseenter', function() {
    // Obtener el submenú del elemento <li> actual
    var submenu = this.querySelector('ul');
    if (submenu) {
      // Mostrar el submenú
      submenu.style.display = 'block';
    }
  });
  liHasSubmenu[i].addEventListener('mouseleave', function() {
    // Obtener el submenú del elemento <li> actual
    var submenu = this.querySelector('ul');
    if (submenu) {
      // Ocultar el submenú
      submenu.style.display = 'none';
    }
  });
}