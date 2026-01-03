"use client";

import { useState } from "react";

export default function AddressSection() {
  const [edit, setEdit] = useState(false);

  const [address, setAddress] = useState({
    shipping: {
      street: "123 Main Street",
      city: "Colombo",
      zip: "10100",
      country: "Sri Lanka",
    },
    billing: {
      street: "123 Main Street",
      city: "Colombo",
      zip: "10100",
      country: "Sri Lanka",
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Address details</h2>

        <button
          onClick={() => setEdit(!edit)}
          className="text-sm text-emerald-600 hover:underline"
        >
          {edit ? "Cancel" : "Edit"}
        </button>
      </div>

      {!edit ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
          <AddressBlock title="Shipping address" data={address.shipping} />
          <AddressBlock title="Billing address" data={address.billing} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <AddressForm
            title="Shipping address"
            value={address.shipping}
            onChange={(v:any) => setAddress({ ...address, shipping: v })}
          />
          <AddressForm
            title="Billing address"
            value={address.billing}
            onChange={(v:any) => setAddress({ ...address, billing: v })}
          />

          <button className="sm:col-span-2 mt-4 px-6 py-3 bg-emerald-600 text-white rounded-lg">
            Save addresses
          </button>
        </div>
      )}
    </div>
  );
}

function AddressBlock({ title, data }: any) {
  return (
    <div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-slate-600">
        {data.street}<br />
        {data.city}<br />
        {data.zip}<br />
        {data.country}
      </p>
    </div>
  );
}

function AddressForm({ title, value, onChange }: any) {
  return (
    <div>
      <h3 className="font-medium mb-2">{title}</h3>

      <div className="space-y-3">
        <input
          value={value.street}
          onChange={(e) => onChange({ ...value, street: e.target.value })}
          className="border rounded-lg px-4 py-3 w-full"
          placeholder="Street"
        />
        <input
          value={value.city}
          onChange={(e) => onChange({ ...value, city: e.target.value })}
          className="border rounded-lg px-4 py-3 w-full"
          placeholder="City"
        />
        <input
          value={value.zip}
          onChange={(e) => onChange({ ...value, zip: e.target.value })}
          className="border rounded-lg px-4 py-3 w-full"
          placeholder="Postal code"
        />
        <input
          value={value.country}
          onChange={(e) => onChange({ ...value, country: e.target.value })}
          className="border rounded-lg px-4 py-3 w-full"
          placeholder="Country"
        />
      </div>
    </div>
  );
}
