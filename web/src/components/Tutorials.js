import React from 'react';

const Tutorials = () => {
  return (
    <div id="Tutorials" className="min-h-screen flex justify-center items-center bg-gradient-blue">
      <div className="max-w-3xl w-full px-8 py-12">
        <h1 className="text-3xl md:text-5xl text-#778899 text-center mb-8">Tutorials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TutorialCard
            title="How to Create a Wallet"
            link="https://www.youtube.com/watch?v=HVYFhiu3zZE"
          />
          <TutorialCard
            title="Getting Started with Ethereum"
            link="https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/?utm_source=adwords&utm_medium=udemyads&utm_campaign=WebDevelopment_v.PROF_la.EN_cc.ROWMTA-B_ti.8322&campaigntype=Search&portfolio=MTA-B&language=EN&product=Course&test=&audience=DSA&topic=&priority=&utm_content=deal4584&utm_term=_._ag_80869579591_._ad_533999956732_._kw__._de_c_._dm__._pl__._ti_dsa-774930035449_._li_9040273_._pd__._&matchtype=&gad_source=1&gclid=Cj0KCQjw0MexBhD3ARIsAEI3WHKQIQp5ChKOfs0GT1m143dV9jwYyf9VMJD08DUoxzGeqvtVwaXkGUwaAjTZEALw_wcB&couponCode=2021PM20"
          />
          <TutorialCard
            title="Buying Cryptocurrency"
            link="https://www.plus500.com/ro/?id=122998&tags=g_sr%2b1014764607_cpi%2bRomaniaSearchCrypto_cp%2b52788931594_agi%2bCrypto.Ethereum_agn%2bbuy+ethereum_ks%2bkwd-296847699359_tid%2bp_mt%2bc_de%2bg_nt%2b_ext%2b9040273_loc%2bUURL&=%d7%90&gad_source=1&gclid=Cj0KCQjw0MexBhD3ARIsAEI3WHKQIQp5ChKOfs0GT1m143dV9jwYyf9VMJD08DUoxzGeqvtVwaXkGUwaAjTZEALw_wcB"
          />
        </div>
      </div>
    </div>
  );
};
  
const TutorialCard = ({ title, link }) => {
  return (
    <div className="bg-#483D8B rounded-lg shadow-md overflow-hidden white-glassmorphism">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-[#483D8B] mb-4">{title}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-#483D8B hover:underline">Video link</a>
      </div>
    </div>
  );
};

const scrollToTutorials = () => {
  const tutorialsSection = document.getElementById('Tutorials');
  if (tutorialsSection) {
    tutorialsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export { Tutorials, scrollToTutorials };
