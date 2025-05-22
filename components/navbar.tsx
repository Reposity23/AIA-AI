"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDownloadExtension = () => {
    // In a real implementation, this would download the browser extension
    // or redirect to the extension store
    alert("Browser extension download will be available soon!")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              AIA.AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#technology" className="text-gray-300 hover:text-white transition-colors">
              Technology
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#community" className="text-gray-300 hover:text-white transition-colors">
              Community
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 flex items-center gap-2"
              onClick={handleDownloadExtension}
            >
              <Download className="h-4 w-4" />
              Download Extension
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
              onClick={() => router.push("/auth/sign-in")}
            >
              Sign In
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              onClick={() => router.push("/auth/sign-up")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4">
            <Link href="#features" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#technology" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Technology
            </Link>
            <Link href="#about" className="block py-2 text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#community" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Community
            </Link>
            <div className="pt-4 flex flex-col space-y-3">
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center gap-2"
                onClick={handleDownloadExtension}
              >
                <Download className="h-4 w-4" />
                Download Extension
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/10 w-full"
                onClick={() => router.push("/auth/sign-in")}
              >
                Sign In
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full"
                onClick={() => router.push("/auth/sign-up")}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
