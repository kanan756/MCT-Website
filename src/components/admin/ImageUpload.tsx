"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Upload, X, Loader2, CheckCircle2 } from "lucide-react";

interface ImageUploadProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  helper?: string;
}

export default function ImageUpload({
  label,
  value,
  onChange,
  helper,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      onChange(data.url);
    } catch (err: any) {
      setError(err.message || "Failed to upload image to Google Drive");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
        {label}
      </label>

      {/* Preview if image URL exists */}
      {value && (
        <div className="relative group w-full h-44 rounded-xl overflow-hidden border border-slate-700 bg-slate-900/50 mb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt={label}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-red-600/90 text-white hover:bg-red-700 transition shadow-lg opacity-90 group-hover:opacity-100"
            title="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://... or upload to Google Drive"
          className="flex-1 bg-slate-900/80 border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-[#3482b9] placeholder-slate-500 font-mono"
        />

        <label className="relative cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#3482b9] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs font-semibold tracking-wide shadow-md transition whitespace-nowrap">
          {uploading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Uploading...</span>
            </>
          ) : (
            <>
              <Upload className="w-4 h-4" />
              <span>Upload to Drive</span>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </label>
      </div>

      {helper && <p className="text-[11px] text-slate-400">{helper}</p>}
      {error && <p className="text-[11px] text-red-400 font-medium">{error}</p>}
    </div>
  );
}
