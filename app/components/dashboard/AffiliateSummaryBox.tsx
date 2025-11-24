import React from "react";

const AffiliateSummaryBox = () => {
  return (
    <div className="w-xl bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg text-center font-semibold mb-4 text-gray-800">
        Affiliate Summary
      </h2>
      <div className="flex justify-between text-center mt-10">
        <div className="flex-1">
          <p className="text-sm text-gray-500">Commission</p>
          <p className="text-2xl font-bold text-gray-900">$1,200</p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">Override</p>
          <p className="text-2xl font-bold text-gray-900">$800</p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateSummaryBox;
