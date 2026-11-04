# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `src/services/productService.ts` — `Product.filter`: Se invoca `filter` sobre `Product`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/services/productService.ts` — `Product.reduce`: Se invoca `reduce` sobre `Product`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/components/ProductList.tsx` — `Product.filter`: Se invoca `filter` sobre `Product`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `package.json` — `typescript@5.7.0`: typescript declara la version 5.7.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2

### Brecha de conocimiento
Ejecuta consultas SQL básicas CRUD (Create, Insert, Select, Update, Delete) y de optimizacion como Joins, Group By y Order By, en al menos un (1) motor de base de datos como SQL Server, Oracle, PostgreSQL, MySQL, DB2 y SQLite., Ejecuta consultas SQL básicas CRUD (Create, Insert, Select, Update, Delete) y de optimizacion como Joins, Group By y Order By, en al menos un (1) motor de base de datos como SQL Server, Oracle, PostgreSQL, MySQL, DB2 y SQLite.

### Reto
- Tema: Data Manipulation Language (DML)
- Seniority: trainee-l2
- Tipo: practical
- Título: Consultas SQL Básicas y de Optimización
- Tiempo estimado: 6 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración y Consultas Básicas — objetivo: Configurar el entorno y ejecutar consultas CRUD básicas en la base de datos. — entregable (NO resolver): Base de datos configurada con una tabla de productos y consultas CRUD ejecutadas.
- Fase 2: Consultas de Optimización — objetivo: Realizar consultas de optimización como Joins, Group By y Order By. — entregable (NO resolver): Consultas de optimización ejecutadas y resultados almacenados.
- Fase 3: Validación y Manejo de Errores — objetivo: Implementar validaciones y manejar errores en las consultas SQL. — entregable (NO resolver): Consultas SQL con validaciones y manejo de errores implementados.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "inventory-management-system",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "server": "json-server --watch db.json --port 3001",
    "start": "concurrently \"npm run server\" \"npm run dev\""
  },
  "dependencies": {
    "react": "19.0.0-rc.0",
    "react-dom": "19.0.0-rc.0",
    "axios": "1.7.2",
    "react-router-dom": "6.24.0"
  },
  "devDependencies": {
    "@types/react": "18.3.3",
    "@types/react-dom": "18.3.0",
    "@vitejs/plugin-react": "4.3.1",
    "typescript": "5.7.0",
    "vite": "5.3.1",
    "json-server": "0.17.4",
    "eslint": "8.57.0",
    "@typescript-eslint/eslint-plugin": "7.13.1",
    "@typescript-eslint/parser": "7.13.1",
    "concurrently": "8.2.2"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "plugins": [
      "@typescript-eslint",
      "react"
    ],
    "rules": {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }
}

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  esbuild: {
    supported: {
      'top-level-await': true
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
});

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "types": ["vite/client"]
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

// === ARCHIVO: tsconfig.node.json ===
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}

// === ARCHIVO: src/models/Product.ts ===
/**
 * Modelo que define la estructura de un producto en el sistema de gestión de inventario.
 * Incluye validaciones básicas para asegurar integridad de datos.
 */

import { z } from 'zod';

// Esquema de validación para el modelo Product utilizando Zod
// Esto asegura que los datos cumplan con las reglas de negocio antes de ser procesados
export const ProductSchema = z.object({
  id: z.string().uuid().optional(), // ID opcional para casos de creación
  name: z.string()
    .min(1, { message: 'El nombre del producto es requerido' })
    .max(100, { message: 'El nombre no puede exceder 100 caracteres' }),
  price: z.number()
    .positive({ message: 'El precio debe ser un valor positivo' })
    .min(0.01, { message: 'El precio debe ser mayor a 0' }),
  stock: z.number()
    .int({ message: 'El stock debe ser un número entero' })
    .nonnegative({ message: 'El stock no puede ser negativo' }),
  category: z.string()
    .min(1, { message: 'La categoría es requerida' })
    .max(50, { message: 'La categoría no puede exceder 50 caracteres' }),
  description: z.string().max(500, { message: 'La descripción no puede exceder 500 caracteres' }).optional(),
  createdAt: z.date().optional(), // Se asigna automáticamente en el backend
  updatedAt: z.date().optional()  // Se actualiza automáticamente en el backend
});

// Tipo TypeScript derivado del esquema Zod para uso en el código
export type Product = z.infer<typeof ProductSchema>;

// Interfaz para los DTOs de creación y actualización de productos
export interface ProductCreateDTO {
  name: string;
  price: number;
  stock: number;
  category: string;
  description?: string;
}

export interface ProductUpdateDTO {
  name?: string;
  price?: number;
  stock?: number;
  category?: string;
  description?: string;
}

// Clase de error personalizada para validaciones de producto
export class ProductValidationError extends Error {
  constructor(public errors: z.ZodIssue[]) {
    super('Error de validación en el producto');
    this.name = 'ProductValidationError';
  }
}

/**
 * Valida un objeto Product utilizando el esquema Zod
 * @param productData Datos del producto a validar
 * @returns Product validado
 * @throws ProductValidationError si la validación falla
 */
export function validateProduct(productData: unknown): Product {
  const result = ProductSchema.safeParse(productData);
  
  if (!result.success) {
    throw new ProductValidationError(result.error.issues);
  }
  
  return result.data;
}

/**
 * Convierte un Product a ProductCreateDTO
 * @param product Producto a convertir
 * @returns ProductCreateDTO listo para enviar al backend
 */
export function toProductCreateDTO(product: Product): ProductCreateDTO {
  return {
    name: product.name,
    price: product.price,
    stock: product.stock,
    category: product.category,
    description: product.description
  };
}

/**
 * Convierte un Product a ProductUpdateDTO
 * @param product Producto a convertir
 * @returns ProductUpdateDTO listo para enviar al backend
 */
export function toProductUpdateDTO(product: Product): ProductUpdateDTO {
  return {
    name: product.name,
    price: product.price,
    stock: product.stock,
    category: product.category,
    description: product.description
  };
}

/**
 * Crea un producto con valores por defecto
 * @returns Product con valores iniciales válidos
 */
export function createEmptyProduct(): Product {
  return {
    name: '',
    price: 0.01,
    stock: 0,
    category: '',
    description: ''
  };
}

// === ARCHIVO: src/main.tsx ===
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found. Ensure index.html contains <div id="root"></div>');
}

const root = createRoot(container);

const initApp = () => {
  console.info('[System] Inventory Management System starting...');
  console.info('[System] React version:', React.version);
  console.info('[System] Environment:', import.meta.env.MODE);
};

const renderApp = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
  console.info('[System] Application mounted successfully');
};

window.addEventListener('error', (event) => {
  console.error('[Error] Uncaught error:', event.error?.message || event.message);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('[Error] Unhandled promise rejection:', event.reason);
});

initApp();
renderApp();

// === ARCHIVO: index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Sistema de Gestión de Inventario - CRUD de productos con categorías" />
    <meta name="author" content="Equipo de Desarrollo" />
    <meta name="theme-color" content="#1976d2" />
    <title>Sistema de Gestión de Inventario</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f5f5f5;
      }
      #root {
        min-height: 100vh;
      }
      .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-direction: column;
        gap: 16px;
      }
      .loading-spinner {
        width: 48px;
        height: 48px;
        border: 4px solid #e0e0e0;
        border-top-color: #1976d2;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      .loading-text {
        color: #666;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div id="root">
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <div class="loading-text">Cargando aplicación...</div>
      </div>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: db.json ===
{
  "products": [
    {
      "id": 1,
      "name": "Laptop Dell XPS 15",
      "description": "Computadora portátil de alta gama con procesador Intel Core i7",
      "price": 1299.99,
      "stock": 25,
      "categoryId": 1,
      "sku": "LAP-DEL-XPS-15",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    },
    {
      "id": 2,
      "name": "Mouse Inalámbrico Logitech MX Master 3",
      "description": "Mouse ergonómico avanzado con scroll electromagnético",
      "price": 99.99,
      "stock": 150,
      "categoryId": 2,
      "sku": "MOU-LOG-MX3",
      "createdAt": "2024-01-16T14:20:00Z",
      "updatedAt": "2024-01-16T14:20:00Z"
    },
    {
      "id": 3,
      "name": "Teclado Mecánico Corsair K70",
      "description": "Teclado gaming con switches Cherry MX Red",
      "price": 169.99,
      "stock": 80,
      "categoryId": 2,
      "sku": "KEY-COR-K70",
      "createdAt": "2024-01-17T09:15:00Z",
      "updatedAt": "2024-01-17T09:15:00Z"
    },
    {
      "id": 4,
      "name": "Monitor Samsung 27 pulgadas 4K",
      "description": "Monitor UHD con tecnología HDR y panel IPS",
      "price": 449.99,
      "stock": 45,
      "categoryId": 1,
      "sku": "MON-SAM-27-4K",
      "createdAt": "2024-01-18T11:45:00Z",
      "updatedAt": "2024-01-18T11:45:00Z"
    },
    {
      "id": 5,
      "name": "Auriculares Sony WH-1000XM5",
      "description": "Auriculares inalámbricos con cancelación activa de ruido",
      "price": 349.99,
      "stock": 60,
      "categoryId": 3,
      "sku": "AUD-SON-WH1000",
      "createdAt": "2024-01-19T16:30:00Z",
      "updatedAt": "2024-01-19T16:30:00Z"
    },
    {
      "id": 6,
      "name": "Webcam Logitech C920",
      "description": "Cámara web Full HD 1080p con autofocus",
      "price": 79.99,
      "stock": 200,
      "categoryId": 3,
      "sku": "CAM-LOG-C920",
      "createdAt": "2024-01-20T08:00:00Z",
      "updatedAt": "2024-01-20T08:00:00Z"
    },
    {
      "id": 7,
      "name": "Disco SSD Samsung 1TB",
      "description": "Unidad de estado sólido NVMe PCIe 4.0",
      "price": 119.99,
      "stock": 300,
      "categoryId": 4,
      "sku": "SSD-SAM-1TB",
      "createdAt": "2024-01-21T13:10:00Z",
      "updatedAt": "2024-01-21T13:10:00Z"
    },
    {
      "id": 8,
      "name": "Memoria RAM Corsair 16GB DDR5",
      "description": "Kit de memoria DDR5 5600MHz",
      "price": 89.99,
      "stock": 120,
      "categoryId": 4,
      "sku": "RAM-COR-16GB-D5",
      "createdAt": "2024-01-22T10:25:00Z",
      "updatedAt": "2024-01-22T10:25:00Z"
    },
    {
      "id": 9,
      "name": "Cable HDMI 2.1 3 metros",
      "description": "Cable de alta velocidad para conexión 8K",
      "price": 24.99,
      "stock": 500,
      "categoryId": 5,
      "sku": "CAB-HDMI-3M",
      "createdAt": "2024-01-23T15:40:00Z",
      "updatedAt": "2024-01-23T15:40:00Z"
    },
    {
      "id": 10,
      "name": "Hub USB-C 7 puertos",
      "description": "Concentrador USB con alimentación y lector de tarjetas",
      "price": 45.99,
      "stock": 180,
      "categoryId": 5,
      "sku": "HUB-USBC-7P",
      "createdAt": "2024-01-24T12:00:00Z",
      "updatedAt": "2024-01-24T12:00:00Z"
    },
    {
      "id": 11,
      "name": "Tablet iPad Air 10.9",
      "description": "Tablet Apple con chip M1 y pantalla Liquid Retina",
      "price": 599.99,
      "stock": 35,
      "categoryId": 1,
      "sku": "TAB-APL-AIR",
      "createdAt": "2024-01-25T09:30:00Z",
      "updatedAt": "2024-01-25T09:30:00Z"
    },
    {
      "id": 12,
      "name": "Micrófono Blue Yeti",
      "description": "Micrófono USB profesional para streaming y podcasts",
      "price": 129.99,
      "stock": 70,
      "categoryId": 3,
      "sku": "MIC-BLU-YETI",
      "createdAt": "2024-01-26T14:15:00Z",
      "updatedAt": "2024-01-26T14:15:00Z"
    }
  ],
  "categories": [
    {
      "id": 1,
      "name": "Computadoras y Tablets",
      "description": "Equipos de cómputo incluyendo laptops, desktops y tablets",
      "createdAt": "2024-01-01T00:00:00Z"
    },
    {
      "id": 2,
      "name": "Periféricos",
      "description": "Mouse, teclados y accesorios de entrada",
      "createdAt": "2024-01-01T00:00:00Z"
    },
    {
      "id": 3,
      "name": "Audio",
      "description": "Auriculares, micrófonos y dispositivos de audio",
      "createdAt": "2024-01-01T00:00:00Z"
    },
    {
      "id": 4,
      "name": "Almacenamiento",
      "description": "Discos SSD, HDD y memorias RAM",
      "createdAt": "2024-01-01T00:00:00Z"
    },
    {
      "id": 5,
      "name": "Cables y Conectores",
      "description": "Cables HDMI, USB, cargadores y adaptadores",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ]
}

// === ARCHIVO: README.md ===
# Sistema de Gestión de Inventario

Aplicación web frontend desarrollada con React 19 y TypeScript para la gestión de productos y categorías. El sistema permite realizar operaciones CRUD completas sobre el inventario, con validación de datos y manejo de errores robusto.

## Características Principales

- **Gestión de Productos**: Crear, leer, actualizar y eliminar productos del inventario.
- **Gestión de Categorías**: Organización de productos por categorías.
- **Validaciones de Negocio**: Precios no negativos, nombres únicos, stock mínimo.
- **API REST simulada**: Backend simulado con JSON Server.
- **Interfaz Responsive**: Diseño adaptable a diferentes tamaños de pantalla.

## Requisitos Previos

- Node.js versión 20 o superior
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio o extraer los archivos del proyecto.
2. Instalar las dependencias del proyecto:

```bash
npm install
```

Este comando installa todas las dependencias definidas en `package.json`, incluyendo:
- React 19 y React DOM
- TypeScript 5.7
- Vite como bundler
- Axios para llamadas HTTP
- React Router para navegación
- JSON Server para simular la API

## Ejecución del Proyecto

### Modo Desarrollo (con servidor API)

Inicia tanto el servidor de desarrollo como el servidor JSON API simultáneamente:

```bash
npm run start
```

Esto ejecutará:
- Servidor API en `http://localhost:3001`
- Servidor de desarrollo en `http://localhost:5173`

### Modo Desarrollo (solo frontend)

Si solo necesitas el frontend sin la API simulada:

```bash
npm run dev
```

### Build de Producción

Para compilar la aplicación para producción:

```bash
npm run build
```

Este comando ejecuta:
1. Verificación de tipos TypeScript (`tsc`)
2. Build optimizado con Vite

### Previsualización del Build

```bash
npm run preview
```

## Estructura del Proyecto

```
src/
├── api/              # Clientes de API y servicios HTTP
├── components/       # Componentes reutilizables de UI
├── hooks/            # Custom hooks de React
├── models/           # Tipos y esquemas de validación
├── pages/            # Componentes de página completos
├── services/         # Lógica de negocio
├── utils/            # Utilidades y funciones helper
├── App.tsx           # Componente principal
├── main.tsx          # Punto de entrada
└── vite-env.d.ts     # Definiciones de tipos Vite
```

## API Endpoints

JSON Server proporciona los siguientes endpoints REST:

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/products` | Listar todos los productos |
| GET | `/products/:id` | Obtener producto por ID |
| POST | `/products` | Crear nuevo producto |
| PUT | `/products/:id` | Actualizar producto |
| PATCH | `/products/:id` | Actualización parcial |
| DELETE | `/products/:id` | Eliminar producto |
| GET | `/categories` | Listar categorías |
| GET | `/categories/:id` | Obtener categoría por ID |
| POST | `/categories` | Crear categoría |

### Consultas Avanzadas

JSON Server soporta consultas adicionales:

```bash
# Filtrar por campo
GET /products?price_gte=100

# Ordenar resultados
GET /products?_sort=price&_order=desc

# Paginación
GET /products?_page=1&_limit=10

# Relaciones (JOIN)
GET /products?_expand=category
```

## Validaciones Implementadas

El sistema aplica las siguientes validaciones de negocio:

- **Precio**: Debe ser mayor a 0 y tener máximo 2 decimales.
- **Nombre**: Obligatorio, máximo 100 caracteres, debe ser único.
- **Stock**: Debe ser un número entero no negativo.
- **SKU**: Debe ser único y seguir el formato establecido.
- **Categoría**: Debe existir en la base de datos.

## Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript 5.7** - Tipado estático
- **Vite 5.3** - Build tool y servidor de desarrollo
- **Axios 1.7** - Cliente HTTP
- **React Router 6.24** - Navegación entre páginas
- **JSON Server 0.17** - API REST simulada
- **ESLint 8.57** - Linting de código

## Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run build` | Compilar para producción |
| `npm run preview` | Previsualizar build |
| `npm run server` | Iniciar servidor JSON API |
| `npm run start` | Iniciar ambos servidores |

## Contribución

Para extender el proyecto:
1. Añadir nuevos componentes en `src/components/`
2. Crear nuevos servicios en `src/services/`
3. Definir tipos en `src/models/`
4. Agregar nuevas páginas en `src/pages/`

## Licencia

Este proyecto es para fines educativos y de práctica.

// === ARCHIVO: src/api/productApi.ts ===
import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { Product, ProductCreateDTO, ProductUpdateDTO } from '../models/Product';

const API_BASE_URL = 'http://localhost:3001';

class ProductApi {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response) {
          console.error('Error de respuesta del servidor:', error.response.status);
        } else if (error.request) {
          console.error('No se recibió respuesta del servidor');
        } else {
          console.error('Error al configurar la solicitud:', error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  async getAllProducts(): Promise<Product[]> {
    try {
      const response: AxiosResponse<Product[]> = await this.client.get<Product[]>('/products');
      return response.data;
    } catch (error) {
      console.error('Error al obtener todos los productos:', error);
      throw error;
    }
  }

  async getProductById(id: number): Promise<Product> {
    try {
      const response: AxiosResponse<Product> = await this.client.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener el producto con ID ${id}:`, error);
      throw error;
    }
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const response: AxiosResponse<Product[]> = await this.client.get<Product[]>(
        '/products',
        { params: { category } }
      );
      return response.data;
    } catch (error) {
      console.error(`Error al obtener productos de la categoría ${category}:`, error);
      throw error;
    }
  }

  async searchProducts(query: string): Promise<Product[]> {
    try {
      const response: AxiosResponse<Product[]> = await this.client.get<Product[]>('/products', {
        params: { q: query },
      });
      return response.data;
    } catch (error) {
      console.error(`Error al buscar productos con query "${query}":`, error);
      throw error;
    }
  }

  async createProduct(product: ProductCreateDTO): Promise<Product> {
    try {
      const response: AxiosResponse<Product> = await this.client.post<Product>(
        '/products',
        product
      );
      return response.data;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  }

  async updateProduct(id: number, product: ProductUpdateDTO): Promise<Product> {
    try {
      const response: AxiosResponse<Product> = await this.client.patch<Product>(
        `/products/${id}`,
        product
      );
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar el producto con ID ${id}:`, error);
      throw error;
    }
  }

  async deleteProduct(id: number): Promise<void> {
    try {
      await this.client.delete(`/products/${id}`);
    } catch (error) {
      console.error(`Error al eliminar el producto con ID ${id}:`, error);
      throw error;
    }
  }

  async checkProductExistsByName(name: string, excludeId?: number): Promise<boolean> {
    try {
      const products = await this.getAllProducts();
      return products.some(
        (p) => p.name.toLowerCase() === name.toLowerCase() && p.id !== excludeId
      );
    } catch (error) {
      console.error('Error al verificar existencia del producto:', error);
      throw error;
    }
  }
}

export const productApi = new ProductApi();
export default productApi;

// === ARCHIVO: src/services/productService.ts ===
import { productApi } from '../api/productApi';
import {
  Product,
  ProductCreateDTO,
  ProductUpdateDTO,
  validateProduct,
  validateProductUpdate,
  ProductValidationError,
} from '../models/Product';

export interface ProductFilter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  searchQuery?: string;
}

export interface ProductResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

class ProductService {
  async getAllProducts(): Promise<ProductResult<Product[]>> {
    try {
      const products = await productApi.getAllProducts();
      return { success: true, data: products };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al obtener productos';
      return { success: false, error: message };
    }
  }

  async getProductById(id: number): Promise<ProductResult<Product>> {
    if (!id || id <= 0) {
      return { success: false, error: 'ID de producto inválido' };
    }

    try {
      const product = await productApi.getProductById(id);
      return { success: true, data: product };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al obtener el producto';
      return { success: false, error: message };
    }
  }

  async getFilteredProducts(filter: ProductFilter): Promise<ProductResult<Product[]>> {
    try {
      let products = await productApi.getAllProducts();

      if (filter.category) {
        products = products.filter((p) => p.category === filter.category);
      }

      if (filter.minPrice !== undefined) {
        products = products.filter((p) => p.price >= filter.minPrice!);
      }

      if (filter.maxPrice !== undefined) {
        products = products.filter((p) => p.price <= filter.maxPrice!);
      }

      if (filter.inStock) {
        products = products.filter((p) => p.stock > 0);
      }

      if (filter.searchQuery) {
        const query = filter.searchQuery.toLowerCase();
        products = products.filter(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            p.description?.toLowerCase().includes(query)
        );
      }

      return { success: true, data: products };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al filtrar productos';
      return { success: false, error: message };
    }
  }

  async createProduct(productData: ProductCreateDTO): Promise<ProductResult<Product>> {
    const validation = validateProduct(productData);
    if (!validation.success) {
      return {
        success: false,
        error: `Validación fallida: ${validation.errors.map((e) => e.message).join(', ')}`,
      };
    }

    try {
      const exists = await productApi.checkProductExistsByName(productData.name);
      if (exists) {
        return { success: false, error: 'Ya existe un producto con este nombre' };
      }

      const product = await productApi.createProduct(productData);
      return { success: true, data: product };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al crear el producto';
      return { success: false, error: message };
    }
  }

  async updateProduct(id: number, productData: ProductUpdateDTO): Promise<ProductResult<Product>> {
    if (!id || id <= 0) {
      return { success: false, error: 'ID de producto inválido' };
    }

    const validation = validateProductUpdate(productData);
    if (!validation.success) {
      return {
        success: false,
        error: `Validación fallida: ${validation.errors.map((e) => e.message).join(', ')}`,
      };
    }

    try {
      if (productData.name) {
        const exists = await productApi.checkProductExistsByName(productData.name, id);
        if (exists) {
          return { success: false, error: 'Ya existe otro producto con este nombre' };
        }
      }

      const product = await productApi.updateProduct(id, productData);
      return { success: true, data: product };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al actualizar el producto';
      return { success: false, error: message };
    }
  }

  async deleteProduct(id: number): Promise<ProductResult<void>> {
    if (!id || id <= 0) {
      return { success: false, error: 'ID de producto inválido' };
    }

    try {
      await productApi.deleteProduct(id);
      return { success: true };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al eliminar el producto';
      return { success: false, error: message };
    }
  }

  async getProductsByCategory(category: string): Promise<ProductResult<Product[]>> {
    if (!category || category.trim() === '') {
      return { success: false, error: 'Categoría no especificada' };
    }

    try {
      const products = await productApi.getProductsByCategory(category);
      return { success: true, data: products };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al obtener productos por categoría';
      return { success: false, error: message };
    }
  }

  async searchProducts(query: string): Promise<ProductResult<Product[]>> {
    if (!query || query.trim() === '') {
      return { success: false, error: 'Término de búsqueda no especificado' };
    }

    try {
      const products = await productApi.searchProducts(query);
      return { success: true, data: products };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al buscar productos';
      return { success: false, error: message };
    }
  }

  async getLowStockProducts(threshold: number = 10): Promise<ProductResult<Product[]>> {
    try {
      const products = await productApi.getAllProducts();
      const lowStock = products.filter((p) => p.stock > 0 && p.stock <= threshold);
      return { success: true, data: lowStock };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al obtener productos con bajo stock';
      return { success: false, error: message };
    }
  }

  async getOutOfStockProducts(): Promise<ProductResult<Product[]>> {
    try {
      const products = await productApi.getAllProducts();
      const outOfStock = products.filter((p) => p.stock === 0);
      return { success: true, data: outOfStock };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Error desconocido al obtener productos sin stock';
      return { success: false, error: message };
    }
  }

  calculateTotalInventoryValue(products: Product[]): number {
    return products.reduce((total, product) => total + product.price * product.stock, 0);
  }

  calculateAveragePrice(products: Product[]): number {
    if (products.length === 0) return 0;
    const total = products.reduce((sum, p) => sum + p.price, 0);
    return total / products.length;
  }

  groupByCategory(products: Product[]): Record<string, Product[]> {
    return products.reduce((groups, product) => {
      const category = product.category || 'Sin categoría';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(product);
      return groups;
    }, {} as Record<string, Product[]>);
  }
}

export const productService = new ProductService();
export default productService;

// === ARCHIVO: src/components/ProductForm.tsx ===
import { useState, useEffect } from 'react';
import { Product, ProductCreateDTO, ProductUpdateDTO, ProductSchema, ProductValidationError } from '../models/Product';
import { productService } from '../services/productService';
import { validateProduct } from '../utils/validations';

interface ProductFormProps {
  product?: Product | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export function ProductForm({ product, onSuccess, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState<ProductCreateDTO>({
    name: '',
    price: 0,
    stock: 0,
    category: '',
    description: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        stock: product.stock,
        category: product.category,
        description: product.description || '',
      });
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const validation = validateProduct(formData);
      if (!validation.success) {
        const errorMap: Record<string, string> = {};
        validation.error.issues.forEach((issue) => {
          const field = issue.path[0] as string;
          errorMap[field] = issue.message;
        });
        setErrors(errorMap);
        setIsSubmitting(false);
        return;
      }

      if (product?.id) {
        await productService.updateProduct(product.id, formData as ProductUpdateDTO);
      } else {
        await productService.createProduct(formData);
      }

      onSuccess();
    } catch (error) {
      if (error instanceof ProductValidationError) {
        const errorMap: Record<string, string> = {};
        error.errors.forEach((issue) => {
          const field = issue.path[0] as string;
          errorMap[field] = issue.message;
        });
        setErrors(errorMap);
      } else if (error instanceof Error) {
        setSubmitError(`Error al guardar el producto: ${error.message}`);
      } else {
        setSubmitError('Error desconocido al guardar el producto');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
  const errorClasses = "border-red-500";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {product ? 'Editar Producto' : 'Nuevo Producto'}
      </h2>

      {submitError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {submitError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClasses}>Nombre del Producto</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputClasses} ${errors.name ? errorClasses : ''}`}
            placeholder="Ingrese el nombre"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="category" className={labelClasses}>Categoría</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`${inputClasses} ${errors.category ? errorClasses : ''}`}
          >
            <option value="">Seleccione una categoría</option>
            <option value="Electrónica">Electrónica</option>
            <option value="Ropa">Ropa</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Hogar">Hogar</option>
            <option value="Deportes">Deportes</option>
          </select>
          {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
        </div>

        <div>
          <label htmlFor="price" className={labelClasses}>Precio ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0.01"
            step="0.01"
            className={`${inputClasses} ${errors.price ? errorClasses : ''}`}
            placeholder="0.00"
          />
          {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
        </div>

        <div>
          <label htmlFor="stock" className={labelClasses}>Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            min="0"
            className={`${inputClasses} ${errors.stock ? errorClasses : ''}`}
            placeholder="0"
          />
          {errors.stock && <p className="mt-1 text-sm text-red-600">{errors.stock}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="description" className={labelClasses}>Descripción</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className={`${inputClasses} ${errors.description ? errorClasses : ''}`}
          placeholder="Descripción opcional del producto"
        />
        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
      </div>

      <div className="mt-6 flex gap-4 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Guardando...' : product ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  );
}

// === ARCHIVO: src/components/ProductList.tsx ===
import { useState } from 'react';
import { Product } from '../models/Product';
import { productService } from '../services/productService';

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onRefresh: () => void;
}

export function ProductList({ products, onEdit, onRefresh }: ProductListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'stock'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'stock':
        comparison = a.stock - b.stock;
        break;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (column: 'name' | 'price' | 'stock') => {
    if (sortBy === column) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Está seguro de que desea eliminar este producto?')) {
      return;
    }

    setDeletingId(id);
    setDeleteError(null);

    try {
      await productService.deleteProduct(id);
      onRefresh();
    } catch (error) {
      if (error instanceof Error) {
        setDeleteError(`Error al eliminar: ${error.message}`);
      } else {
        setDeleteError('Error desconocido al eliminar el producto');
      }
    } finally {
      setDeletingId(null);
    }
  };

  const getStockClass = (stock: number) => {
    if (stock === 0) return 'text-red-600 font-bold';
    if (stock < 10) return 'text-yellow-600';
    return 'text-green-600';
  };

  const SortIcon = ({ column }: { column: 'name' | 'price' | 'stock' }) => (
    <span className="ml-1">
      {sortBy === column && (sortOrder === 'asc' ? '▲' : '▼')}
    </span>
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl font-bold text-gray-800">Lista de Productos</h2>
          <input
            type="text"
            placeholder="Buscar por nombre o categoría..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
          />
        </div>
        {deleteError && (
          <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {deleteError}
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('name')}
              >
                Nombre <SortIcon column="name" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Categoría
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('price')}
              >
                Precio <SortIcon column="price" />
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('stock')}
              >
                Stock <SortIcon column="stock" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedProducts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  No se encontraron productos
                </td>
              </tr>
            ) : (
              paginatedProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    {product.description && (
                      <div className="text-sm text-gray-500 truncate max-w-xs">
                        {product.description}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={getStockClass(product.stock)}>
                      {product.stock} unidades
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => onEdit(product)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => product.id && handleDelete(product.id)}
                      disabled={deletingId === product.id}
                      className="text-red-600 hover:text-red-900 disabled:opacity-50"
                    >
                      {deletingId === product.id ? 'Eliminando...' : 'Eliminar'}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Mostrando <span className="font-medium">{startIndex + 1}</span> a{' '}
            <span className="font-medium">{Math.min(startIndex + itemsPerPage, sortedProducts.length)}</span> de{' '}
            <span className="font-medium">{sortedProducts.length}</span> resultados
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// === ARCHIVO: src/pages/Home.tsx ===
import { useState, useCallback, useEffect } from 'react';
import { Product } from '../models/Product';
import { ProductForm } from '../components/ProductForm';
import { ProductList } from '../components/ProductList';
import { useProducts } from '../hooks/useProducts';
import { productService } from '../services/productService';

export function Home() {
  const { products, loading, error, refreshProducts } = useProducts();
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    if (error) {
      showNotification('error', error);
    }
  }, [error]);

  const showNotification = useCallback((type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  }, []);

  const handleCreateClick = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleFormSuccess = useCallback(() => {
    setShowForm(false);
    setEditingProduct(null);
    refreshProducts();
    showNotification('success', editingProduct ? 'Producto actualizado correctamente' : 'Producto creado correctamente');
  }, [editingProduct, refreshProducts, showNotification]);

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleRefresh = useCallback(() => {
    refreshProducts();
  }, [refreshProducts]);

  const getStatistics = useCallback(() => {
    const total = products.length;
    const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
    const outOfStock = products.filter(p => p.stock === 0).length;
    const lowStock = products.filter(p => p.stock > 0 && p.stock < 10).length;

    return { total, totalValue, outOfStock, lowStock };
  }, [products]);

  const stats = getStatistics();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Sistema de Gestión de Inventario
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {notification && (
          <div
            className={`mb-4 p-4 rounded-lg shadow-md ${
              notification.type === 'success'
                ? 'bg-green-100 border border-green-400 text-green-700'
                : 'bg-red-100 border border-red-400 text-red-700'
            }`}
          >
            {notification.message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-sm font-medium text-gray-500">Total de Productos</div>
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-sm font-medium text-gray-500">Valor Total del Inventario</div>
            <div className="text-2xl font-bold text-gray-900">${stats.totalValue.toFixed(2)}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-sm font-medium text-gray-500">Productos Agotados</div>
            <div className={`text-2xl font-bold ${stats.outOfStock > 0 ? 'text-red-600' : 'text-gray-900'}`}>
              {stats.outOfStock}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-sm font-medium text-gray-500">Stock Bajo</div>
            <div className={`text-2xl font-bold ${stats.lowStock > 0 ? 'text-yellow-600' : 'text-gray-900'}`}>
              {stats.lowStock}
            </div>
          </div>
        </div>

        <div className="mb-6 flex justify-end">
          <button
            onClick={handleCreateClick}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            + Nuevo Producto
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <ProductForm
                product={editingProduct}
                onSuccess={handleFormSuccess}
                onCancel={handleFormCancel}
              />
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-4 text-gray-600">Cargando productos...</span>
          </div>
        ) : (
          <ProductList
            products={products}
            onEdit={handleEditClick}
            onRefresh={handleRefresh}
          />
        )}
      </main>
    </div>
  );
}

// === ARCHIVO: src/hooks/useProducts.ts ===
import { useState, useCallback, useEffect } from 'react';
import { Product, ProductCreateDTO, ProductUpdateDTO } from '../models/Product';
import { validateProduct, validateProductUpdate, ProductValidationError } from '../models/Product';
import { productService } from '../services/productService';

export interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  createProduct: (data: ProductCreateDTO) => Promise<Product | null>;
  updateProduct: (id: number, data: ProductUpdateDTO) => Promise<Product | null>;
  deleteProduct: (id: number) => Promise<boolean>;
  getProductById: (id: number) => Promise<Product | null>;
  clearError: () => void;
  validationErrors: ProductValidationError | null;
}

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ProductValidationError | null>(null);

  const fetchProducts = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);
    setValidationErrors(null);
    
    try {
      const data = await productService.getAll();
      setProducts(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al cargar productos';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const createProduct = useCallback(async (data: ProductCreateDTO): Promise<Product | null> => {
    setLoading(true);
    setError(null);
    setValidationErrors(null);

    try {
      const validationResult = validateProduct(data);
      
      if (!validationResult) {
        setValidationErrors(new ProductValidationError([
          { message: 'Validación fallida', code: 'custom', path: [] }
        ]));
        setLoading(false);
        return null;
      }

      const existingProducts = await productService.getAll();
      const nameExists = existingProducts.some(
        p => p.nombre.toLowerCase() === data.nombre.toLowerCase()
      );

      if (nameExists) {
        setValidationErrors(new ProductValidationError([
          { 
            message: `El producto "${data.nombre}" ya existe`, 
            code: 'custom', 
            path: ['nombre'] 
          }
        ]));
        setLoading(false);
        return null;
      }

      if (data.precio < 0) {
        setValidationErrors(new ProductValidationError([
          { 
            message: 'El precio no puede ser negativo', 
            code: 'custom', 
            path: ['precio'] 
          }
        ]));
        setLoading(false);
        return null;
      }

      const newProduct = await productService.create(data);
      setProducts(prev => [...prev, newProduct]);
      setLoading(false);
      return newProduct;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al crear producto';
      setError(errorMessage);
      setLoading(false);
      return null;
    }
  }, []);

  const updateProduct = useCallback(async (id: number, data: ProductUpdateDTO): Promise<Product | null> => {
    setLoading(true);
    setError(null);
    setValidationErrors(null);

    try {
      const validationResult = validateProductUpdate(data);
      
      if (!validationResult) {
        setValidationErrors(new ProductValidationError([
          { message: 'Validación fallida', code: 'custom', path: [] }
        ]));
        setLoading(false);
        return null;
      }

      if (data.nombre) {
        const existingProducts = await productService.getAll();
        const nameExists = existingProducts.some(
          p => p.id !== id && p.nombre.toLowerCase() === data.nombre!.toLowerCase()
        );

        if (nameExists) {
          setValidationErrors(new ProductValidationError([
            { 
              message: `Ya existe otro producto con el nombre "${data.nombre}"`, 
              code: 'custom', 
              path: ['nombre'] 
            }
          ]));
          setLoading(false);
          return null;
        }
      }

      if (data.precio !== undefined && data.precio < 0) {
        setValidationErrors(new ProductValidationError([
          { 
            message: 'El precio no puede ser negativo', 
            code: 'custom', 
            path: ['precio'] 
          }
        ]));
        setLoading(false);
        return null;
      }

      const updatedProduct = await productService.update(id, data);
      setProducts(prev => prev.map(p => p.id === id ? updatedProduct : p));
      setLoading(false);
      return updatedProduct;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al actualizar producto';
      setError(errorMessage);
      setLoading(false);
      return null;
    }
  }, []);

  const deleteProduct = useCallback(async (id: number): Promise<boolean> => {
    setLoading(true);
    setError(null);
    setValidationErrors(null);

    try {
      await productService.delete(id);
      setProducts(prev => prev.filter(p => p.id !== id));
      setLoading(false);
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error al eliminar producto';
      setError(errorMessage);
      setLoading(false);
      return false;
    }
  }, []);

  const getProductById = useCallback(async (id: number): Promise<Product | null> => {
    setLoading(true);
    setError(null);

    try {
      const product = await productService.getById(id);
      setLoading(false);
      return product;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Producto no encontrado';
      setError(errorMessage);
      setLoading(false);
      return null;
    }
  }, []);

  const clearError = useCallback((): void => {
    setError(null);
    setValidationErrors(null);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    clearError,
    validationErrors
  };
}

// === ARCHIVO: src/utils/validations.ts ===
import { Product, ProductCreateDTO, ProductUpdateDTO } from '../models/Product';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validatePrice(price: number): ValidationResult {
  const errors: string[] = [];
  
  if (typeof price !== 'number' || isNaN(price)) {
    errors.push('El precio debe ser un número válido');
  } else if (price < 0) {
    errors.push('El precio no puede ser negativo');
  } else if (price > 999999.99) {
    errors.push('El precio excede el límite máximo permitido');
  } else if (!Number.isFinite(price)) {
    errors.push('El precio debe ser un número finito');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateProductName(name: string, existingNames: string[] = []): ValidationResult {
  const errors: string[] = [];
  
  if (!name || typeof name !== 'string') {
    errors.push('El nombre es obligatorio');
  } else {
    const trimmedName = name.trim();
    
    if (trimmedName.length === 0) {
      errors.push('El nombre no puede estar vacío');
    } else if (trimmedName.length < 2) {
      errors.push('El nombre debe tener al menos 2 caracteres');
    } else if (trimmedName.length > 100) {
      errors.push('El nombre no puede exceder 100 caracteres');
    }

    const nameExists = existingNames.some(
      existing => existing.toLowerCase() === trimmedName.toLowerCase()
    );
    
    if (nameExists) {
      errors.push(`Ya existe un producto con el nombre "${trimmedName}"`);
    }

    const invalidChars = /[<>"'&]/;
    if (invalidChars.test(trimmedName)) {
      errors.push('El nombre contiene caracteres no permitidos');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateStock(stock: number): ValidationResult {
  const errors: string[] = [];
  
  if (typeof stock !== 'number' || isNaN(stock)) {
    errors.push('El stock debe ser un número válido');
  } else if (!Number.isInteger(stock)) {
    errors.push('El stock debe ser un número entero');
  } else if (stock < 0) {
    errors.push('El stock no puede ser negativo');
  } else if (stock > 10000) {
    errors.push('El stock excede el límite máximo permitido');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateCategory(category: string): ValidationResult {
  const errors: string[] = [];
  const validCategories = [
    'Electrónica',
    'Ropa',
    'Alimentos',
    'Hogar',
    'Deportes',
    'Juguetes',
    'Libros',
    'Otros'
  ];
  
  if (!category || typeof category !== 'string') {
    errors.push('La categoría es obligatoria');
  } else {
    const trimmedCategory = category.trim();
    
    if (trimmedCategory.length === 0) {
      errors.push('La categoría no puede estar vacía');
    } else if (trimmedCategory.length > 50) {
      errors.push('La categoría no puede exceder 50 caracteres');
    } else if (!validCategories.some(c => c.toLowerCase() === trimmedCategory.toLowerCase())) {
      errors.push(`Categoría inválida. Las categorías válidas son: ${validCategories.join(', ')}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateProductData(
  data: ProductCreateDTO | ProductUpdateDTO,
  existingNames: string[] = []
): ValidationResult {
  const allErrors: string[] = [];

  if ('nombre' in data && data.nombre !== undefined) {
    const nameResult = validateProductName(data.nombre, existingNames);
    allErrors.push(...nameResult.errors);
  }

  if ('precio' in data && data.precio !== undefined) {
    const priceResult = validatePrice(data.precio);
    allErrors.push(...priceResult.errors);
  }

  if ('stock' in data && data.stock !== undefined) {
    const stockResult = validateStock(data.stock);
    allErrors.push(...stockResult.errors);
  }

  if ('categoría' in data && data.categoría !== undefined) {
    const categoryResult = validateCategory(data.categoría);
    allErrors.push(...categoryResult.errors);
  }

  return {
    isValid: allErrors.length === 0,
    errors: allErrors
  };
}

export function validateCompleteProduct(product: Product): ValidationResult {
  const allErrors: string[] = [];
  
  const nameResult = validateProductName(product.nombre);
  allErrors.push(...nameResult.errors);

  const priceResult = validatePrice(product.precio);
  allErrors.push(...priceResult.errors);

  const stockResult = validateStock(product.stock);
  allErrors.push(...stockResult.errors);

  const categoryResult = validateCategory(product.categoría);
  allErrors.push(...categoryResult.errors);

  if (!product.id || product.id <= 0) {
    allErrors.push('ID de producto inválido');
  }

  return {
    isValid: allErrors.length === 0,
    errors: allErrors
  };
}

export function sanitizeProductInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/<[^>]*>/g, '')
    .replace(/["']/g, '')
    .replace(/&/g, '&amp;')
    .substring(0, 100);
}

export function formatPriceForDisplay(price: number, currency: string = 'USD'): string {
  if (typeof price !== 'number' || isNaN(price)) {
    return '0.00';
  }

  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
}

export function parsePriceInput(input: string): number | null {
  const cleaned = input.replace(/[^0-9.,-]/g, '').replace(',', '.');
  const parsed = parseFloat(cleaned);
  
  if (isNaN(parsed)) {
    return null;
  }
  
  return Math.round(parsed * 100) / 100;
}
```
