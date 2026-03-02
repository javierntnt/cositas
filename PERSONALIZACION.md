# ⚡ PERSONALIZACIÓN RÁPIDA

## 🖼️ Cómo Agregar Tus Logos e Imágenes

### 1. Agrega tus archivos
Coloca tus imágenes en la carpeta `/public/`:
```
/public/
  ├── logo.png
  ├── hero-image.jpg
  ├── about-image.jpg
  ├── team-1.jpg
  ├── team-2.jpg
  ├── team-3.jpg
  └── team-4.jpg
```

### 2. Logo en Hero (Sección Principal)
Edita: `src/components/Hero.jsx`

Busca:
```jsx
<div className="placeholder-box">Tu Logo o Imagen</div>
```

Reemplaza con:
```jsx
<img src="/logo.png" alt="Multiaxis SAS" />
```

### 3. Imagen en About
Edita: `src/components/About.jsx`

Busca:
```jsx
<div className="placeholder-box">Imagen de la Empresa</div>
```

Reemplaza con:
```jsx
<img src="/about-image.jpg" alt="Nuestra empresa" />
```

### 4. Fotos del Equipo
Edita: `src/components/Team.jsx`

Busca:
```jsx
<div className="image-placeholder">Foto</div>
```

Reemplaza con:
```jsx
<img src="/team-1.jpg" alt="Nombre del miembro" />
```

---

## 📝 Cambiar Textos

### Información de Contacto
Edita: `src/components/Contact.jsx`

Busca la sección `contact-info` y actualiza:
- Dirección
- Teléfono
- Email
- Horario

### Servicios
Edita: `src/components/Services.jsx`

Modifica el array `services`:
```jsx
const services = [
  {
    title: 'Tu Servicio 1',
    description: 'Descripción de tu servicio',
    icon: '🚀'  // Cambia el emoji
  },
  // ... más servicios
];
```

### Miembros del Equipo
Edita: `src/components/Team.jsx`

Modifica el array `teamMembers`:
```jsx
const teamMembers = [
  {
    name: 'Juan Pérez',
    position: 'CEO',
    description: 'Fundador con 15 años de experiencia'
  },
  // ... más miembros
];
```

### Testimonios
Edita: `src/components/Testimonials.jsx`

Modifica el array `testimonials` con testimonios reales.

---

## 🎨 Cambiar Colores (Si lo necesitas)

Edita: `src/App.css`

Busca `:root` y modifica:
```css
:root {
  --primary-color: #TU_COLOR_AQUI;
  --secondary-color: #TU_COLOR_AQUI;
  --accent-color: #TU_COLOR_AQUI;
}
```

---

## 🔗 Actualizar Redes Sociales

Edita: `src/components/Footer.jsx`

Busca la sección `social-links`:
```jsx
<a href="https://facebook.com/tupagina" className="social-link">Facebook</a>
<a href="https://linkedin.com/company/tuempresa" className="social-link">LinkedIn</a>
```

---

## 📧 Configurar Formulario de Contacto

### Opción 1: Netlify Forms (Fácil)
En `src/components/Contact.jsx`, agrega `netlify` al form:
```jsx
<Form onSubmit={handleSubmit} className="contact-form" netlify>
```

### Opción 2: EmailJS (Gratis)
1. Regístrate en [emailjs.com](https://emailjs.com)
2. Instala: `npm install @emailjs/browser`
3. Configura en el componente Contact

### Opción 3: Tu propio backend
Modifica la función `handleSubmit` en Contact.jsx para enviar a tu API.

---

## 🚀 Comandos Útiles

```bash
# Ver cambios en tiempo real
npm run dev

# Compilar para producción
npm run build

# Vista previa del build
npm run preview
```

---

## ✅ Checklist Antes de Desplegar

- [ ] Agregué mis logos e imágenes
- [ ] Actualicé toda la información de contacto
- [ ] Modifiqué servicios y soluciones según mi negocio
- [ ] Agregué los miembros de mi equipo
- [ ] Configuré las redes sociales en el footer
- [ ] Probé el sitio localmente (`npm run dev`)
- [ ] El build funciona sin errores (`npm run build`)
- [ ] Revisé que todo se vea bien en móvil

---

## 💡 Tips Finales

1. **Optimiza imágenes**: Usa JPG para fotos, PNG para logos
2. **Tamaños recomendados**:
   - Logo: 500x500px
   - Hero: 800x600px
   - Team: 400x400px
3. **Comprime imágenes**: Usa [tinypng.com](https://tinypng.com)

---

**¡Listo para personalizar!** 🎨
