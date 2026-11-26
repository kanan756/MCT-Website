"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crop,
  RotateCw,
  Sun,
  Contrast,
  Sliders,
  Check,
  X,
  Upload,
  Download,
  Sparkles,
  Maximize2,
  RefreshCw,
  Image as ImageIcon
} from "lucide-react";

interface ImageEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (editedImageUrl: string) => void;
  initialImage?: string;
}

export default function ImageEditorModal({
  isOpen,
  onClose,
  onSave,
  initialImage,
}: ImageEditorModalProps) {
  const [imageSrc, setImageSrc] = useState<string>(initialImage || "");
  const [brightness, setBrightness] = useState<number>(100);
  const [contrast, setContrast] = useState<number>(100);
  const [saturation, setSaturation] = useState<number>(100);
  const [rotation, setRotation] = useState<number>(0);
  const [grayscale, setGrayscale] = useState<number>(0);
  const [blur, setBlur] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"adjust" | "filters" | "crop">("adjust");
  const [isProcessing, setIsProcessing] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  // Reset all adjustments
  const handleReset = () => {
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setRotation(0);
    setGrayscale(0);
    setBlur(0);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target?.result as string);
        handleReset();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyExport = () => {
    if (!imageSrc) return;
    setIsProcessing(true);

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const isRotated90or270 = rotation % 180 !== 0;
      canvas.width = isRotated90or270 ? img.height : img.width;
      canvas.height = isRotated90or270 ? img.width : img.height;

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);

      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) grayscale(${grayscale}%) blur(${blur}px)`;
      ctx.drawImage(img, -img.width / 2, -img.height / 2);
      ctx.restore();

      const exportedDataUrl = canvas.toDataURL("image/png", 0.95);
      setIsProcessing(false);
      onSave(exportedDataUrl);
      onClose();
    };
    img.src = imageSrc;
  };

  const filterPresets = [
    { name: "Original", b: 100, c: 100, s: 100, g: 0 },
    { name: "Vibrant Tech", b: 105, c: 115, s: 130, g: 0 },
    { name: "Executive Cool", b: 102, c: 110, s: 85, g: 0 },
    { name: "Corporate Mono", b: 100, c: 120, s: 0, g: 100 },
    { name: "Warm Glow", b: 108, c: 105, s: 115, g: 0 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-[#0b1b3d] text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#5ba6db] animate-pulse" />
                <h3 className="font-bold text-base tracking-wide font-sans">
                  MCT Creative Studio &amp; Photo Editor
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Workspace */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
              {/* Image Preview Canvas Area */}
              <div className="md:col-span-8 bg-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
                {imageSrc ? (
                  <motion.div
                    className="relative max-w-full max-h-[480px] flex items-center justify-center rounded-lg shadow-lg overflow-hidden bg-slate-900"
                    layout
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageSrc}
                      alt="Editor Preview"
                      style={{
                        filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) grayscale(${grayscale}%) blur(${blur}px)`,
                        transform: `rotate(${rotation}deg)`,
                        transition: "filter 0.15s ease, transform 0.25s ease",
                        maxHeight: "440px",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-300 hover:border-[#3482b9] rounded-2xl p-10 text-center cursor-pointer transition-all bg-white/70 hover:bg-white flex flex-col items-center gap-3"
                  >
                    <div className="w-14 h-14 rounded-full bg-blue-50 text-[#3482b9] flex items-center justify-center">
                      <ImageIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 text-sm">Select an image to edit</p>
                      <p className="text-xs text-slate-500 mt-1">PNG, JPG, WebP up to 10MB</p>
                    </div>
                    <button className="mt-2 text-xs font-semibold px-4 py-2 bg-[#3482b9] text-white rounded-lg hover:bg-[#1f6595] transition">
                      Choose File
                    </button>
                  </div>
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />

                {imageSrc && (
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-slate-500 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
                    <span>Rotation: {rotation}°</span>
                    <button
                      onClick={() => setRotation((r) => (r + 90) % 360)}
                      className="flex items-center gap-1 font-semibold text-[#3482b9] hover:underline"
                    >
                      <RotateCw className="w-3.5 h-3.5" /> Rotate 90°
                    </button>
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-1 font-semibold text-rose-600 hover:underline"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Reset
                    </button>
                  </div>
                )}
              </div>

              {/* Controls Sidebar */}
              <div className="md:col-span-4 border-l border-slate-200 bg-white p-5 flex flex-col justify-between overflow-y-auto">
                <div>
                  {/* Tab Selector */}
                  <div className="flex border-b border-slate-200 mb-5">
                    <button
                      onClick={() => setActiveTab("adjust")}
                      className={`pb-2 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
                        activeTab === "adjust"
                          ? "border-[#3482b9] text-[#3482b9]"
                          : "border-transparent text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      Adjust
                    </button>
                    <button
                      onClick={() => setActiveTab("filters")}
                      className={`pb-2 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
                        activeTab === "filters"
                          ? "border-[#3482b9] text-[#3482b9]"
                          : "border-transparent text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      Presets
                    </button>
                  </div>

                  {activeTab === "adjust" && (
                    <div className="space-y-4">
                      {/* Brightness */}
                      <div>
                        <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                          <span className="flex items-center gap-1">
                            <Sun className="w-3.5 h-3.5 text-amber-500" /> Brightness
                          </span>
                          <span>{brightness}%</span>
                        </div>
                        <input
                          type="range"
                          min="30"
                          max="200"
                          value={brightness}
                          onChange={(e) => setBrightness(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#3482b9]"
                        />
                      </div>

                      {/* Contrast */}
                      <div>
                        <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                          <span className="flex items-center gap-1">
                            <Contrast className="w-3.5 h-3.5 text-indigo-500" /> Contrast
                          </span>
                          <span>{contrast}%</span>
                        </div>
                        <input
                          type="range"
                          min="30"
                          max="200"
                          value={contrast}
                          onChange={(e) => setContrast(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#3482b9]"
                        />
                      </div>

                      {/* Saturation */}
                      <div>
                        <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                          <span className="flex items-center gap-1">
                            <Sliders className="w-3.5 h-3.5 text-rose-500" /> Saturation
                          </span>
                          <span>{saturation}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="200"
                          value={saturation}
                          onChange={(e) => setSaturation(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#3482b9]"
                        />
                      </div>

                      {/* Grayscale */}
                      <div>
                        <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                          <span>Grayscale</span>
                          <span>{grayscale}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={grayscale}
                          onChange={(e) => setGrayscale(Number(e.target.value))}
                          className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#3482b9]"
                        />
                      </div>
                    </div>
                  )}

                  {activeTab === "filters" && (
                    <div className="grid grid-cols-2 gap-2.5">
                      {filterPresets.map((preset) => (
                        <button
                          key={preset.name}
                          onClick={() => {
                            setBrightness(preset.b);
                            setContrast(preset.c);
                            setSaturation(preset.s);
                            setGrayscale(preset.g);
                          }}
                          className="p-3 text-left border border-slate-200 rounded-xl hover:border-[#3482b9] hover:bg-blue-50/50 transition-all text-xs font-medium text-slate-700"
                        >
                          <div className="font-bold text-slate-900">{preset.name}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">
                            B:{preset.b}% C:{preset.c}%
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 mt-6 border-t border-slate-200 space-y-2">
                  <button
                    disabled={!imageSrc || isProcessing}
                    onClick={handleApplyExport}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-[#3482b9] to-[#1f6595] hover:from-[#2a70a1] hover:to-[#174e75] text-white rounded-xl text-xs font-bold tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition disabled:opacity-50"
                  >
                    <Check className="w-4 h-4" />
                    {isProcessing ? "Processing..." : "Save & Insert Image"}
                  </button>

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full py-2 px-4 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                  >
                    <Upload className="w-3.5 h-3.5 text-slate-500" />
                    Replace Image
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
