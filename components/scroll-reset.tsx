"use client"

import { useEffect } from "react"

export function ScrollReset() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    const [navigation] = performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[]

    if (navigation?.type === "reload") {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      )
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    }
  }, [])

  return null
}
