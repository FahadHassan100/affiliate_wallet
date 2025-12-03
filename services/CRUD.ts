'use server';
import { db } from "@/lib/db";


export const getAffiliateDetails = async (aff_id: number) => {
    
    try {
        const affiliateData = await db.affiliates.findUnique({
          where: {
            ID: aff_id,
          }
        });
        return affiliateData;

    } catch (error) {
        throw error
    }

}

export const getAffiliateCommission = async (aff_id: number) => {
    
    try {

        const aff_commission = await db.commission.aggregate({
          _sum: {NetPPI: true},
          where: {
            Affiliate_ID: aff_id,
            Commission_Type: "Commission"
          }
        });
        return aff_commission;

    } catch (error) {
        throw error
    }

}

export const getAffiliateOverride = async (aff_id: number) => {
    
    try {

        const aff_override = await db.commission.aggregate({
          _sum: {NetPPI: true},
          where: {
            Affiliate_ID: aff_id,
            Commission_Type: "Override"
          }
        });
        return aff_override;

    } catch (error) {
        throw error
    }

}

export const getTotalAffiliateCommission = async (aff_id: number) => {
    
    try {

        const total_commission = await db.commission.aggregate({
          _sum: {NetPPI: true},
          where: {
            Affiliate_ID: aff_id,
          }
        });
        return total_commission;

    } catch (error) {
        throw error
    }

}

export const getAllAffiliates = async () => {
    
    try {
        const affiliateData = await db.affiliates.findMany();
        return affiliateData;

    } catch (error) {
        throw error
    }

}

export const getCommissionRecords = async (aff_id: number) => {
    try {
        const CommissionRecords = await db.commission.findMany({
            where: {
                Affiliate_ID: aff_id,
            },
            include: {
                orders: {
                    include: {
                        clients: true,
                    },
                },
                affiliate: true
            },
        });

        return CommissionRecords;
    } catch (error) {
        throw error;
    }
};
