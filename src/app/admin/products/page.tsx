"use client";

import ProductAddModal from "@/src/components/ProductAddModal";
import DataTable from "@/src/components/tables/DataTable";
import Button from "@/src/components/ui/Button";
import Modal from "@/src/components/ui/Modal";
import { useState } from "react";

export default function ProductsPage() {
    const [open, setOpen] = useState(false);
    const [deleteRow, setDeleteRow] = useState<any>(null);
    const data = [
        {
            id: 1,
            name: "Chainsaw 3.5kW",
            category: "Power Tools",
            stock: "Out of Stock",
            price: "$666.99",
        },
    ];

    return (
        <div className="space-y-6 mx-12 mt-6">
            {/* Page header */}
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-slate-800">Products</h1>

                <div className="flex gap-2">
                    <Button onClick={() => setOpen(true)}>+ New Product</Button>
                </div>
            </div>

            {/* Table card */}
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <DataTable
                    columns={[
                        { header: "Product", accessor: "name" },
                        { header: "Category", accessor: "category" },
                        {
                            header: "Stock",
                            accessor: "stock",
                            render: (value: string) => (
                                <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700">
                                    {value}
                                </span>
                            ),
                        },
                        { header: "Price", accessor: "price" },
                    ]}
                    data={data}
                    onDelete={(row) => setDeleteRow(row)}
                />
            </div>

            {/* Add product modal */}
            <ProductAddModal open={open} onClose={() => setOpen(false)} />

            {/* Delete confirmation modal */}
            <Modal
                open={!!deleteRow}
                onClose={() => setDeleteRow(null)}
                title="Delete Product"
                size="sm"
            >
                <p className="text-sm text-slate-600 mb-4">
                    Are you sure you want to delete{" "}
                    <span className="font-semibold">{deleteRow?.name}</span>?
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
