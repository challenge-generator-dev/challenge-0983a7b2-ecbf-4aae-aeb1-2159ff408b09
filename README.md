# Consultas SQL Básicas y de Optimización

El sistema de gestión de inventario requiere la ejecución de consultas SQL para manejar productos. Debes realizar operaciones CRUD básicas (Crear, Insertar, Seleccionar, Actualizar, Eliminar) y consultas de optimización como Joins, Group By y Order By en una base de datos. Los productos tienen atributos como nombre, precio, stock y categoría. Debes asegurar que los precios no sean negativos y que los nombres no se dupliquen. Ante una validación fallida, debes decidir cómo estructurar la respuesta y qué acciones tomar.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Data Manipulation Language (DML) |
| **Nivel** | trainee-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 6 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración y Consultas Básicas

**Objetivo:** Configurar el entorno y ejecutar consultas CRUD básicas en la base de datos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configura tu entorno de desarrollo con una base de datos SQL.
- Crea una tabla para almacenar productos con los atributos mencionados.
- Ejecuta consultas para insertar, seleccionar, actualizar y eliminar productos.
- Asegúrate de que los precios no sean negativos y los nombres no se dupliquen.

**Entregable:** Base de datos configurada con una tabla de productos y consultas CRUD ejecutadas.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda las restricciones de negocio al insertar y actualizar productos.
- Utiliza la cláusula WHERE para seleccionar productos específicos.

</details>

### Fase 2: Consultas de Optimización

**Objetivo:** Realizar consultas de optimización como Joins, Group By y Order By.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Realiza una consulta que una datos de dos tablas utilizando Joins.
- Agrupa productos por categoría utilizando Group By y calcula el total de stock por categoría.
- Ordena los productos por precio de manera ascendente y descendente utilizando Order By.

**Entregable:** Consultas de optimización ejecutadas y resultados almacenados.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza las cláusulas INNER JOIN, LEFT JOIN y RIGHT JOIN según sea necesario.
- Aplica la función SUM para calcular totales en Group By.
- Usa las cláusulas ASC y DESC en Order By para ordenar los resultados.

</details>

### Fase 3: Validación y Manejo de Errores

**Objetivo:** Implementar validaciones y manejar errores en las consultas SQL.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Implementa validaciones para asegurar que los precios no sean negativos y los nombres no se dupliquen.
- Maneja errores que puedan ocurrir durante la ejecución de las consultas, como violaciones de claves foráneas o intentos de inserción de datos duplicados.
- Decide cómo estructurar la respuesta y qué acciones tomar ante una validación fallida.

**Entregable:** Consultas SQL con validaciones y manejo de errores implementados.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza cláusulas CHECK para validar los datos al insertar o actualizar.
- Maneja excepciones y errores utilizando bloques TRY-CATCH.
- Decide si devuelves un mensaje de error al usuario o realizas una acción correctiva automática.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son las consultas SQL y para qué se utilizan?
- **paraQueSirve**: ¿Para qué sirve realizar consultas de optimización como Joins, Group By y Order By?
- **comoSeUsa**: ¿Cómo se utilizan las cláusulas CHECK y TRY-CATCH en las consultas SQL?
- **erroresComunes**: ¿Cuáles son los errores comunes al ejecutar consultas SQL y cómo se pueden manejar?
- **queDecisionesImplica**: ¿Qué decisiones implica el manejo de errores en las consultas SQL?

## Criterios de Evaluacion

- Configurar el entorno de desarrollo y ejecutar consultas CRUD básicas.
- Realizar consultas de optimización como Joins, Group By y Order By.
- Implementar validaciones y manejar errores en las consultas SQL.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
