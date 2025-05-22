"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const milestones = [
    {
      year: "2025",
      title: "Platform Launch",
      description: "Official release of AIA.AI platform with core AI features and community building.",
    },
    {
      year: "2026",
      title: "Token Generation Event",
      description: "Launch of native token and reward ecosystem with staking capabilities.",
    },
    {
      year: "2027",
      title: "Advanced AI Integration",
      description: "Implementation of next-gen machine learning models and predictive analytics.",
    },
    {
      year: "2028",
      title: "Global Ecosystem Expansion",
      description: "Scaling platform capabilities, partnerships, and international reach.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 transform ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Our Vision & Mission
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              AIA.AI was founded with a clear mission: to build the most reliable, accurate, and user-friendly crypto
              opportunity discovery platform powered by artificial intelligence.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              We believe in creating a secure environment where users can safely navigate the crypto space, discover
              legitimate opportunities, and earn rewards through their participation. Our self-evolving AI continuously
              learns and improves to provide the most relevant and valuable insights for every user.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div
            ref={ref}
            className={`transition-all duration-1000 delay-300 transform ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Roadmap & Milestones</h3>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-8 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-x-2"></div>
                    <div className="mb-1 text-sm font-semibold text-purple-400">{milestone.year}</div>
                    <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/3 right-0 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </section>
  )
}

export default AboutSection
