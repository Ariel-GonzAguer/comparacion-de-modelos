import { Link } from 'waku';

const scenarios = [
  {
    id: 'listado-filtrado',
    title: 'Listado y filtrado de artículos',
    stack: 'React + TypeScript',
    description:
      'Componente con búsqueda client-side, filtro por tags, orden por fecha, estado vacío y accesibilidad.',
    models: 3,
    href: '/articles',
  },
];

export default async function HomePage() {
  const data = await getData();

  return (
    <div className="mx-auto max-w-3xl space-y-16 py-8">
      <title>{data.title}</title>

      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          {data.headline}
        </h1>
        <p className="text-lg leading-relaxed text-gray-600">
          Laboratorio de evaluación de modelos de IA generando código real.{' '}
          Misma feature, mismo prompt, mismos criterios. Resultados
          documentados con puntuaciones, observaciones y el código generado
          funcionando.
        </p>
        <a
          href="https://github.com/arielromano/pruebas-modelos"
          className="inline-block rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
        >
          Ver en GitHub
        </a>
      </section>

      {/* Pruebas */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Pruebas</h2>
        <div className="grid gap-4">
          {scenarios.map((s) => (
            <Link
              key={s.id}
              to={s.href}
              className="group block rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500">{s.stack}</p>
                  <p className="text-sm text-gray-600">{s.description}</p>
                </div>
                <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-sm tabular-nums text-gray-600">
                  {s.models} modelos
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Metodología */}
      <section className="space-y-4 text-sm text-gray-600">
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
      <footer className="border-t border-gray-100 pt-6 text-sm text-gray-400">
        <Link to="/articles" className="underline hover:text-gray-600">
          Ver pruebas actuales →
        </Link>
      </footer>
    </div>
  );
}

const getData = async () => {
  return {
    title: 'Pruebas Modelos — Evaluación de IA para código',
    headline: 'Benchmark de modelos de IA para código',
  };
};

export const getConfig = async () => {
  return { render: 'static' } as const;
};
