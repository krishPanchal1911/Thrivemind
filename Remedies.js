"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { Heart, Brain, Activity, Pill, Clock, Star, Play, BookOpen } from "lucide-react"

export default function RemediesPage() {
  const [favorites, setFavorites] = useState([])
  const [activeTab, setActiveTab] = useState("yoga")

  const toggleFavorite = (id) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const yogaAsanas = [
    {
      id: "child-pose",
      name: "Child's Pose (Balasana)",
      description: "A calming pose that helps reduce stress and anxiety",
      duration: "2-5 minutes",
      difficulty: "Beginner",
      benefits: ["Reduces stress", "Calms the mind", "Relieves tension"],
      instructions: [
        "Kneel on the floor with your big toes touching",
        "Sit back on your heels and separate your knees",
        "Fold forward, extending your arms in front of you",
        "Rest your forehead on the ground and breathe deeply",
      ],
    },
    {
      id: "cat-cow",
      name: "Cat-Cow Pose",
      description: "A gentle flow that releases tension in the spine and calms the nervous system",
      duration: "3-5 minutes",
      difficulty: "Beginner",
      benefits: ["Relieves back tension", "Improves mood", "Increases mindfulness"],
      instructions: [
        "Start on hands and knees in tabletop position",
        "Inhale, arch your back and look up (Cow)",
        "Exhale, round your spine and tuck chin (Cat)",
        "Continue flowing between poses with your breath",
      ],
    },
    {
      id: "legs-up-wall",
      name: "Legs-Up-The-Wall Pose",
      description: "A restorative pose that promotes relaxation and reduces anxiety",
      duration: "5-15 minutes",
      difficulty: "Beginner",
      benefits: ["Reduces anxiety", "Improves circulation", "Promotes relaxation"],
      instructions: [
        "Lie on your back near a wall",
        "Extend your legs up the wall",
        "Rest your arms by your sides",
        "Close your eyes and focus on deep breathing",
      ],
    },
  ]

  const exercises = [
    {
      id: "breathing-4-7-8",
      name: "4-7-8 Breathing Technique",
      description: "A powerful breathing exercise to reduce anxiety and promote calm",
      duration: "5-10 minutes",
      type: "Breathing",
      benefits: ["Reduces anxiety", "Improves sleep", "Lowers stress"],
      instructions: [
        "Sit comfortably with your back straight",
        "Exhale completely through your mouth",
        "Inhale through nose for 4 counts",
        "Hold breath for 7 counts",
        "Exhale through mouth for 8 counts",
        "Repeat 3-4 cycles",
      ],
    },
    {
      id: "progressive-relaxation",
      name: "Progressive Muscle Relaxation",
      description: "Systematically tense and relax muscle groups to reduce physical tension",
      duration: "15-20 minutes",
      type: "Relaxation",
      benefits: ["Reduces muscle tension", "Improves sleep", "Decreases anxiety"],
      instructions: [
        "Lie down in a comfortable position",
        "Start with your toes, tense for 5 seconds",
        "Release and notice the relaxation",
        "Move up through each muscle group",
        "End with your face and scalp muscles",
      ],
    },
    {
      id: "mindful-walking",
      name: "Mindful Walking",
      description: "A moving meditation that combines physical activity with mindfulness",
      duration: "10-30 minutes",
      type: "Movement",
      benefits: ["Improves mood", "Increases mindfulness", "Reduces rumination"],
      instructions: [
        "Choose a quiet path or space",
        "Walk slowly and deliberately",
        "Focus on the sensation of your feet touching the ground",
        "Notice your surroundings without judgment",
        "Return attention to walking when mind wanders",
      ],
    },
  ]

  const medications = [
    {
      id: "herbal-tea",
      name: "Chamomile Tea",
      description: "Natural herbal remedy known for its calming properties",
      type: "Herbal",
      dosage: "1-2 cups daily",
      benefits: ["Promotes relaxation", "Improves sleep quality", "Reduces mild anxiety"],
      precautions: "Consult doctor if pregnant or taking blood thinners",
    },
    {
      id: "magnesium",
      name: "Magnesium Supplement",
      description: "Essential mineral that supports nervous system function",
      type: "Supplement",
      dosage: "200-400mg daily",
      benefits: ["Reduces muscle tension", "Improves sleep", "Supports mood regulation"],
      precautions: "Start with lower dose to assess tolerance",
    },
    {
      id: "omega-3",
      name: "Omega-3 Fatty Acids",
      description: "Essential fats that support brain health and mood regulation",
      type: "Supplement",
      dosage: "1000-2000mg daily",
      benefits: ["Supports brain health", "May improve mood", "Reduces inflammation"],
      precautions: "Choose high-quality, tested supplements",
    },
  ]

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
        isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "yoga":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yogaAsanas.map((asana) => (
              <Card key={asana.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{asana.name}</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => toggleFavorite(asana.id)}>
                      <Star
                        className={`h-4 w-4 ${
                          favorites.includes(asana.id) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                        }`}
                      />
                    </Button>
                  </div>
                  <CardDescription>{asana.description}</CardDescription>
                  <div className="flex space-x-2 mt-2">
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      {asana.duration}
                    </Badge>
                    <Badge variant="outline">{asana.difficulty}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <img
                        src="/api/placeholder/300/200"
                        alt={asana.name}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {asana.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Instructions:</h4>
                      <ol className="text-xs text-gray-600 space-y-1">
                        {asana.instructions.map((step, idx) => (
                          <li key={idx}>
                            {idx + 1}. {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <Play className="h-3 w-3 mr-1" />
                        Start Practice
                      </Button>
                      <Button size="sm" variant="outline">
                        <BookOpen className="h-3 w-3 mr-1" />
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )

      case "exercises":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <Card key={exercise.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{exercise.name}</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => toggleFavorite(exercise.id)}>
                      <Star
                        className={`h-4 w-4 ${
                          favorites.includes(exercise.id) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                        }`}
                      />
                    </Button>
                  </div>
                  <CardDescription>{exercise.description}</CardDescription>
                  <div className="flex space-x-2 mt-2">
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      {exercise.duration}
                    </Badge>
                    <Badge variant="outline">{exercise.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {exercise.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">How to do it:</h4>
                      <ol className="text-xs text-gray-600 space-y-1">
                        {exercise.instructions.map((step, idx) => (
                          <li key={idx}>
                            {idx + 1}. {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <Play className="h-3 w-3 mr-1" />
                        Start Exercise
                      </Button>
                      <Button size="sm" variant="outline">
                        <BookOpen className="h-3 w-3 mr-1" />
                        Guide
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )

      case "supplements":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medications.map((med) => (
              <Card key={med.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{med.name}</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => toggleFavorite(med.id)}>
                      <Star
                        className={`h-4 w-4 ${
                          favorites.includes(med.id) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                        }`}
                      />
                    </Button>
                  </div>
                  <CardDescription>{med.description}</CardDescription>
                  <div className="flex space-x-2 mt-2">
                    <Badge variant="secondary">{med.dosage}</Badge>
                    <Badge variant="outline">{med.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {med.benefits.map((benefit, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm text-yellow-800 mb-1">Important Note:</h4>
                      <p className="text-xs text-yellow-700">{med.precautions}</p>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        Learn More
                      </Button>
                      <Button size="sm" variant="outline">
                        Find Products
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Personalized Remedies</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Based on your assessment, we've curated these evidence-based remedies to support your mental health journey.
          </p>
        </div>

        <div className="w-full mb-8">
          <div className="flex justify-center space-x-4 mb-8">
            <TabButton
              id="yoga"
              label="Yoga & Meditation"
              icon={Heart}
              isActive={activeTab === "yoga"}
              onClick={setActiveTab}
            />
            <TabButton
              id="exercises"
              label="Exercises"
              icon={Activity}
              isActive={activeTab === "exercises"}
              onClick={setActiveTab}
            />
            <TabButton
              id="supplements"
              label="Natural Remedies"
              icon={Pill}
              isActive={activeTab === "supplements"}
              onClick={setActiveTab}
            />
          </div>

          {renderContent()}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-indigo-50 border-indigo-200">
            <CardContent className="pt-6">
              <Brain className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-indigo-900 mb-2">Remember: Professional Support Matters</h3>
              <p className="text-indigo-700 mb-4">
                While these remedies can be helpful, they're not a substitute for professional mental health care. If
                you're experiencing severe symptoms, please consult with a licensed mental health professional.
              </p>
              <Button
                variant="outline"
                className="border-indigo-300 text-indigo-700 hover:bg-indigo-100 bg-transparent"
              >
                Find Professional Help
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
