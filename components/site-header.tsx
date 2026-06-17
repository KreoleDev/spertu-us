"use client"

import type { MouseEvent } from "react"
import Link from "next/link"

export function SiteHeader() {
  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    window.history.pushState(null, "", "/")
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-background/70 to-transparent backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex min-w-0 items-center gap-1 text-base font-bold tracking-tight text-foreground sm:text-lg"
        >
          KreoleTech
          <sup className="text-[0.55rem] text-muted-foreground">TM</sup>
        </Link>

        <Link
          href="#contato"
          className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:px-5 sm:text-sm"
        >
          Entre em contato
        </Link>
      </div>
    </header>
  )
}
