import React from "react";

function Invest(props) {
  return (
    <div className="relative">
      <div className="flex w-full min-h-screen bg-gray-50">
        {/* left part */}
        <div className="w-1/6 bg-rose-400 m-4 rounded-xl shadow-lg flex flex-col text-5xl font-extrabold text-white justify-center items-center space-y-2">
          <h1>I</h1>
          <h1>N</h1>
          <h1>V</h1>
          <h1>E</h1>
          <h1>S</h1>
          <h1>T</h1>
        </div>
        {/* right part */}
        <div className="w-5/6 white m-4 flex flex-col">
          {/* notification area */}
          <div className="w-full bg-transparent rounded-xl justify-between items-center">
            <button className="text-md text-white bg-rose-400 px-6 py-3 rounded-xl">
              MUTUAL FUND - SIP PLANS
            </button>
          </div>
          {/* dashboard main */}
          <div className="w-full bg-white rounded-xl mt-4 shadow-lg p-8 flex flex-wrap">
            <div className="w-64 h-64 bg-white drop-shadow-md rounded-xl mr-8 flex flex-col justify-between p-4">
              <div>
                <div className="bg-rose-400 text-white px-4 py-2 uppercase text-xs rounded-xl w-1/2 flex justify-center">
                  equity
                </div>
                <div className="text-xl font-bold mt-4">Groww</div>
              </div>
              <div className="text-sm">
                ICICI Prudential Technology Fund Direct Growth
                <p className="underline">Risk: Very High</p>
              </div>
              <a
                href="https://groww.in/mutual-funds/icici-prudential-technology-fund-direct-growth"
                className="bg-rose-400 px-6 py-2 text-white font-thin rounded-xl"
              >
                Know more
              </a>
            </div>
            <div className="w-64 h-64 bg-white drop-shadow-md rounded-xl mr-8 flex flex-col justify-between p-4">
              <div>
                <div className="bg-rose-400 text-white px-4 py-2 uppercase text-xs rounded-xl flex justify-center">
                  international fund
                </div>
                <div className="text-xl font-bold mt-4">Zerodha</div>
              </div>
              <div className="text-sm">
                Motilal Oswal Nasdaq 100 Fund of Fund
                <p className="underline">Risk: Very High</p>
              </div>
              <a
                href="https://coin.zerodha.com/mf/fund/INF247L01718"
                className="bg-rose-400 px-6 py-2 text-white font-thin rounded-xl"
              >
                Know more
              </a>
            </div>
            <div className="w-64 h-64 bg-white drop-shadow-md rounded-xl mr-8 flex flex-col justify-between p-4">
              <div>
                <div className="bg-rose-400 text-white px-4 py-2 uppercase text-xs rounded-xl w-1/2 flex justify-center">
                  debt
                </div>
                <div className="text-xl font-bold mt-4">Upstox</div>
              </div>
              <div className="text-sm">
                Aditya Birla Sun Life Overnight Fund Direct
                <p className="underline">Risk: Low</p>
              </div>
              <a
                href="https://upstox.com/mutual-funds/fund/Aditya-Birla-Sun-Life-Overnight-Fund--Direct--GR--41667"
                className="bg-rose-400 px-6 py-2 text-white font-thin rounded-xl"
              >
                Know more
              </a>
            </div>
          </div>
          <div className="w-full bg-transparent rounded-xl justify-between items-center mt-8">
            <button className="text-md text-white bg-rose-400 px-6 py-3 rounded-xl">
              INVEST IN CRYPTO
            </button>
          </div>
          {/* dashboard main */}
          <div className="w-full bg-white rounded-xl mt-4 shadow-lg p-8 flex flex-wrap">
            <div className="w-64 h-64 bg-white drop-shadow-md rounded-xl mr-8 flex flex-col justify-between p-4">
              <div>
                <div className="bg-rose-400 text-white px-4 py-2 uppercase text-xs rounded-xl w-1/2 flex justify-center">
                  bitcoin
                </div>
                <div className="text-xl font-bold mt-4">Binance</div>
              </div>
              <div className="text-sm">
                Bitcoin is a decentralized digital currency, without a central
                bank or single administrator
                <p className="underline">Risk: Very High</p>
              </div>
              <a
                href="https://www.binance.com/en-IN/trade/BTc_USDT?type=spot"
                className="bg-rose-400 px-6 py-2 text-white font-thin rounded-xl"
              >
                Know more
              </a>
            </div>
            <div className="w-64 h-64 bg-white drop-shadow-md rounded-xl mr-8 flex flex-col justify-between p-4">
              <div>
                <div className="bg-rose-400 text-white px-4 py-2 uppercase text-xs rounded-xl flex justify-center">
                  eth-perp
                </div>
                <div className="text-xl font-bold mt-4">FTX</div>
              </div>
              <div className="text-sm">
                Traders can use USDC as collateral with leverage of up to 50x
                <p className="underline">Risk: Very High</p>
              </div>
              <a
                href="https://ftx.com/en/trade/ETH-PERP"
                className="bg-rose-400 px-6 py-2 text-white font-thin rounded-xl"
              >
                Know more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invest;
