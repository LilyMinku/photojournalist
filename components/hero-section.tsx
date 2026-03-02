import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Sierra Leonean youth looking toward the horizon during golden hour"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#1A1A1A]/50" />
        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-8 lg:pb-28">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#D4A843]">
          Photojournalist & Storyteller
        </p>
        <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-[#FAF7F2] md:text-6xl lg:text-7xl text-balance">
          Every Frame Tells a Story of Resilience
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#FAF7F2]/80 md:text-lg">
          Capturing the spirit of Sierra Leone through honest photography 
          and a commitment to empowering the next generation.
        </p>
        <div className="mt-10 flex items-center gap-6">
          <a
            href="#stories"
            className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:bg-primary/90"
          >
            View Stories
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#FAF7F2]/30 px-6 py-3 text-sm font-medium tracking-wide text-[#FAF7F2] transition-all duration-300 hover:border-[#FAF7F2]/60 hover:bg-[#FAF7F2]/5"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex items-center gap-3 text-[#FAF7F2]/50">
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span className="text-xs uppercase tracking-[0.2em]">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
