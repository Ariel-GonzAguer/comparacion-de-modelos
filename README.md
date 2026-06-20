# Pruebas Modelos

Laboratorio de evaluación de modelos de IA generando código real. Misma feature, mismo prompt, mismos criterios.

## Ver resultados

Seguí estos pasos para clonar el repo, instalar dependencias y correrlo localmente:

```bash
git clone https://github.com/arielromano/pruebas-modelos.git
cd pruebas-modelos
pnpm install
pnpm dev
```

Abrí http://localhost:3000. También podés forkear el repo desde GitHub y clonar tu fork.

---

Cada prueba consiste en pedirle a varios modelos de IA que implementen una feature con un stack específico, usando el mismo prompt y las mismas herramientas. Los resultados se evalúan con criterios objetivos, se documentan con puntuaciones y observaciones, y el código generado queda funcionando para poder comparar visualmente.

Este repo está pensado para clonar/fork y correr localmente — no está deployado. La idea es que puedas ver el código generado por cada modelo, ejecutarlo en tu máquina y evaluar las diferencias vos mismo.

## Stack

- [Waku](https://waku.gg/) — React framework minimalista
- React 19 + TypeScript 6
- Tailwind CSS 4
- PNPM

---

## Pruebas actuales

| #   | Feature                         | Stack              | Modelos                                         |
| --- | ------------------------------- | ------------------ | ----------------------------------------------- |
| 000 | Listado y filtrado de artículos | React + TypeScript | Mimo v2.5, North Mini Code Free, Codestral 2508 |

---

### Criterios de evaluación

| Criterio                     | Puntos |
| ---------------------------- | ------ |
| Funcionalidad                | 15     |
| TypeScript correcto          | 8      |
| Accesibilidad                | 8      |
| Simplicidad y mantenibilidad | 7      |
| UX y estados vacíos          | 5      |
| Calidad de explicación       | 4      |
| No se sale del alcance       | 3      |
| **Total**                    | **50** |

### Contexto de ejecución

- Herramienta: `opencode`
- MCPs activos: context7, engram, zustand
- Plugin: RTK
