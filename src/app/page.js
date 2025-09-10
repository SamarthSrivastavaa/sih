import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  IconLeaf, 
  IconChartBar, 
  IconTarget, 
  IconShield, 
  IconTrendingUp,
  IconUsers,
  IconFileText,
  IconAlertTriangle,
  IconCheck,
  IconArrowRight,
  IconBuildingFactory,
  IconDroplet,
  IconRecycle,
  IconCloud,
  IconSparkles,
  IconRocket,
  IconStar
} from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 font-['Poppins',sans-serif]">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/90 backdrop-blur-md dark:bg-slate-900/90 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <IconLeaf className="w-7 h-7 text-white" />
              </div>
   <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">EcoSync</h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">Sustainability Intelligence</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" asChild className="font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
                <Link href="#features">Features</Link>
              </Button>
              <Button variant="ghost" asChild className="font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
                <Link href="#solutions">Solutions</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6">
                <Link href="/dashboard">
                  <IconRocket className="w-4 h-4 mr-2" />
                  Access Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-transparent to-emerald-50/50 dark:from-green-900/10 dark:via-transparent dark:to-emerald-900/10"></div>
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <Badge variant="outline" className="mb-8 px-6 py-3 text-sm font-semibold border-green-200 text-green-700 bg-green-50 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
            <IconBuildingFactory className="w-4 h-4 mr-2" />
            Mining & Metallurgy Industry
          </Badge>
          <div className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            <span>Transform Your{" "}</span>  
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent relative">
              Sustainability 
              <IconSparkles className="w-6 h-6 text-yellow-400 absolute -top-1 -right-8 animate-pulse" />
            </span>
            <br />Impact
          </div>
          <p className="text-lg md:text-[18px] text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-3xl mx-auto">
            Real-time environmental monitoring, compliance tracking, and impact analysis 
            for mining and metallurgy operations. Make data-driven decisions that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold px-6 py-3">
              <Link href="/dashboard">
                <IconRocket className="w-4 h-4 mr-2" />
                Start Monitoring
                <IconArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 font-semibold px-6 py-3">
              <Link href="#features">
                <IconStar className="w-4 h-4 mr-2" />
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white via-slate-50 to-white dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/90 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">99.2%</div>
              <div className="text-slate-600 dark:text-slate-400">Compliance Rate</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/90 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">-35%</div>
              <div className="text-slate-600 dark:text-slate-400">Carbon Footprint</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/90 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">85%</div>
              <div className="text-slate-600 dark:text-slate-400">Waste Recovery</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/90 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
              <div className="text-slate-600 dark:text-slate-400">Live Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Comprehensive Sustainability Management
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Everything you need to monitor, analyze, and improve your environmental impact in one powerful platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <IconChartBar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg font-bold mb-3">Impact Analysis</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Real-time environmental impact tracking with advanced analytics and predictive modeling.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <IconTarget className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg font-bold mb-3">Scenario Builder</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Model different operational scenarios to optimize sustainability outcomes and compliance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <IconShield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg font-bold mb-3">Compliance Monitoring</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Automated compliance tracking with real-time alerts and regulatory reporting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <IconTrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg font-bold mb-3">Live Monitoring</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  24/7 real-time monitoring of emissions, waste, and environmental parameters.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <IconFileText className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-lg font-bold mb-3">Smart Recommendations</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  AI-powered insights and recommendations to improve sustainability performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60">
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <IconAlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-lg font-bold mb-3">Risk Management</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Proactive risk identification and mitigation strategies for environmental compliance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Tailored sustainability management for mining and metallurgy operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                Environmental Impact Tracking
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">LCA Optimization AI</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">AI-powered Life Cycle Assessment optimization for mining processes with real-time environmental impact modeling and resource efficiency recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">24/7 Dynamic Reporting</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Continuous monitoring and instant reporting of any minute changes occurring in mines with automated alerts and predictive analytics.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Predictive Risk Intelligence</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Advanced predictive analytics that forecast environmental risks and operational challenges before they occur, enabling proactive mitigation strategies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 hover:shadow-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <IconCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Intelligent Integration</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Seamless AI integration across all mining operations with machine learning algorithms for continuous improvement and automated decision-making.</p>
                  </div>
                </div>
              </div>
   </div>
    
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <IconTarget className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">98.5%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">LCA Accuracy</div>
              </Card>
              <Card className="p-6 text-center bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <IconTrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">24/7</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Real-time Monitoring</div>
              </Card>
              <Card className="p-6 text-center bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <IconChartBar className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">95%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">AI Integration</div>
              </Card>
              <Card className="p-6 text-center bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <IconAlertTriangle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">94%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Risk Prediction</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 via-emerald-50/60 to-teal-50/80 dark:from-green-900/20 dark:via-emerald-900/10 dark:to-teal-900/20"></div>
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent"> Sustainability</span>
            <br />Impact?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join leading mining and metallurgy companies using EcoSync to achieve their sustainability goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold px-8 py-4">
              <Link href="/dashboard">
                <IconRocket className="w-5 h-5 mr-2" />
                Access Dashboard
                <IconArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 font-bold px-8 py-4">
              <Link href="#contact">
                <IconStar className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <IconLeaf className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight">EcoSync</span>
                  <p className="text-sm text-slate-400">Sustainability Intelligence</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Advanced sustainability intelligence for mining and metallurgy industries.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Platform</h3>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors font-medium hover:translate-x-1 transform duration-200">Dashboard</Link></li>
                <li><Link href="#features" className="hover:text-white transition-colors font-medium hover:translate-x-1 transform duration-200">Features</Link></li>
                <li><Link href="#solutions" className="hover:text-white transition-colors font-medium hover:translate-x-1 transform duration-200">Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Resources</h3>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors font-medium hover:translate-x-1 transform duration-200">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors font-medium hover:translate-x-1 transform duration-200">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors font-medium hover:translate-x-1 transform duration-200">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors font-medium hover:translate-x-1 transform duration-200">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors font-medium hover:translate-x-1 transform duration-200">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors font-medium hover:translate-x-1 transform duration-200">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <Separator className="my-12 bg-slate-700/50" />
          <div className="text-center text-slate-400">
            <p>&copy; 2024 EcoSync. All rights reserved. Built for sustainable mining operations.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
