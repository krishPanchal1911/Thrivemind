import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"
import Assessment from "./pages/Assessment"
import Remedies from "./pages/Remedies"
import Dashboard from "./pages/Dashboard"
import Welcome from "./pages/Welcome"
import Reviews from "./pages/Reviews"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"
import PersonalizedAssessment from "./pages/learn-more/PersonalizedAssessment"
import HolisticRemedies from "./pages/learn-more/HolisticRemedies"
import SecurePrivate from "./pages/learn-more/SecurePrivate"
import ExpertBacked from "./pages/learn-more/ExpertBacked"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/remedies" element={<Remedies />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/learn-more/personalized-assessment" element={<PersonalizedAssessment />} />
            <Route path="/learn-more/holistic-remedies" element={<HolisticRemedies />} />
            <Route path="/learn-more/secure-private" element={<SecurePrivate />} />
            <Route path="/learn-more/expert-backed" element={<ExpertBacked />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
