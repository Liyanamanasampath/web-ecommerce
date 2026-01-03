"use client";

import CategoryAddModal from "@/src/components/admin/CategoryAddModal";
import DataTable from "@/src/components/admin/tables/DataTable";
import Button from "@/src/components/admin/ui/Button";
import Modal from "@/src/components/admin/ui/Modal";
import { useState } from "react";

export default function CategoryPage() {
    const [open, setOpen] = useState(false);
    const [deleteRow, setDeleteRow] = useState<any>(null);

    const columns = [
        { header: "Category Name", accessor: "name" as const },
        {
            header: "Sub Categories" ,
            accessor: "subCategories" as const,
            render: (values: string[]) => (
                <div className="flex flex-wrap gap-2">
                    {values.map((v) => (
                        <span
                            key={v}
                            className="bg-slate-100 px-2 py-1 rounded-full text-xs"
                        >
                            {v}
                        </span>
                    ))}
                </div>
            ),
        },
    ];
    
    const data = [
        {
          id: 1,
          name: "Power Tools",
          subCategories: ["Drills", "Grinders", "Saws"],
        },
      ];

    return (
        <div className="space-y-6 mx-12 mt-6">
            {/* Page header */}
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-slate-800">Category</h1>

                <div className="flex gap-2">
                    <Button onClick={() => setOpen(true)}>+ New Category</Button>
                </div>
            </div>

            {/* Table card */}
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <DataTable
                    columns={columns}
                    data={data}
                    onDelete={(row) => setDeleteRow(row)}
                />
            </div>

            {/* Add category modal */}
            <CategoryAddModal open={open} onClose={() => setOpen(false)} />

            {/* Delete confirmation modal */}
            <Modal
                open={!!deleteRow}
                onClose={() => setDeleteRow(null)}
                title="Delete Category"
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
