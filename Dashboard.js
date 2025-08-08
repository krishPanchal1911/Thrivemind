"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Brain, Calendar, TrendingUp, Heart, Activity, Clock, Target, Award } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    moodData: [],
    recentActivities: [],
    goals: [],
    stats: {},
  })

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get("/dashboard/")
      setDashboardData(response.data)
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
      // Fallback to mock data
      setDashboardData({
        moodData: [
          { date: "2024-01-01", mood: 6 },
          { date: "2024-01-02", mood: 7 },
          { date: "2024-01-03", mood: 5 },
          { date: "2024-01-04", mood: 8 },
          { date: "2024-01-05", mood: 7 },
          { date: "2024-01-06", mood: 9 },
          { date: "2024-01-07", mood: 8 },
        ],
        recentActivities: [
          { id: 1, type: "Yoga", name: "Child's Pose", duration: "5 min", completed: true, date: "Today" },
          { id: 2, type: "Breathing", name: "4-7-8 Technique", duration: "10 min", completed: true, date: "Today" },
          {
            id: 3,
            type: "Meditation",
            name: "Mindful Walking",
            duration: "15 min",
            completed: false,
            date: "Yesterday",
          },
        ],
        goals: [
          { id: 1, title: "Practice yoga daily", progress: 75, target: "7 days/week" },
          { id: 2, title: "Improve sleep quality", progress: 60, target: "8 hours/night" },
          { id: 3, title: "Reduce anxiety levels", progress: 85, target: "Weekly check-in" },
        ],
        stats: {
          currentMood: 8,
          streak: 12,
          weeklyTime: 2.5,
          achievements: 7,
        },
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back! 👋</h1>
          <p className="text-lg text-gray-600">Here's your mental health journey overview</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Mood</CardTitle>
              <Heart className="h-4 w-4 text-pink-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardData.stats.currentMood}/10</div>
              <p className="text-xs text-muted-foreground">+2 from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Streak</CardTitle>
              <Activity className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardData.stats.streak} days</div>
              <p className="text-xs text-muted-foreground">Daily practice streak</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardData.stats.weeklyTime} hrs</div>
              <p className="text-xs text-muted-foreground">Time spent on wellness</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <Award className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardData.stats.achievements}</div>
              <p className="text-xs text-muted-foreground">Badges earned</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mood Tracking Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                  <span>Mood Tracking</span>
                </CardTitle>
                <CardDescription>Your mood trends over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dashboardData.moodData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={[1, 10]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="mood" stroke="#4f46e5" strokeWidth={2} dot={{ fill: "#4f46e5" }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-green-600" />
                  <span>Recent Activities</span>
                </CardTitle>
                <CardDescription>Your wellness activities from the past few days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${activity.completed ? "bg-green-500" : "bg-gray-300"}`}
                        />
                        <div>
                          <div className="font-medium">{activity.name}</div>
                          <div className="text-sm text-gray-500">
                            {activity.type} • {activity.duration}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{activity.date}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View All Activities
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-indigo-600" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Heart className="h-4 w-4 mr-2" />
                    Log Today's Mood
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Activity className="h-4 w-4 mr-2" />
                    Start Quick Exercise
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Session
                  </Button>
                  <Button className="w-full justify-start bg-transparent" variant="outline">
                    <Brain className="h-4 w-4 mr-2" />
                    Take Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Goals Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  <span>Your Goals</span>
                </CardTitle>
                <CardDescription>Track your mental health objectives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.goals.map((goal) => (
                    <div key={goal.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{goal.title}</span>
                        <span className="text-sm text-gray-500">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500">{goal.target}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  Update Goals
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section - Recommendations */}
        <div className="mt-8">
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Ready for your next wellness activity?</h3>
                  <p className="text-indigo-100 mb-4">
                    Based on your progress, we recommend trying a new breathing exercise today.
                  </p>
                  <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                    Start Recommended Activity
                  </Button>
                </div>
                <Brain className="h-16 w-16 text-indigo-200" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
