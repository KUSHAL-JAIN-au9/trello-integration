const express = require("express");
const axios = require("axios");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create-card", async (req, res) => {
  const cardData = req.body;

  //   console.log(req.body, req.query);

  try {
    const response = await axios.post(
      `https://api.trello.com/1/cards?idList=${process.env.TRELLO_BOARD_ID}&key=${process.env.API_KEY}&token=${process.env.API_TOKEN}`,
      cardData
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error creating card:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the card" });
  }
});

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
