"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Twitter, DiscIcon as Discord, TextIcon as Telegram, Send } from "lucide-react"

const CommunitySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    alert("Thank you for your message! We'll get back to you soon.")
    setEmail("")
    setMessage("")
  }

  return (
    <section id="community" className="py-20 md:py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
              Join Our Community
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Connect with like-minded crypto enthusiasts, get early access to features, and stay updated on the latest
            opportunities.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-gray-800 border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your question or feedback..."
                  required
                  className="bg-gray-800 border-gray-700 min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Join Our Channels</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500/10 flex items-center justify-center gap-2"
                >
                  <Twitter className="h-5 w-5" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500/10 flex items-center justify-center gap-2"
                >
                  <Discord className="h-5 w-5" />
                  Discord
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center gap-2"
                >
                  <Telegram className="h-5 w-5" />
                  Telegram
                </Button>
              </div>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter to receive the latest updates on airdrops, crypto opportunities, and
                platform features.
              </p>
              <form className="flex space-x-2">
                <Input type="email" placeholder="your@email.com" className="bg-gray-800 border-gray-700" required />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full filter blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  )
}

export default CommunitySection
