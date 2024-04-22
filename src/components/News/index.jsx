import React, { useState, useEffect } from "react";
import TestCard from "../TestCard";
import axios from "axios";

export const News = ({
  sendSuggestedPortfolioData,
  setOpenSuggestionModal,
}) => {
  // const dummyNews = [
  //   {
  //     source: {
  //       id: "the-verge",
  //       name: "The Verge",
  //     },
  //     author: "Gaby Del Valle",
  //     title: "The CFPB wants to rein in data brokers",
  //     description:
  //       "Consumer Finance Protection Bureau Director Rohit Chopra said foreign adversaries can use data to blackmail Americans.",
  //     url: "https://www.theverge.com/2024/4/15/24131354/cfpb-data-brokers-fair-credit-reporting-act",
  //     urlToImage:
  //       "https://cdn.vox-cdn.com/thumbor/KdHL4BuZVUAI56WfJow0POcqfcU=/0x0:2040x1334/1200x628/filters:focal(1020x667:1021x668)/cdn.vox-cdn.com/uploads/chorus_asset/file/25299198/STK453_Privacy_A_CVirginia.jpg",
  //     publishedAt: "2024-04-15T21:13:21Z",
  //     content:
  //       "The CFPB wants to rein in data brokers\r\nThe CFPB wants to rein in data brokers\r\n / New regulations could require data brokers to comply with the Fair Credit Reporting Act.\r\nByGaby Del Valle, a policy… [+3749 chars]",
  //   },
  //   {
  //     source: {
  //       id: "wired",
  //       name: "Wired",
  //     },
  //     author: "Morgan Meaker",
  //     title: "Welcome to the Age of Technofeudalism",
  //     description:
  //       "In Yanis Varoufakis’ latest book, the former Greek finance minister argues that companies like Apple and Meta have treated their users like modern-day serfs.",
  //     url: "https://www.wired.com/story/yanis-varoufakis-technofeudalism-interview/",
  //     urlToImage:
  //       "https://media.wired.com/photos/661471b060217ce6c8d0999c/191:100/w_1280,c_limit/Yanis-Varoufakis-Q&A-Business-1258430308.jpg",
  //     publishedAt: "2024-04-09T06:00:00Z",
  //     content:
  //       "The tech giants have overthrown capitalism. Thats the argument of former Greek finance minister Yanis Varoufakis, who became famous trying to defend debt-laden Greece from its German creditors. Varou… [+2883 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Slashdot.org",
  //     },
  //     author: "EditorDavid",
  //     title: "US Invests $20 Billion More to Finance Clean-Energy Projects",
  //     description:
  //       "Thursday America's Environmental Protection Agency \"awarded $20 billion to help finance clean-energy projects across the country,\" reports the Washington Post.\n\n\nThe money comes from the Greenhouse Gas Reduction Fund established by President Biden's signature…",
  //     url: "https://news.slashdot.org/story/24/04/06/0315256/us-invests-20-billion-more-to-finance-clean-energy-projects",
  //     urlToImage: "https://a.fsdn.com/sd/topics/usa_64.png",
  //     publishedAt: "2024-04-06T20:34:00Z",
  //     content:
  //       "The money comes from the Greenhouse Gas Reduction Fund established by President Biden's signature climate law, the Inflation Reduction Act. The fund seeks to leverage public and private dollars to in… [+2185 chars]",
  //   },
  // ];
  // const [news, setNews] = useState(dummyNews);
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const url = "https://newsapi.org/v2/everything?";
    const parameters = {
      q: "Finance", // query phrase
      pageSize: 10, // maximum is 100
      apiKey: "f63df0eec5aa440faca3d43a7e0a9937", // replace with your actual API key
    };

    const queryString = new URLSearchParams(parameters).toString();

    // uncomment code when we are done with the changes because we have limited no of api call use dummy data named dummyNews

    if (news.length === 0) {
      try {
        const response = await axios.get(`${url}${queryString}`);
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="finance-news">
      <h2>Finance News</h2>
      {news &&
        news?.map((item) => {
          return (
            <>
              <TestCard
                headline={item.title}
                context={item.content.split(" ").slice(0, 20).join(" ")}
                urlToImage={item.urlToImage}
                urlSource={item.url}
                sendSuggestedPortfolioData={sendSuggestedPortfolioData}
                setOpenSuggestionModal={setOpenSuggestionModal}
              />
            </>
          );
        })}
    </div>
  );
};
export default News;
