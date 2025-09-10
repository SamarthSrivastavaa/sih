"use client"

import { motion } from "framer-motion"

export default function DataCard({ title, data, type, delay = 0 }) {
  const styles = type === "current"
    ? { border: "border-red-200", bg: "bg-red-50", header: "bg-red-100", text: "text-red-900", accent: "text-red-600" }
    : { border: "border-green-200", bg: "bg-green-50", header: "bg-green-100", text: "text-green-900", accent: "text-green-600" }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`rounded-2xl border-2 ${styles.border} ${styles.bg} shadow-sm transition-all duration-300 overflow-hidden`}
    >
      <div className={`${styles.header} border-b ${styles.border} px-6 py-4`}>
        <h3 className={`text-xl font-semibold ${styles.text}`}>{title}</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {data.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: delay + index * 0.08, ease: "easeOut" }}
              className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="flex flex-col gap-1.5">
                <div className={`text-xs font-medium uppercase tracking-wide ${styles.accent}`}>{item.label}</div>
                <div className={`text-sm font-medium ${styles.text} leading-relaxed`}>{item.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: delay + 0.5 }} className="mt-6">
          <button
            className={`w-full transform rounded-lg px-4 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
              type === "current" ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {type === "current" ? "Analyze Impact" : "View Recommendations"}
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}


