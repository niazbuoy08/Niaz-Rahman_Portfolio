// Renders **bold** markers from data.ts as emphasised text.
export default function Rich({ text, strongClassName = "font-semibold text-foreground" }: { text: string; strongClassName?: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={strongClassName}>
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}
