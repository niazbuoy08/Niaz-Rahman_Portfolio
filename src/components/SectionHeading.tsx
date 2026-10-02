type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export default function SectionHeading({ index, eyebrow, title, description, inverted = false }: Props) {
  return (
    <div className="max-w-2xl">
      <p
        className={`flex items-center gap-3 font-mono text-[12px] font-medium uppercase tracking-[0.16em] ${
          inverted ? "text-blue-300" : "text-accent"
        }`}
      >
        <span>{index}</span>
        <span className={`h-px w-8 ${inverted ? "bg-blue-300/50" : "bg-accent/40"}`} />
        <span>{eyebrow}</span>
      </p>
      <h2
        className={`mt-4 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-[2.6rem] ${
          inverted ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[16px] leading-relaxed ${inverted ? "text-slate-300" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
