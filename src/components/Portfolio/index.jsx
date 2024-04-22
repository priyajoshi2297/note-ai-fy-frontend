import React from "react";
import { portfolioList } from "../../mock/portfolioList";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Recommended Portfolio</h2>
      <p>Today's top 5 portfolio recommendations for you.</p>
      <ul>
        {portfolioList.map((value) => {
          return (
            <li className="news-item">
              <h3>{value.portfolioName}</h3>
              <p>
                <b> Sector : </b> {value.sector.join(", ")}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Portfolio;
