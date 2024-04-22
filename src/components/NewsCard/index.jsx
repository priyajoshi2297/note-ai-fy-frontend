import { Dialog, DialogContent, DialogTitle, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { portfolioList } from "../../mock/portfolioList";
import { getPrompt } from "./prompt";

export const NewsCard = ({
  headline,
  context,
  setSuggestion,
  setSuggestionLoading,
}) => {
  const [openNewsDetails, setOpenNewsDetails] = useState(false);

  const onSuggestAPortfolio = async () => {
    console.log("CALLED SUGGESTSTTTTT");
    setSuggestionLoading(true);
    setSuggestion(undefined);
    const prompt = getPrompt(context, portfolioList);

    const API_BODY = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `${prompt}`,
        },
      ],
      temperature: 0.5,
      top_p: 1,
      stream: false,
    };
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.apiKey}`,
      },
      body: JSON.stringify(API_BODY),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.json(); // Parse response JSON
      })
      .then((data) => {
        console.log("Response Data:", data); // Log the response data

        // Check if 'data.choices' exists and has at least one element
        if (data.choices && data.choices.length > 0) {
          const messageContent = data.choices[0].message.content;
          console.log("First Message Content:", messageContent);
          setSuggestion(messageContent);
          setSuggestionLoading(false);
        } else {
          throw new Error("No choices found in response.");
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setSuggestionLoading(false);
      });
  };

  return (
    <Box>
      <Dialog open={openNewsDetails} onClose={() => setOpenNewsDetails(false)}>
        <DialogTitle>{headline}</DialogTitle>
        <DialogContent>{context}</DialogContent>
      </Dialog>
      <Box
        sx={{
          height: 300,
          width: 200,
          border: "solid",
          borderRadius: 5,
          p: 1,
          borderWidth: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            fontSize: 24,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
            height: "85%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          onClick={() => setOpenNewsDetails(true)}
        >
          {headline}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "10%",
            mt: "5%",
          }}
        >
          <Button
            variant="contained"
            sx={{ fontSize: 10 }}
            onClick={onSuggestAPortfolio}
          >
            Suggest a Portfolio
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;
