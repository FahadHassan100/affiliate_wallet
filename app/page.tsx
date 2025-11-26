"use client";
import React, { useEffect, useState } from "react";
import { SummaryBox } from "./components/dashboard/SummaryBox";
import { OrdersTable } from "./components/dashboard/OrdersTable";
import logoImage from "../public/logo.png";
import Image from "next/image";
import Sidebar from "./components/dashboard/Sidebar";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [checkAffT, setCheckAffT] = useState();

  const searchParams: any = useSearchParams();
  //const affiliateID = parseInt(searchParams.get("uid"));
  const affiliateID = 1111;

  // Define the asset path based on where the app is deployed
  const ASSET_PATH =
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_ASSET_PREFIX
      ? process.env.NEXT_PUBLIC_ASSET_PREFIX
      : "";
  if (ASSET_PATH) {
    console.log("This is Asset Path", ASSET_PATH);
  } else {
    console.log("Nothing");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {checkAffT && <p>This is Type {checkAffT}</p>}
      <div className="mainWrapper flex justify-start">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="mainContent w-full">
          <div className="row">
            <div className="headerSection flex justify-center pt-2">
              <Image
                src={`${ASSET_PATH}/logo.png`} // Use the dynamic path
                alt="logo"
                width={300}
                height={100} // Always include height for optimization
              />
              {/* <Image src={logoImage} alt="logo" width={300} /> */}
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Summary Boxes */}
            <SummaryBox affiliate_id={affiliateID} />
            {/* Orders Table */}
            <OrdersTable affiliate_id={affiliateID} />
          </div>
        </div>
      </div>
    </div>
  );
}
