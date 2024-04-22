import React, { useState } from "react";
import { Button, Box, CircularProgress } from "@mui/material";
import NewsCard from "../../components/NewsCard";

export const Home = () => {
  const [news, setNews] = useState([]);
  const [suggestion, setSuggestion] = useState();
  const [suggestionLoading, setSuggestionLoading] = useState(false);

  const onGetLatestNews = async () => {
    console.log("CALLEd");
    const secret = "8dba44a717f94aadb3aa5d2318486864";
    const url = "https://newsapi.org/v2/everything?";
    const parameters = {
      q: "Finance", // query phrase
      pageSize: 20, // maximum is 100
      apiKey: secret, // your own API key
    };

    const queryString = new URLSearchParams(parameters).toString();

    try {
      const response = await fetch(`${url}${queryString}`);
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10, gap: 2 }}>
        <Button variant="contained" onClick={onGetLatestNews}>
          Get Latest News
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setSuggestion(undefined);
            setSuggestionLoading(false);
            setNews([]);
          }}
        >
          Reset
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 5,
          overflowX: "auto", // This enables horizontal scrolling
          height: 350,
          ml: 5,
          mr: 5,
        }}
      >
        {news.map((item) => {
          return (
            <NewsCard
              headline={item.title}
              context={item.content}
              setSuggestion={setSuggestion}
              setSuggestionLoading={setSuggestionLoading}
            />
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {suggestionLoading ? (
          <CircularProgress size={30} color="info" />
        ) : (
          suggestion && (
            <Box
              sx={{
                border: "solid",
                borderRadius: 5,
                borderWidth: 2,
                padding: 2,
                m: 1,
              }}
            >
              <Box sx={{ fontSize: 20, mb: 1 }}>Suggest by OpenAI:</Box>
              <Box sx={{ fontSize: 15 }}>{suggestion}</Box>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default Home;
