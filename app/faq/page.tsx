import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is AIA.AI?",
      answer:
        "AIA.AI is a self-learning artificial intelligence platform that helps users discover verified crypto airdrops, detect scams, and receive personalized crypto opportunities. Our platform uses advanced AI algorithms to analyze and verify crypto projects, ensuring users have access to legitimate opportunities while being protected from potential scams.",
    },
    {
      question: "How does the AI verification system work?",
      answer:
        "Our AI verification system analyzes multiple data points including smart contract code, team background, social media presence, community engagement, and historical patterns to determine the legitimacy of crypto opportunities. The system continuously learns from new data and user feedback to improve its accuracy over time.",
    },
    {
      question: "Is AIA.AI free to use?",
      answer:
        "AIA.AI offers both free and premium tiers. The free tier provides access to basic features including verified airdrop listings and basic scam detection. Premium tiers offer additional features such as personalized recommendations, advanced filtering, real-time alerts, and priority access to new opportunities.",
    },
    {
      question: "How do I get started with AIA.AI?",
      answer:
        "Getting started is simple! Just create an account, complete your profile with your crypto interests and preferences, and our AI will begin curating personalized opportunities for you. You can also connect your wallet (read-only) for more tailored recommendations based on your holdings.",
    },
    {
      question: "What makes AIA.AI different from other airdrop platforms?",
      answer:
        "Unlike traditional airdrop platforms that simply list opportunities, AIA.AI uses advanced AI to verify, score, and personalize crypto opportunities. Our self-learning algorithms continuously improve based on market trends and user interactions, providing increasingly accurate recommendations over time.",
    },
    {
      question: "How does AIA.AI protect me from scams?",
      answer:
        "Our AI scam detection system analyzes projects for common red flags such as suspicious smart contract code, fake team profiles, unrealistic promises, and known scam patterns. We provide risk scores for each opportunity and clearly mark suspicious projects, helping you make informed decisions.",
    },
    {
      question: "What is the AIA token and how is it used?",
      answer:
        "The AIA token is our native utility token that powers the platform ecosystem. Token holders can access premium features, participate in governance decisions, earn rewards through staking, and receive incentives for contributing valuable data to improve our AI systems.",
    },
    {
      question: "Can I integrate AIA.AI with my existing crypto tools?",
      answer:
        "Yes! We offer API access for premium users, allowing you to integrate our verified opportunity data and AI insights into your existing tools and workflows. We also provide browser extensions for seamless integration with popular crypto websites.",
    },
    {
      question: "How does AIA.AI handle my data and privacy?",
      answer:
        "We take data privacy seriously. All personal data is encrypted and securely stored. We never share your personal information with third parties without your explicit consent. Our wallet connection features use read-only APIs that cannot initiate transactions, ensuring your funds remain secure.",
    },
    {
      question: "How can I provide feedback or report issues?",
      answer:
        "We welcome your feedback! You can provide feedback directly through the platform's feedback form, contact our support team via email, or join our community channels on Discord and Telegram where our team actively engages with users.",
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
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">Find answers to common questions about the AIA.AI platform</p>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
                  <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-purple-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-300 mb-6">
              Our support team is here to help. Contact us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/support"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 text-sm font-medium text-white"
              >
                Contact Support
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-gray-700 hover:bg-gray-800 px-4 py-2 text-sm font-medium text-white transition-colors"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
