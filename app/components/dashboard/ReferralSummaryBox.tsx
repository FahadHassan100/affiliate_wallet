import React, { useEffect, useState } from "react";

const ReferralSummaryBox = () => {
  const [sliderValue, setSliderValue] = useState(50); // Default to 50%
  const [cashAmount, setCashAmount] = useState(0);
  const [giftVoucherAmount, setGiftVoucherAmount] = useState(0);
  // Sample FinalPPI value
  const finalPPI = 2000;
  // Calculate cash and gift voucher amounts when slider changes
  useEffect(() => {
    const cash = finalPPI * (sliderValue / 100) * 0.05; // 5%
    const giftVoucher = finalPPI * (sliderValue / 100) * 0.1; // 10%
    setCashAmount(cash);
    setGiftVoucherAmount(giftVoucher);
  }, [sliderValue, finalPPI]);

  return (
    <div className="w-xl bg-white rounded-lg shadow-md p-3">
      <h2 className="text-lg text-center font-semibold mb-4 text-gray-800">
        Referral Summary
      </h2>
      <div className="flex justify-between mb-4 text-center mt-5">
        <div className="flex-1">
          <p className="text-sm text-gray-500">Cash</p>
          <p className="text-2xl font-bold text-gray-900">
            ${cashAmount.toFixed(2)}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">Gift Voucher</p>
          <p className="text-2xl font-bold text-gray-900">
            ${giftVoucherAmount.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="percentage-slider"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Percentage: {sliderValue}%
        </label>
        <input
          id="percentage-slider"
          type="range"
          step={5}
          min="5"
          max="100"
          value={sliderValue}
          onChange={(e) => setSliderValue(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>5%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default ReferralSummaryBox;
