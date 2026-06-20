import { Link } from 'waku';
import { PruebasList } from './pruebas';

export default async function HomePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-16 py-8">
      <title>Pruebas Modelos — Benchmark de IA para código</title>

      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Benchmark de modelos de IA para código
        </h1>
        <p className="text-lg leading-relaxed text-gray-600">
          Laboratorio de evaluación de modelos de IA generando código real.{' '}
          Misma feature, mismo prompt, mismos criterios. Resultados
          documentados con puntuaciones, observaciones y el código generado
          funcionando.
        </p>
        <a
          href="https://github.com/arielromano/pruebas-modelos"
          className="inline-block rounded-lg bg-black px-5 py-2.5  font-semibold text-white transition-colors hover:bg-gray-800"
        >
          Ver en GitHub
        </a>
      </section>

      {/* Pruebas */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Pruebas</h2>
        <PruebasList />
      </section>

      {/* Metodología */}
      <section className="space-y-4  text-gray-600">
        <h2 className="text-2xl font-bold text-gray-900">Metodología</h2>
        <p>
          Cada prueba sigue el mismo protocolo: se define un prompt con una
          feature real, se ejecuta en cada modelo con el mismo entorno
          (herramientas, MCPs, plugins) y se evalúa con criterios objetivos.
        </p>
        <p>
          Las evaluaciones se documentan con puntuación desglosada, fortalezas,
          debilidades y el código generado funcionando.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 pt-6  text-gray-400">
        <Link to="/pruebas" className="underline hover:text-gray-600">
          Ver todas las pruebas →
        </Link>
      </footer>
    </div>
  );
}

export const getConfig = async () => {
  return { render: 'static' } as const;
};
