"use client";

import { useState } from "react";

export default function ProfileSection() {
  const [edit, setEdit] = useState(false);

  const [form, setForm] = useState({
    firstName: "Nuwan",
    lastName: "Sampath",
    email: "nuwan@email.com",
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Profile details</h2>

        <button
          onClick={() => setEdit(!edit)}
          className="text-sm text-emerald-600 hover:underline"
        >
          {edit ? "Cancel" : "Edit"}
        </button>
      </div>

      {!edit ? (
        <div className="space-y-3 text-sm">
          <p><span className="text-slate-500">First name:</span> {form.firstName}</p>
          <p><span className="text-slate-500">Last name:</span> {form.lastName}</p>
          <p><span className="text-slate-500">Email:</span> {form.email}</p>
        </div>
      ) : (
        <div className="space-y-4">
          <input
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className="border rounded-lg px-4 py-3 w-full"
            placeholder="First name"
          />

          <input
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="border rounded-lg px-4 py-3 w-full"
            placeholder="Last name"
          />

          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border rounded-lg px-4 py-3 w-full"
            placeholder="Email"
          />

          <button className="mt-4 px-6 py-3 bg-emerald-600 text-white rounded-lg">
            Save changes
          </button>
        </div>
      )}
    </div>
  );
}
