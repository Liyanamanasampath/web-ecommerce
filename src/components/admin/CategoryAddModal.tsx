"use client";

import { useState } from "react";
import Modal from "@/src/components/admin/ui/Modal";
import Button from "@/src/components/admin/ui/Button";
import TextInput from "./ui/TextInput";
import ImageUpload from "./ui/ImageUpload";
import SubCategoryInput from "./ui/SubCategoryInput";

export default function CategoryAddModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [subCategories, setSubCategories] = useState<string[]>([]);

  const handleSave = () => {
    const payload = {
      name,
      description,
      image,
      sub_categories: subCategories,
    };

    console.log("SAVE CATEGORY:", payload);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Add Category" size="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT */}
        <div className="space-y-5">
          <TextInput
            label="Category name"
            placeholder="Enter category name"
            value={name}
            onChange={setName}
          />

          {/* Sub categories */}
          <SubCategoryInput
            label="Sub categories"
            values={subCategories}
            onChange={setSubCategories}
          />
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          <div>
            <label className="form-label">Description</label>
            <textarea
              className="form-input min-h-[120px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the category"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end gap-3 border-t pt-5">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSave}>Save Category</Button>
      </div>
    </Modal>
  );
}
