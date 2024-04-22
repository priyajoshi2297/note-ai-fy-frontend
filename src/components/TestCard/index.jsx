import React, { useState, useEffect } from "react";
import { CiBag1 } from "react-icons/ci";
import axios from "axios";
import { getPrompt } from "../NewsCard/prompt";
import { portfolioList } from "../../mock/portfolioList";

export const TestCard = ({
  headline,
  context,
  urlToImage,
  urlSource,
  sendSuggestedPortfolioData,
  setOpenSuggestionModal,
}) => {
  function getRandomPortfolios(n = 3) {
    const shuffled = portfolioList.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, n);
  }

  const fetchOpenAiData = async (_getNewsContent) => {
    const apiKey = process.env.apiKey;

    // pass randomly 3 portfolio as GPT wont able to calculator too much data
    const randomPortfolios = getRandomPortfolios();

    const prompt = getPrompt(
      _getNewsContent,
      JSON.stringify(randomPortfolios[0], null, 2)
    );

    const API_BODY = {
      model: "gpt-4-turbo",
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

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        API_BODY,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`, // Ensure your API key is securely handled
          },
        }
      );
      console.log(response, "RESPONSEE");
      if (response.data.choices && response.data.choices.length > 0) {
        const messageContent = response.data.choices[0].message.content;
        console.log("First Message Content:", messageContent);
        sendSuggestedPortfolioData({ loading: false, messageContent });
      } else {
        throw new Error("No choices found in response.");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handle = async (url) => {
    setOpenSuggestionModal(true);
    sendSuggestedPortfolioData({ loading: true, messageContent: "" });

    const getNewsContent = await axios
      .get(`https://note-ai-fy-backend.onrender.com/api/get-complete-article-list?urls=${url}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.error("Error fetching data:", error));
    fetchOpenAiData(getNewsContent.substring(0, 10000));
  };
  return (
    <div className="news-item">
      <h3>
        <a href={urlSource} target="_blank">
          <img
            src={urlToImage}
            style={{
              borderRadius: "50%",
              height: 25,
              width: 25,
              paddingLeft: 4,
              paddingRight: 4,
            }}
          />
          {headline}
        </a>
      </h3>
      <p> {context.replace(/<[^>]+>/g, "")} </p>
      <button onClick={() => handle(urlSource)}>
        <CiBag1 /> Suggest Portfolios
      </button>
    </div>
  );
};
export default TestCard;
