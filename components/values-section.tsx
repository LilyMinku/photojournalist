import { Camera, Heart, Users, Globe } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Authenticity First",
    description:
      "Every image I capture reflects real life, real emotions, and real stories. I never stage a moment. The truth is always more powerful than fiction.",
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    description:
      "Young people are at the heart of my work. I believe in equipping the next generation with the tools and confidence to tell their own stories.",
  },
  {
    icon: Camera,
    title: "Ethical Storytelling",
    description:
      "I photograph with permission, context, and respect. Every person in my frame is a collaborator, not a subject. Dignity is non-negotiable.",
  },
  {
    icon: Globe,
    title: "Sierra Leonean Voices",
    description:
      "The stories of Sierra Leone deserve a global stage. My work bridges cultures and challenges the single narratives that too often define West Africa.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#D4A843]">
            Values
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
            What Guides My Work
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/70">
            These are not just professional principles. They are the foundation 
            of how I approach every story, every frame, and every collaboration.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="group border border-primary-foreground/10 p-8 transition-colors duration-300 hover:border-[#D4A843]/40 hover:bg-primary-foreground/5"
            >
              <value.icon className="h-6 w-6 text-[#D4A843]" />
              <h3 className="mt-5 font-serif text-xl font-semibold text-primary-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
