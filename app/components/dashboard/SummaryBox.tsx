"use client";
import React, { useEffect, useState } from "react";
import AffiliateSummaryBox from "./AffiliateSummaryBox";
import ReferralSummaryBox from "./ReferralSummaryBox";
import { getAffiliateDetails } from "@/services/CRUD";

interface props {
  affiliate_id: number;
}

export const SummaryBox = (props: props) => {
  const [loginAffiliate, setLoginAffiliate] = useState<any>();

  useEffect(() => {
    const getAffiliate = async () => {
      const affilateData = await getAffiliateDetails(props.affiliate_id);
      setLoginAffiliate(affilateData);
      //console.log("This is affiliate Data: ", affilateData);
    };

    getAffiliate();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-center">
        {loginAffiliate && loginAffiliate.affiliate_type === "Agent" ? (
          <AffiliateSummaryBox affiliate_id={props.affiliate_id} />
        ) : (
          <ReferralSummaryBox />
        )}
      </div>
    </div>
  );
};
