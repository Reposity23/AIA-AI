import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Crypto Opportunity Discovery",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the way we find and verify crypto opportunities in an increasingly complex market.",
      date: "May 15, 2025",
      author: "Alex Chen",
      category: "Technology",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Spot Crypto Scams Before They Happen",
      excerpt:
        "Learn the key warning signs of fraudulent crypto projects and how our AI technology helps protect users from potential scams.",
      date: "May 10, 2025",
      author: "Sarah Johnson",
      category: "Security",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Maximizing Your Airdrop Potential: A Complete Guide",
      excerpt:
        "A comprehensive guide to finding, qualifying for, and maximizing the value of legitimate crypto airdrops in today's market.",
      date: "May 5, 2025",
      author: "Michael Rodriguez",
      category: "Guides",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "The Evolution of Crypto Airdrops: 2023-2025",
      excerpt:
        "An analysis of how crypto airdrops have evolved over the past few years and what to expect in the coming years.",
      date: "April 28, 2025",
      author: "Emma Wilson",
      category: "Analysis",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Building a Diversified Crypto Portfolio with AI Insights",
      excerpt:
        "How to leverage AI-powered recommendations to build a balanced and diversified cryptocurrency portfolio.",
      date: "April 20, 2025",
      author: "David Park",
      category: "Investment",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "The Role of Machine Learning in Predicting Crypto Trends",
      excerpt:
        "A deep dive into how our advanced machine learning algorithms analyze patterns and predict emerging opportunities.",
      date: "April 15, 2025",
      author: "Sophia Lee",
      category: "Technology",
      readTime: "9 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                AIA.AI Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights, guides, and updates from the world of AI-powered crypto opportunity discovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-gray-900/60 backdrop-blur-sm border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-purple-400">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-gray-400">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Load More Articles
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
