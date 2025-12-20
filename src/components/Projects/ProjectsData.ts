export interface ProjectImage {
    url: string;
    caption: string; // Título o nombre de la vista
    description?: string; // Descripción detallada de la funcionalidad
}

export interface Project {
    id: number;
    title: string;
    shortDescription: string; // Descripción corta para la tarjeta
    fullDescription: string; // Descripción detallada para el modal
    thumbnail: string; // Imagen principal para la tarjeta
    status: 'Finalizado' | 'En Desarrollo';
    technologies: string[];
    album: ProjectImage[]; // Array de imágenes para el modal
    githubUrl?: string;
    liveUrl?: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Plataforma de Venta de Lotes",
        shortDescription: "Sistema integral para la gestión y venta de terrenos inmobiliarios.",
        fullDescription: "Una solución completa para inmobiliarias que permite gestionar el inventario de lotes, procesar ventas, generar contratos automáticos y visualizar el estado de los terrenos en un mapa interactivo.",
        thumbnail: "/images/projects/ventaDeLotes/Dashboard_Principal.png",
        status: "Finalizado",
        technologies: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "React"],
        album: [
            {
                url: "/images/projects/ventaDeLotes/Dashboard_Principal.png",
                caption: "Dashboard Principal",
                description: "Una vista centralizada que utiliza KPIs en tiempo real para mostrar el estado del inventario (lotes disponibles, vendidos, en cuotas) y el valor total del proyecto. Demuestra tu capacidad para crear interfaces intuitivas orientadas a la toma de decisiones.Qué capturar: Asegúrate de que se vean las tarjetas de estadísticas y el gráfico de \"Valor Total del Inventario\""
            },
            {
                url: "/images/projects/ventaDeLotes/Mapa_Interactivo_Lotes.png",
                caption: "Mapa Interactivo",
                description: "El corazón del sistema. Un mapa interactivo desarrollado con Leaflet que permite visualizar la lotificación mediante polígonos dinámicos. Los colores cambian en tiempo real según el estado (Verde: Disponible, Naranja: En Cuotas, Rojo: Vendido). Qué capturar: El mapa con los polígonos cargados y, si es posible, el tooltip o popup que aparece al hacer clic en un lote."
            },
            {
                url: "/images/projects/ventaDeLotes/Gestión_Ventas_Contratos.png",
                caption: "Gestión de Ventas",
                description: "Gestión completa del proceso comercial. Este módulo maneja la lógica compleja de ventas al contado y a crédito, vinculando clientes con lotes específicos y generando automáticamente planes de pago. Qué capturar: La tabla de ventas donde se vean los estados \"ACTIVA\" y los montos pendientes. Es una prueba de manejo de lógica de negocio compleja."
            },
            {
                url: "/images/projects/ventaDeLotes/Reportes_Analítica_Financiera.png",
                caption: "Reportes y Analítica",
                description: "Un módulo dedicado al análisis de datos financieros. Incluye estadísticas de cobranza, historial de movimientos y proyecciones de ingresos. Utiliza gráficos dinámicos para representar la salud financiera del proyecto.Qué capturar: La pestaña de \"Estadísticas Generales\" con los gráficos de barras o circulares"
            },
            {
                url: "/images/projects/ventaDeLotes/Portal_Cliente.png",
                caption: "Portal del Cliente",
                description: "Una interfaz dedicada para que los compradores puedan seguir el estado de sus pagos, descargar recibos y ver la evolución de su inversión. Demuestra un enfoque en el usuario final y seguridad en el acceso a datos. Qué capturar: La vista donde el cliente ve sus lotes adquiridos y su historial de pagos."
            },
            {
                url: "/images/projects/ventaDeLotes/Catálogo_Modelos_Casa.png",
                caption: "Catálogo de Modelos",
                description: "Galería de modelos de construcción disponibles para cada lote. Permite asociar diseños específicos con terrenos, facilitando la venta cruzada de terreno + construcción. Qué capturar: La cuadrícula de modelos de casa con sus especificaciones (m², habitaciones, baños)."
            },
            {
                url: "/images/projects/ventaDeLotes/Gestión_Cobranzas.png",
                caption: "Módulo de Cobranzas",
                description: "Funcionalidad crítica para la sostenibilidad del negocio. Detecta automáticamente pagos vencidos, calcula intereses de mora y genera alertas para el equipo administrativo. Qué capturar: La vista de \"Gestión de Mora\" con las alertas en rojo. Esto demuestra que tu sistema resuelve problemas reales de negocio."
            }
        ]
    },
    {
        id: 2,
        title: "Terminal de Punto de Venta (POS) de Alta Eficiencia",
        shortDescription: "Interfaz optimizada para ventas rápidas con soporte para múltiples métodos de pago, gestión de impuestos dinámica y búsqueda de productos con respuesta instantánea.",
        fullDescription: "Una plataforma robusta diseñada para entornos de alto tráfico, enfocada en la velocidad de operación y la precisión en el manejo de inventarios y finanzas.",
        thumbnail: "/images/projects/Pos/Dashboard-superAdmin.png",
        status: "En Desarrollo",
        technologies: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "React"],
        album: [
            {
                url: "/images/projects/Pos/Dashboard-superAdmin.png",
                caption: "Administración SaaS",
                description: "Gestión multi-empresa que permite controlar múltiples sucursales desde una sola cuenta con aislamiento total de datos."
            },
            {
                url: "/images/projects/Pos/Dashbord-Negocio.png",
                caption: "Dashboard Terminal de Punto de Venta (POS) de Alta Eficiencia",
                description: "Interfaz optimizada para ventas rápidas con soporte para múltiples métodos de pago, gestión de impuestos dinámica y búsqueda de productos con respuesta instantánea. Diseñada para minimizar los clics y maximizar la productividad del cajero. Funcionalidades Clave: Carrito de compras interactivo con cálculo automático de totales. Integración de clientes al proceso de venta (CRM integrado). Manejo de variantes de productos (tallas, colores, etc.)."
            },
            {
                url: "/images/projects/Pos/Inventario_Negocio.png",
                caption: "Sistema Avanzado de Control de Inventarios y Variantes",
                description: "Módulo integral para la gestión de productos, categorías y stock. Incluye un sistema robusto de variantes que permite manejar múltiples versiones de un mismo producto bajo un solo registro, facilitando el control de existencias. Funcionalidades Clave: Organización por categorías jerárquicas. Alertas de stock bajo. Gestión de impuestos por producto."
            },
            {
                url: "/images/projects/Pos/Reportes_avanzados.png",
                caption: "Módulo de Business Intelligence y Reportes",
                description: "Visualización de datos históricos de ventas que permite a los dueños de negocios analizar el rendimiento por periodos, identificar productos estrella y entender el comportamiento de sus ingresos mediante gráficas y tablas detalladas. Funcionalidades Clave: Historial de ventas con filtros avanzados. Detalle de transacciones y métodos de pago utilizados. Exportación de datos para contabilidad."
            },
            {
                url: "/images/projects/Pos/Gestión_Clientes.png",
                caption: "CRM Integrado para Gestión de Clientes",
                description: "Base de datos centralizada de clientes que permite realizar un seguimiento de las compras, gestionar información de contacto y aplicar estrategias de fidelización directamente desde el punto de venta. Funcionalidades Clave: Perfil detallado de cliente. Historial de compras por cliente. Búsqueda rápida durante el checkout."
            },
        
            {
                url: "/images/projects/Pos/Middleware_Seguridad_Multi-tenant.png",
                caption: "Arquitectura Multi-tenant con Aislamiento de Datos",
                description: "Implementación de una arquitectura SaaS donde cada empresa (tenant) tiene su propio entorno aislado. El sistema garantiza la seguridad y privacidad de los datos mediante Guards de NestJS y una estructura de base de datos diseñada para la escalabilidad masiva. Funcionalidades Clave: Aislamiento total de datos entre empresas. Autenticación JWT con roles y permisos (RBAC). Middleware de validación de suscripción activa."
            }
        ]
    }
];

