"use client"

import * as React from "react"

export default function AnimatedCounter({
  from = 0,
  to = 0,
  duration = 1000,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  startOnView = true,
  threshold = 0.25,
  rootMargin = "0px",
}) {
  const [value, setValue] = React.useState(from)
  const [hasPlayed, setHasPlayed] = React.useState(false)
  const ref = React.useRef(null)

  const startAnimation = React.useCallback(() => {
    if (hasPlayed) return
    setHasPlayed(true)
    const start = performance.now()
    const delta = to - from
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)
    let raf = 0
    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      setValue(from + delta * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
  }, [from, to, duration, hasPlayed])

  React.useEffect(() => {
    if (!startOnView) {
      startAnimation()
      return
    }
    const el = ref.current
    if (!el || typeof IntersectionObserver === "undefined") {
      startAnimation()
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation()
            observer.disconnect()
          }
        })
      },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [startOnView, threshold, rootMargin, startAnimation])

  const formatted = React.useMemo(() => {
    const fixed = Number(value).toFixed(decimals)
    return `${prefix}${fixed}${suffix}`
  }, [value, decimals, prefix, suffix])

  return <span ref={ref} className={className}>{formatted}</span>
}


