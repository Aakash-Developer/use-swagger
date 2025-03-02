require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { swaggerUi, swaggerDocs } = require("./swagger");

const app = express();
app.use(express.json()); // Middleware for parsing JSON

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Routes
app.use("/api/auth", require("./routes/auth"));

// Swagger API Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
