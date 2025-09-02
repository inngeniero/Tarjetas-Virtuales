// =================================
// VARIABLES GLOBALES
// =================================
let isFlipped = false;
let particleContainer;

// =================================
// INICIALIZACIÓN
// =================================
document.addEventListener("DOMContentLoaded", function () {
  initializeCard();
  createParticles();
  addKeyboardNavigation();
  trackUserInteractions();
});

// =================================
// FUNCIONES DE LA TARJETA
// =================================
function initializeCard() {
  const card = document.getElementById("businessCard");

  if (card) {
    // Agregar event listeners
    card.addEventListener("click", flipCard);
    card.addEventListener("keydown", handleKeydown);

    // Hacer la tarjeta focusable
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute(
      "aria-label",
      "Tarjeta de presentación. Presiona Enter o haz clic para voltear"
    );

    console.log("Tarjeta inicializada correctamente");
  }
}

function flipCard() {
  const card = document.getElementById("businessCard");

  if (!card) return;

  isFlipped = !isFlipped;

  // Remover hover effect temporalmente
  card.style.pointerEvents = "none";

  if (isFlipped) {
    card.style.transform = "rotateY(180deg)";
    card.setAttribute(
      "aria-label",
      "Mostrando información de contacto. Presiona Enter o haz clic para volver"
    );
  } else {
    card.style.transform = "rotateY(0deg)";
    card.setAttribute(
      "aria-label",
      "Mostrando información personal. Presiona Enter o haz clic para ver contacto"
    );
  }

  // Restaurar eventos después de la transición
  setTimeout(() => {
    card.style.pointerEvents = "auto";
  }, 600);

  // Feedback háptico en dispositivos móviles
  if ("vibrate" in navigator) {
    navigator.vibrate(50);
  }

  // Analytics simple
  console.log(`Tarjeta ${isFlipped ? "volteada" : "frente"}`);
}

function handleKeydown(event) {
  // Permitir voltear con Enter o Espacio
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    flipCard();
  }
}

// =================================
// SISTEMA DE PARTÍCULAS
// =================================
function createParticles() {
  // Crear contenedor de partículas
  particleContainer = document.createElement("div");
  particleContainer.id = "particles";
  particleContainer.style.position = "fixed";
  particleContainer.style.top = "0";
  particleContainer.style.left = "0";
  particleContainer.style.width = "100%";
  particleContainer.style.height = "100%";
  particleContainer.style.pointerEvents = "none";
  particleContainer.style.zIndex = "-1";
  particleContainer.style.overflow = "hidden";

  document.body.appendChild(particleContainer);

  // Crear partículas iniciales
  createBatchOfParticles(30);

  // Crear nuevas partículas periódicamente
  setInterval(() => {
    if (particleContainer.children.length < 50) {
      createBatchOfParticles(5);
    }
  }, 2000);
}

function createBatchOfParticles(count) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => createSingleParticle(), i * 100);
  }
}

function createSingleParticle() {
  if (!particleContainer) return;

  const particle = document.createElement("div");
  particle.className = "particle";

  // Propiedades aleatorias
  const size = Math.random() * 4 + 2;
  const left = Math.random() * 100;
  const animationDuration = Math.random() * 10 + 8;
  const delay = Math.random() * 2;

  // Aplicar estilos
  particle.style.width = size + "px";
  particle.style.height = size + "px";
  particle.style.left = left + "%";
  particle.style.animationDuration = animationDuration + "s";
  particle.style.animationDelay = delay + "s";

  particleContainer.appendChild(particle);

  // Remover partícula después de la animación
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, (animationDuration + delay) * 1000);
}

// =================================
// NAVEGACIÓN POR TECLADO
// =================================
function addKeyboardNavigation() {
  const contactLinks = document.querySelectorAll(".contact-item[href]");

  contactLinks.forEach((link) => {
    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        link.click();
      }
    });
  });
}

// =================================
// TRACKING DE INTERACCIONES
// =================================
function trackUserInteractions() {
  const contactLinks = document.querySelectorAll(".contact-item[href]");

  contactLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const linkType = getLinkType(link.href);
      console.log(`Clic en enlace: ${linkType}`);

      // Aquí podrías agregar Google Analytics o similar
      // gtag('event', 'contact_click', { link_type: linkType });
    });
  });
}

function getLinkType(href) {
  if (href.includes("mailto:")) return "email";
  if (href.includes("tel:")) return "phone";
  if (href.includes("github.com")) return "github";
  if (href.includes("linkedin.com")) return "linkedin";
  return "other";
}

// =================================
// UTILIDADES DE RENDIMIENTO
// =================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// =================================
// DETECCIÓN DE DISPOSITIVO
// =================================
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function isTabletDevice() {
  return /iPad|Android/i.test(navigator.userAgent) && window.innerWidth > 600;
}

// =================================
// MANEJO DE ERRORES DE IMAGEN
// =================================
function handleImageError() {
  const profileImg = document.querySelector(".profile-img img");
  const placeholder = document.querySelector(".profile-placeholder");

  if (profileImg && placeholder) {
    profileImg.style.display = "none";
    placeholder.style.display = "flex";
    console.log("Imagen de perfil no encontrada, mostrando placeholder");
  }
}

// =================================
// EFECTOS ADICIONALES
// =================================
function addGlowEffect() {
  const card = document.getElementById("businessCard");
  if (!card) return;

  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 30px rgba(255,255,255,0.3)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "";
  });
}

// =================================
// PRELOADER SIMPLE
// =================================
function showPreloader() {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease-in-out";
    document.body.style.opacity = "1";
  }, 100);
}

// =================================
// COMPATIBILIDAD CON NAVEGADORES ANTIGUOS
// =================================
if (!Element.prototype.addEventListener) {
  // Fallback para navegadores muy antiguos
  Element.prototype.addEventListener = function (event, handler) {
    this.attachEvent("on" + event, handler);
  };
}

// =================================
// EXPORTAR FUNCIONES PARA TESTING
// =================================
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    flipCard,
    createSingleParticle,
    isMobileDevice,
    debounce,
  };
}

// =================================
// EVENTO DE CARGA COMPLETA
// =================================
window.addEventListener("load", () => {
  console.log("Tarjeta virtual cargada completamente");
  showPreloader();

  // Agregar efectos adicionales después de la carga
  setTimeout(() => {
    addGlowEffect();
  }, 500);
});
