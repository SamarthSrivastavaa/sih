"use client"

import { motion } from "framer-motion"

const colorMap = {
  red: { bg: "bg-red-100", border: "border-red-200", text: "text-red-900", accent: "text-red-600", progress: "bg-red-500", icon: "🔴" },
  orange: { bg: "bg-orange-100", border: "border-orange-200", text: "text-orange-900", accent: "text-orange-600", progress: "bg-orange-500", icon: "🟠" },
  yellow: { bg: "bg-yellow-100", border: "border-yellow-200", text: "text-yellow-900", accent: "text-yellow-600", progress: "bg-yellow-500", icon: "🟡" },
  green: { bg: "bg-green-100", border: "border-green-200", text: "text-green-900", accent: "text-green-600", progress: "bg-green-500", icon: "🟢" },
}

export default function RiskIndicator({ name, level, color, status, delay = 0 }) {
  const colors = colorMap[color] || colorMap.green
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`rounded-xl border-2 ${colors.border} ${colors.bg} p-4 shadow-sm transition-all duration-300`}
    >
      <div className="text-center">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: delay + 0.15 }} className="mb-3">
          <div className="mb-2 text-2xl">{colors.icon}</div>
          <div className={`text-sm font-semibold ${colors.accent}`}>{status}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: delay + 0.25 }} className="relative mx-auto mb-3 h-16 w-16">
          <svg className="h-16 w-16 -rotate-90 transform" viewBox="0 0 36 36">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="2" />
            <motion.path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${level}, 100`}
              initial={{ strokeDasharray: "0, 100" }}
              animate={{ strokeDasharray: `${level}, 100` }}
              transition={{ duration: 0.9, delay: delay + 0.4, ease: "easeOut" }}
              style={{ stroke: `var(--stroke-color)` }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: delay + 0.5 }} className={`text-sm font-bold ${colors.text}`}>
              {level}%
            </motion.span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: delay + 0.3 }} className={`text-sm font-medium ${colors.text} leading-tight`}>
          {name}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: delay + 0.55 }} className="mt-3">
          <div className="h-1.5 w-full rounded-full bg-gray-200">
            <motion.div className={`h-1.5 rounded-full ${colors.progress}`} initial={{ width: 0 }} animate={{ width: `${level}%` }} transition={{ duration: 0.8, delay: delay + 0.65, ease: "easeOut" }} />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: delay + 0.7 }} className={`mt-2 text-xs font-medium ${colors.accent}`}>
          {level >= 80 ? "Critical Risk" : level >= 60 ? "High Risk" : level >= 40 ? "Medium Risk" : "Low Risk"}
        </motion.div>
      </div>
    </motion.div>
  )
}


