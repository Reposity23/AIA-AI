import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, TrendingUp, Users, Zap } from "lucide-react"

export default function TokenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                AIA Token Ecosystem
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our native token powers the entire AIA.AI platform, providing utility, governance, and rewards for all
              participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl">Token Utility</CardTitle>
                <CardDescription className="text-gray-400">
                  The AIA token serves multiple purposes within our ecosystem
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Coins className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Platform Access</h3>
                    <p className="text-gray-400 text-sm">
                      Token holders gain premium access to advanced AI features and exclusive opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Governance</h3>
                    <p className="text-gray-400 text-sm">
                      Participate in platform decisions through our decentralized governance system
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/20 p-2 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Staking Rewards</h3>
                    <p className="text-gray-400 text-sm">
                      Earn passive income by staking your tokens and securing the network
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Data Contribution</h3>
                    <p className="text-gray-400 text-sm">
                      Earn tokens by contributing valuable data that improves our AI systems
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl">Tokenomics</CardTitle>
                <CardDescription className="text-gray-400">
                  Designed for long-term sustainability and value creation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Total Supply</h3>
                    <p className="text-2xl font-bold text-purple-400">100,000,000 AIA</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Distribution</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Community & Ecosystem</span>
                          <span>40%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Team & Advisors</span>
                          <span>20%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Treasury & Development</span>
                          <span>25%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-cyan-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Initial Token Sale</span>
                          <span>15%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Join the AIA Token Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of our journey to revolutionize crypto opportunity discovery with AI
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Join Whitelist
              </Button>
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                Read Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
