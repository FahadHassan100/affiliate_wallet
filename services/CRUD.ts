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


export const getSimulationOrders = async (aff_id: number) => {

    try {
        
        const getRTempClientOrders = await db.temp_clients.findMany({
            where:{
                affiliate_id: aff_id,
            }
        });

        const getSalesClientOrder = await db.clients_Orders.findMany({
            where:{
                Affiliate_ID: aff_id,
                Status: {
                    notIn: [1, -1, 3],
                }
            },
            include:{
                clients: true,
            }
        });



        // Normalize main table
        const normalizedClientOrders = getSalesClientOrder.map(o => ({
        firstName: o.clients.First_Name,
        lastName: o.clients.Last_Name,
        email: o.clients.Email_Adress,
        phone: o.clients.Cell_Phone,
        password: o.clients.Password,
        netPPI: o.Final_PPI,
        orderStatus: o.Status,
        orderDate: o.Date,
        }));

        //console.log(normalizedClientOrders);

        // Normalize temp table
        const normalizedTempOrders = getRTempClientOrders.map(t => ({
        firstName: t.First_Name,
        lastName: t.Last_Name,
        email: t.Email_Adress,
        phone: t.cell_number,
        password: t.password,
        netPPI: t.Final_PPI,
        orderStatus: 0,
        orderDate: t.Date,
        }));


        //console.log(normalizedTempOrders);

        // Merge both
        const mergedOrders = [
        ...normalizedClientOrders,
        ...normalizedTempOrders,
        ].sort((a, b) => {
            const dateA = a.orderDate ? new Date(a.orderDate).getTime() : 0;
            const dateB = b.orderDate ? new Date(b.orderDate).getTime() : 0;

            return dateB - dateA;
        });

        return mergedOrders;

    } catch (error) {
        throw error;
    }

}