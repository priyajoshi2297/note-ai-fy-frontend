// App.js
import React, { useEffect, useState } from "react";
import "./app.css";
import { CiSearch } from "react-icons/ci";
import {
  Chart as ChartJS,
  registerables,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { HiBuildingStorefront } from "react-icons/hi2";
import News from "./components/News";
import Portfolio from "./components/Portfolio";
import Modal from "./components/Modal";
import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Stopwatch from "./components/Stopwatch";

ChartJS.register(...registerables, ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Gold", "Oil", "Silver", "Natural Gas", "Metal", "Coal"],
  datasets: [
    {
      label: "# of Votes",
      data: [30, 10, 30, 5, 5, 20],
      backgroundColor: [
        "rgba(25, 99, 12, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const StockChart = () => (
  <div className="stock-chart">
    <h2>Commodity</h2>
    <p>View the latest commodity prices and trends.</p>
    <div className="stock-chart">
      <Pie data={data} />
    </div>
  </div>
);

function App() {
  const [modalData, setModalData] = useState({});
  const [openSuggestionModal, setOpenSuggestionModal] = useState(false);

  const sendSuggestedPortfolioData = (data) => {
    setModalData(data);
  };
  const onClose = () => {
    setModalData({});
    setOpenSuggestionModal(false);
  };
  return (
    <div className="finance-app">
      <Sidebar />
      <div className="main-content">
        <SearchBar />
        <div className="dashboard-sections">
          <StockChart />
          <Portfolio />
          <News
            sendSuggestedPortfolioData={sendSuggestedPortfolioData}
            setOpenSuggestionModal={setOpenSuggestionModal}
          />
        </div>
      </div>
      {/* {openSuggestionModal && <Modal data={modalData} onClose={onClose} />} */}

      <Dialog open={openSuggestionModal} onClose={onClose}>
        <DialogTitle>Suggested Portfolio</DialogTitle>
        <DialogContent>
          {modalData.loading ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mb: 1,
                mt: 3,
              }}
            >
              <CircularProgress size={40} />
              <Stopwatch triggerStart={modalData.loading} />
            </Box>
          ) : (
            <Box sx={{ fontSize: 15 }}>
              <ReactMarkdown
                children={modalData.messageContent}
                remarkPlugins={[remarkGfm]}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Define the SearchBar component
const SearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Search stocks, news, and more..." />
    <CiSearch size="30px" />
  </div>
);

const Sidebar = () => (
  <div className="sidebar">
    <h2>
      <HiBuildingStorefront /> &nbsp;Finance App
    </h2>
    <nav>
      <ul>
        <li>Dashboard</li>
        <li>Stocks</li>
        <li>Portfolio</li>
        <li>News</li>
        <li>Settings</li>
      </ul>
    </nav>
    <div className="upgrade-section">
      <p>Upgrade to Pro</p>
      <button>Upgrade</button>
    </div>
  </div>
);

export default App;
