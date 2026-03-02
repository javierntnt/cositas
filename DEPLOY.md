# 🚀 GUÍA RÁPIDA DE DESPLIEGUE EN NETLIFY

## ✅ Pasos para Desplegar

### Método 1: Drag & Drop (Más Rápido)
1. Ejecuta: `npm run build`
2. Ve a [netlify.com](https://netlify.com) y crea una cuenta
3. Arrastra la carpeta `dist` a Netlify
4. ¡Listo! Tu sitio estará en línea

### Método 2: Desde GitHub (Recomendado)
1. Sube tu código a GitHub
2. En Netlify: "New site from Git"
3. Conecta tu repositorio
4. Deploy automático (ya está configurado con netlify.toml)

### Método 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## 📝 Configuración Incluida

El archivo `netlify.toml` ya está configurado con:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects para SPA

## 🎨 Personalizar Antes de Subir

### 1. Agrega tus Logos
- Reemplaza los placeholders en Hero.jsx y Team.jsx
- Coloca tus imágenes en `/public/`

### 2. Actualiza Contenido
Edita estos archivos según tus necesidades:
- `/src/components/About.jsx` - Misión y visión
- `/src/components/Services.jsx` - Tus servicios
- `/src/components/Solutions.jsx` - Tus productos
- `/src/components/Team.jsx` - Tu equipo
- `/src/components/Contact.jsx` - Información de contacto
- `/src/components/Footer.jsx` - Enlaces y redes sociales

### 3. Personaliza Colores (Opcional)
Si quieres cambiar los colores, edita en `/src/App.css` las variables:
```css
:root {
  --primary-color: #2C5F8D;
  --secondary-color: #4A90C7;
  --accent-color: #F39C12;
}
```

## 🔍 Verificar Antes de Subir

```bash
# Ver el sitio localmente
npm run dev

# Compilar para producción
npm run build

# Vista previa del build
npm run preview
```

## 💡 Tips

- El sitio es 100% responsive
- Todas las secciones usan Bootstrap Grid
- Sistema de diseño coherente ya aplicado
- Optimizado para SEO

## 🆘 ¿Necesitas Ayuda?

1. Verifica que todas las dependencias estén instaladas: `npm install`
2. Asegúrate de que el build funcione: `npm run build`
3. Revisa que no haya errores en la consola

---

**¡Tu sitio está listo para desplegar!** 🎉
