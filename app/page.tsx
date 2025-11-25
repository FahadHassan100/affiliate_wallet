"use client";
import React, { useEffect, useState } from "react";
import { SummaryBox } from "./components/dashboard/SummaryBox";
import { OrdersTable } from "./components/dashboard/OrdersTable";
import logoImage from "../public/logo.png";
import Image from "next/image";
import Sidebar from "./components/dashboard/Sidebar";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [affiliateType, setAffiliteType] = useState("Referral");
  const [checkAffT, setCheckAffT] = useState();

  const searchParams: any = useSearchParams();
  const affiliateID = parseInt(searchParams.get("uid"));
  //const affiliateID = 1111;

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
              <Image src={logoImage} alt="logo" width={300} />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Summary Boxes */}
            <SummaryBox affiliate_id={affiliateID} />
            {/* Orders Table */}
            <OrdersTable />
          </div>
        </div>
      </div>
    </div>
  );
}
