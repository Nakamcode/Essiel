import React, { useState } from "react";
import { ChevronDown, ArrowDownUp } from "lucide-react";

const Swapper = () => {
  const [fromAmount, setFromAmount] = useState("0");
  const [toAmount, setToAmount] = useState("0");

  return (
    <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg border border-gray-600">
      <div className="space-y-6">
        {/* From Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-gray-700">Swap</span>
            <span className="text-gray-500">Available 0.0 ETH</span>
          </div>

          <div className="flex items-center rounded-lg border border-gray-300 overflow-hidden">
            <div className="flex items-center flex-1">
              <button className="flex items-center space-x-2 px-2 rounded-lg hover:bg-gray-50">
                <div className="w-8rounded-full bg-blue-500 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                  >
                    <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                  </svg>
                </div>
                <span className="font-medium">ETH</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="text-right outline-none w-full pr-2 border-l py-2"
              placeholder="0"
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
            <ArrowDownUp className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* To Section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg text-gray-700">For</span>
            <span className="text-gray-500">Available 0.0 AERO</span>
          </div>

          <div className="flex items-center rounded-lg border border-gray-300 overflow-hidden">
            <div className="flex items-center flex-1">
              <button className="flex items-center space-x-2 px-2  rounded-lg hover:bg-gray-50">
                <div className="w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">Æ</span>
                </div>
                <span className="font-medium">AERO</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <input
              type="number"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="text-right outline-none w-full pr-2 border-l py-2"
              placeholder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swapper;
