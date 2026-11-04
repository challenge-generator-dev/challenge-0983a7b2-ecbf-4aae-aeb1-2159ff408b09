# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Consultas SQL Básicas y de Optimización**.

| | |
|---|---|
| Tema | Data Manipulation Language (DML) |
| Nivel | trainee-l2 |
| Chapter | Frontend |
| Especialidad | React |
| Stack | TypeScript / React 19 |
| Patron arquitectonico | capas estándar con separación frontend-backend |
| Tiempo estimado | 6 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, vite.config.ts y tsconfig.json en la raiz`
- `src/main.tsx como entry point`
- `src/app con el arbol de rutas`
- `src/features con componentes contenedores y sus hooks`
- `src/shared con componentes presentacionales`
- `src/services con los clientes HTTP`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET. `@types/react-router-dom` ya no se publica para v6+, React Router trae sus tipos.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.

Dependencias:

- react 19.0.0-rc.0
- react-dom 19.0.0-rc.0
- typescript 5.7.0
- @types/react 18.3.3
- @types/react-dom 18.3.0
- vite 5.3.1
- @vitejs/plugin-react 4.3.1
- json-server 0.17.4
- axios 1.7.2
- react-router-dom 6.24.0
- eslint 8.57.0
- @typescript-eslint/eslint-plugin 7.13.1
- @typescript-eslint/parser 7.13.1

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Configuración y Consultas Básicas**: Base de datos configurada con una tabla de productos y consultas CRUD ejecutadas.
- **Fase 2 — Consultas de Optimización**: Consultas de optimización ejecutadas y resultados almacenados.
- **Fase 3 — Validación y Manejo de Errores**: Consultas SQL con validaciones y manejo de errores implementados.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### 1. Referencias colgando (4)

Salieron de un analisis estatico del codigo que SI esta en el repo. Cada una rompe la compilacion:

- [ ] `src/services/productService.ts` — `Product.filter`
      Se invoca `filter` sobre `Product`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/services/productService.ts` — `Product.reduce`
      Se invoca `reduce` sobre `Product`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/components/ProductList.tsx` — `Product.filter`
      Se invoca `filter` sobre `Product`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `package.json` — `typescript@5.7.0`
      typescript declara la version 5.7.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

### Presentes (16)

- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.node.json`
- `src/models/Product.ts`
- `src/main.tsx`
- `index.html`
- `db.json`
- `README.md`
- `src/api/productApi.ts`
- `src/services/productService.ts`
- `src/components/ProductForm.tsx`
- `src/components/ProductList.tsx`
- `src/pages/Home.tsx`
- `src/hooks/useProducts.ts`
- `src/utils/validations.ts`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src`
- `src/api`
- `src/components`
- `src/hooks`
- `src/models`
- `src/pages`
- `src/services`
- `src/utils`
- `public`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar con separación frontend-backend**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2
- Brecha que el reto ataca: Ejecuta consultas SQL básicas CRUD (Create, Insert, Select, Update, Delete) y de optimizacion como Joins, Group By y Order By, en al menos un (1) motor de base de datos como SQL Server, Oracle, PostgreSQL, MySQL, DB2 y SQLite., Ejecuta consultas SQL básicas CRUD (Create, Insert, Select, Update, Delete) y de optimizacion como Joins, Group By y Order By, en al menos un (1) motor de base de datos como SQL Server, Oracle, PostgreSQL, MySQL, DB2 y SQLite.

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
