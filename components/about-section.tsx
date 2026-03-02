import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Portrait */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/about-portrait.jpg"
                alt="Larry Tucker, Sierra Leonean photojournalist, holding his camera"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative accent bar */}
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-accent -z-10 hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">
              About
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
              The Person Behind the Lens
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I am Larry Tucker, a photojournalist and storyteller rooted in the 
                vibrant culture of Sierra Leone. My work is driven by a deep belief 
                that stories have the power to ignite change, build bridges, and 
                amplify voices that too often go unheard.
              </p>
              <p>
                Growing up in Freetown, I witnessed firsthand the resilience and 
                creativity of young Sierra Leoneans navigating a world full of 
                challenges. It was this experience that shaped my mission: to use 
                photography as a tool for empowerment, giving young people a platform 
                to share their narratives on their own terms.
              </p>
              <p>
                Over the years, I have partnered with NGOs, media outlets, and community 
                organizations to produce work that goes beyond the surface. I do not 
                photograph subjects. I collaborate with people, honoring their dignity and 
                their truth.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-10">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">8+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years of storytelling
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">50+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Stories published
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">1000+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Youth impacted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
