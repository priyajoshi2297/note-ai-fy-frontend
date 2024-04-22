export const getPrompt = (news_content, portfolio_list) =>
  `write in 200 words As my financial advisor, please read detailed news content: ${news_content}, along with a list of investment portfolios: ${portfolio_list}. I require your expert analysis to determine which portfolios best align with current financial news and sound fundamental analysis. Please use financial metrics for your analysis, including any 3 ratio like Price-to-Earnings (P/E) Ratio, Debt-to-Equity Ratio, Quick Ratio, Return on Equity (ROE), Return on Assets (ROA), and Return on Investment (ROI) for evaluating the financial health and potential growth of the investments within each portfolio. You can use keywords from the portfolio descriptions to ensure a relevant connection to the news content. Provide a prioritized list of the most promising portfolios for investment, based on your comprehensive analysis. Explain why these portfolios stand out, taking into account current market trends and the detailed financial data you've reviewed. Please ensure the list of portfolios is organized by top priority, and clearly justify the reasons for each recommendation, helping me make informed investment decisions.`;
