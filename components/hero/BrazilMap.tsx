"use client";

import { easeOutExpo } from "@/lib/animations";
import { motion } from "framer-motion";

const BRAZIL_PATH =
  "M219.73 494.29 L236.18 475.98 L250.09 462.94 L258.37 457.47 L268.75 450.06 L269 439.34 L262.82 431.58 L256.71 434.16 L259.13 426.41 L260.8 418.46 L260.81 411.08 L256.37 408.64 L251.75 410.81 L247.15 410.22 L245.71 405.05 L244.56 392.74 L242.25 388.73 L233.93 385.09 L228.9 387.72 L215.88 385.14 L216.7 366.91 L213.05 359.44 L216.91 356.67 L215.72 349.01 L219.1 343.13 L221.29 332.55 L218.38 324.2 L211.64 320.43 L210.32 315.13 L212.13 307.37 L188.49 306.81 L183.75 291.17 L187.35 290.95 L187.19 285.16 L184.79 281.24 L184.24 273.47 L177.08 269.49 L169.33 269.62 L164.22 265.72 L155.89 263.06 L151.04 258.04 L137.23 255.82 L123.84 243.79 L124.83 234.79 L123.32 229.63 L124.63 219.56 L108.5 221.83 L102 226.88 L91.22 232.32 L88.47 236.38 L82.12 236.68 L72.96 235.54 L66 237.85 L60.39 236.31 L61.22 215.91 L51.1 223.82 L40.22 223.48 L35.56 216.31 L27.38 215.53 L29.98 209.77 L23.13 201.59 L18 189.5 L21.25 187.04 L21.24 181.37 L28.69 177.49 L27.46 170.23 L30.61 165.55 L31.5 159.29 L45.6 150.15 L55.71 147.56 L57.36 145.54 L68.47 146.17 L74.01 109.34 L74.3 103.52 L72.37 95.83 L66.9 90.93 L66.97 81.17 L73.91 78.96 L76.38 80.35 L76.79 75.2 L69.57 73.81 L69.41 65.41 L93.44 65.71 L97.51 61.08 L100.94 65.34 L103.34 73.26 L105.67 71.61 L112.46 78.71 L122.04 77.84 L124.43 73.73 L133.6 70.59 L138.67 68.39 L140.11 62.7 L148.91 58.88 L148.25 56.06 L137.8 54.9 L136.09 46.44 L136.59 37.44 L131.07 33.96 L133.38 32.72 L142.51 34.44 L152.31 37.8 L155.87 34.62 L164.74 32.54 L178.53 27.51 L183.04 22.38 L181.4 18.59 L187.81 18 L190.68 21.09 L189.08 26.99 L193.32 29.03 L196.14 35.27 L192.72 40 L190.76 51.43 L193.92 58.23 L194.81 64.44 L202.4 70.74 L208.45 71.41 L209.81 68.78 L213.71 68.2 L219.29 65.84 L223.29 62.27 L230.11 63.41 L233.11 62.93 L239.82 64.03 L240.93 61.28 L238.86 58.61 L240.09 54.72 L245.07 55.92 L250.89 54.54 L257.95 57.39 L263.34 60.16 L267.15 56.52 L269.91 57.08 L271.59 60.86 L277.49 59.9 L282.22 54.8 L286.01 44.91 L293.3 32.62 L297.5 31.98 L300.55 39.41 L307.46 62.9 L314.06 65.12 L314.39 74.39 L305.12 85.45 L308.95 89.49 L330.74 91.6 L331.19 105.07 L340.55 96.25 L356.07 101.08 L376.54 109.28 L382.56 117.15 L380.54 124.59 L394.88 120.45 L418.87 127.55 L437.29 127.03 L455.52 138.15 L471.26 153.19 L480.76 157.07 L491.3 157.61 L495.77 161.84 L499.95 178.94 L502 187.07 L497.09 209.28 L490.82 218.05 L473.44 236.73 L465.59 251.92 L456.46 263.56 L453.38 263.82 L449.93 273.71 L450.81 298.87 L447.37 319.58 L446.06 328.43 L442.16 333.73 L439.98 351.69 L427.47 369.22 L425.38 383.09 L415.4 388.91 L412.51 396.96 L399.12 396.93 L379.72 402.09 L371.04 408.07 L357.23 411.99 L342.72 422.69 L332.29 436.01 L330.49 446.04 L332.54 453.45 L330.24 467.02 L327.44 473.58 L318.82 480.97 L305.15 504.61 L294.3 515.26 L285.92 521.54 L280.3 534.32 L272.14 542 L268.73 534.39 L274.17 528.02 L267.04 518.88 L257.36 511.46 L244.68 502.85 L240.09 503.25 L227.73 492.86 L219.73 494.29 Z";

const states = [
  { id: "AC", name: "Acre", x: 93.99, y: 222.42 },
  { id: "AL", name: "Alagoas", x: 489.61, y: 218.27 },
  { id: "AP", name: "Amapá", x: 300.55, y: 87.97 },
  { id: "AM", name: "Amazonas", x: 190.18, y: 130.33 },
  { id: "BA", name: "Bahia", x: 455.51, y: 262.67 },
  { id: "CE", name: "Ceará", x: 455.19, y: 138.57 },
  { id: "DF", name: "Distrito Federal", x: 339.26, y: 300.39 },
  { id: "ES", name: "Espírito Santo", x: 433.18, y: 361.3 },
  { id: "GO", name: "Goiás", x: 322.81, y: 312.56 },
  { id: "MA", name: "Maranhão", x: 383.93, y: 122.42 },
  { id: "MT", name: "Mato Grosso", x: 238.57, y: 297.99 },
  { id: "MS", name: "Mato Grosso do Sul", x: 256.77, y: 363.37 },
  { id: "MG", name: "Minas Gerais", x: 388.52, y: 355.96 },
  { id: "PA", name: "Pará", x: 332.18, y: 108 },
  { id: "PB", name: "Paraíba", x: 500.58, y: 184.06 },
  { id: "PR", name: "Paraná", x: 322.72, y: 429.99 },
  { id: "PE", name: "Pernambuco", x: 500.19, y: 196.52 },
  { id: "PI", name: "Piauí", x: 402.46, y: 156.79 },
  { id: "RJ", name: "Rio de Janeiro", x: 397.91, y: 396.13 },
  { id: "RN", name: "Rio Grande do Norte", x: 496.07, y: 166.26 },
  { id: "RS", name: "Rio Grande do Sul", x: 298.72, y: 491.84 },
  { id: "RO", name: "Rondônia", x: 142.36, y: 206.11 },
  { id: "RR", name: "Roraima", x: 182.16, y: 50.56 },
  { id: "SC", name: "Santa Catarina", x: 331.64, y: 459.08 },
  { id: "SP", name: "São Paulo", x: 355.25, y: 404.77 },
  { id: "SE", name: "Sergipe", x: 473.17, y: 234.97 },
  { id: "TO", name: "Tocantins", x: 334.28, y: 225.23 },
] as const;

export function BrazilMap() {
  return (
    <figure className="relative mx-auto w-full max-w-[520px] select-none">
      <svg
        viewBox="0 0 520 560"
        className="h-auto w-full"
        role="img"
        aria-labelledby="brazil-map-title"
      >
        <title id="brazil-map-title">Presença da Luxus no Brasil</title>
        <defs>
          <filter id="map-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d={BRAZIL_PATH}
          fill="rgba(27,77,255,0.12)"
          stroke="rgba(27,77,255,0.55)"
          strokeWidth="1.4"
          strokeLinejoin="round"
          filter="url(#map-glow)"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeOutExpo }}
          style={{ transformOrigin: "center" }}
        />

        {states.map((state, i) => (
          <g key={state.id}>
            <motion.circle
              cx={state.x}
              cy={state.y}
              r="7"
              fill="#1B4DFF"
              className="map-pulse"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 0.35, scale: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.35 + i * 0.035,
                ease: easeOutExpo,
              }}
              style={{ transformOrigin: `${state.x}px ${state.y}px` }}
              aria-hidden="true"
            />
            <motion.circle
              cx={state.x}
              cy={state.y}
              r="3.4"
              fill="#1B4DFF"
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.35 + i * 0.035,
                ease: easeOutExpo,
              }}
              style={{ transformOrigin: `${state.x}px ${state.y}px` }}
            >
              <title>{state.name}</title>
            </motion.circle>
            <circle cx={state.x} cy={state.y} r="1.3" fill="#ffffff" />
          </g>
        ))}
      </svg>
      <figcaption className="sr-only">
        Mapa do Brasil com um ponto em cada um dos 26 estados e no Distrito
        Federal.
      </figcaption>
    </figure>
  );
}
