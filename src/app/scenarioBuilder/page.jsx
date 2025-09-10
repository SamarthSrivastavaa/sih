"use client"

import { motion } from "framer-motion"
import CircularProgress from "./components/CircularProgress"
import DataCard from "./components/DataCard"
import RiskIndicator from "./components/RiskIndicator"

export default function ScenarioBuilding() {
  const lcaData = {
    co2Intensity: { current: 28, baseline: 0, target: -15, unit: "%" },
    energyEfficiency: { current: 75, baseline: 100, target: 90, unit: "%" },
    renewableEnergy: { current: 25, baseline: 0, target: 60, unit: "%" },
    carbonFootprint: { current: 2.8, baseline: 0, target: 1.2, unit: "tCO₂e/t" },
  }

  const riskLevels = [
    { name: "Smelting & Refining", level: 85, color: "red", status: "High Risk" },
    { name: "Energy Consumption", level: 65, color: "orange", status: "Medium Risk" },
    { name: "Grid Intensity", level: 45, color: "yellow", status: "Low Risk" },
    { name: "Furnace Efficiency", level: 75, color: "orange", status: "Medium Risk" },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-muted/40 to-background">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight">Scenario Builder</h1>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground">
            Interactive LCA scenario planning for Aurum’s smelting and refining line — optimize scheduling, efficiency and PPAs.
          </p>
        </motion.header>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CircularProgress title="CO₂ Intensity" current={lcaData.co2Intensity.current} baseline={lcaData.co2Intensity.baseline} target={lcaData.co2Intensity.target} unit={lcaData.co2Intensity.unit} color="red" delay={0.1} />
          <CircularProgress title="Energy Efficiency" current={lcaData.energyEfficiency.current} baseline={lcaData.energyEfficiency.baseline} target={lcaData.energyEfficiency.target} unit={lcaData.energyEfficiency.unit} color="blue" delay={0.2} />
          <CircularProgress title="Renewable Energy" current={lcaData.renewableEnergy.current} baseline={lcaData.renewableEnergy.baseline} target={lcaData.renewableEnergy.target} unit={lcaData.renewableEnergy.unit} color="green" delay={0.3} />
          <CircularProgress title="Carbon Footprint" current={lcaData.carbonFootprint.current} baseline={lcaData.carbonFootprint.baseline} target={lcaData.carbonFootprint.target} unit={lcaData.carbonFootprint.unit} color="purple" delay={0.4} />
        </motion.div>

        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-8">
          <h2 className="mb-6 text-center text-2xl font-semibold">Risk Assessment Indicators</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {riskLevels.map((risk, index) => (
              <RiskIndicator key={risk.name} {...risk} delay={0.4 + index * 0.1} />
            ))}
          </div>
        </motion.section>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <DataCard
            title="Current Scenario Analysis"
            data={[
              { label: "Stage / Source", value: "Smelting & Refining" },
              { label: "Indicator", value: "CO₂e intensity (+28% vs baseline)" },
              { label: "Driver", value: "Peak-hour grid mix; furnace efficiency drift" },
              { label: "Impact", value: "High Scope 2 emissions during energy-intensive windows" },
            ]}
            type="current"
            delay={0.6}
          />
          <DataCard
            title="Optimization Recommendations"
            data={[
              { label: "Immediate Actions", value: "Shift batches to off-peak windows" },
              { label: "Medium-term", value: "Restore furnace efficiency via maintenance" },
              { label: "Long-term", value: "Procure 30–40% renewable PPAs" },
              { label: "Expected Impact", value: "18–25% CO₂e reduction within 2 quarters" },
            ]}
            type="recommendations"
            delay={0.7}
          />
        </motion.div>

        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="mt-8">
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-semibold">Interactive Scenario Builder</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-200">
                  <span className="text-2xl font-bold text-red-600">28%</span>
                </div>
                <h3 className="mb-2 font-semibold">Current State</h3>
                <p className="text-sm text-muted-foreground">High carbon intensity during peak hours</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200">
                  <span className="text-2xl font-bold text-yellow-600">15%</span>
                </div>
                <h3 className="mb-2 font-semibold">Target State</h3>
                <p className="text-sm text-muted-foreground">Optimized scheduling and efficiency</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-green-200">
                  <span className="text-2xl font-bold text-green-600">-13%</span>
                </div>
                <h3 className="mb-2 font-semibold">Net Improvement</h3>
                <p className="text-sm text-muted-foreground">Significant carbon footprint reduction</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}


