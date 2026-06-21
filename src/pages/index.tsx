import { Link } from 'waku';

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

      <p className='text-red-800 text-xl'>Para ver los prompts, evaluaciones y explicaciones de los modelos, revise la carpeta <code className='text-red-800 bg-red-100 p-1 rounded'>pruebas</code> en la raíz del repo.</p>

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



      {/* Resultados — plantilla de evaluación */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Criterios de evaluación
        </h2>

        <details className="group">
          <summary className="cursor-pointer text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors [&::-webkit-details-marker]:hidden">
            <span className="inline-flex items-center gap-2">
              Checklist por modelo
            </span>
          </summary>
          <div className="overflow-x-auto mt-3">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300 bg-gray-50 text-left">
                  <th className="px-4 py-2 font-medium text-gray-700">
                    Criterio
                  </th>
                  <th className="px-4 py-2 text-center font-medium text-gray-500">
                    sí / no
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  'Entregó solo la feature pedida',
                  'Ordena por fecha descendente',
                  'Búsqueda funciona',
                  'Filtro por tag funciona',
                  'Contadores de tags correctos',
                  'Botón limpiar funciona',
                  'Estado vacío presente',
                  'TypeScript sin errores obvios',
                  'Accesibilidad básica correcta',
                ].map((criterio) => (
                  <tr key={criterio} className="text-gray-600">
                    <td className="px-4 py-2">{criterio}</td>
                    <td className="px-4 py-2 text-center text-gray-300">—</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        <details className="group">
          <summary className="cursor-pointer text-lg font-semibold text-gray-800 hover:text-gray-600 transition-colors [&::-webkit-details-marker]:hidden">
            <span className="inline-flex items-center gap-2">
              Puntuación
            </span>
          </summary>
          <div className="overflow-x-auto mt-3">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300 bg-gray-50 text-left">
                  <th className="px-4 py-2 font-medium text-gray-700">
                    Criterio
                  </th>
                  <th className="px-4 py-2 text-center font-medium text-gray-700">
                    Puntaje máximo
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {([
                  ['Funcionalidad', 15],
                  ['TypeScript', 8],
                  ['Accesibilidad', 8],
                  ['Mantenibilidad', 7],
                  ['UX', 5],
                  ['Explicación', 4],
                  ['Alcance', 3],
                ] as const).map(([criterio, max]) => (
                  <tr key={criterio} className="text-gray-600">
                    <td className="px-4 py-2">{criterio}</td>
                    <td className="px-4 py-2 text-center">{max}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gray-400 font-semibold text-gray-800">
                  <td className="px-4 py-2">Total</td>
                  <td className="px-4 py-2 text-center">50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </section>

      <Link to="/pruebas" className="underline text-3xl text-red-600">
        Ver todas las pruebas →
      </Link>
    </div>
  );
}

export const getConfig = async () => {
  return { render: 'static' } as const;
};
