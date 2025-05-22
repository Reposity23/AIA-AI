"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Shield, Coins, UserCheck, LineChart } from "lucide-react"
import { useInView } from "framer-motion"

const features = [
  {
    icon: <Brain className="h-10 w-10 text-purple-500" />,
    title: "Self-learning AI Algorithms",
    description:
      "Our AI adapts to your behavior and emerging market trends, continuously improving its recommendations based on your interactions and preferences.",
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-500" />,
    title: "Verified Airdrop Aggregation",
    description:
      "AIA.AI scans multiple sources including social media, blockchain data, and crypto communities to compile only legitimate airdrop opportunities.",
  },
  {
    icon: <UserCheck className="h-10 w-10 text-cyan-500" />,
    title: "Scam Detection & Security",
    description:
      "Our advanced AI-powered detection identifies phishing links, scam projects, and fake crypto games to keep your investments safe.",
  },
  {
    icon: <Coins className="h-10 w-10 text-green-500" />,
    title: "User Token Rewards",
    description:
      "Earn native tokens through our reward mechanism tied to your participation, data contributions, and platform engagement.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-amber-500" />,
    title: "Personalization",
    description:
      "Experience a fully customized platform that tailors content and opportunities based on your unique profile and preferences.",
  },
]

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        features.forEach((_, index) => {
          setTimeout(() => {
            setVisibleFeatures((prev) => [...prev, index])
          }, index * 200)
        })
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Powered by Advanced AI
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Discover how our cutting-edge features revolutionize your crypto experience with AI-driven insights and
            protection.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-purple-500/50 transition-all duration-500 transform ${
                visibleFeatures.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/3 left-0 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  )
}

export default FeaturesSection
