"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { Label } from "../components/ui/Label"
import { ArrowLeft, ArrowRight, Brain } from "lucide-react"

const Assessment = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    description: "",
    symptoms: [],
    severity: "",
    duration: "",
    triggers: "",
    previous_treatment: "",
    goals: "",
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const symptoms = [
    "Persistent sadness or low mood",
    "Loss of interest in activities",
    "Excessive worry or anxiety",
    "Panic attacks",
    "Difficulty sleeping",
    "Changes in appetite",
    "Fatigue or low energy",
    "Difficulty concentrating",
    "Feelings of worthlessness",
    "Social withdrawal",
    "Irritability or anger",
    "Physical symptoms (headaches, stomach issues)",
  ]

  const handleSymptomChange = (symptom, checked) => {
    if (checked) {
      setFormData({
        ...formData,
        symptoms: [...formData.symptoms, symptom],
      })
    } else {
      setFormData({
        ...formData,
        symptoms: formData.symptoms.filter((s) => s !== symptom),
      })
    }
  }

  const handleNext = async () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit assessment
      try {
        await axios.post("/assessments/", formData)
        navigate("/remedies")
      } catch (error) {
        console.error("Error submitting assessment:", error)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Tell us about your concerns</h2>
              <p className="text-gray-600 mb-4">
                Please describe what you're experiencing in your own words. This helps us understand your unique
                situation.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Describe your current mental health concerns</Label>
              <textarea
                id="description"
                placeholder="I've been feeling overwhelmed lately and having trouble sleeping..."
                className="min-h-[120px] flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Select your symptoms</h2>
              <p className="text-gray-600 mb-4">Check all symptoms that you've been experiencing recently.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {symptoms.map((symptom) => (
                <div key={symptom} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={symptom}
                    checked={formData.symptoms.includes(symptom)}
                    onChange={(e) => handleSymptomChange(symptom, e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300"
                  />
                  <Label htmlFor={symptom} className="text-sm">
                    {symptom}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Severity and Duration</h2>
              <p className="text-gray-600 mb-4">Help us understand the intensity and timeline of your symptoms.</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium">How would you rate the severity of your symptoms?</Label>
                <div className="mt-2 space-y-2">
                  {[
                    { value: "mild", label: "Mild - Manageable, doesn't significantly impact daily life" },
                    { value: "moderate", label: "Moderate - Noticeable impact on daily activities" },
                    { value: "severe", label: "Severe - Significantly interferes with daily functioning" },
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={option.value}
                        name="severity"
                        value={option.value}
                        checked={formData.severity === option.value}
                        onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                        className="h-4 w-4"
                      />
                      <Label htmlFor={option.value}>{option.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium">How long have you been experiencing these symptoms?</Label>
                <div className="mt-2 space-y-2">
                  {[
                    { value: "recent", label: "Less than 2 weeks" },
                    { value: "short", label: "2 weeks to 2 months" },
                    { value: "medium", label: "2-6 months" },
                    { value: "long", label: "More than 6 months" },
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={option.value}
                        name="duration"
                        value={option.value}
                        checked={formData.duration === option.value}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="h-4 w-4"
                      />
                      <Label htmlFor={option.value}>{option.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Additional Information</h2>
              <p className="text-gray-600 mb-4">This information helps us provide more personalized recommendations.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="triggers">What triggers or worsens your symptoms? (Optional)</Label>
                <textarea
                  id="triggers"
                  placeholder="Work stress, social situations, certain times of day..."
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.triggers}
                  onChange={(e) => setFormData({ ...formData, triggers: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="previous_treatment">Have you received mental health treatment before? (Optional)</Label>
                <textarea
                  id="previous_treatment"
                  placeholder="Therapy, medication, self-help strategies..."
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.previous_treatment}
                  onChange={(e) => setFormData({ ...formData, previous_treatment: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">What are your goals for mental health improvement?</Label>
                <textarea
                  id="goals"
                  placeholder="Better sleep, reduced anxiety, improved mood..."
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-indigo-600" />
                <CardTitle>Mental Health Assessment</CardTitle>
              </div>
              <div className="text-sm text-gray-500">
                Step {currentStep} of {totalSteps}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <CardDescription>
              This assessment will help us understand your mental health needs and provide personalized recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderStep()}

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button onClick={handleNext} className="bg-indigo-600 hover:bg-indigo-700">
                {currentStep === totalSteps ? "Get Recommendations" : "Next"}
                {currentStep !== totalSteps && <ArrowRight className="h-4 w-4 ml-2" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Assessment
