const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost/recipeApp");

// Recipe Schema
const recipeSchema = new mongoose.Schema({
    name: String,
    photo: String,
    description: String,
    servingSize: Number,
    diet: String,
    time: String,
    mealType: String,
    ingredients: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({ storage: storage });

// Routes
app.post("/api/recipes", upload.single("photo"), async (req, res) => {
    try {
        const newRecipe = new Recipe({
            ...req.body,
            photo: req.file ? `/uploads/${req.file.filename}` : null,
        });
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get("/api/recipes", async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
