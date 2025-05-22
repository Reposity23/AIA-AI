"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, Lock, Network, Cpu } from "lucide-react"

const TechnologySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const technologies = [
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "Neural Networks",
      description: "Advanced neural networks that learn and adapt to market conditions and user behavior.",
    },
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: "Blockchain Integration",
      description: "Seamless integration with multiple blockchains for comprehensive data analysis.",
    },
    {
      icon: <Lock className="h-8 w-8 text-cyan-500" />,
      title: "Secure Verification",
      description: "Multi-layered verification processes to ensure the legitimacy of crypto opportunities.",
    },
    {
      icon: <Network className="h-8 w-8 text-green-500" />,
      title: "Smart Contracts",
      description: "Automated smart contracts for secure and transparent reward distribution.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-amber-500" />,
      title: "Machine Learning",
      description: "Continuous learning algorithms that improve with every interaction.",
    },
  ]

  return (
    <section id="technology" className="py-20 md:py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Technology & Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Our platform is built on cutting-edge technologies that power the future of crypto discovery and security.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="md:col-span-3">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden glow-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-black/80"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4">AI-Powered Ecosystem</h3>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Our technology stack combines artificial intelligence, machine learning, and blockchain to create a
                    secure and intelligent platform for crypto discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-lg">{tech.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl animate-float"
        style={{ animationDelay: "2.5s" }}
      ></div>
    </section>
  )
}

export default TechnologySection
