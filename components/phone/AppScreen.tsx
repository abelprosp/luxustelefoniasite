export function StatusBar({ light = false }: { light?: boolean }) {
  const color = light ? "text-white/80" : "text-luxus-black/70";

  return (
    <div
      className={`flex items-center justify-between px-6 pt-4 text-[10px] font-medium ${color}`}
    >
      <span>09:41</span>
      <div className="flex items-center gap-1.5">
        <span className="tracking-wide">5G</span>
        <span
          className={`inline-block h-[8px] w-[16px] rounded-[2px] border ${
            light ? "border-white/50" : "border-black/40"
          }`}
        >
          <span
            className={`ml-[1px] mt-[1px] block h-[4px] w-[10px] rounded-[1px] ${
              light ? "bg-white/80" : "bg-luxus-black/70"
            }`}
          />
        </span>
      </div>
    </div>
  );
}

function UsageRing({
  used,
  total,
  dark = false,
}: {
  used: number;
  total: number;
  dark?: boolean;
}) {
  const pct = Math.min(used / total, 1);
  const r = 34;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct);

  return (
    <div className="relative h-[88px] w-[88px]">
      <svg viewBox="0 0 88 88" className="-rotate-90">
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          stroke={dark ? "rgba(255,255,255,0.12)" : "#eceae4"}
          strokeWidth="6"
        />
        <circle
          cx="44"
          cy="44"
          r={r}
          fill="none"
          stroke="#1B4DFF"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`text-[13px] font-semibold leading-none ${dark ? "text-white" : "text-luxus-black"}`}
        >
          {used.toString().replace(".", ",")}
        </span>
        <span
          className={`mt-0.5 text-[8px] ${dark ? "text-white/50" : "text-luxus-muted"}`}
        >
          de {total} GB
        </span>
      </div>
    </div>
  );
}

export function AppHomeScreen() {
  return (
    <div className="flex h-full flex-col bg-[#f4f3ef] px-4 pb-5 pt-1">
      <StatusBar />
      <div className="mt-7 px-1">
        <p className="text-[11px] tracking-wide text-luxus-muted">Olá</p>
        <p className="mt-0.5 text-[22px] font-medium tracking-tight text-luxus-black">
          Camila
        </p>
      </div>

      <div className="mt-5 rounded-3xl bg-luxus-black px-5 py-5 text-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/45">
              Plano atual
            </p>
            <p className="mt-1.5 text-[18px] font-medium tracking-tight">
              Luxus Plus
            </p>
            <p className="mt-1 text-[11px] text-white/55">
              30 GB · chamadas ilimitadas
            </p>
          </div>
          <UsageRing used={18.4} total={30} dark />
        </div>
        <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[61%] rounded-full bg-[#1B4DFF]" />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {[
          { label: "Linhas", value: "3 ativas" },
          { label: "Fatura", value: "Em dia" },
          { label: "Suporte", value: "Disponível" },
          { label: "Benefícios", value: "4 ativos" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-white px-3.5 py-3.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          >
            <p className="text-[10px] text-luxus-muted">{item.label}</p>
            <p className="mt-1 text-[13px] font-medium tracking-tight text-luxus-black">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex-1 rounded-2xl bg-white px-4 py-4">
        <p className="text-[10px] uppercase tracking-[0.16em] text-luxus-muted">
          Atividade
        </p>
        <div className="mt-3 space-y-2.5">
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-luxus-black">Fatura de agosto</span>
            <span className="text-luxus-muted">Paga</span>
          </div>
          <div className="flex items-center justify-between text-[12px]">
            <span className="text-luxus-black">Rede 5G</span>
            <span className="text-luxus-muted">Estável</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppLinesScreen() {
  return (
    <div className="flex h-full flex-col bg-[#0c0c0c] px-4 pb-5 pt-1 text-white">
      <StatusBar light />
      <p className="mt-8 px-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
        Empresas
      </p>
      <p className="mt-1 px-1 text-[22px] font-medium tracking-tight">
        Linhas ativas
      </p>
      <div className="mt-6 space-y-2.5">
        {[
          { name: "Operação", n: "12 linhas" },
          { name: "Diretoria", n: "4 linhas" },
          { name: "Campo", n: "9 linhas" },
        ].map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-4"
          >
            <span className="text-[13px]">{row.name}</span>
            <span className="text-[12px] text-white/50">{row.n}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-2xl bg-luxus-accent/15 px-4 py-4">
        <p className="text-[11px] text-luxus-accent">Custos no mês</p>
        <p className="mt-1 text-[15px] font-medium">Sob controle</p>
      </div>
    </div>
  );
}
