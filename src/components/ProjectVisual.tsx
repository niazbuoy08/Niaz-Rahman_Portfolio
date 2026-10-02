// Stylised UI previews. Only figures stated in the resume appear here; everything else is decorative.

function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_60px_-30px_rgba(15,23,42,0.4)]">
      <div className="flex items-center gap-2 border-b border-border bg-background/70 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="ml-2 font-mono text-[11px] text-subtle">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function CourierOps() {
  const states = [
    { label: "On track", cls: "bg-emerald-500", w: "flex-[4]" },
    { label: "Due soon", cls: "bg-amber-400", w: "flex-[2]" },
    { label: "Overdue", cls: "bg-orange-500", w: "flex-[1.4]" },
    { label: "Late", cls: "bg-rose-500", w: "flex-1" },
  ];
  return (
    <Window title="courier-ops / dashboard">
      <p className="text-[12px] font-medium text-subtle">72-hour delivery SLA</p>
      <div className="mt-2.5 flex h-2.5 gap-1 overflow-hidden rounded-full">
        {states.map((s) => (
          <span key={s.label} className={`${s.cls} ${s.w}`} />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
        {states.map((s) => (
          <span key={s.label} className="inline-flex items-center gap-1.5 text-[11.5px] text-muted">
            <span className={`h-2 w-2 rounded-full ${s.cls}`} />
            {s.label}
          </span>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-foreground p-4 font-mono text-[11.5px] leading-relaxed text-slate-300">
        <p>
          <span className="text-blue-300">PATCH</span> /shipments/:id/scan
        </p>
        <p className="text-slate-500">{"// forward-only state machine"}</p>
        <p>
          compare-and-swap <span className="text-emerald-400">✓ step enforced</span>
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11.5px] font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          85 tests passing in CI
        </span>
        <span className="rounded-full bg-background px-2.5 py-1 text-[11.5px] font-medium text-subtle">Zod</span>
        <span className="rounded-full bg-background px-2.5 py-1 text-[11.5px] font-medium text-subtle">RBAC</span>
        <span className="rounded-full bg-background px-2.5 py-1 text-[11.5px] font-medium text-subtle">CSV export</span>
      </div>
    </Window>
  );
}

function Churn() {
  const bars = [92, 74, 61, 48, 37, 26];
  return (
    <Window title="churn-retention / overview">
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { v: "7,043", l: "Subscribers" },
          { v: "7", l: "Classifiers" },
          { v: "8", l: "KPIs" },
        ].map((k) => (
          <div key={k.l} className="rounded-xl border border-border px-3 py-2.5">
            <p className="text-[17px] font-semibold tracking-tight text-foreground">{k.v}</p>
            <p className="text-[11px] text-subtle">{k.l}</p>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[12px] font-medium text-subtle">Why this subscriber may leave · SHAP</p>
      <div className="mt-2.5 space-y-1.5" aria-hidden="true">
        {bars.map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-14 rounded-full bg-slate-200" />
            <span
              className={`h-2 rounded-full ${i < 2 ? "bg-accent" : "bg-accent/35"}`}
              style={{ width: `${w * 0.7}%` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-accent/20 bg-accent-soft p-3.5">
        <p className="text-[11.5px] font-semibold text-accent">Retention action · Gemini</p>
        <div className="mt-2 space-y-1.5" aria-hidden="true">
          <span className="block h-1.5 w-11/12 rounded-full bg-accent/20" />
          <span className="block h-1.5 w-8/12 rounded-full bg-accent/20" />
        </div>
      </div>
    </Window>
  );
}

function SmartHire() {
  return (
    <Window title="smarthire / matching">
      <p className="text-[12px] font-medium text-subtle">Match relevance</p>
      <div className="mt-3 space-y-3.5">
        <div>
          <div className="flex justify-between text-[12px]">
            <span className="text-muted">Keyword matching</span>
            <span className="font-mono text-subtle">baseline</span>
          </div>
          <div className="mt-1.5 h-2.5 rounded-full bg-background">
            <div className="h-full w-[66%] rounded-full bg-slate-300" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[12px]">
            <span className="font-medium text-foreground">Semantic matching</span>
            <span className="font-mono font-semibold text-accent">+30%</span>
          </div>
          <div className="mt-1.5 h-2.5 rounded-full bg-background">
            <div className="h-full w-[86%] rounded-full bg-accent" />
          </div>
        </div>
      </div>

      <p className="mt-6 text-[12px] font-medium text-subtle">REST API resources</p>
      <div className="mt-2.5 grid grid-cols-2 gap-2 font-mono text-[11.5px]">
        {["/auth", "/candidates", "/jobs", "/applications"].map((r) => (
          <span key={r} className="rounded-lg border border-border px-2.5 py-2 text-muted">
            <span className="text-accent">GET</span> {r}
          </span>
        ))}
      </div>
    </Window>
  );
}

const VISUALS: Record<string, () => React.ReactElement> = {
  "courier-ops": CourierOps,
  "churn-prediction": Churn,
  smarthire: SmartHire,
};

export default function ProjectVisual({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const Visual = VISUALS[slug];
  if (compact) {
    return (
      <div className="relative h-[270px] overflow-hidden rounded-xl bg-gradient-to-br from-accent-soft via-background to-background px-5 pt-5">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative transition-transform duration-500 group-hover:-translate-y-1.5">{Visual && <Visual />}</div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background to-transparent" />
      </div>
    );
  }
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent-soft via-background to-background p-6 sm:p-10">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative">{Visual && <Visual />}</div>
    </div>
  );
}
