"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface AffiliateProviderProps {
  children: React.ReactNode;
}

interface AffData {
  Affiliate_ID: number;
  Affilite_Type: string;
}

interface AffiliateContextType {
  affiliateData: AffData | null;
  setAffiliateData: (data: AffData | null) => void;
}

const AffiliateContext = createContext<AffiliateContextType | null>(null);

export function AffiliateDetails({ children }: AffiliateProviderProps) {
  const [affiliateData, setAffiliateData] = useState<AffData | null>(null);

  return (
    <AffiliateContext.Provider value={{ affiliateData, setAffiliateData }}>
      {children}
    </AffiliateContext.Provider>
  );
}

export function useAffiliateData() {
  return useContext(AffiliateContext);
}
