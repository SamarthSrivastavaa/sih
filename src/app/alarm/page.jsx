"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  IconAlertTriangle, 
  IconTarget,
  IconDroplet,
  IconShield,
  IconFileText,
  IconCheck,
  IconArrowRight,
  IconRocket,
  IconLeaf,
  IconBuildingFactory,
  IconTrendingUp,
  IconChartBar,
  IconUsers
} from "@tabler/icons-react";

export default function AlarmPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 font-['Poppins',sans-serif] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-xl flex items-center justify-center shadow-lg">
              <IconAlertTriangle className="w-7 h-7 text-red-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">EcoSync</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">Environmental Alert System</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild className="font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6">
              <Link href="/dashboard">
                <IconRocket className="w-4 h-4 mr-2" />
                Dashboard
              </Link>
            </Button>
          </div>
        </div>

        {/* Main Alert Container */}
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-slate-50/80 via-white/90 to-slate-100/80 dark:from-slate-800/90 dark:via-slate-700/90 dark:to-slate-800/90 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60">
          <CardHeader className="p-8">
            {/* Alert Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-2xl flex items-center justify-center shadow-lg">
                  <IconDroplet className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white">Methane Gas Leakage Detected</CardTitle>
                  <CardDescription className="text-lg text-slate-600 dark:text-slate-400">
                    Critical environmental hazard affecting Zone A processing facility
                  </CardDescription>
                </div>
              </div>
              <Badge className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm font-semibold">
                <IconTarget className="w-4 h-4 mr-2" />
                CRITICAL ALERT
              </Badge>
            </div>

            {/* Alert Details Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Main Info */}
              <div className="space-y-6">
                {/* Hazard Description */}
                <div className="p-6 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                    <IconAlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                    Hazard Description
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    High concentration methane gas (CH₄) detected at 1,250 ppm, exceeding safe operational limits by 2.5x. 
                    The leak is originating from the primary processing line and poses immediate risk to personnel safety 
                    and environmental compliance. Methane is a potent greenhouse gas with 25x the warming potential of CO₂.
                  </p>
                </div>

                {/* Potential Leak Sites */}
                <div className="p-6 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <IconTarget className="w-5 h-5 text-blue-500 mr-2" />
                    Potential Leak Sites to Check
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">Primary Processing Line - Junction 7A</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">Compression Unit - Valve Assembly B3</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">Storage Tank - Vent System Connection</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">Pipeline Section - Underground Segment 12</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Safety & Analysis */}
              <div className="space-y-6">
                {/* Safety Precautions */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800/90 dark:to-slate-700/90 border border-slate-200/60 dark:border-slate-700/60">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <IconShield className="w-5 h-5 text-green-500 mr-2" />
                    Safety Precautions
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <IconShield className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Immediately evacuate all personnel from Zone A (50m radius)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <IconShield className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Shut down all electrical equipment in affected area</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <IconShield className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Activate emergency ventilation systems</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <IconShield className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">Notify emergency response team and local authorities</span>
                    </div>
                  </div>
                </div>

                {/* Root Cause Analysis */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800/90 dark:to-slate-700/90 border border-slate-200/60 dark:border-slate-700/60">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                    <IconCheck className="w-5 h-5 text-orange-500 mr-2" />
                    Likely Causes
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Worn gasket seal in primary processing line junction</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Corrosion in underground pipeline section</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Pressure relief valve malfunction</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 dark:text-slate-300">Insufficient maintenance on compression unit</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 text-center">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">1,250 ppm</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Current Level</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">500 ppm</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Safe Limit</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-700/60">
              <Button className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-8 py-3">
                <IconTarget className="w-4 h-4 mr-2" />
                Emergency Response
              </Button>
              <Button variant="outline" className="border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 font-semibold px-8 py-3">
                <IconFileText className="w-4 h-4 mr-2" />
                View Full Report
              </Button>
              <Button variant="outline" className="border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 font-semibold px-8 py-3">
                <IconCheck className="w-4 h-4 mr-2" />
                Schedule Maintenance
              </Button>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}