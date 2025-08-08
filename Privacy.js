import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { Shield, Lock, Eye, FileText, Server, UserCheck } from "lucide-react"

export default function PrivacyPage() {
  const privacyPolicies = [
    {
      icon: Lock,
      title: "Data Encryption",
      description:
        "All your personal and health information is encrypted using industry-standard AES-256 encryption both in transit and at rest.",
    },
    {
      icon: Eye,
      title: "No Data Sharing",
      description: "We never sell or share your personal information with third parties without your explicit consent.",
    },
    {
      icon: FileText,
      title: "HIPAA Compliance",
      description:
        "Our platform adheres to Health Insurance Portability and Accountability Act standards for protecting sensitive patient data.",
    },
    {
      icon: Server,
      title: "Secure Storage",
      description:
        "Your data is stored on secure servers with multiple layers of protection and regular security audits.",
    },
    {
      icon: UserCheck,
      title: "User Control",
      description:
        "You maintain full control over your data with options to download or delete your information at any time.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
            <Shield className="h-10 w-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy & Security</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At THRIVEMIND, we take your privacy and data security seriously. Learn how we protect your mental health
            information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {privacyPolicies.map((policy, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <policy.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>{policy.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{policy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Our Privacy Commitment</CardTitle>
            <CardDescription>How we handle your sensitive mental health information</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              THRIVEMIND is committed to maintaining the highest standards of privacy and security for our users. We
              understand that mental health information is deeply personal, and we've built our platform with privacy as
              a foundational principle.
            </p>

            <h3>Data Collection</h3>
            <p>
              We only collect information that's necessary to provide you with personalized mental health support. This
              includes:
            </p>
            <ul>
              <li>Account information (name, email, age, gender)</li>
              <li>Assessment responses and mental health concerns</li>
              <li>Usage patterns to improve our recommendations</li>
              <li>Feedback you provide about remedies and exercises</li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>Your information is used exclusively for:</p>
            <ul>
              <li>Providing personalized mental health assessments and recommendations</li>
              <li>Improving our AI algorithms to better serve your needs</li>
              <li>Ensuring the security and functionality of our platform</li>
              <li>Research purposes (only with anonymized data and your consent)</li>
            </ul>

            <h3>Your Rights</h3>
            <p>As a THRIVEMIND user, you have the right to:</p>
            <ul>
              <li>Access all data we hold about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Download your complete data history</li>
              <li>Delete your account and all associated data</li>
              <li>Opt out of any research initiatives</li>
            </ul>

            <p>
              If you have any questions or concerns about our privacy practices, please contact our dedicated privacy
              team at privacy@thrivemind.com.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Security Measures</CardTitle>
            <CardDescription>Technical safeguards we implement to protect your data</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Our security infrastructure is designed with multiple layers of protection to ensure your mental health
              data remains private and secure:
            </p>

            <ul>
              <li>
                <strong>End-to-end encryption</strong> for all communications between your device and our servers
              </li>
              <li>
                <strong>Advanced authentication systems</strong> including two-factor authentication options
              </li>
              <li>
                <strong>Regular security audits</strong> conducted by independent cybersecurity firms
              </li>
              <li>
                <strong>Strict access controls</strong> limiting employee access to user data
              </li>
              <li>
                <strong>Automated threat detection</strong> to identify and block suspicious activities
              </li>
              <li>
                <strong>Data minimization practices</strong> to reduce potential exposure
              </li>
            </ul>

            <p>
              We continuously update our security practices to address emerging threats and comply with evolving privacy
              regulations worldwide.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
