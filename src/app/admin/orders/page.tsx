"use client";

import DataTable from "@/src/components/admin/tables/DataTable";
import Button from "@/src/components/admin/ui/Button";
import Modal from "@/src/components/admin/ui/Modal";
import { useState } from "react";

export default function OrdersPage() {
  const [deleteRow, setDeleteRow] = useState<any>(null);

  const data = [
    {
      id: 1001,
      order_no: "#ORD-1001",
      customer: "Nuwan Li",
      status: "Paid",
      payment: "Card",
      total: "$124.00",
      date: "2026-01-02",
    },
    {
      id: 1002,
      order_no: "#ORD-1002",
      customer: "John Smith",
      status: "Pending",
      payment: "Cash",
      total: "$86.50",
      date: "2026-01-03",
    },
    {
      id: 1003,
      order_no: "#ORD-1003",
      customer: "Alice Brown",
      status: "Cancelled",
      payment: "Card",
      total: "$42.00",
      date: "2026-01-03",
    },
  ];

  return (
    <div className="space-y-6 mx-12 mt-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-slate-800">Orders</h1>
      </div>

      {/* Orders table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <DataTable
          columns={[
            { header: "Order ID", accessor: "order_no", align: "center" },
            { header: "Customer", accessor: "customer", align: "center" },
            {
              header: "Status",
              accessor: "status",
              align: "center",
              render: (value: string) => {
                if (value === "Paid")
                  return (
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                      Paid
                    </span>
                  );
                if (value === "Cancelled")
                  return (
                    <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700">
                      Cancelled
                    </span>
                  );
                return (
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                    Pending
                  </span>
                );
              },
            },
            { header: "Payment", accessor: "payment", align: "center" },
            { header: "Total", accessor: "total", align: "center" },
            { header: "Date", accessor: "date", align: "center" },
          ]}
          data={data}
          onDelete={(row) => setDeleteRow(row)}
        />
      </div>

      {/* Delete confirmation modal */}
      <Modal
        open={!!deleteRow}
        onClose={() => setDeleteRow(null)}
        title="Delete Order"
        size="sm"
      >
        <p className="text-sm text-slate-600 mb-4">
          Are you sure you want to delete{" "}
          <span className="font-semibold">{deleteRow?.order_no}</span>?
        </p>

        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setDeleteRow(null)}>
            Cancel
          </Button>
          <Button variant="danger">Delete</Button>
        </div>
      </Modal>
    </div>
  );
}
