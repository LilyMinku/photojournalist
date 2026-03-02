export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-bold text-foreground">
              Larry Tucker
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Photojournalist & Storyteller
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              aria-label="X (Twitter)"
            >
              X
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            {"2026 Larry Tucker. All rights reserved. Made with purpose in Freetown, Sierra Leone."}
          </p>
        </div>
      </div>
    </footer>
  )
}
