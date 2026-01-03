"use client";

import { useState } from "react";

type Props = {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
};

export default function SubCategoryInput({
  label,
  values,
  onChange,
}: Props) {
  const [input, setInput] = useState("");

  const addSubCategory = () => {
    const val = input.trim();
    if (!val) return;
    if (values.includes(val)) return;

    onChange([...values, val]);
    setInput("");
  };

  const removeSubCategory = (value: string) => {
    onChange(values.filter((v) => v !== value));
  };

  return (
    <div>
      <label className="form-label">{label}</label>

      <div className="flex gap-2 mb-2">
        <input
          className="form-input"
          placeholder="Add sub category"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addSubCategory()}
        />
        <button
          type="button"
          onClick={addSubCategory}
          className="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm hover:bg-slate-800"
        >
          Add
        </button>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <span
            key={value}
            className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-sm"
          >
            {value}
            <button
              type="button"
              onClick={() => removeSubCategory(value)}
              className="text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
