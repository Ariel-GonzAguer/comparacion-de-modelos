import { Link } from 'waku';

export type Prueba = {
  id: string;
  title: string;
  description: string;
  stack: string;
  modeloCount: number;
  href: string;
  modelosProbados: string[];
};

export const pruebas: Prueba[] = [
  {
    id: '000',
    title: 'Listado y filtrado de artículos',
    description:
      'Componente con búsqueda client-side, filtro por tags, orden por fecha, estado vacío y accesibilidad.',
    stack: 'React + TypeScript',
    modeloCount: 3,
    href: '/pruebas/articles',
    modelosProbados: ['MimoV2-5', 'Codestral-2508', 'North-Mini-Code'],
  },
];

type PruebasListProps = {
  max?: number;
};

export function PruebasList({ max }: PruebasListProps) {
  const items = max ? pruebas.slice(0, max) : pruebas;

  return (
    <div className="grid gap-4">
      {items.map((p) => (
        <Link
          key={p.id}
          to={p.href as any}
          className="group block rounded-xl border-4 border-gray-200 bg-white p-6 transition-colors hover:border-red-300"
        >
          <span className=" text-red-600 text-xl">#{p.id}</span>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold group-hover:underline">
                  {p.title}
                </h3>
              </div>
              <p className=" text-gray-500">{p.stack}</p>
              <p className=" text-gray-600">{p.description}</p>
            </div>
            <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1  tabular-nums text-gray-600 group-hover:bg-red-600 group-hover:text-black">
              {p.modeloCount} modelos
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.modelosProbados.map((modelo) => (
              <span
                key={modelo}
                className="mr-2 inline-block rounded-full bg-blue-100 px-2 py-1 text-blue-800 group-hover:bg-green-300 group-hover:text-black"
              >
                {modelo}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function PruebasPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 py-8">
      <h1 className="text-3xl font-bold tracking-tight">Pruebas</h1>
      <PruebasList />
    </div>
  );
}
