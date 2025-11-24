"use client";
import React, { useEffect, useState } from "react";
import AffiliateSummaryBox from "./AffiliateSummaryBox";
import ReferralSummaryBox from "./ReferralSummaryBox";

interface props {
  affiliate_type: string;
}

export const SummaryBox = (props: props) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-center">
        {props.affiliate_type === "Agent" ? (
          <AffiliateSummaryBox />
        ) : (
          <ReferralSummaryBox />
        )}
      </div>
    </div>
  );
};
