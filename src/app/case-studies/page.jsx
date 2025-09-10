"use client"

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const comparisons = [
  { period: "2025-04", co2: 3.4, water: 0.82, recovery: 74.1 },
  { period: "2025-05", co2: 3.1, water: 0.76, recovery: 76.8 },
  { period: "2025-06", co2: 2.9, water: 0.71, recovery: 78.0 },
  { period: "2025-07", co2: 2.8, water: 0.69, recovery: 78.4 },
  { period: "2025-08", co2: 2.7, water: 0.68, recovery: 79.0 },
]

const methaneEvents = [
  { date: "2025-05-12", source: "Vent Raise #2", reading: 1450, limit: 500, status: "Ignored (legacy)" },
  { date: "2025-06-03", source: "Crusher House", reading: 820, limit: 500, status: "Captured & alarmed" },
  { date: "2025-07-19", source: "Tailings Ponds Rim", reading: 590, limit: 500, status: "Captured & alarmed" },
  { date: "2025-08-02", source: "Vent Raise #2", reading: 410, limit: 500, status: "Resolved" },
]

export default function Page() {
  return (
    <SidebarProvider style={{ "--sidebar-width": "calc(var(--spacing) * 72)", "--header-height": "calc(var(--spacing) * 12)" }}>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
              {/* Executive Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Executive Summary — Aurum Pit‑3 Case Study</CardTitle>
                  <CardDescription>Real incident: missed methane leakage escalations, corrected by live evaluation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    <li>CO₂ intensity improved ~21% since April; water use per tonne down ~17% with reclaim.</li>
                    <li>Material recovery up 4.9 pp via AI‑routed paste, aggregates, and SCM offtake.</li>
                    <li>Methane (CH₄) exceedances at Vent Raise #2 were previously unflagged by batch reporting; continuous monitoring corrected this from June.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Case Studies — Report Trend Contrast</CardTitle>
                  <CardDescription>How key indicators evolved across recent reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 @[1100px]/card:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <div className="text-xs text-muted-foreground">CO₂ Intensity (tCO₂e/t)</div>
                      <div className="text-2xl font-semibold">↓ 21% since Apr</div>
                      <Badge variant="outline" className="mt-1 text-green-600">Improving</Badge>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-xs text-muted-foreground">Water Use (m³/t)</div>
                      <div className="text-2xl font-semibold">↓ 17% since Apr</div>
                      <Badge variant="outline" className="mt-1 text-green-600">Improving</Badge>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-xs text-muted-foreground">Material Recovery (%)</div>
                      <div className="text-2xl font-semibold">↑ 4.9 pp since Apr</div>
                      <Badge variant="outline" className="mt-1 text-green-600">Improving</Badge>
                    </div>
                  </div>
                  <div className="mt-4 overflow-hidden rounded-lg border">
                    <Table>
                      <TableHeader className="bg-muted">
                        <TableRow>
                          <TableHead>Period</TableHead>
                          <TableHead>CO₂ Intensity (tCO₂e/t)</TableHead>
                          <TableHead>Water Use (m³/t)</TableHead>
                          <TableHead className="text-right">Material Recovery (%)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {comparisons.map((c) => (
                          <TableRow key={c.period}>
                            <TableCell>{c.period}</TableCell>
                            <TableCell>{c.co2.toFixed(2)}</TableCell>
                            <TableCell>{c.water.toFixed(2)}</TableCell>
                            <TableCell className="text-right">{c.recovery.toFixed(1)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* Methane leakage timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Methane Leakage — Events & Escalation</CardTitle>
                  <CardDescription>Detect → alarm → mitigate; legacy gaps vs live guards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <Table>
                      <TableHeader className="bg-muted">
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Source</TableHead>
                          <TableHead>Reading (ppm)</TableHead>
                          <TableHead>Limit (ppm)</TableHead>
                          <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {methaneEvents.map((e, i) => (
                          <TableRow key={`${e.date}-${i}`}>
                            <TableCell>{new Date(e.date).toLocaleDateString()}</TableCell>
                            <TableCell>{e.source}</TableCell>
                            <TableCell>{e.reading}</TableCell>
                            <TableCell>{e.limit}</TableCell>
                            <TableCell className="text-right">
                              <Badge variant="outline" className={e.status.includes("Ignored") ? "text-red-600" : e.status === "Resolved" ? "text-green-600" : "text-orange-600"}>
                                {e.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations & Conclusion */}
              <Card>
                <CardHeader>
                  <CardTitle>Recommendations & Conclusion</CardTitle>
                  <CardDescription>Actions derived from the case study and expected impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 @[1100px]/card:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <div className="text-sm font-medium">Recommendations</div>
                      <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                        <li>Lock methane alarms at 500 ppm for Vent Raises and Crusher House; verify response playbooks.</li>
                        <li>Expand paste backfill capacity to sustain recovery gains; maintain CN detox setpoints.</li>
                        <li>Schedule power‑intensive steps off‑peak; progress PPA coverage to 40%.</li>
                      </ul>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-sm font-medium">Conclusion</div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        Continuous evaluation closed a methane oversight, reduced CO₂ intensity, and improved material recovery. The same live guards now prevent recurrence while enabling faster, data‑driven reporting.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
