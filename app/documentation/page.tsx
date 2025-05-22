import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Code, Database, Shield, Zap } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive guides and resources to help you get the most out of the AIA.AI platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader>
                <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
                  <FileText className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription className="text-gray-400">
                  Learn the basics of using the AIA.AI platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="hover:text-white transition-colors">
                    <a href="#">Platform Overview</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Creating an Account</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Dashboard Navigation</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Finding Opportunities</a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle>API Reference</CardTitle>
                <CardDescription className="text-gray-400">Integrate with our platform using our API</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="hover:text-white transition-colors">
                    <a href="#">Authentication</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Endpoints</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Rate Limits</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Webhooks</a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
              <CardHeader>
                <div className="bg-cyan-500/20 p-3 rounded-lg w-fit mb-4">
                  <Database className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle>Data Models</CardTitle>
                <CardDescription className="text-gray-400">Understanding our AI data models</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="hover:text-white transition-colors">
                    <a href="#">Opportunity Scoring</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Risk Assessment</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Personalization</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Data Sources</a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-green-500/50 transition-all duration-300">
              <CardHeader>
                <div className="bg-green-500/20 p-3 rounded-lg w-fit mb-4">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle>Security</CardTitle>
                <CardDescription className="text-gray-400">Keeping your assets and data safe</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="hover:text-white transition-colors">
                    <a href="#">Best Practices</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Two-Factor Authentication</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Wallet Security</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Scam Prevention</a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-amber-500/50 transition-all duration-300">
              <CardHeader>
                <div className="bg-amber-500/20 p-3 rounded-lg w-fit mb-4">
                  <Zap className="h-6 w-6 text-amber-400" />
                </div>
                <CardTitle>Advanced Features</CardTitle>
                <CardDescription className="text-gray-400">Unlock the full potential of AIA.AI</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="hover:text-white transition-colors">
                    <a href="#">Custom Alerts</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Portfolio Integration</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Opportunity Filtering</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Analytics Dashboard</a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-red-500/50 transition-all duration-300">
              <CardHeader>
                <div className="bg-red-500/20 p-3 rounded-lg w-fit mb-4">
                  <FileText className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle>Tutorials</CardTitle>
                <CardDescription className="text-gray-400">Step-by-step guides for common tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="hover:text-white transition-colors">
                    <a href="#">Finding Airdrops</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Verifying Opportunities</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Setting Up Alerts</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                    <a href="#">Customizing Your Feed</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
