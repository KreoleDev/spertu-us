export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left">
        <div className="flex items-center gap-1 text-base font-bold tracking-tight text-foreground sm:text-lg">
          KreoleTech
          <sup className="text-[0.55rem] text-muted-foreground">TM</sup>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {"\u00A9"} 2026 KreoleTech. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
