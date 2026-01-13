const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/advisorRoutes");
const User = require("./models/Advisor");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log(" MongoDB connected successfully");
    // Seed initial data if collection is empty
    const count = await User.countDocuments();
    if (count === 0) {
      const seedUsers = [
        {
          name: "Javier C. Emerson",
          role: "FOUNDER",
          image: "Team Image.png",
        },
        {
          name: "Diego H. Redmond",
          role: "CEO",
          image: "HdryNw7v0khXLetmF5nsRgVkXI.jpg.png",
        },
        {
          name: "Julian T. Beaumont",
          role: "HEAD ADVISOR",
          image: "Team Image.png",
        },
      ];
      await User.insertMany(seedUsers);
      console.log("✅ Seed data inserted");
    } else {
      console.log(`✅ Database has ${count} users`);
    }
  })
  .catch((err) => console.log(" MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is connected and working!" });
});

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
  console.log(` API URL: http://localhost:${PORT}/api`);
});
