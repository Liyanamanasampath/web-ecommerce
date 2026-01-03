"use client";

import { useState } from "react";
import Modal from "@/src/components/ui/Modal";
import Button from "@/src/components/ui/Button";
import TextInput from "./ui/TextInput";
import ImageUpload from "./ui/ImageUpload";
import SelectInput from "./ui/SelectInput";

export default function UserAddModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSave = () => {
    const payload = {
      name,
      email,
      address,
      state,
      image,
    };

    console.log("SAVE USER:", payload);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Add User" size="lg">
      {/* Avatar */}
      <div className="mb-8 flex justify-center">
        <ImageUpload
          label="Profile image"
          value={image}
          onChange={setImage}
          shape="circle"
        />
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextInput
          label="Name"
          placeholder="Enter full name"
          value={name}
          onChange={setName}
        />

        <TextInput
          label="Email"
          placeholder="Enter email address"
          value={email}
          onChange={setEmail}
        />

        <TextInput
          label="Address"
          placeholder="Enter address"
          value={address}
          onChange={setAddress}
        />

        <TextInput
          label="State"
          placeholder="Enter state"
          value={state}
          onChange={setState}
        />

        <TextInput
          label="Birthday"
          placeholder="Enter birthday"
          value={address}
          onChange={setAddress}
        />

        <SelectInput
          label="Designation"
          value={category}
          onChange={setCategory}
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
            { label: "Manager", value: "manager" },
          ]}
        />
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-end gap-3 border-t pt-5">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSave}>Save User</Button>
      </div>
    </Modal>
  );
}
