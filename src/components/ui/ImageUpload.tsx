"use client";

type Props = {
    label?: string;
    value: File | null;
    onChange: (file: File | null) => void;
    shape?: "square" | "circle";
};

export default function ImageUpload({
    label,
    value,
    onChange,
    shape = "square",
}: Props) {
    return (
        <div>
            {label && <label className="form-label text-center block">{label}</label>}

            <div
                className={[
                    "mx-auto flex flex-col items-center justify-center border-2 border-dashed bg-slate-50 hover:bg-slate-100 transition cursor-pointer",
                    shape === "circle"
                        ? "h-32 w-32 rounded-full"
                        : "rounded-xl p-8",
                ].join(" ")}
                onClick={() => document.getElementById("imageInput")?.click()}
            >
                {value ? (
                    <img
                        src={URL.createObjectURL(value)}
                        alt="preview"
                        className={
                            shape === "circle"
                                ? "h-full w-full rounded-full object-cover"
                                : "max-h-40 object-contain"
                        }
                    />
                ) : (
                    <>
                        <div className="text-slate-500 text-sm">Upload</div>
                        <div className="text-xs text-slate-400">PNG / JPG</div>
                    </>
                )}
            </div>

            <input
                id="imageInput"
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => onChange(e.target.files?.[0] || null)}
            />
        </div>
    );
}
