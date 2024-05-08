import React, { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import { Tutorials, scrollToTutorials } from './Tutorials';
import { Exchange, scrollToExchange } from './Exchange';
import { Market, scrollToMarket } from './Market';
import { Wallets, scrollToWallets } from './Wallets';
const NavBarItem = ({ title, handleClick }) => (
  <li className="mx-4 cursor-pointer" onClick={handleClick}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleTutorialsClick = () => {
    scrollToTutorials();
    setToggleMenu(false);
  };

  const handleExchangeClick = () => {
    scrollToExchange();
    setToggleMenu(false);
  };
  const handleMarketClick = () => {
    scrollToMarket();
    setToggleMenu(false);
  };
  const handleWalletsClick = () => {
    scrollToWallets();
    setToggleMenu(false);
  };
  
  return (
    <nav className="w-full flex md:justify-center">
      <div className="md:w-[50%] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem 
            key={item + index} 
            title={item} 
            handleClick={
              item === "Tutorials" ? handleTutorialsClick : 
              item === "Exchange" ? handleExchangeClick : 
              item === "Market" ? handleMarketClick :
              item === "Wallets" ? handleWalletsClick :
              () => {}
            } 
          />
        ))}
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <div>
            <AiOutlineClose fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(false)} />
            <ul
              className="z-10 fixed top-0 right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end round-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-x1 w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                <NavBarItem 
                  key={item + index} 
                  title={item} 
                  handleClick={
                    item === "Tutorials" ? handleTutorialsClick : 
                    item === "Exchange" ? handleExchangeClick : 
                    item === "Market" ? handleMarketClick : 
                    item === "Wallets" ? handleWalletsClick :
                    () => {}
                  } 
                  classProps="my-2 text-lg" 
                />
              ))}
            </ul>
          </div>
        ) : (
          <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
