"use client"

import Image from "next/image"
import { useState } from "react"

const stories = [
  {
    title: "Voices of Tomorrow",
    category: "Youth Empowerment",
    description:
      "A documentary series following Sierra Leonean students as they shape their futures through education and creativity.",
    image: "/images/story-1.jpg",
    year: "2025",
  },
  {
    title: "Market Rhythms",
    category: "Community & Culture",
    description:
      "Capturing the vibrant heartbeat of local markets where tradition meets everyday life.",
    image: "/images/story-2.jpg",
    year: "2024",
  },
  {
    title: "Joy Unbound",
    category: "Youth & Play",
    description:
      "The unfiltered joy of childhood in Sierra Leone, a reminder of hope in every corner.",
    image: "/images/story-3.jpg",
    year: "2024",
  },
  {
    title: "Shores of Livelihood",
    category: "Documentary",
    description:
      "Life along the coast, where fishing villages carry centuries of tradition into the modern age.",
    image: "/images/story-4.jpg",
    year: "2023",
  },
  {
    title: "Strength in Unity",
    category: "Community",
    description:
      "Women leading change in their communities, building resilience one story at a time.",
    image: "/images/story-5.jpg",
    year: "2023",
  },
  {
    title: "The Workshop",
    category: "Youth Empowerment",
    description:
      "Teenagers finding their voice through creative workshops and collaborative learning.",
    image: "/images/story-6.jpg",
    year: "2025",
  },
]

export function StoriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="stories" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent">
              Selected Work
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
              Stories That Matter
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Each project is a journey into the lives, landscapes, and spirit 
            of Sierra Leone. These are the stories I believe the world needs to see.
          </p>
        </div>

        {/* Stories grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <article
              key={story.title}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <Image
                  src={story.image}
                  alt={story.description}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredIndex === index ? "scale-105" : "scale-100"
                  }`}
                />
                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end bg-[#1A1A1A]/60 p-6 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-[#FAF7F2]/90">
                    {story.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {story.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {story.category}
                  </p>
                </div>
                <span className="mt-1 text-xs text-muted-foreground">
                  {story.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
