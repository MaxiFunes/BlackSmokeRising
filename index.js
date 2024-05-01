window.addEventListener('scroll', function() {
    var sectionP = document.querySelector('.section2-p');
    var scrollPosition = window.scrollY;

    if (scrollPosition >= 110) {
        sectionP.style.opacity = '0';
    } else {
        sectionP.style.opacity = '.5';
    }
});
document.querySelector('.gmail').addEventListener('click', function() {
    var emailAddress = "blacksmokerising24@gmail.com";
    
    // Crear un elemento de entrada de texto
    var tempInput = document.createElement("input");
    
    // Asignar el valor del correo electrónico al campo de entrada
    tempInput.value = emailAddress;
    
    // Agregar el campo de entrada al documento
    document.body.appendChild(tempInput);
    
    // Seleccionar y copiar el contenido del campo de entrada
    tempInput.select();
    document.execCommand("copy");
    
    // Remover el campo de entrada del documento
    document.body.removeChild(tempInput);
    
    // Informar al usuario que se ha copiado el correo electrónico
    alert("Correo electrónico copiado al portapapeles: " + emailAddress);
  });
  //menu
  function toggleMenu() {
      var menu = document.getElementById('menu');
    var menuspan1 = document.getElementById('menuspan1');
    var menuspan2 = document.getElementById('menuspan2');
    if (menu.style.transform === 'translateX(100%)') {
      menu.style.transform = 'translateX(0)';
      menuspan1.style.transform = 'translateX(0)';
      menuspan2.style.transform = 'translateX(0)';

    } else {
        menu.style.transform = 'translateX(100%)';
        menuspan1.style.transform = 'translateX(0)';
        menuspan2.style.transform = 'translateX(0)';
    }
  }
  
  function closeMenu() {
    var menu = document.getElementById('menu');
    menu.style.transform = 'translateX(100%)';
  }
  
  