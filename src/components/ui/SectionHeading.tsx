type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] ${
            light ? "text-jamaica-gold" : "text-jamaica-green"
          }`}
        >
          <span
            className={`inline-block h-2 w-2 rounded-full ${light ? "bg-rasta-red" : "bg-rasta-red"}`}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-jamaica-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-jamaica-gold-light/90" : "text-jamaica-black-soft/80"
          }`}
        >
          {description}
        </p>
      )}
      <div className={`mt-5 flex gap-1 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-1 w-8 rounded-full bg-jamaica-green" />
        <span className="h-1 w-8 rounded-full bg-jamaica-gold" />
        <span className="h-1 w-8 rounded-full bg-rasta-red" />
      </div>
    </div>
  );
}
