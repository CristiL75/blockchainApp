import React, { useState, useEffect } from 'react';

const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/exchanges');
        const data = await response.json();
        const ethereumPrice = 2982.28;
        const ethereumExchanges = data
          .filter(exchange => exchange.trade_volume_24h_btc !== 0 && exchange.trade_volume_24h_eth !== 0)
          .map(exchange => ({
            name: exchange.name,
            image: exchange.image,
            link: exchange.url,
            volume: (exchange.trade_volume_24h_btc / ethereumPrice).toFixed(2),
          }));
        setExchanges(ethereumExchanges);
      } catch (error) {
        console.error('Error fetching exchanges data:', error);
      }
    };

    const getBitcoinPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        return data.bitcoin.usd;
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
        return 0;
      }
    };

    fetchExchanges();
  }, []);

  return (
    <div id="Exchange" className="min-h-screen flex justify-center items-center bg-gradient-to-b from-DarkSlateBlue-900 to-DarkSlateBlue-700">
      <div className="max-w-3xl w-full px-8 py-12">
        <h1 className="text-3xl md:text-5xl text-gray-200 text-center mb-8">Ethereum Exchanges</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exchanges.map((exchange, index) => (
            <ExchangeCard
              key={index}
              name={exchange.name}
              image={exchange.image}
              link={exchange.link}
              volume={exchange.volume}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ExchangeCard = ({ name, link, image, volume }) => {
  return (
    <div className="bg-DarkSlateBlue-800 rounded-lg shadow-md overflow-hidden white-glassmorphism">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="p-6 flex items-center justify-between">
          <div>
            <img src={image} alt={name} className="h-12 w-12 inline-block" />
            <h2 className="text-lg font-semibold text-DarkSlateBlue-800 mb-1">{name}</h2>
            <p className="text-gray-600 mb-2">Volume (USD): ${volume}</p>
          </div>
          <div className="text-blue-500 hover:underline">Visit</div>
        </div>
      </a>
    </div>
  );
};

const scrollToExchange = () => {
  const exchangeSection = document.getElementById('Exchange');
  if (exchangeSection) {
    exchangeSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export { Exchange, scrollToExchange };
