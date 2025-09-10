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

const airLimits = [
  { pollutant: "SO₂", limit: "50 ppm", basis: "Stack emissions (daily avg)" },
  { pollutant: "NOx", limit: "50 ppm", basis: "Combustion units (daily avg)" },
  { pollutant: "PM2.5", limit: "25 μg/m³", basis: "Ambient (24‑hr avg)" },
  { pollutant: "Mercury (Hg)", limit: "0.05 mg/m³", basis: "Vapour (stack)" },
]

const waterLimits = [
  { parameter: "WAD Cyanide", limit: "< 30 mg/L", basis: "Detox discharge" },
  { parameter: "TSS", limit: "< 50 mg/L", basis: "Discharge (24‑hr avg)" },
  { parameter: "pH", limit: "6.5–8.5", basis: "Discharge range" },
]

const fines = [
  { category: "Air Exceedance", first: "$25,000 per incident", repeat: "$50,000 + daily accrual" },
  { category: "Water Exceedance", first: "$30,000 per incident", repeat: "$60,000 + daily accrual" },
  { category: "Unreported Leak", first: "$40,000", repeat: "$80,000 + enforcement" },
  { category: "Data Falsification", first: "$100,000", repeat: "$250,000 + prosecution" },
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
              <Card>
                <CardHeader>
                  <CardTitle>Official Guidelines & Limits</CardTitle>
                  <CardDescription>Representative regulatory thresholds for mining & processing sites</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 @[1000px]/card:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <div className="text-xs text-muted-foreground">Compliance Status</div>
                      <div className="text-2xl font-semibold">Live Guards</div>
                      <Badge variant="outline" className="mt-1 text-green-600">Automated</Badge>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-xs text-muted-foreground">Audit Readiness</div>
                      <div className="text-2xl font-semibold">Snapshot</div>
                      <Badge variant="outline" className="mt-1 text-green-600">Signed</Badge>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="text-xs text-muted-foreground">Reporting Cadence</div>
                      <div className="text-2xl font-semibold">Continuous</div>
                      <Badge variant="outline" className="mt-1 text-green-600">Real‑time</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Air Quality Limits</CardTitle>
                  <CardDescription>Typical permitted stack/ambient concentrations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <Table>
                      <TableHeader className="bg-muted">
                        <TableRow>
                          <TableHead>Pollutant</TableHead>
                          <TableHead>Limit</TableHead>
                          <TableHead className="text-right">Basis</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {airLimits.map((a, i) => (
                          <TableRow key={i}>
                            <TableCell>{a.pollutant}</TableCell>
                            <TableCell>{a.limit}</TableCell>
                            <TableCell className="text-right">{a.basis}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Water Discharge Limits</CardTitle>
                  <CardDescription>Representative consent conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <Table>
                      <TableHeader className="bg-muted">
                        <TableRow>
                          <TableHead>Parameter</TableHead>
                          <TableHead>Limit</TableHead>
                          <TableHead className="text-right">Basis</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {waterLimits.map((w, i) => (
                          <TableRow key={i}>
                            <TableCell>{w.parameter}</TableCell>
                            <TableCell>{w.limit}</TableCell>
                            <TableCell className="text-right">{w.basis}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Penalty Framework</CardTitle>
                  <CardDescription>Illustrative fines and escalations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg border">
                    <Table>
                      <TableHeader className="bg-muted">
                        <TableRow>
                          <TableHead>Category</TableHead>
                          <TableHead>First Offense</TableHead>
                          <TableHead className="text-right">Repeat / Escalation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {fines.map((f, i) => (
                          <TableRow key={i}>
                            <TableCell>{f.category}</TableCell>
                            <TableCell>{f.first}</TableCell>
                            <TableCell className="text-right">{f.repeat}</TableCell>
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
      </SidebarInset>
    </SidebarProvider>
  )
}
