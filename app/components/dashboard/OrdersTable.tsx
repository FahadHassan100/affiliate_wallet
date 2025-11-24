"use client";
import React from "react";
import ActionDotButton from "../ActionDotButton";
// Sample data for the table
const orders = [
  {
    id: 1,
    clientName: "John Smith",
    affiliateName: "Sarah Johnson",
    donationAmount: "$150",
    giftVoucher: "$200",
    initialDeposit: "$1,000",
    orderDate: "2023-10-15",
    commissionOverride: "$75",
    status: "Completed",
  },
  {
    id: 2,
    clientName: "Emily Davis",
    affiliateName: "Michael Brown",
    donationAmount: "$100",
    giftVoucher: "$150",
    initialDeposit: "$800",
    orderDate: "2023-10-12",
    commissionOverride: "$60",
    status: "Processing",
  },
  {
    id: 3,
    clientName: "Robert Wilson",
    affiliateName: "Jennifer Lee",
    donationAmount: "$200",
    giftVoucher: "$250",
    initialDeposit: "$1,500",
    orderDate: "2023-10-10",
    commissionOverride: "$90",
    status: "Completed",
  },
  {
    id: 4,
    clientName: "Lisa Taylor",
    affiliateName: "David Miller",
    donationAmount: "$120",
    giftVoucher: "$180",
    initialDeposit: "$950",
    orderDate: "2023-10-08",
    commissionOverride: "$70",
    status: "Pending",
  },
  {
    id: 5,
    clientName: "James Anderson",
    affiliateName: "Patricia White",
    donationAmount: "$180",
    giftVoucher: "$220",
    initialDeposit: "$1,200",
    orderDate: "2023-10-05",
    commissionOverride: "$85",
    status: "Completed",
  },
];
export const OrdersTable = () => {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Orders</h2>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
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
                Affiliate Name
              </th>
              <th
                scope="col"
                className="px-1 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Donation Amount
              </th>
              <th
                scope="col"
                className="px-1 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Gift Voucher
              </th>
              <th
                scope="col"
                className="px-1 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Initial Deposit
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
                Commission/Override
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
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.clientName}
                </td>
                <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.affiliateName}
                </td>
                <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.donationAmount}
                </td>
                <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.giftVoucher}
                </td>
                <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.initialDeposit}
                </td>
                <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.orderDate}
                </td>
                <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.commissionOverride}
                </td>
                <td className="px-1 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-1 py-4 whitespace-nowrap text-sm font-medium">
                  {/* <ActionDotButton
                      tableName={props.tableName}
                      Order_ID={item.Order_ID}
                      HandleItemClick={props.HandleItemClick}
                      DropDownlist={actionDropDownsValues}
                    /> */}
                  {/* <button className="text-indigo-600 hover:text-indigo-900">
                    View
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
