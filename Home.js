"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { Brain, Heart, Shield, Users, ArrowRight, CheckCircle } from "lucide-react"

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const backgroundImages = [
    "/placeholder.svg?height=800&width=1200&text=Meditation+and+Mindfulness+Background",
    "/placeholder.svg?height=800&width=1200&text=Yoga+for+Mental+Health+Background",
    "/placeholder.svg?height=800&width=1200&text=Breathing+Exercises+Background",
    "/placeholder.svg?height=800&width=1200&text=Mental+Health+Support+Background",
    "/placeholder.svg?height=800&width=1200&text=Stress+Relief+Activities+Background",
    "/placeholder.svg?height=800&width=1200&text=Mental+Wellness+Journey+Background",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [backgroundImages.length])

  const features = [
    {
      icon: Brain,
      title: "Personalized Assessment",
      description: "AI-powered mental health evaluation based on your symptoms and concerns",
    },
    {
      icon: Heart,
      title: "Holistic Remedies",
      description: "Yoga, meditation, exercises, and evidence-based therapeutic approaches",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your mental health data is encrypted and completely confidential",
    },
    {
      icon: Users,
      title: "Expert-Backed",
      description: "Content reviewed by licensed mental health professionals",
    },
  ]

  const mentalHealthIssues = [
    {
      title: "Depression",
      description: "Persistent feelings of sadness, hopelessness, and loss of interest in activities.",
      symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep changes"],
      prevalence: "8.5% of adults",
    },
    {
      title: "Anxiety Disorders",
      description: "Excessive worry, fear, or nervousness that interferes with daily activities.",
      symptoms: ["Excessive worry", "Restlessness", "Rapid heartbeat", "Difficulty concentrating"],
      prevalence: "18.1% of adults",
    },
    {
      title: "Panic Attacks",
      description: "Sudden episodes of intense fear with physical symptoms like rapid heartbeat.",
      symptoms: ["Rapid heartbeat", "Sweating", "Trembling", "Shortness of breath"],
      prevalence: "2.7% of adults",
    },
    {
      title: "PTSD",
      description: "Post-traumatic stress disorder following exposure to traumatic events.",
      symptoms: ["Flashbacks", "Nightmares", "Avoidance", "Hypervigilance"],
      prevalence: "3.5% of adults",
    },
    {
      title: "Bipolar Disorder",
      description: "Extreme mood swings between manic highs and depressive lows.",
      symptoms: ["Mood swings", "Energy changes", "Sleep disruption", "Impulsive behavior"],
      prevalence: "2.8% of adults",
    },
    {
      title: "OCD",
      description: "Obsessive-compulsive disorder with intrusive thoughts and repetitive behaviors.",
      symptoms: ["Intrusive thoughts", "Compulsive behaviors", "Anxiety", "Time-consuming rituals"],
      prevalence: "1.2% of adults",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Carousel */}
      <section className="relative py-20 px-4 min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Mental health background ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70" />
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <div className="mb-6">
            <div className="mb-4 inline-block bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm">
              🧠 Mental Health Platform
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Welcome to <span className="text-yellow-300">THRIVEMIND</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Your personalized mental health companion. Get expert-backed assessments, personalized remedies, and take
              control of your mental wellness journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              <Link to="/auth/signup">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              <Link to="/auth/signin">Sign In</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300">1M+</div>
              <div className="text-white/90">Users Helped</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300">95%</div>
              <div className="text-white/90">Satisfaction Rate</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300">24/7</div>
              <div className="text-white/90">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose THRIVEMIND?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with evidence-based mental health practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow cursor-pointer transform hover:-translate-y-1 hover:border-indigo-300 transition-all duration-300"
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                  <div className="mt-4 text-indigo-600 text-sm font-medium flex justify-center items-center">
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mental Health Education Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Mental Health</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn about common mental health conditions, their symptoms, and how we can help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentalHealthIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-indigo-600">{issue.title}</CardTitle>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{issue.prevalence}</span>
                  </div>
                  <CardDescription>{issue.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Common Symptoms:</h4>
                      <div className="space-y-1">
                        {issue.symptoms.map((symptom, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {symptom}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Mental Health Journey?</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Take our comprehensive assessment and get personalized recommendations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/auth/signup">
                Create Free Account <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600 bg-transparent"
            >
              <Link to="/auth/signin">Already Have Account?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
