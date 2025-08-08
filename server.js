const express = require("express")
const path = require("path")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 3000

// Enable CORS
app.use(cors())

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, "build")))

// API routes (if any frontend-specific routes are needed)
app.get("/api/health", (req, res) => {
  res.json({ status: "Frontend server is running" })
})

// Catch all handler: send back React's index.html file for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(PORT, () => {
  console.log(`Frontend server is running on port ${PORT}`)
})
