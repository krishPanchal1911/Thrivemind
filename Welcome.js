import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { CheckCircle, Heart, Brain, Activity, Users, Star, ArrowRight } from "lucide-react"

export default function WelcomePage() {
  const features = [
    {
      icon: Brain,
      title: "Personalized Assessment",
      description: "AI-powered mental health evaluation tailored to your unique needs",
      badge: "10 min",
    },
    {
      icon: Heart,
      title: "Holistic Remedies",
      description: "Yoga, meditation, and natural remedies backed by science",
      badge: "Expert-curated",
    },
    {
      icon: Activity,
      title: "Progress Tracking",
      description: "Monitor your mental wellness journey with detailed insights",
      badge: "Real-time",
    },
    {
      icon: Users,
      title: "Professional Support",
      description: "Content reviewed by licensed mental health professionals",
      badge: "Verified",
    },
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Teacher",
      content:
        "THRIVEMIND helped me understand my anxiety patterns and gave me practical tools to manage them. The personalized approach made all the difference.",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "Software Engineer",
      content:
        "The breathing exercises and meditation practices have become part of my daily routine. I feel more balanced and focused than ever before.",
      rating: 5,
    },
    {
      name: "Lisa K.",
      role: "Healthcare Worker",
      content:
        "As someone in a high-stress job, THRIVEMIND's holistic approach has been a game-changer for my mental health and overall well-being.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "50K+", label: "Users Helped" },
    { number: "94%", label: "Success Rate" },
    { number: "25+", label: "Expert Professionals" },
    { number: "4.9/5", label: "User Rating" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
              Welcome to Your Mental Wellness Journey
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                THRIVEMIND
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your personalized mental health companion, offering AI-powered assessments, expert-backed remedies, and
              holistic approaches to help you thrive mentally and emotionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link to="/assessment">
                  Start Your Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/learn-more/personalized-assessment">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need for Mental Wellness</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and resources designed to support your mental health journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="flex justify-center mb-2">
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600">
              Real stories from people who've transformed their mental wellness with THRIVEMIND
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Mental Wellness Journey?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already taken the first step towards better mental health with our
            personalized, expert-backed approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/assessment">
                Take Free Assessment
                <CheckCircle className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600 bg-transparent"
            >
              <Link to="/about">Meet Our Experts</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
