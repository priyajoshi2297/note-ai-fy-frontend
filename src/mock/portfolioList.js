export const stocks = {
  MSFT: {
    companyName: "Microsoft Corp",
    tickerSymbol: "MSFT",
    sector: "Technology",
    allocationValue: 10000000,
    keywords: ["cloud computing", "software", "Windows", "Xbox"],
    financials: {
      annual: {
        2022: {
          revenue: 1111100,
          netIncome: 312222000,
          operatingExpenses: 4333300000,
          debt: 3000000,
          assets: 150000,
          liabilities: 50000,
          equity: 10000000,
        },
      },
    },
  },
  AAPL: {
    companyName: "Apple Inc",
    tickerSymbol: "AAPL",
    sector: "Technology",
    allocationValue: 10000000,
    keywords: ["iPhone", "Mac", "iOS", "Apple Watch"],
    financials: {
      annual: {
        2022: {
          revenue: 7000000000,
          netIncome: 800000000,
          operatingExpenses: 6200000000,
          debt: 3000000000,
          assets: 11000000000,
          liabilities: 5000000000,
          equity: 6000000000,
        },
      },
    },
  },
  NVDA: {
    companyName: "NVIDIA Corporation",
    tickerSymbol: "NVDA",
    sector: "Technology",
    allocationValue: 10000000,
    keywords: ["graphics cards", "artificial intelligence", "gaming"],
    financials: {
      annual: {
        2022: {
          revenue: 7000000000,
          netIncome: 800000000,
          operatingExpenses: 6200000000,
          debt: 3000000000,
          assets: 11000000000,
          liabilities: 5000000000,
          equity: 6000000000,
        },
      },
    },
  },
  AMZN: {
    companyName: "Amazon.com Inc",
    tickerSymbol: "AMZN",
    sector: "Consumer Cyclical",
    allocationValue: 10000000,
    keywords: ["online retail", "AWS", "Prime", "Alexa"],
    financials: {
      annual: {
        2022: {
          revenue: 7000000000,
          netIncome: 800000000,
          operatingExpenses: 6200000000,
          debt: 3000000000,
          assets: 11000000000,
          liabilities: 5000000000,
          equity: 6000000000,
        },
      },
    },
  },
};

export const portfolioList = [
  {
    portfolioName: "Vanguard ESG U.S. Stock ETF",
    totalAssets: 100000000,
    sector: ["Gold", "Oil", "Technology", "IT"],
    stock: [
      {
        companyName: "Amazon.com Inc",
        tickerSymbol: "AMZN",
        sector: ["Consumer Cyclical", "IT"],
        keywords: ["online retail", "AWS", "Prime", "Alexa"],
        financials: {
          annual: {
            2022: {
              revenue: 7000000000,
              netIncome: 800000000,
              operatingExpenses: 6200000000,
              debt: 3000000000,
              assets: 11000000000,
              liabilities: 5000000000,
              equity: 6000000000,
            },
          },
        },
        allocationPercentage: 11.11,
      },
      {
        companyName: "Microsoft Corp",
        tickerSymbol: "MSFT",
        sector: ["Technology", "IT"],
        keywords: ["Windows", "Office", "Azure"],
        financials: {
          annual: {
            2022: {
              revenue: 10000000000,
              netIncome: 2000000000,
              operatingExpenses: 7000000000,
              debt: 2000000000,
              assets: 15000000000,
              liabilities: 6000000000,
              equity: 9000000000,
            },
          },
        },
        allocationPercentage: 11.11,
      },
    ],
    commodity: [
      {
        type: "Gold",
        allocationPercentage: 5,
        value: 5000000,
      },
      {
        type: "Oil",
        allocationPercentage: 5,
        value: 5000000,
      },
    ],
  },
  {
    portfolioName: "Green Energy Growth Fund",
    totalAssets: 50000000,
    sector: ["Energy", "Technology"],
    stock: [
      {
        companyName: "Tesla Inc",
        tickerSymbol: "TSLA",
        sector: ["Consumer Cyclical", "Energy"],
        keywords: ["electric vehicles", "solar power", "energy storage"],
        financials: {
          annual: {
            2022: {
              revenue: 31000000000,
              netIncome: 3000000000,
              operatingExpenses: 28000000000,
              debt: 10000000000,
              assets: 45000000000,
              liabilities: 25000000000,
              equity: 20000000000,
            },
          },
        },
        allocationPercentage: 15,
      },
      {
        companyName: "NextEra Energy",
        tickerSymbol: "NEE",
        sector: ["Utilities"],
        keywords: ["renewable energy", "wind power", "solar power"],
        financials: {
          annual: {
            2022: {
              revenue: 17000000000,
              netIncome: 2900000000,
              operatingExpenses: 14000000000,
              debt: 42000000000,
              assets: 80000000000,
              liabilities: 57000000000,
              equity: 23000000000,
            },
          },
        },
        allocationPercentage: 10,
      },
    ],
    commodity: [
      {
        type: "Solar Energy Credits",
        allocationPercentage: 10,
        value: 1000000,
      },
    ],
  },
  {
    portfolioName: "Global Real Estate Index Fund",
    totalAssets: 80000000,
    sector: ["Real Estate", "Commercial"],
    stock: [
      {
        companyName: "Simon Property Group",
        tickerSymbol: "SPG",
        sector: ["Real Estate"],
        keywords: [
          "shopping malls",
          "retail properties",
          "real estate investment",
        ],
        financials: {
          annual: {
            2022: {
              revenue: 5500000000,
              netIncome: 1100000000,
              operatingExpenses: 4000000000,
              debt: 23000000000,
              assets: 31000000000,
              liabilities: 21000000000,
              equity: 10000000000,
            },
          },
        },
        allocationPercentage: 12,
      },
      {
        companyName: "Prologis",
        tickerSymbol: "PLD",
        sector: ["Real Estate"],
        keywords: [
          "logistics properties",
          "warehouses",
          "distribution centers",
        ],
        financials: {
          annual: {
            2022: {
              revenue: 4000000000,
              netIncome: 900000000,
              operatingExpenses: 2800000000,
              debt: 15000000000,
              assets: 48000000000,
              liabilities: 23000000000,
              equity: 25000000000,
            },
          },
        },
        allocationPercentage: 10,
      },
    ],
    commodity: [
      {
        type: "Commercial Properties",
        allocationPercentage: 10,
        value: 8000000,
      },
    ],
  },
  {
    portfolioName: "Blue Chip Leaders Fund",
    totalAssets: 120000000,
    sector: ["Technology", "Healthcare", "Finance"],
    stock: [
      {
        companyName: "Apple Inc",
        tickerSymbol: "AAPL",
        sector: ["Technology", "Consumer Electronics"],
        keywords: ["iPhone", "Mac", "iPad", "Apple Watch"],
        financials: {
          annual: {
            2022: {
              revenue: 36500000000,
              netIncome: 5700000000,
              operatingExpenses: 30700000000,
              debt: 9000000000,
              assets: 63500000000,
              liabilities: 32500000000,
              equity: 31000000000,
            },
          },
        },
        allocationPercentage: 13,
      },
      {
        companyName: "Johnson & Johnson",
        tickerSymbol: "JNJ",
        sector: ["Healthcare"],
        keywords: [
          "pharmaceuticals",
          "medical devices",
          "consumer health products",
        ],
        financials: {
          annual: {
            2022: {
              revenue: 23000000000,
              netIncome: 5500000000,
              operatingExpenses: 17500000000,
              debt: 7000000000,
              assets: 76000000000,
              liabilities: 29000000000,
              equity: 47000000000,
            },
          },
        },
        allocationPercentage: 10,
      },
    ],
    commodity: [
      {
        type: "Corporate Bonds",
        allocationPercentage: 5,
        value: 6000000,
      },
    ],
  },
  {
    portfolioName: "Agri-Business Investment Fund",
    totalAssets: 30000000,
    sector: ["Agriculture", "Consumer Goods"],
    stock: [
      {
        companyName: "Deere & Company",
        tickerSymbol: "DE",
        sector: ["Industrials", "Agriculture"],
        keywords: ["agricultural machinery", "tractors", "harvesters"],
        financials: {
          annual: {
            2022: {
              revenue: 44000000000,
              netIncome: 5000000000,
              operatingExpenses: 39000000000,
              debt: 12000000000,
              assets: 69000000000,
              liabilities: 37000000000,
              equity: 32000000000,
            },
          },
        },
        allocationPercentage: 18,
      },
    ],
    commodity: [
      {
        type: "Grain Futures",
        allocationPercentage: 10,
        value: 3000000,
      },
    ],
  },
  {
    portfolioName: "Emerging Markets Equity Fund",
    totalAssets: 75000000,
    sector: ["Emerging Markets", "Diverse Industries"],
    stock: [
      {
        companyName: "Alibaba Group Holding Ltd",
        tickerSymbol: "BABA",
        sector: ["Technology", "Consumer Retail"],
        keywords: ["e-commerce", "technology", "Alipay"],
        financials: {
          annual: {
            2022: {
              revenue: 109000000000,
              netIncome: 23000000000,
              operatingExpenses: 86000000000,
              debt: 15000000000,
              assets: 178000000000,
              liabilities: 90000000000,
              equity: 88000000000,
            },
          },
        },
        allocationPercentage: 20,
      },
    ],
    commodity: [
      {
        type: "Emerging Market Bonds",
        allocationPercentage: 5,
        value: 3750000,
      },
    ],
  },
  {
    portfolioName: "Precious Metals Fund",
    totalAssets: 50000000,
    sector: ["Precious Metals"],
    stock: [
      {
        companyName: "Newmont Corporation",
        tickerSymbol: "NEM",
        sector: ["Mining"],
        keywords: ["gold mining", "silver mining", "copper mining"],
        financials: {
          annual: {
            2022: {
              revenue: 11000000000,
              netIncome: 1200000000,
              operatingExpenses: 9700000000,
              debt: 5000000000,
              assets: 33000000000,
              liabilities: 17000000000,
              equity: 16000000000,
            },
          },
        },
        allocationPercentage: 15,
      },
    ],
    commodity: [
      {
        type: "Gold",
        allocationPercentage: 10,
        value: 5000000,
      },
    ],
  },
  {
    portfolioName: "Healthcare Innovation Fund",
    totalAssets: 65000000,
    sector: ["Healthcare", "Biotechnology"],
    stock: [
      {
        companyName: "Moderna, Inc.",
        tickerSymbol: "MRNA",
        sector: ["Biotechnology"],
        keywords: ["mRNA technology", "vaccines", "therapeutics"],
        financials: {
          annual: {
            2022: {
              revenue: 18000000000,
              netIncome: 8000000000,
              operatingExpenses: 10000000000,
              debt: 1000000000,
              assets: 25000000000,
              liabilities: 5000000000,
              equity: 20000000000,
            },
          },
        },
        allocationPercentage: 17,
      },
    ],
    commodity: [
      {
        type: "Medical Equipment",
        allocationPercentage: 8,
        value: 5200000,
      },
    ],
  },
  {
    portfolioName: "Cyber Security Leaders ETF",
    totalAssets: 40000000,
    sector: ["Technology", "Cyber Security"],
    stock: [
      {
        companyName: "Palo Alto Networks, Inc.",
        tickerSymbol: "PANW",
        sector: ["Technology", "Cyber Security"],
        keywords: [
          "network security",
          "cloud security",
          "AI-driven security solutions",
        ],
        financials: {
          annual: {
            2022: {
              revenue: 4100000000,
              netIncome: 340000000,
              operatingExpenses: 3760000000,
              debt: 2200000000,
              assets: 10000000000,
              liabilities: 4700000000,
              equity: 5300000000,
            },
          },
        },
        allocationPercentage: 12,
      },
    ],
    commodity: [
      {
        type: "Technology Hardware",
        allocationPercentage: 6,
        value: 2400000,
      },
    ],
  },
  {
    portfolioName: "Luxury Goods and Services Fund",
    totalAssets: 70000000,
    sector: ["Consumer Goods", "Luxury"],
    stock: [
      {
        companyName: "LVMH Moët Hennessy Louis Vuitton SE",
        tickerSymbol: "MC.PA",
        sector: ["Consumer Cyclical", "Luxury Goods"],
        keywords: [
          "luxury fashion",
          "wines and spirits",
          "jewelry and watches",
        ],
        financials: {
          annual: {
            2022: {
              revenue: 64000000000,
              netIncome: 10000000000,
              operatingExpenses: 54000000000,
              debt: 13000000000,
              assets: 113000000000,
              liabilities: 51000000000,
              equity: 62000000000,
            },
          },
        },
        allocationPercentage: 14,
      },
    ],
    commodity: [
      {
        type: "Fine Art",
        allocationPercentage: 7,
        value: 4900000,
      },
    ],
  },
];
