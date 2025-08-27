# 🎴 Tarjeta Virtual Personal

Una tarjeta de presentación digital moderna y interactiva creada con HTML5, CSS3 y JavaScript vanilla. Perfecta para compartir tu información profesional de manera elegante.

## 🌟 Características

- ✨ **Diseño 3D interactivo** con animación de volteo
- 📱 **Completamente responsivo** (móvil, tablet, desktop)
- 🎨 **Gradientes modernos** y efectos visuales
- ⭐ **Partículas animadas** de fondo
- 🔗 **Enlaces funcionales** para contacto directo
- ♿ **Accesible** con navegación por teclado
- 🚀 **Optimizado** para GitHub Pages
- 🎯 **SEO friendly** con meta tags

## 🚀 Demo en Vivo

**[Ver Demo](https://tuusuario.github.io/mi-tarjeta-virtual/)**

## 📁 Estructura del Proyecto

```
mi-tarjeta-virtual/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos principales
├── js/
│   └── script.js      # Lógica de interacción
├── img/
│   ├── profile.jpg    # Tu foto de perfil (400x400px recomendado)
│   └── favicon.ico    # Icono del sitio
└── README.md          # Este archivo
```

## ⚡ Instalación y Uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/mi-tarjeta-virtual.git
cd mi-tarjeta-virtual
```

### 2. Personalizar tu información

#### En `index.html`:

- Cambia "Tu Nombre" por tu nombre real
- Actualiza "Tu Profesión / Título"
- Modifica tu frase inspiradora
- Actualiza todos los enlaces de contacto
- Ajusta las habilidades en los skill-tags

#### En `css/style.css`:

- Personaliza los gradientes de color si deseas
- Ajusta dimensiones si es necesario

### 3. Agregar tu foto de perfil

- Coloca tu foto en `img/profile.jpg`
- Tamaño recomendado: 400x400px
- Formato: JPG, PNG o WebP

### 4. Configurar GitHub Pages

1. Sube todos los archivos a tu repositorio de GitHub
2. Ve a **Settings** > **Pages** en tu repositorio
3. Selecciona **Deploy from a branch**
4. Elige **main branch** y **/ (root)**
5. ¡Tu sitio estará disponible en minutos!

## 🎨 Personalización

### Cambiar Colores

En `css/style.css`, modifica estos gradientes:

```css
/* Frente de la tarjeta */
.card-front {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

/* Reverso de la tarjeta */
.card-back {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

### Agregar Más Información

Puedes agregar más secciones en el reverso de la tarjeta, como:

- Experiencia laboral
- Educación
- Certificaciones
- Idiomas

### Personalizar Animaciones

Ajusta las duraciones en `css/style.css`:

```css
.card {
  transition: transform 0.6s ease-in-out; /* Velocidad de volteo */
}
```

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript ES6** - Interactividad
- **GitHub Pages** - Hosting gratuito

## 📱 Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móviles (iOS, Android)

## ♿ Accesibilidad

- Navegación por teclado (Tab, Enter, Espacio)
- Textos alt para imágenes
- Contraste de colores adecuado
- Semántica HTML apropiada
- Soporte para lectores de pantalla

## 🐛 Solución de Problemas

### La imagen no se muestra

1. Verifica que el archivo esté en `img/profile.jpg`
2. Comprueba que el nombre del archivo sea exacto
3. Asegúrate de que el formato sea JPG, PNG o WebP

### Los enlaces no funcionan

1. Verifica que las URLs sean correctas
2. Para teléfono: usa formato `tel:+521234567890`
3. Para email: usa formato `mailto:tu@email.com`

### La página no carga en GitHub Pages

1. Asegúrate de que el archivo se llame `index.html`
2. Verifica que esté en la raíz del repositorio
3. Espera unos minutos para la propagación
