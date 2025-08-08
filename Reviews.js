import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { Star, Quote, Heart, Brain, CheckCircle } from "lucide-react"

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      location: "New York, NY",
      rating: 5,
      condition: "Anxiety",
      review:
        "THRIVEMIND completely changed my life. The personalized yoga routines and breathing exercises helped me manage my anxiety better than anything I've tried before. The assessment was thorough and the recommendations were spot-on.",
      duration: "3 months",
      avatar: "/placeholder.svg?height=40&width=40&text=SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 35,
      location: "San Francisco, CA",
      rating: 5,
      condition: "Depression",
      review:
        "I was skeptical at first, but the combination of mindfulness exercises and natural remedies suggested by THRIVEMIND has been incredibly effective. My mood has improved significantly, and I feel more in control of my mental health.",
      duration: "6 months",
      avatar: "/placeholder.svg?height=40&width=40&text=MC",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      age: 24,
      location: "Austin, TX",
      rating: 5,
      condition: "Panic Attacks",
      review:
        "The 4-7-8 breathing technique I learned through THRIVEMIND has been a game-changer for my panic attacks. The platform is easy to use, and the personalized approach made all the difference. Highly recommend!",
      duration: "4 months",
      avatar: "/placeholder.svg?height=40&width=40&text=ER",
    },
    {
      id: 4,
      name: "David Thompson",
      age: 42,
      location: "Chicago, IL",
      rating: 5,
      condition: "Stress & Anxiety",
      review:
        "As a busy executive, I needed something that fit into my schedule. THRIVEMIND's quick exercises and meditation practices have helped me manage work stress and sleep better. The progress tracking keeps me motivated.",
      duration: "8 months",
      avatar: "/placeholder.svg?height=40&width=40&text=DT",
    },
    {
      id: 5,
      name: "Lisa Park",
      age: 31,
      location: "Seattle, WA",
      rating: 5,
      condition: "General Wellness",
      review:
        "I started using THRIVEMIND for general mental wellness, and it's become an essential part of my daily routine. The yoga poses are perfect for beginners, and the educational content is incredibly valuable.",
      duration: "5 months",
      avatar: "/placeholder.svg?height=40&width=40&text=LP",
    },
    {
      id: 6,
      name: "James Wilson",
      age: 29,
      location: "Miami, FL",
      rating: 5,
      condition: "Sleep Issues",
      review:
        "My sleep quality has improved dramatically since using THRIVEMIND. The progressive muscle relaxation exercises and natural remedy suggestions have been incredibly helpful. I finally feel rested!",
      duration: "2 months",
      avatar: "/placeholder.svg?height=40&width=40&text=JW",
    },
  ]

  const stats = [
    { label: "Happy Clients", value: "10,000+", icon: Heart },
    { label: "Success Rate", value: "95%", icon: CheckCircle },
    { label: "Average Rating", value: "4.9/5", icon: Star },
    { label: "Countries Served", value: "25+", icon: Brain },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who have transformed their mental health journey with THRIVEMIND
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <span className="text-indigo-600 font-semibold">
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>
                        {review.age} years old • {review.location}
                      </CardDescription>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-indigo-300" />
                </div>

                <div className="flex items-center space-x-2 mt-2">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{review.condition}</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">{review.duration}</span>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-700 leading-relaxed italic">"{review.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Success Story?</h3>
              <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                Join thousands of people who have transformed their mental health with THRIVEMIND's personalized
                approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/auth/signup"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Journey Today
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Talk to Our Team
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Reviews
