export function MarqueeBar() {
  const items = [
    "Photojournalism",
    "Documentary",
    "Youth Empowerment",
    "Sierra Leone",
    "Visual Storytelling",
    "Community",
    "Cultural Heritage",
    "Authentic Narratives",
  ]

  return (
    <div className="overflow-hidden border-y border-border bg-secondary py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 text-sm uppercase tracking-[0.2em] text-muted-foreground"
          >
            {item}
            <span className="ml-6 text-accent/60" aria-hidden="true">
              {"///"}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
