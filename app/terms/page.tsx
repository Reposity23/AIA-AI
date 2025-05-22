import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Terms of Service
              </span>
            </h1>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300">Last Updated: May 22, 2025</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-300">
                Welcome to AIA.AI. These Terms of Service ("Terms") govern your access to and use of the AIA.AI
                platform, including any websites, mobile applications, and services offered by AIA.AI ("Services"). By
                accessing or using our Services, you agree to be bound by these Terms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility</h2>
              <p className="text-gray-300">
                You must be at least 18 years old to use our Services. By using our Services, you represent and warrant
                that you meet all eligibility requirements.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration</h2>
              <p className="text-gray-300">
                To access certain features of our Services, you may need to register for an account. You agree to
                provide accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>
              <p className="text-gray-300">
                You are responsible for safeguarding your account credentials and for all activities that occur under
                your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Conduct</h2>
              <p className="text-gray-300">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Use our Services in any way that violates any applicable law or regulation</li>
                <li>Use our Services for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Attempt to gain unauthorized access to our Services or related systems</li>
                <li>Collect or harvest any information from our Services without authorization</li>
                <li>Engage in any activity that could harm, disable, or impair our Services</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300">
                Our Services and all content, features, and functionality thereof, including but not limited to text,
                graphics, logos, icons, images, audio clips, and software, are owned by AIA.AI or its licensors and are
                protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-gray-300">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL AIA.AI BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
                GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR
                USE THE SERVICES.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Indemnification</h2>
              <p className="text-gray-300">
                You agree to defend, indemnify, and hold harmless AIA.AI and its officers, directors, employees, and
                agents, from and against any claims, liabilities, damages, losses, and expenses, including, without
                limitation, reasonable legal and accounting fees, arising out of or in any way connected with your
                access to or use of the Services or your violation of these Terms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifications to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these Terms at any time. If we make changes, we will provide notice by
                posting the updated Terms on our Services and updating the "Last Updated" date. Your continued use of
                our Services after such notice constitutes your acceptance of the updated Terms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
              <p className="text-gray-300">
                These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without
                regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Information</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms, please contact us at legal@aia.ai.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
