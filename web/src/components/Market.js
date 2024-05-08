import React, { useState, useEffect } from 'react';

const Market = () => {
  const [ethereumData, setEthereumData] = useState({});

  useEffect(() => {
    const fetchEthereumData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/ethereum');
        const data = await response.json();
        setEthereumData(data);
      } catch (error) {
        console.error('Error fetching Ethereum data:', error);
      }
    };

    fetchEthereumData();
  }, []);

  return (
    <div id="Market" className="min-h-screen bg-gradient-to-b from-DarkSlateBlue-900 to-DarkSlateBlue-700">
      <div className="max-w-3xl mx-auto px-8 py-12">
        <h1 className="text-3xl md:text-5xl text-gray-200 text-center mb-8">Ethereum Market</h1>
        <div className="bg-DarkSlateBlue-800 rounded-lg shadow-md overflow-hidden white-glassmorphism">
          <div className="p-6">
            <div className="flex justify-center items-center">
              <img src={ethereumData.image && ethereumData.image.small} alt="Ethereum" className="h-24 w-24 mr-4" />
              <h2 className="text-xl font-semibold text-DarkSlateBlue-800">Ethereum (ETH)</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-gray-600 mb-2">Price (USD): ${ethereumData.market_data && ethereumData.market_data.current_price.usd}</p>
                <p className="text-gray-600 mb-2">Market Cap (USD): ${ethereumData.market_data && ethereumData.market_data.market_cap.usd}</p>
                <p className="text-gray-600 mb-2">Volume (USD): ${ethereumData.market_data && ethereumData.market_data.total_volume.usd}</p>
                <p className="text-gray-600 mb-2">Change (24h): {ethereumData.market_data && ethereumData.market_data.price_change_percentage_24h.toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">All Time High (USD): ${ethereumData.market_data && ethereumData.market_data.ath.usd}</p>
                <p className="text-gray-600 mb-2">Circulating Supply: {ethereumData.market_data && ethereumData.market_data.circulating_supply.toLocaleString()}</p>
                <p className="text-gray-600 mb-2">Total Supply: {ethereumData.market_data && ethereumData.market_data.total_supply.toLocaleString()}</p>
                <p className="text-gray-600 mb-2">Market Cap Rank: {ethereumData.market_cap_rank}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const scrollToMarket = () => {
  const marketSection = document.getElementById('Market');
  if (marketSection) {
    marketSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export { Market, scrollToMarket };
