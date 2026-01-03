"use client";

import { useState } from "react";
import Modal from "@/src/components/admin/ui/Modal";
import Button from "@/src/components/admin/ui/Button";
import TextInput from "./ui/TextInput";
import SelectInput from "./ui/SelectInput";
import ImageUpload from "./ui/ImageUpload";

export default function ProductAddModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSave = () => {
    const payload = {
      name,
      category,
      description,
      image,
    };

    console.log("SAVE PRODUCT:", payload);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Add Product" size="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT */}
        <div className="space-y-5">
          <TextInput
            label="Product name"
            placeholder="Enter product name"
            value={name}
            onChange={setName}
          />

          <SelectInput
            label="Category"
            value={category}
            onChange={setCategory}
            options={[
              { label: "Power Tools", value: "power_tools" },
              { label: "Hand Tools", value: "hand_tools" },
              { label: "Accessories", value: "accessories" },
            ]}
          />

          <div>
            <label className="form-label">Description</label>
            <textarea
              className="form-input min-h-[140px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the product"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          <ImageUpload
            label="Product image"
            value={image}
            onChange={setImage}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end gap-3 border-t pt-5">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSave}>Save Product</Button>
      </div>
    </Modal>
  );
}
