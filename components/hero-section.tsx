"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
                Discover Crypto Opportunities
              </span>
              <br />
              <span>Powered by AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AIA.AI is a self-learning artificial intelligence platform that revolutionizes how you discover verified
              airdrops, detect scams, and receive personalized crypto opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-6 px-8"
                onClick={() => router.push("/auth/sign-up")}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 text-lg py-6 px-8"
                onClick={scrollToFeatures}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 glow-effect">
            <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Self-Learning AI</h3>
            <p className="text-gray-400">
              Our AI continuously learns from user interactions and market trends to improve opportunity discovery.
            </p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 glow-effect">
            <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
              <TrendingUp className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Airdrops</h3>
            <p className="text-gray-400">
              Access a curated list of legitimate airdrops and crypto opportunities verified by our advanced algorithms.
            </p>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 glow-effect">
            <div className="bg-cyan-500/20 p-3 rounded-lg w-fit mb-4">
              <Shield className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scam Detection</h3>
            <p className="text-gray-400">
              Stay protected with our AI-powered scam detection that identifies and filters out fraudulent projects.
            </p>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  )
}

export default HeroSection
