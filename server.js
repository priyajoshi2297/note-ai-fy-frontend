const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const cheerio = require("cheerio");

const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, "build")));

app.get("/api/get-complete-article-list", async (req, res) => {
  const article_urls = req.query.urls ? req.query.urls.split(",") : [];
  let results = []; // Array to hold the results of each fetch
  try {
    for (const [index, url] of article_urls.entries()) {
      try {
        const response = await axios.get(url, { responseType: "text" });
        const $ = cheerio.load(response.data);
        const textContent = $("body").text().replace(/\s+/g, " ").trim();
        results.push(`Article ${index + 1}: ${textContent}`); // Add successful fetch result
      } catch (error) {
        console.error(`Failed to fetch Article ${index + 1}:`, error);
        results.push(`Failed to fetch Article ${index + 1}`); // Add error message on failure
      }
    }
    res.send(results.join("\n\n")); // Send back concatenated results, separated by double newlines
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Failed to process the request");
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
