 // Prevenir comportamiento por defecto en los enlaces de navegación (simulación de SPA)
    const allNavLinks = document.querySelectorAll('.nav-links li a');
    allNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        // Pequeño efecto de feedback visual
        link.style.transform = 'scale(0.96)';
        setTimeout(() => {
          link.style.transform = '';
        }, 120);
        
        // Opcional: puedes añadir un console.log o resaltar sección
        const linkText = link.textContent;
        // Si quisieras hacer scroll a alguna sección, podrías implementarlo.
        // Por ahora solo es efecto interactivo sin recarga.
      });
    });
    
    // Efecto adicional: cuando se hace scroll, el contenedor del navbar puede tener un pequeño cambio de estilo
    // para hacerlo más elegante (sutil sombra extra). Esto mejora la experiencia de navbar fijo.
    const navbarContainer = document.querySelector('.navbar-container');
    if (navbarContainer) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          navbarContainer.style.background = 'rgba(255, 255, 255, 0.85)';
          navbarContainer.style.backdropFilter = 'blur(12px)';
          navbarContainer.style.transition = 'all 0.25s ease';
        } else {
          navbarContainer.style.background = 'transparent';
          navbarContainer.style.backdropFilter = 'blur(0px)';
        }
      });
      // Disparar estado inicial
      if (window.scrollY > 10) {
        navbarContainer.style.background = 'rgba(255, 255, 255, 0.85)';
        navbarContainer.style.backdropFilter = 'blur(12px)';
      }
    }


const allNavLinks = document.querySelectorAll('.nav-links li a');

allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        allNavLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        link.style.transform = 'scale(0.96)';
        setTimeout(() => {
            link.style.transform = '';
        }, 120);
    });
});

const navbarContainer = document.querySelector('.navbar-container');
if (navbarContainer) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbarContainer.style.background = 'rgba(255, 255, 255, 0.85)';
            navbarContainer.style.backdropFilter = 'blur(12px)';
            navbarContainer.style.transition = 'all 0.25s ease';
        } else {
            navbarContainer.style.background = 'transparent';
            navbarContainer.style.backdropFilter = 'blur(0px)';
        }
    });
}
