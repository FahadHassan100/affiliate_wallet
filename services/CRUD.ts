'use server';
import { db } from "@/lib/db";


/* export const getAffiliateSession = async () => {

    const passData = [{ action: "checkSession" }];
    fetch(
      "https://newphilanthropy.ca/smart_form/checkSession.php",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(passData),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        //console.log(data[0].affiliate_id);

        if (data[0].login_status === 0) {
          return "Session not set";
            //console.log("login");
          //setLoginedAffiliate(0);
          //window.location.replace("https://newphilanthropy.ca/smart_form/");
        } else {
          
          const passAffiData = {
            "Affiliate_id": data[0].affiliate_id,
            "affiliate_type": "Agent",

          }

          return passAffiData;
            //return data[0].affiliate_id;
            // setLoginedAffiliate(data[0].affiliate_id);
          
            // setAffiliateType(data[0].affiliate_id);

          
        }
      });
} */

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

export const getAllAffiliates = async () => {
    
    try {
        const affiliateData = await db.affiliates.findMany();
        return affiliateData;

    } catch (error) {
        throw error
    }

}