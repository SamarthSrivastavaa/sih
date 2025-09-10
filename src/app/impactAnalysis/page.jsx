"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  IconDeviceAnalytics,
  IconTimeline,
  IconLeaf,
  IconChartArrowsVertical,
  IconBrandSpeedtest,
} from "@tabler/icons-react"

const productImpacts = [
  { scope: "Product: Paste Backfill", co2: "-0.12 tCO₂/t ore", water: "+0.09 m³/t reclaimed", note: "Replaces cement & returns water" },
  { scope: "Product: NAG Road Base", co2: "-0.06 tCO₂/t ore", water: "~0", note: "Offsets quarrying and transport" },
  { scope: "Product: Tailings Bricks", co2: "-0.04 tCO₂/t ore", water: "+0.02 m³/t reclaimed", note: "Stabilized bricks, kiln gas recovered" },
  { scope: "Product: GGBS (SCM)", co2: "-0.18 tCO₂/t ore", water: "~0", note: "Cement clinker substitution" },
]

const timeSavings = [
  { item: "LCA Snapshot Report", before: "6–8 weeks", now: "< 10 min" },
  { item: "Compliance Check (WAD CN/TSS)", before: "Weekly batch", now: "Continuous" },
  { item: "Waste Routing Update", before: "Monthly review", now: "Every 15 min" },
  { item: "Audit-Ready Export", before: "2–3 weeks", now: "Instant" },
]

const productionStats = [
  { label: "Throughput Unlocked", value: "+3.1%", note: "Adaptive setpoints + reduced recirculation" },
  { label: "Unplanned Downtime Avoided", value: "12.5 h/mo", note: "Hotspot early warnings" },
  { label: "Gold Recovery Gain", value: "+0.4 pp", note: "Gravity + CIL tuning per shift" },
]

const envOutcomes = [
  { product: "Paste Backfill", co2: "−1,250 tCO₂e/mo", water: "18,900 m³/mo", basis: "SCM substitution + reclaim" },
  { product: "NAG Road Base", co2: "−420 tCO₂e/mo", water: "~0", basis: "Avoided quarrying/haul" },
  { product: "Tailings Bricks", co2: "−310 tCO₂e/mo", water: "3,100 m³/mo", basis: "Stabilized feed + kiln gas recovery" },
  { product: "GGBS (SCM)", co2: "−1,860 tCO₂e/mo", water: "~0", basis: "Clinker substitution" },
]

const complianceOutcomes = [
  { metric: "WAD CN exceedances", before: "4 per quarter", now: "0", delta: "−100%" },
  { metric: "TSS discharge alerts", before: "9 per quarter", now: "2", delta: "−78%" },
  { metric: "Audit prep time", before: "2–3 weeks", now: "< 1 day", delta: "−90%" },
]

export default function Page() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      }}>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* Intro */}
              <div className="px-4 lg:px-6">
                <div className="grid gap-4 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2"><IconDeviceAnalytics /> Impact Analysis — Aurum Mines (Pit‑3)</CardTitle>
                      <CardDescription>
                        Real‑time product impact: paste backfill, NAG base, tailings bricks, and SCM — evaluated 24/7 with instant reporting.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <ul className="list-disc space-y-2 pl-5">
                        <li><span className="text-foreground font-medium">Dynamic evaluation:</span> per‑shift, per‑stockpile impacts with reconciled mass balance.</li>
                        <li><span className="text-foreground font-medium">Faster actions:</span> mitigation and routing changes applied within minutes, not months.</li>
                        <li><span className="text-foreground font-medium">Audit‑ready:</span> signed snapshots for each decision point.</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2"><IconBrandSpeedtest className="text-green-600" /> Speed & Confidence Gains</CardTitle>
                      <CardDescription>From batch reporting to live, continuous verification</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg border p-3">
                          <div className="text-xs text-muted-foreground">Report Lead Time</div>
                          <div className="text-2xl font-semibold">8w → 10m</div>
                          <Badge variant="outline" className="mt-1 text-green-600">-98%</Badge>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-xs text-muted-foreground">Decision Latency</div>
                          <div className="text-2xl font-semibold">4w → 15m</div>
                          <Badge variant="outline" className="mt-1 text-green-600">-96%</Badge>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-xs text-muted-foreground">Non‑compliance Exposure</div>
                          <div className="text-2xl font-semibold">High → Low</div>
                          <Badge variant="outline" className="mt-1 text-green-600">Live guards</Badge>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-xs text-muted-foreground">Material Circularity</div>
                          <div className="text-2xl font-semibold">+5.2%</div>
                          <Badge variant="outline" className="mt-1 text-green-600">Uptrending</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Production outcomes (concrete) */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Production Outcomes — Aurum Pit‑3</CardTitle>
                    <CardDescription>Quantified gains driven by faster reporting and 24/7 evaluation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4 @[900px]/card:grid-cols-3">
                      {productionStats.map((s, i) => (
                        <div key={i} className="rounded-lg border p-3">
                          <div className="text-xs text-muted-foreground">{s.label}</div>
                          <div className="text-2xl font-semibold">{s.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">{s.note}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Product impact table */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><IconLeaf className="text-green-600" /> Product Impact — Pit‑3 Outputs</CardTitle>
                    <CardDescription>CO₂, water, and notes per product based on live routing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-hidden rounded-lg border">
                      <Table>
                        <TableHeader className="bg-muted">
                          <TableRow>
                            <TableHead>Product</TableHead>
                            <TableHead>CO₂ Impact</TableHead>
                            <TableHead>Water Impact</TableHead>
                            <TableHead className="text-right">Notes</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {productImpacts.map((p, i) => (
                            <TableRow key={i}>
                              <TableCell>{p.scope}</TableCell>
                              <TableCell>{p.co2}</TableCell>
                              <TableCell>{p.water}</TableCell>
                              <TableCell className="text-right">{p.note}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Environmental outcomes (monthly aggregates) */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Environmental Outcomes — Monthly Avoided Footprint</CardTitle>
                    <CardDescription>Measured deltas attributable to circular routing and faster response</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-hidden rounded-lg border">
                      <Table>
                        <TableHeader className="bg-muted">
                          <TableRow>
                            <TableHead>Product/Stream</TableHead>
                            <TableHead>CO₂e Avoided</TableHead>
                            <TableHead>Water Reclaimed</TableHead>
                            <TableHead className="text-right">Basis</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {envOutcomes.map((r, i) => (
                            <TableRow key={i}>
                              <TableCell>{r.product}</TableCell>
                              <TableCell>{r.co2}</TableCell>
                              <TableCell>{r.water}</TableCell>
                              <TableCell className="text-right">{r.basis}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Compliance & safety outcomes */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Compliance & Safety Outcomes</CardTitle>
                    <CardDescription>Incidents reduced by live guards and faster mitigation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-hidden rounded-lg border">
                      <Table>
                        <TableHeader className="bg-muted">
                          <TableRow>
                            <TableHead>Metric</TableHead>
                            <TableHead>Before</TableHead>
                            <TableHead className="text-right">Now / Delta</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {complianceOutcomes.map((c, i) => (
                            <TableRow key={i}>
                              <TableCell>{c.metric}</TableCell>
                              <TableCell>{c.before}</TableCell>
                              <TableCell className="text-right">{c.now} ({c.delta})</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Time savings comparison */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><IconTimeline /> Operational Time Savings</CardTitle>
                    <CardDescription>Before vs now with AI‑driven LCA + impact analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-hidden rounded-lg border">
                      <Table>
                        <TableHeader className="bg-muted">
                          <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead>Before</TableHead>
                            <TableHead className="text-right">Now</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {timeSavings.map((r, i) => (
                            <TableRow key={i}>
                              <TableCell>{r.item}</TableCell>
                              <TableCell>{r.before}</TableCell>
                              <TableCell className="text-right">{r.now}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Trend chart (reuse) */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><IconChartArrowsVertical /> Emissions & Efficiency Trends</CardTitle>
                    <CardDescription>Live view of site performance improvements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartAreaInteractive />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}


