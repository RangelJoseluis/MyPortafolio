#!/bin/bash
# Panel de Control - Portafolio Next.js
# Ejecutar en terminal: bash PANEL_CONTROL.sh

clear

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                                                                ║"
echo "║        🌐 PORTAFOLIO INTERACTIVO - PANEL DE CONTROL          ║"
echo "║                                                                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "📦 Proyecto: portafolio-next"
echo "📍 Ubicación: $(pwd)"
echo "🕐 Fecha: $(date)"
echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "📚 DOCUMENTACIÓN"
echo ""
echo "  [1] 📖 Índice principal (comienza aquí)"
echo "  [2] 🎯 Resumen final"
echo "  [3] 📸 Agregar foto"
echo "  [4] ✅ Checklist de personalizaciones"
echo "  [5] 🎨 Guía del componente interactivo"
echo "  [6] 💻 Explicación técnica"
echo "  [7] 📋 README del portafolio"
echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "🚀 ACCIONES RÁPIDAS"
echo ""
echo "  [a] ▶️  Iniciar servidor (npm run dev)"
echo "  [b] 🏗️  Build para producción (npm run build)"
echo "  [c] 🌍 Abrir en navegador http://localhost:3000"
echo "  [d] 📁 Abrir carpeta src/"
echo "  [e] 🎨 Abrir VS Code"
echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "📊 INFORMACIÓN DEL PROYECTO"
echo ""

# Contar archivos
COMPONENTS=$(ls -la src/components/ 2>/dev/null | wc -l)
DOCS=$(ls -la *.md 2>/dev/null | wc -l)

echo "  ✓ Componentes: $COMPONENTS"
echo "  ✓ Archivos de documentación: $DOCS"
echo "  ✓ Versión de Node: $(node --version 2>/dev/null || echo 'No instalado')"
echo "  ✓ Versión de npm: $(npm --version 2>/dev/null || echo 'No instalado')"
echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "🎯 PRÓXIMOS PASOS"
echo ""
echo "  1. Lee: INDEX.md (opción [1])"
echo "  2. Ejecuta: npm run dev (opción [a])"
echo "  3. Abre: http://localhost:3000"
echo "  4. Personaliza: Sigue el CHECKLIST"
echo "  5. Publica: Deploy a Vercel"
echo ""
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "Selecciona una opción (1-7, a-e, o presiona Enter para salir):"
echo ""

read -p "> " option

case $option in
    1)
        cat INDEX.md | less
        ;;
    2)
        cat RESUMEN_FINAL.md | less
        ;;
    3)
        cat AGREGAR_FOTO.md | less
        ;;
    4)
        cat CHECKLIST_PERSONALIZACIONES.md | less
        ;;
    5)
        cat HERO_INTERACTIVE_GUIDE.md | less
        ;;
    6)
        cat EFECTO_DEMO.md | less
        ;;
    7)
        cat PORTAFOLIO_README.md | less
        ;;
    a)
        echo "🚀 Iniciando servidor..."
        npm run dev
        ;;
    b)
        echo "🏗️  Compilando para producción..."
        npm run build
        ;;
    c)
        echo "🌍 Abriendo en navegador..."
        open http://localhost:3000 2>/dev/null || xdg-open http://localhost:3000 2>/dev/null || start http://localhost:3000
        ;;
    d)
        echo "📁 Abriendo VS Code..."
        code .
        ;;
    e)
        echo "📁 Listando archivos..."
        ls -la src/
        ;;
    *)
        echo "👋 ¡Hasta luego!"
        ;;
esac
