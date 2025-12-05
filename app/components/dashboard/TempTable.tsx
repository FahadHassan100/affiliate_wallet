import { getCommissionRecords, getSimulationOrders } from "@/services/CRUD";
import React, { useEffect, useState } from "react";
import { format, parse } from "date-fns";

interface props {
  affiliate_id: number;
}

const TempTable = (props: props) => {
  const [clientSimulationOrders, setClientSimulationOrders] = useState<any[]>();

  useEffect(() => {
    const getClientsOrder = async () => {
      const simulationOrders: any = await getSimulationOrders(
        props.affiliate_id
      );
      //console.log(commissionData);
      setClientSimulationOrders(simulationOrders);
    };

    getClientsOrder();
  }, []);

  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="w-full max-w-6xl mx-auto overflow-x-auto mt-30">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Simulations</h2>
      <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr className="bg-[#159dd7]">
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Client Name
              </th>
              <th
                scope="col"
                className="px-1 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Net PPI
              </th>
              <th
                scope="col"
                className="px-1 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Order Date
              </th>

              <th
                scope="col"
                className="px-1 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Order Status
              </th>
              <th
                scope="col"
                className="px-1 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clientSimulationOrders &&
              clientSimulationOrders.map((Orders, index) => (
                <tr key={index}>
                  <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                    {Orders.firstName + " " + Orders.lastName}
                  </td>
                  <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-900">
                    {Orders.netPPI}
                  </td>
                  <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-900">
                    {Orders.orderDate
                      ? format(Orders.orderDate, "dd-MMM-yyyy")
                      : ""}
                  </td>

                  <td className="px-1 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        Orders.Status === 2
                          ? "bg-green-100 text-green-800"
                          : Orders.Status === 4
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {Orders.Status === 2
                        ? "Contract Signed"
                        : Orders.Status === 4
                        ? "Waiting for Confirmation"
                        : "Simulation"}
                    </span>
                  </td>
                  <td className="px-1 py-4 whitespace-nowrap text-sm font-medium"></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TempTable;
