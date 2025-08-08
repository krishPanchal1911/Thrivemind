"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import { Phone, Mail, MapPin, Clock, MessageCircle, HeadphonesIcon, Calendar } from "lucide-react"

const Contact = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await axios.post("/contact/", formData)
      navigate("/")
    } catch (error) {
      console.error("Error submitting contact form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Now",
      description: "Speak directly with our mental health specialists",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      available: "24/7 Crisis Support",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MessageCircle,
      title: "Text Support",
      description: "Quick text support for immediate help",
      value: "+1 (555) 987-6543",
      action: "sms:+15559876543",
      available: "Mon-Fri 8AM-8PM",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed inquiries and non-urgent matters",
      value: "support@thrivemind.com",
      action: "mailto:support@thrivemind.com",
      available: "Response within 24hrs",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Book a free 15-minute consultation call",
      value: "Book Online",
      action: "#",
      available: "Available Mon-Fri",
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  const emergencyInfo = {
    title: "Crisis Support",
    description: "If you're experiencing a mental health emergency, please reach out immediately:",
    contacts: [
      { name: "National Suicide Prevention Lifeline", number: "988" },
      { name: "Crisis Text Line", number: "Text HOME to 741741" },
      { name: "Emergency Services", number: "911" },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to support you on your mental health journey. Reach out anytime - our team is ready to help.
          </p>
        </div>

        {/* Emergency Support Banner */}
        <div className="mb-8">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3">
                <HeadphonesIcon className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">{emergencyInfo.title}</h3>
                  <p className="text-red-800 text-sm mb-3">{emergencyInfo.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {emergencyInfo.contacts.map((contact, index) => (
                      <a
                        key={index}
                        href={`tel:${contact.number.replace(/\D/g, "")}`}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                      >
                        {contact.name}: {contact.number}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center mx-auto mb-3`}>
                  <method.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription className="text-sm">{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href={method.action}
                  className="block bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors mb-2"
                >
                  {method.value}
                </a>
                <div className="flex items-center justify-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  {method.available}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <select
                      id="urgency"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    >
                      <option value="">Select urgency</option>
                      <option value="low">Low - General inquiry</option>
                      <option value="medium">Medium - Need response within 24hrs</option>
                      <option value="high">High - Need response within 4hrs</option>
                      <option value="urgent">Urgent - Need immediate assistance</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    placeholder="Please describe your inquiry or how we can assist you..."
                    className="min-h-[120px] flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isSubmitting}>
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Our Office</CardTitle>
                <CardDescription>Visit us at our headquarters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-medium">THRIVEMIND Headquarters</p>
                    <p className="text-gray-600 text-sm">
                      123 Wellness Street
                      <br />
                      Mental Health District
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-indigo-600 mt-1" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-gray-600 text-sm">
                      Monday - Friday: 8:00 AM - 8:00 PM
                      <br />
                      Saturday: 9:00 AM - 5:00 PM
                      <br />
                      Sunday: Emergency support only
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-1">How quickly will I receive a response?</h4>
                  <p className="text-gray-600 text-sm">
                    We respond to all inquiries within 24 hours, with urgent matters addressed within 4 hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Is my information confidential?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes, all communications are completely confidential and HIPAA compliant.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Do you offer phone consultations?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes, we offer free 15-minute consultations to discuss how THRIVEMIND can help you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
