"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SectionCards } from "@/components/section-cards"
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
  IconBulb,
  IconRecycle,
  IconAlertTriangle,
  IconDroplet,
  IconArrowRight,
  IconTruck,
  IconBuildingFactory,
  IconLeaf,
  IconReportAnalytics,
  IconCertificate,
  IconBolt,
  IconLink,
} from "@tabler/icons-react"

const wasteStreams = [
  {
    stream: "Overburden & Waste Rock",
    aiRoute: "Crushed and blended into construction aggregates",
    secondaryUse: "Haul road base, concrete filler",
    recovery: "68%",
  },
  {
    stream: "Tailings (Au mine)",
    aiRoute: "Reprocess for residual metals; stabilize for bricks",
    secondaryUse: "Paving bricks, backfill binder",
    recovery: "54%",
  },
  {
    stream: "Smelting Slag",
    aiRoute: "Granulate and grind for cement additive",
    secondaryUse: "Cement clinker substitute",
    recovery: "72%",
  },
  {
    stream: "Process Water",
    aiRoute: "Membrane + UV; closed-loop reuse",
    secondaryUse: "Ore washing, dust suppression",
    recovery: "91%",
  },
]

const inventoryByStage = [
  { stage: "Mining", co2: "0.62 tCO₂/t", water: "0.04 m³/t", energy: "18.3 kWh/t" },
  { stage: "Crushing", co2: "0.18 tCO₂/t", water: "0.01 m³/t", energy: "7.2 kWh/t" },
  { stage: "Grinding + CIL", co2: "1.12 tCO₂/t", water: "0.32 m³/t", energy: "28.5 kWh/t" },
  { stage: "Detox + Thickening", co2: "0.21 tCO₂/t", water: "-0.26 m³/t", energy: "4.1 kWh/t" },
  { stage: "Paste & Backfill", co2: "0.09 tCO₂/t", water: "-0.12 m³/t", energy: "2.4 kWh/t" },
]

const symbiosis = [
  { partner: "Aurum Cement (Kiln #2)", stream: "Ground slag as SCM (GGBS)", status: "MoU Signed" },
  { partner: "Roads Ops", stream: "0–63 mm NAG aggregates", status: "Live" },
  { partner: "BrickWorks Co.", stream: "Stabilized tailings bricks", status: "Pilot" },
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
                      <CardTitle>Aurum Mines — Pit‑3 LCA</CardTitle>
                      <CardDescription>
                        Open‑pit gold (Pit‑3): 35 kt/d crushing → SAG/ball milling → gravity/CIL → detox → paste backfill.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                      <ul className="list-disc space-y-2 pl-5">
                        <li><span className="text-foreground font-medium">Shift snapshots:</span> Crusher, mill, thickener, detox and CIL carbon inventory synchronized every 15 min.</li>
                        <li><span className="text-foreground font-medium">Compliance ready:</span> WAD CN, TSS, and discharge targets tracked with audit trails.</li>
                        <li><span className="text-foreground font-medium">Circular routing:</span> AI assigns NAG waste rock to road base, detox tailings to paste/brick feed.</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <IconLeaf className="text-green-600" /> Circular Economy Pulse
                      </CardTitle>
                      <CardDescription>
                        Recovery, reuse and reductions across the operation.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg border p-3">
                          <div className="text-xs text-muted-foreground">Material Recovery</div>
                          <div className="text-2xl font-semibold">78.4%</div>
                          <Badge variant="outline" className="mt-1 text-green-600">+5.2%</Badge>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-xs text-muted-foreground">Water Reuse</div>
                          <div className="text-2xl font-semibold">91.0%</div>
                          <Badge variant="outline" className="mt-1 text-green-600">+3.1%</Badge>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-xs text-muted-foreground">Emission Intensity</div>
                          <div className="text-2xl font-semibold">-15.2%</div>
                          <Badge variant="outline" className="mt-1 text-green-600">Improving</Badge>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="text-xs text-muted-foreground">Compliance Score</div>
                          <div className="text-2xl font-semibold">92.7%</div>
                          <Badge variant="outline" className="mt-1 text-green-600">+2.1%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* KPIs (reuse) */}
              <SectionCards />

              {/* Circular flow */}
              <div className="px-4 lg:px-6">
                <Card className="@container/card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IconRecycle className="text-purple-600" /> AI-Guided Circular Flow — Aurum Mine
                    </CardTitle>
                    <CardDescription>Aurum Pit‑3 circuit and the AI‑routed material loop</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 @[900px]/card:grid-cols-5">
                      <div className="rounded-lg border p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                          <IconTruck className="text-muted-foreground" /> Mining & Primary Crushing
                        </div>
                        <div className="text-muted-foreground text-sm">
                          Blast → gyratory crusher → coarse stockpile. Waste rock classified NAG/PAG for ARD control.
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <IconArrowRight className="text-muted-foreground" />
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                          <IconDroplet className="text-blue-600" /> Grinding, CIL & Detox
                        </div>
                        <div className="text-muted-foreground text-sm">
                          SAG/ball mill → gravity/CIL. SO₂/air detox lowers WAD CN. Thickener underflow to paste plant.
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <IconArrowRight className="text-muted-foreground" />
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                          <IconBuildingFactory className="text-orange-600" /> Secondary Products & Reuse
                        </div>
                        <div className="text-muted-foreground text-sm">
                          NAG rock to 0–63 mm road base; detox tailings to paste/brick feed; slag ground as cement SCM; water reclaimed.
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 @[900px]/card:grid-cols-3">
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2 text-sm font-medium"><IconBulb className="text-yellow-600" /> Real-time Recommendations</div>
                        <div className="text-muted-foreground text-sm">Adjusts routing on CN free, solids %, stockpile moisture, and ARD risk flags.</div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2 text-sm font-medium"><IconAlertTriangle className="text-orange-600" /> Risk & Compliance</div>
                        <div className="text-muted-foreground text-sm">WAD CN, TSS and discharge setpoints enforced; alerts and audit logs auto-issued.</div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2 text-sm font-medium"><IconRecycle className="text-purple-600" /> Value Recovery</div>
                        <div className="text-muted-foreground text-sm">Paste backfill for stopes, aggregates for haul roads, SCM supply to cement plant.</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Trend chart */}
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>

              {/* Waste routing table */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Aurum Pit‑3 — Waste → Secondary Use</CardTitle>
                    <CardDescription>Routes proposed by the recommendation engine for on-site circularity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-hidden rounded-lg border">
                      <Table>
                        <TableHeader className="bg-muted">
                          <TableRow>
                            <TableHead>Waste Stream</TableHead>
                            <TableHead>AI Route</TableHead>
                            <TableHead>Secondary Use / Product</TableHead>
                            <TableHead className="text-right">Estimated Recovery</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {wasteStreams.map((w, idx) => (
                            <TableRow key={idx}>
                              <TableCell>{w.stream}</TableCell>
                              <TableCell>{w.aiRoute}</TableCell>
                              <TableCell>{w.secondaryUse}</TableCell>
                              <TableCell className="text-right">{w.recovery}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Stage Inventory & Impacts */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><IconReportAnalytics className="text-primary" /> Stage‑wise Inventory & Impacts — Pit‑3</CardTitle>
                    <CardDescription>Per‑tonne ore metrics (last 30 days, reconciled)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-hidden rounded-lg border">
                      <Table>
                        <TableHeader className="bg-muted">
                          <TableRow>
                            <TableHead>Stage</TableHead>
                            <TableHead>CO₂ Intensity</TableHead>
                            <TableHead>Water Balance</TableHead>
                            <TableHead className="text-right">Specific Energy</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {inventoryByStage.map((r, i) => (
                            <TableRow key={i}>
                              <TableCell>{r.stage}</TableCell>
                              <TableCell>{r.co2}</TableCell>
                              <TableCell>{r.water}</TableCell>
                              <TableCell className="text-right">{r.energy}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Hotspot Detection & Actions */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><IconBolt className="text-yellow-600" /> AI Hotspot Detection & Mitigations</CardTitle>
                    <CardDescription>Automated actions applied in operations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 @[1000px]/card:grid-cols-3">
                      <div className="rounded-lg border p-3">
                        <div className="text-sm font-medium">Grinding energy spike</div>
                        <div className="text-muted-foreground text-sm">Adjusted mill speed + ball charge; target P80 restored, −7% kWh/t.</div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="text-sm font-medium">WAD CN drift in tailings</div>
                        <div className="text-muted-foreground text-sm">SO₂/air dosage tuned; CN free &lt; 30 mg/L before discharge.</div>
                      </div>
                      <div className="rounded-lg border p-3">
                        <div className="text-sm font-medium">Water balance deficit</div>
                        <div className="text-muted-foreground text-sm">Reclaim rate increased; paste plant filtrate looped, −0.18 m³/t make‑up.</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Data Lineage & Auditability */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><IconCertificate className="text-green-600" /> Data Lineage & Audit</CardTitle>
                    <CardDescription>Traceability from sensor to report</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                      <li><span className="text-foreground font-medium">Sensors:</span> flow, density, CN, TSS, turbidity — calibrated logs preserved with checksums.</li>
                      <li><span className="text-foreground font-medium">Transform:</span> gap fill, outlier clamp, mass‑balance reconcile with versioned code.</li>
                      <li><span className="text-foreground font-medium">Report:</span> signed snapshots (hash + timestamp), export to XLSX/PDF on demand.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Industrial Symbiosis */}
              <div className="px-4 lg:px-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><IconLink className="text-purple-600" /> Industrial Symbiosis Links</CardTitle>
                    <CardDescription>External offtakes and on‑site reuse channels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-hidden rounded-lg border">
                      <Table>
                        <TableHeader className="bg-muted">
                          <TableRow>
                            <TableHead>Partner</TableHead>
                            <TableHead>Stream</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {symbiosis.map((r, i) => (
                            <TableRow key={i}>
                              <TableCell>{r.partner}</TableCell>
                              <TableCell>{r.stream}</TableCell>
                              <TableCell className="text-right">{r.status}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
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


