# 🖼️ Imágenes de Proyectos - URLs Unsplash

## ¿Cómo usar estas imágenes?

Todas las imágenes están optimizadas con parámetros de Unsplash para responsividad:
- `w=400` - ancho de 400px
- `h=300` - alto de 300px
- `fit=crop` - recorte automático

Actualmente están siendo usadas en `src/components/Projects.tsx`

---

## 📸 **Proyectos con sus imágenes**

### 1. **E-commerce Moderno**
```
https://images.unsplash.com/photo-1516321318423-f06f70f504de?w=400&h=300&fit=crop
```
📷 Carrito de compras / Plataforma de ventas
👁️ Azul, profesional

### 2. **App de Tareas Colaborativa**
```
https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop
```
📷 Productividad / Gestión
👁️ Gráficos, datos

### 3. **Dashboard Analítico**
```
https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop
```
📷 Gráficos / Estadísticas
👁️ Código, desarrollo

### 4. **Portfolio Personal**
```
https://images.unsplash.com/photo-1467232557539-ea2500142f5f?w=400&h=300&fit=crop
```
📷 Diseño / UX
👁️ Elegante, minimalista

### 5. **Red Social Minimalista**
```
https://images.unsplash.com/photo-1460925895917-afdab655c0c1?w=400&h=300&fit=crop
```
📷 Social media / Comunidad
👁️ Moderno, dinámico

### 6. **Blog de Tecnología**
```
https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop
```
📷 Escritura / Contenido
👁️ Inspirador, educativo

---

## 🎯 **Cómo cambiar las imágenes**

### Opción 1: Usar otras de Unsplash
1. Ve a https://unsplash.com
2. Busca una imagen
3. Copia el URL de la foto
4. Agrega los parámetros:
```
?w=400&h=300&fit=crop
```

### Opción 2: Subir tus propias imágenes
1. Crea una carpeta `proyectos` en `public/images/`
   ```
   public/images/proyectos/proyecto1.jpg
   ```
2. Cambia el URL en `src/components/Projects.tsx`:
   ```tsx
   image: '/images/proyectos/proyecto1.jpg',
   ```

### Opción 3: Usar un CDN
Sube a Cloudinary, Imgix o similar y copia el URL.

---

## 📝 **Cómo editar los proyectos**

Abre `src/components/Projects.tsx` y busca:

```tsx
const projects: Project[] = [
  {
    id: 1,
    title: 'Tu Nuevo Título',                    // ← Cambia aquí
    description: 'Nueva descripción',             // ← Y aquí
    image: 'URL_NUEVA_IMAGEN',                   // ← Y aquí
    category: 'Web',                             // ← Categoría
    tags: ['Tech1', 'Tech2', 'Tech3'],           // ← Tecnologías usadas
    link: 'https://tu-proyecto.com',             // ← Link del proyecto
  },
];
```

---

## 🎨 **Categorías disponibles**

```
✅ Web       - Aplicaciones web
✅ Dashboard - Paneles de control
✅ Diseño    - Portafolios, UX/UI
✅ Social    - Redes sociales, comunidades
✅ Blog      - Plataformas de contenido
```

---

## 🚀 **Más opciones de búsqueda en Unsplash**

Busca términos como:
- "e-commerce"
- "dashboard"
- "app"
- "technology"
- "design"
- "web development"
- "coding"
- "programming"
- "productivity"

Todos los resultados tienen licencia Unsplash (gratis para usar).

---

## 📊 **Tamaño recomendado**

- **Ancho**: 400px (se redimensiona responsive)
- **Alto**: 300px
- **Formato**: JPG o WebP
- **Compresión**: Optimizada por Unsplash

---

## ✨ **Pro Tips**

1. **Usa colores consistentes** - Las imágenes deben tener tonos similares
2. **Elige imágenes profesionales** - No uses fotos borrosas
3. **Evita texto** en las imágenes - El overlay lo cubrirá
4. **Proporciones 4:3** - Mantén esta relación

---

## 🔗 **Links útiles**

- 🖼️ Unsplash: https://unsplash.com
- 🎨 Pexels: https://www.pexels.com
- 📷 Pixabay: https://pixabay.com
- ☁️ Cloudinary: https://cloudinary.com
- 🚀 Vercel CDN: Para alojar imágenes

---

**¡Las imágenes hacen la diferencia! Elige las que mejor representen tus proyectos.** 📸
