"use client";

import UserAddModal from "@/src/components/admin/UserAddModal";
import DataTable from "@/src/components/admin/tables/DataTable";
import Button from "@/src/components/admin/ui/Button";
import Modal from "@/src/components/admin/ui/Modal";
import { useState } from "react";

export default function UserPage() {
    const [open, setOpen] = useState(false);
    const [deleteRow, setDeleteRow] = useState<any>(null);
    const data = [
        {
            id: 1,
            name: "Nuwan Li",
            email: "nuwan@yopmail.com",
            address: "Matara aparekka",
            state: "Matara",
        },
    ];

    return (
        <div className="space-y-6 mx-12 mt-6">
            {/* Page header */}
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-slate-800">Users</h1>

                <div className="flex gap-2">
                    <Button onClick={() => setOpen(true)}>+ New User</Button>
                </div>
            </div>

            {/* Table card */}
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <DataTable
                    columns={[
                        { header: "Name", accessor: "name" },
                        { header: "Email", accessor: "email" },
                        { header: "Address", accessor: "address" },
                        { header: "State", accessor: "state" },
                    ]}
                    data={data}
                    onDelete={(row) => setDeleteRow(row)}
                />
            </div>

            {/* Add product modal */}
            <UserAddModal open={open} onClose={() => setOpen(false)} />

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
