"use client"

import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

const colorMap = {
  red: { primary: "#ef4444", secondary: "#fef2f2", gradient: "from-red-400 to-red-600" },
  blue: { primary: "#3b82f6", secondary: "#eff6ff", gradient: "from-blue-400 to-blue-600" },
  green: { primary: "#10b981", secondary: "#f0fdf4", gradient: "from-green-400 to-green-600" },
  purple: { primary: "#8b5cf6", secondary: "#faf5ff", gradient: "from-purple-400 to-purple-600" },
  orange: { primary: "#f97316", secondary: "#fff7ed", gradient: "from-orange-400 to-orange-600" },
  yellow: { primary: "#eab308", secondary: "#fefce8", gradient: "from-yellow-400 to-yellow-600" },
}

export default function CircularProgress({
  title,
  current,
  baseline,
  target,
  unit,
  color,
  delay = 0,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const colors = colorMap[color] || colorMap.blue
  const radius = 60
  const strokeWidth = 8
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = useMemo(() => normalizedRadius * 2 * Math.PI, [normalizedRadius])

  const progress = useMemo(() => {
    const denom = Math.max(Math.abs(target - baseline), 0.0001)
    const pct = ((current - baseline) / denom) * 100
    return Math.min(Math.max(pct, 0), 100)
  }, [current, baseline, target])

  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (progress / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  const statusColor = progress >= 80 ? "text-red-600" : progress >= 60 ? "text-orange-600" : progress >= 40 ? "text-yellow-600" : "text-green-600"
  const statusText = progress >= 80 ? "Critical" : progress >= 60 ? "High" : progress >= 40 ? "Medium" : "Low"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="rounded-2xl border bg-card p-6 shadow-sm"
    >
      <div className="text-center">
        <h3 className="mb-4 text-lg font-semibold">{title}</h3>
        <div className="relative inline-block mb-4">
          <svg height={radius * 2} width={radius * 2} className="-rotate-90 transform">
            <circle stroke="#e5e7eb" fill="transparent" strokeWidth={strokeWidth} r={normalizedRadius} cx={radius} cy={radius} />
            <motion.circle
              stroke={colors.primary}
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: isVisible ? strokeDashoffset : circumference }}
              transition={{ duration: 1.2, delay, ease: "easeOut" }}
              style={{ filter: "drop-shadow(0 0 6px rgba(0,0,0,0.08))" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: delay + 0.4 }}>
              <div className="text-2xl font-bold">
                {current.toFixed(1)}<span className="ml-1 text-sm text-muted-foreground">{unit}</span>
              </div>
              <div className={`text-xs font-medium ${statusColor}`}>{statusText}</div>
            </motion.div>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between"><span className="text-muted-foreground">Baseline:</span><span className="font-medium">{baseline}{unit}</span></div>
          <div className="flex items-center justify-between"><span className="text-muted-foreground">Target:</span><span className="font-medium">{target}{unit}</span></div>
          <div className="flex items-center justify-between"><span className="text-muted-foreground">Progress:</span><span className="font-medium">{Math.round(progress)}%</span></div>
        </div>
        <div className="mt-4">
          <div className="h-2 w-full rounded-full bg-muted">
            <motion.div
              className={`h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}
              initial={{ width: 0 }}
              animate={{ width: isVisible ? `${progress}%` : "0%" }}
              transition={{ duration: 1.2, delay, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}


