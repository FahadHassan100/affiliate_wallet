import { getAffiliateCommission, getAffiliateOverride } from "@/services/CRUD";
import React, { useEffect, useState } from "react";

interface props {
  affiliate_id: number;
}

const AffiliateSummaryBox = (props: props) => {
  const [totalAffCommission, setTotalAffCommission] = useState(0);
  const [totalAffOverride, setTotalAffOverride] = useState(0);
  const [check, setCheck] = useState();

  useEffect(() => {
    const getAffCommission = async () => {
      const affCommission = await getAffiliateCommission(props.affiliate_id);
      if (affCommission._sum.NetPPI) {
        //setTotalAffCommission(affCommission._sum.NetPPI);
        //console.log("This is Commission", affCommission._sum.NetPPI);
      }
    };

    const getAffOverride = async () => {
      const affOverride = await getAffiliateOverride(props.affiliate_id);
      if (affOverride._sum.NetPPI) {
        setTotalAffOverride(affOverride._sum.NetPPI);
        //console.log("This is Commission", affCommission._sum.NetPPI);
      }
    };

    getAffCommission();
    getAffOverride();
  }, []);

  return (
    <div className="w-xl bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg text-center font-semibold mb-4 text-gray-800">
        Affiliate Summary
      </h2>
      <div className="flex justify-between text-center mt-10">
        <div className="flex-1">
          <p className="text-sm text-gray-500">Commission</p>
          <p className="text-2xl font-bold text-gray-900">
            $
            {totalAffCommission.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-500">Override</p>
          <p className="text-2xl font-bold text-gray-900">
            $
            {totalAffOverride.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateSummaryBox;
