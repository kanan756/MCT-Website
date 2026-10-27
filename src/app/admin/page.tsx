"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Settings,
  MessageSquare,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  Search,
  Upload,
  X,
  ChevronRight,
  Globe,
  CheckCircle,
  AlertCircle,
  Clock,
  RefreshCw,
  ImageIcon,
  Tag,
  Calendar,
  User,
  Link2,
  Database,
  Menu,
  ArrowUpRight,
  Mail,
  Phone,
  Save,
  Layers,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string;
  tags: string[];
  published?: boolean;
}

interface Project {
  slug: string;
  name: string;
  solutionCategory: string;
  tagline: string;
  client: string;
  location: string;
  duration: string;
  year: string;
  image: string;
  heroImage: string;
  tags: string[];
  summary: string;
  overview: string[];
  businessChallenges: string[];
  solutionDelivered: string[];
  capabilities: { title: string; description: string }[];
  businessValues: string[];
  technologies: { name: string; purpose: string }[];
}

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submittedAt: string;
  status: string;
}

type Tab = "dashboard" | "blogs" | "projects" | "services" | "enquiries";

// ─── Constants ───────────────────────────────────────────────────────────────

const MCT_BLUE = "#3482b9";
const MCT_RED = "#e74c3c";

const NAV_ITEMS = [
  { id: "dashboard" as Tab, label: "Dashboard", icon: LayoutDashboard },
  { id: "blogs" as Tab, label: "Blog Posts", icon: FileText },
  { id: "projects" as Tab, label: "Projects", icon: Briefcase },
  { id: "services" as Tab, label: "Services", icon: Layers },
  { id: "enquiries" as Tab, label: "Enquiries", icon: MessageSquare },
];

// ─── Utility ─────────────────────────────────────────────────────────────────

function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Toast({ message, type, onClose }: { message: string; type: "success" | "error"; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        background: type === "success" ? "#16a34a" : MCT_RED,
        color: "#fff",
        padding: "14px 20px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        fontFamily: "'Source Sans 3', sans-serif",
        fontSize: "14px",
        fontWeight: 600,
        maxWidth: "360px",
        animation: "slideUp 0.3s ease",
      }}
    >
      {type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
      {message}
      <button onClick={onClose} style={{ marginLeft: "auto", background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
        <X size={16} />
      </button>
    </div>
  );
}

function Badge({ label, color }: { label: string; color?: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: "20px",
        fontSize: "11px",
        fontWeight: 700,
        background: color ? `${color}18` : "#3482b918",
        color: color || MCT_BLUE,
        border: `1px solid ${color ? `${color}30` : "#3482b930"}`,
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {label}
    </span>
  );
}

function StatusBadge({ published }: { published?: boolean }) {
  return published ? (
    <Badge label="Published" color="#16a34a" />
  ) : (
    <Badge label="Draft" color="#d97706" />
  );
}

// ─── Confirm Dialog ──────────────────────────────────────────────────────────

function ConfirmDialog({
  message,
  onConfirm,
  onCancel,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 8000, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", width: "400px", boxShadow: "0 24px 64px rgba(0,0,0,0.15)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AlertCircle size={22} color={MCT_RED} />
          </div>
          <div>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "16px", color: "#111827" }}>Confirm Delete</div>
            <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: "13px", color: "#6b7280", marginTop: "2px" }}>{message}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
          <button onClick={onCancel} style={{ padding: "8px 20px", borderRadius: "8px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer", fontFamily: "'Source Sans 3',sans-serif", fontWeight: 600, fontSize: "14px", color: "#374151" }}>
            Cancel
          </button>
          <button onClick={onConfirm} style={{ padding: "8px 20px", borderRadius: "8px", border: "none", background: MCT_RED, color: "#fff", cursor: "pointer", fontFamily: "'Source Sans 3',sans-serif", fontWeight: 700, fontSize: "14px" }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Blog Editor Modal ────────────────────────────────────────────────────────

function BlogModal({
  initial,
  onSave,
  onClose,
  onUploadImage,
}: {
  initial?: BlogPost | null;
  onSave: (b: BlogPost) => Promise<void>;
  onClose: () => void;
  onUploadImage: (file: File) => Promise<string>;
}) {
  const isEdit = !!initial?.slug;
  const [form, setForm] = useState<BlogPost>(
    initial || {
      slug: "",
      title: "",
      category: "",
      author: "MCT Tech Team",
      date: new Date().toISOString().split("T")[0],
      readTime: "5 min read",
      image: "",
      summary: "",
      content: "",
      tags: [],
      published: false,
    }
  );
  const [tagsInput, setTagsInput] = useState((initial?.tags || []).join(", "));
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const set = (key: keyof BlogPost, value: any) => setForm((f) => ({ ...f, [key]: value }));

  const handleTitleChange = (v: string) => {
    set("title", v);
    if (!isEdit) set("slug", slugify(v));
  };

  const handleImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await onUploadImage(file);
      set("image", url);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!form.title || !form.slug) return;
    setSaving(true);
    try {
      await onSave({ ...form, tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean) });
    } finally {
      setSaving(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    border: "1.5px solid #e5e7eb",
    borderRadius: "8px",
    fontFamily: "'Source Sans 3',sans-serif",
    fontSize: "14px",
    color: "#111827",
    outline: "none",
    transition: "border 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 600,
    fontSize: "12px",
    color: "#374151",
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 7000, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 16px", overflowY: "auto" }}>
      <div className="admin-modal-card" style={{ background: "#fff", borderRadius: "20px", width: "100%", maxWidth: "720px", boxShadow: "0 32px 80px rgba(0,0,0,0.18)", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ background: `linear-gradient(135deg, ${MCT_BLUE}, #1f6595)`, padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: 40, height: 40, borderRadius: "10px", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FileText size={20} color="#fff" />
            </div>
            <div>
              <div style={{ color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "18px" }}>
                {isEdit ? "Edit Blog Post" : "New Blog Post"}
              </div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontFamily: "'Source Sans 3',sans-serif" }}>
                {isEdit ? `Editing: ${initial?.title}` : "Create a new blog article"}
              </div>
            </div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "8px", padding: "8px", cursor: "pointer", color: "#fff", display: "flex" }}>
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="admin-modal-body" style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <div className="admin-modal-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Title *</label>
              <input style={inputStyle} value={form.title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="Blog post title..." />
            </div>
            <div>
              <label style={labelStyle}>Slug (auto)</label>
              <input style={{ ...inputStyle, background: "#f9fafb", color: "#6b7280" }} value={form.slug} onChange={(e) => set("slug", e.target.value)} placeholder="auto-generated-slug" />
            </div>
          </div>

          <div className="admin-modal-grid-3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Category</label>
              <input style={inputStyle} value={form.category} onChange={(e) => set("category", e.target.value)} placeholder="e.g. Dynamics 365" />
            </div>
            <div>
              <label style={labelStyle}>Author</label>
              <input style={inputStyle} value={form.author} onChange={(e) => set("author", e.target.value)} placeholder="MCT Tech Team" />
            </div>
            <div>
              <label style={labelStyle}>Read Time</label>
              <input style={inputStyle} value={form.readTime} onChange={(e) => set("readTime", e.target.value)} placeholder="5 min read" />
            </div>
          </div>

          <div className="admin-modal-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Publish Date</label>
              <input style={inputStyle} type="date" value={form.date} onChange={(e) => set("date", e.target.value)} />
            </div>
            <div>
              <label style={labelStyle}>Tags (comma separated)</label>
              <input style={inputStyle} value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} placeholder="Dynamics 365, CRM, Azure" />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Cover Image</label>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <input style={{ ...inputStyle, flex: 1 }} value={form.image} onChange={(e) => set("image", e.target.value)} placeholder="https://... or upload below" />
              <label style={{ flexShrink: 0, padding: "10px 16px", background: uploading ? "#e5e7eb" : `${MCT_BLUE}15`, border: `1.5px dashed ${MCT_BLUE}`, borderRadius: "8px", cursor: "pointer", color: MCT_BLUE, fontSize: "13px", fontWeight: 700, fontFamily: "'Source Sans 3',sans-serif", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "6px" }}>
                <Upload size={14} />
                {uploading ? "Uploading..." : "Upload"}
                <input type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageFile} disabled={uploading} />
              </label>
            </div>
            {form.image && (
              <div style={{ marginTop: "8px", borderRadius: "8px", overflow: "hidden", height: "120px", border: "1px solid #e5e7eb" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={form.image} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            )}
          </div>

          <div>
            <label style={labelStyle}>Summary / Meta Description</label>
            <textarea style={{ ...inputStyle, height: "80px", resize: "vertical" }} value={form.summary} onChange={(e) => set("summary", e.target.value)} placeholder="Short summary for SEO and blog cards..." />
          </div>

          <div>
            <label style={labelStyle}>Content (Markdown)</label>
            <textarea style={{ ...inputStyle, height: "200px", resize: "vertical", fontFamily: "monospace", fontSize: "13px" }} value={form.content} onChange={(e) => set("content", e.target.value)} placeholder="### Heading&#10;&#10;Write your blog content in Markdown format..." />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", background: "#f0f9f0", borderRadius: "10px", border: "1px solid #bbf7d0" }}>
            <input type="checkbox" id="published" checked={!!form.published} onChange={(e) => set("published", e.target.checked)} style={{ width: "18px", height: "18px", accentColor: "#16a34a", cursor: "pointer" }} />
            <label htmlFor="published" style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: "14px", fontWeight: 600, color: "#166534", cursor: "pointer" }}>
              Published — visible on the website
            </label>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "16px 28px", borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "flex-end", gap: "12px", background: "#fafafa" }}>
          <button onClick={onClose} style={{ padding: "10px 24px", borderRadius: "10px", border: "1.5px solid #e5e7eb", background: "#fff", cursor: "pointer", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px", color: "#374151" }}>
            Cancel
          </button>
          <button onClick={handleSave} disabled={saving || !form.title || !form.slug} style={{ padding: "10px 28px", borderRadius: "10px", border: "none", background: saving ? "#93c5fd" : MCT_BLUE, color: "#fff", cursor: saving ? "not-allowed" : "pointer", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Save size={15} />
            {saving ? "Saving..." : isEdit ? "Update Post" : "Publish Post"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Project Editor Modal ─────────────────────────────────────────────────────

function ProjectModal({
  initial,
  onSave,
  onClose,
  onUploadImage,
}: {
  initial?: Project | null;
  onSave: (p: Project) => Promise<void>;
  onClose: () => void;
  onUploadImage: (file: File) => Promise<string>;
}) {
  const isEdit = !!initial?.slug;
  const defaultProject: Project = {
    slug: "",
    name: "",
    solutionCategory: "",
    tagline: "",
    client: "",
    location: "",
    duration: "",
    year: new Date().getFullYear().toString(),
    image: "",
    heroImage: "",
    tags: [],
    summary: "",
    overview: [""],
    businessChallenges: [""],
    solutionDelivered: [""],
    capabilities: [],
    businessValues: [""],
    technologies: [],
  };
  const [form, setForm] = useState<Project>(initial || defaultProject);
  const [tagsInput, setTagsInput] = useState((initial?.tags || []).join(", "));
  const [overviewInput, setOverviewInput] = useState((initial?.overview || [""]).join("\n\n"));
  const [challengesInput, setChallengesInput] = useState((initial?.businessChallenges || [""]).join("\n"));
  const [solutionInput, setSolutionInput] = useState((initial?.solutionDelivered || [""]).join("\n"));
  const [valuesInput, setValuesInput] = useState((initial?.businessValues || [""]).join("\n"));
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<"image" | "hero" | null>(null);

  const set = (key: keyof Project, value: any) => setForm((f) => ({ ...f, [key]: value }));

  const handleNameChange = (v: string) => {
    set("name", v);
    if (!isEdit) set("slug", slugify(v));
  };

  const handleImageFile = async (key: "image" | "heroImage", e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(key === "image" ? "image" : "hero");
    try {
      const url = await onUploadImage(file);
      set(key, url);
    } finally {
      setUploading(null);
    }
  };

  const handleSave = async () => {
    if (!form.name || !form.slug) return;
    setSaving(true);
    try {
      await onSave({
        ...form,
        tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
        overview: overviewInput.split("\n\n").map((s) => s.trim()).filter(Boolean),
        businessChallenges: challengesInput.split("\n").map((s) => s.trim()).filter(Boolean),
        solutionDelivered: solutionInput.split("\n").map((s) => s.trim()).filter(Boolean),
        businessValues: valuesInput.split("\n").map((s) => s.trim()).filter(Boolean),
      });
    } finally {
      setSaving(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    border: "1.5px solid #e5e7eb",
    borderRadius: "8px",
    fontFamily: "'Source Sans 3',sans-serif",
    fontSize: "14px",
    color: "#111827",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 600,
    fontSize: "11px",
    color: "#374151",
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  const sectionStyle: React.CSSProperties = {
    background: "#f9fafb",
    borderRadius: "12px",
    padding: "18px",
    border: "1px solid #f0f0f0",
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 7000, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 16px", overflowY: "auto" }}>
      <div className="admin-modal-card" style={{ background: "#fff", borderRadius: "20px", width: "100%", maxWidth: "820px", boxShadow: "0 32px 80px rgba(0,0,0,0.18)", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ background: `linear-gradient(135deg, #1a3c5e, ${MCT_BLUE})`, padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: 40, height: 40, borderRadius: "10px", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Briefcase size={20} color="#fff" />
            </div>
            <div>
              <div style={{ color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "18px" }}>
                {isEdit ? "Edit Project" : "New Project"}
              </div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontFamily: "'Source Sans 3',sans-serif" }}>
                {isEdit ? `Editing: ${initial?.name}` : "Add a new project case study"}
              </div>
            </div>
          </div>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "8px", padding: "8px", cursor: "pointer", color: "#fff", display: "flex" }}>
            <X size={18} />
          </button>
        </div>

        <div className="admin-modal-body" style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "20px", maxHeight: "70vh", overflowY: "auto" }}>
          {/* Basic Info */}
          <div style={sectionStyle}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px", color: MCT_BLUE, marginBottom: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Basic Information
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div className="admin-modal-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={labelStyle}>Project Name *</label>
                  <input style={inputStyle} value={form.name} onChange={(e) => handleNameChange(e.target.value)} placeholder="UAE E-Invoicing Integration..." />
                </div>
                <div>
                  <label style={labelStyle}>Slug (auto)</label>
                  <input style={{ ...inputStyle, background: "#f9fafb", color: "#6b7280" }} value={form.slug} onChange={(e) => set("slug", e.target.value)} placeholder="auto-generated" />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Solution Category</label>
                <input style={inputStyle} value={form.solutionCategory} onChange={(e) => set("solutionCategory", e.target.value)} placeholder="Microsoft Dynamics 365 Business Central" />
              </div>
              <div>
                <label style={labelStyle}>Tagline</label>
                <input style={inputStyle} value={form.tagline} onChange={(e) => set("tagline", e.target.value)} placeholder="Short compelling tagline..." />
              </div>
              <div className="admin-modal-grid-4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={labelStyle}>Client</label>
                  <input style={inputStyle} value={form.client} onChange={(e) => set("client", e.target.value)} placeholder="Client name" />
                </div>
                <div>
                  <label style={labelStyle}>Location</label>
                  <input style={inputStyle} value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="UAE" />
                </div>
                <div>
                  <label style={labelStyle}>Duration</label>
                  <input style={inputStyle} value={form.duration} onChange={(e) => set("duration", e.target.value)} placeholder="6 Months" />
                </div>
                <div>
                  <label style={labelStyle}>Year</label>
                  <input style={inputStyle} value={form.year} onChange={(e) => set("year", e.target.value)} placeholder="2025" />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Tags (comma separated)</label>
                <input style={inputStyle} value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} placeholder="Dynamics 365, ERP, UAE, Compliance" />
              </div>
              <div>
                <label style={labelStyle}>Summary</label>
                <textarea style={{ ...inputStyle, height: "80px", resize: "vertical" }} value={form.summary} onChange={(e) => set("summary", e.target.value)} placeholder="Short project summary..." />
              </div>
            </div>
          </div>

          {/* Images */}
          <div style={sectionStyle}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px", color: MCT_BLUE, marginBottom: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Images
            </div>
            <div className="admin-modal-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {(["image", "heroImage"] as const).map((key) => (
                <div key={key}>
                  <label style={labelStyle}>{key === "image" ? "Card Image" : "Hero/Banner Image"}</label>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input style={{ ...inputStyle, flex: 1 }} value={form[key] as string} onChange={(e) => set(key, e.target.value)} placeholder="https://..." />
                    <label style={{ padding: "10px 12px", background: `${MCT_BLUE}15`, border: `1.5px dashed ${MCT_BLUE}`, borderRadius: "8px", cursor: "pointer", color: MCT_BLUE, display: "flex", alignItems: "center" }}>
                      <Upload size={14} />
                      <input type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => handleImageFile(key, e)} disabled={!!uploading} />
                    </label>
                  </div>
                  {(form[key] as string) && (
                    <div style={{ marginTop: "6px", borderRadius: "6px", overflow: "hidden", height: "80px", border: "1px solid #e5e7eb" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={form[key] as string} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div style={sectionStyle}>
            <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px", color: MCT_BLUE, marginBottom: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Project Content
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={labelStyle}>Overview Paragraphs (separate with blank line)</label>
                <textarea style={{ ...inputStyle, height: "100px", resize: "vertical" }} value={overviewInput} onChange={(e) => setOverviewInput(e.target.value)} placeholder="First paragraph...&#10;&#10;Second paragraph..." />
              </div>
              <div>
                <label style={labelStyle}>Business Challenges (one per line)</label>
                <textarea style={{ ...inputStyle, height: "80px", resize: "vertical" }} value={challengesInput} onChange={(e) => setChallengesInput(e.target.value)} placeholder="Challenge 1&#10;Challenge 2&#10;Challenge 3" />
              </div>
              <div>
                <label style={labelStyle}>Solution Delivered (one per line)</label>
                <textarea style={{ ...inputStyle, height: "80px", resize: "vertical" }} value={solutionInput} onChange={(e) => setSolutionInput(e.target.value)} placeholder="Solution point 1&#10;Solution point 2" />
              </div>
              <div>
                <label style={labelStyle}>Business Values (one per line)</label>
                <textarea style={{ ...inputStyle, height: "80px", resize: "vertical" }} value={valuesInput} onChange={(e) => setValuesInput(e.target.value)} placeholder="Business value 1&#10;Business value 2" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: "16px 28px", borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "flex-end", gap: "12px", background: "#fafafa" }}>
          <button onClick={onClose} style={{ padding: "10px 24px", borderRadius: "10px", border: "1.5px solid #e5e7eb", background: "#fff", cursor: "pointer", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px", color: "#374151" }}>
            Cancel
          </button>
          <button onClick={handleSave} disabled={saving || !form.name || !form.slug} style={{ padding: "10px 28px", borderRadius: "10px", border: "none", background: saving ? "#93c5fd" : MCT_BLUE, color: "#fff", cursor: saving ? "not-allowed" : "pointer", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Save size={15} />
            {saving ? "Saving..." : isEdit ? "Update Project" : "Add Project"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

function Dashboard({
  blogs,
  projects,
  enquiries,
  googleConfigured,
  spreadsheetId,
  onSeed,
  seeding,
  seedMsg,
}: {
  blogs: BlogPost[];
  projects: Project[];
  enquiries: Enquiry[];
  googleConfigured: boolean;
  spreadsheetId?: string | null;
  onSeed: () => void;
  seeding: boolean;
  seedMsg: string | null;
}) {
  const stats = [
    { label: "Blog Posts", value: blogs.length, icon: FileText, color: MCT_BLUE, bg: "#eff6ff" },
    { label: "Projects", value: projects.length, icon: Briefcase, color: "#7c3aed", bg: "#f5f3ff" },
    { label: "Enquiries", value: enquiries.length, icon: MessageSquare, color: "#d97706", bg: "#fffbeb" },
    { label: "Published Blogs", value: blogs.filter((b) => b.published).length, icon: Globe, color: "#16a34a", bg: "#f0fdf4" },
  ];

  const newEnquiries = enquiries.filter((e) => e.status === "New").length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Stats */}
      <div className="admin-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        {stats.map((s) => (
          <div key={s.label} style={{ background: "#fff", borderRadius: "14px", padding: "20px", border: "1px solid #f0f0f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: 48, height: 48, borderRadius: "12px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <s.icon size={22} color={s.color} />
            </div>
            <div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "28px", color: "#111827", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: "13px", color: "#6b7280", marginTop: "4px" }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Google Sheets Status */}
      <div className="admin-two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "4px" }}>
        <div style={{ background: "#fff", borderRadius: "14px", padding: "22px", border: "1px solid #f0f0f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <Database size={18} color={MCT_BLUE} />
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "14px", color: "#111827" }}>Google Sheets Status</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", borderRadius: "10px", background: googleConfigured ? "#f0fdf4" : "#fef2f2", marginBottom: "12px" }}>
            {googleConfigured ? <CheckCircle size={18} color="#16a34a" /> : <AlertCircle size={18} color={MCT_RED} />}
            <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 600, fontSize: "13px", color: googleConfigured ? "#166534" : "#991b1b" }}>
              {googleConfigured ? "Connected & Active" : "Not Configured — Set up .env.local"}
            </span>
          </div>
          {googleConfigured && spreadsheetId && (
            <div style={{ fontSize: "12px", color: "#6b7280", fontFamily: "'Source Sans 3',sans-serif", marginBottom: "12px" }}>
              Sheet ID: <span style={{ fontFamily: "monospace", color: "#374151" }}>{spreadsheetId}</span>
            </div>
          )}
          <button
            onClick={onSeed}
            disabled={seeding || !googleConfigured}
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "none", background: googleConfigured ? MCT_BLUE : "#e5e7eb", color: googleConfigured ? "#fff" : "#9ca3af", cursor: googleConfigured ? "pointer" : "not-allowed", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
          >
            <RefreshCw size={14} className={seeding ? "animate-spin" : ""} />
            {seeding ? "Seeding..." : "Seed Static Data → Google Sheets"}
          </button>
          {seedMsg && (
            <div style={{ marginTop: "8px", fontSize: "12px", color: seedMsg.startsWith("Error") ? MCT_RED : "#16a34a", fontFamily: "'Source Sans 3',sans-serif" }}>
              {seedMsg}
            </div>
          )}
        </div>

        <div style={{ background: "#fff", borderRadius: "14px", padding: "22px", border: "1px solid #f0f0f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <MessageSquare size={18} color="#d97706" />
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "14px", color: "#111827" }}>Recent Enquiries</span>
            {newEnquiries > 0 && <Badge label={`${newEnquiries} new`} color="#d97706" />}
          </div>
          {enquiries.length === 0 ? (
            <div style={{ textAlign: "center", color: "#9ca3af", fontFamily: "'Source Sans 3',sans-serif", fontSize: "13px", padding: "20px 0" }}>
              No enquiries yet
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {enquiries.slice(0, 4).map((e) => (
                <div key={e.id} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderBottom: "1px solid #f9fafb" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#fffbeb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <User size={14} color="#d97706" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 600, fontSize: "13px", color: "#111827", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.name}</div>
                    <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: "11px", color: "#9ca3af" }}>{formatDate(e.submittedAt)}</div>
                  </div>
                  <Badge label={e.status || "New"} color={e.status === "New" ? "#d97706" : "#16a34a"} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Admin Page ──────────────────────────────────────────────────────────

export default function AdminPage() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  // Google status
  const [googleConfigured, setGoogleConfigured] = useState(false);
  const [spreadsheetId, setSpreadsheetId] = useState<string | null>(null);

  // Navigation
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Data
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);

  // Seeding
  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState<string | null>(null);

  // Modals
  const [blogModal, setBlogModal] = useState<"new" | BlogPost | null>(null);
  const [projectModal, setProjectModal] = useState<"new" | Project | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<{ entity: string; key: string; label: string } | null>(null);

  // Toast
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = useCallback((message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
  }, []);

  // ── Auth ──────────────────────────────────────────────────────────────────

  const checkStatus = async () => {
    try {
      const res = await fetch("/api/admin/status");
      const data = await res.json();
      setIsAuthenticated(data.authenticated);
      setGoogleConfigured(data.googleConfigured);
      setSpreadsheetId(data.spreadsheetId || null);
    } catch {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkStatus();

    // Responsive initial sidebar state
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
      const handleResize = () => {
        if (window.innerWidth < 1024) {
          setSidebarOpen(false);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: usernameInput, password: passwordInput }),
      });
      const data = await res.json();
      if (res.ok) {
        await checkStatus();
        loadData();
      } else {
        setLoginError(data.error || "Invalid credentials");
      }
    } catch {
      setLoginError("Connection error. Please try again.");
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setIsAuthenticated(false);
    setBlogs([]);
    setProjects([]);
    setEnquiries([]);
  };

  // ── Data Loading ──────────────────────────────────────────────────────────

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [blogsRes, projectsRes, enquiriesRes] = await Promise.all([
        fetch("/api/admin/blogs", { cache: "no-store" }),
        fetch("/api/admin/projects", { cache: "no-store" }),
        fetch("/api/admin/enquiries", { cache: "no-store" }),
      ]);
      if (blogsRes.ok) setBlogs((await blogsRes.json()).data || []);
      if (projectsRes.ok) setProjects((await projectsRes.json()).data || []);
      if (enquiriesRes.ok) setEnquiries((await enquiriesRes.json()).data || []);
    } catch (err) {
      console.error("Load error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) loadData();
  }, [isAuthenticated, loadData]);

  // ── Seed ──────────────────────────────────────────────────────────────────

  const handleSeed = async () => {
    setSeeding(true);
    setSeedMsg(null);
    try {
      const res = await fetch("/api/admin/seed", { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        setSeedMsg(data.message);
        showToast("Data seeded successfully!", "success");
        await loadData();
      } else {
        setSeedMsg(`Error: ${data.error}`);
        showToast(data.error || "Seeding failed", "error");
      }
    } finally {
      setSeeding(false);
    }
  };

  // ── Image Upload ──────────────────────────────────────────────────────────

  const handleUploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Upload failed");
    return data.url;
  };

  // ── Blog CRUD ─────────────────────────────────────────────────────────────

  const saveBlog = async (blog: BlogPost) => {
    const res = await fetch("/api/admin/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to save blog");
    showToast(`Blog ${data.action || "saved"} successfully!`);
    setBlogModal(null);
    await loadData();
  };

  const deleteBlog = async (slug: string) => {
    const res = await fetch(`/api/admin/blogs?slug=${encodeURIComponent(slug)}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) {
      showToast(data.error || "Delete failed", "error");
      return;
    }
    showToast("Blog deleted successfully!");
    await loadData();
  };

  // ── Project CRUD ──────────────────────────────────────────────────────────

  const saveProject = async (project: Project) => {
    const res = await fetch("/api/admin/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to save project");
    showToast(`Project ${data.action || "saved"} successfully!`);
    setProjectModal(null);
    await loadData();
  };

  const deleteProject = async (slug: string) => {
    const res = await fetch(`/api/admin/projects?slug=${encodeURIComponent(slug)}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) {
      showToast(data.error || "Delete failed", "error");
      return;
    }
    showToast("Project deleted successfully!");
    await loadData();
  };

  // ── Filter ────────────────────────────────────────────────────────────────

  const filteredBlogs = blogs.filter((b) =>
    b.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredProjects = projects.filter((p) =>
    p.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.client?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredEnquiries = enquiries.filter((e) =>
    e.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ─────────────────────────────────────────────────────────────────────────
  // LOADING / AUTH STATES
  // ─────────────────────────────────────────────────────────────────────────

  if (isAuthenticated === null) {
    return (
      <div style={{ minHeight: "100vh", background: "#f8f9fb", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Source Sans 3',sans-serif" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 48, height: 48, border: `3px solid ${MCT_BLUE}`, borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 16px" }} />
          <div style={{ color: "#6b7280", fontSize: "14px" }}>Loading MCT Admin...</div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // LOGIN PAGE
  // ─────────────────────────────────────────────────────────────────────────

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f2540 0%, #1a3c5e 40%, #0f2540 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", fontFamily: "'Source Sans 3', sans-serif", position: "relative", overflow: "hidden" }}>
        {/* Background decorations */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: `${MCT_BLUE}15`, filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: `${MCT_RED}10`, filter: "blur(80px)" }} />

        <div className="admin-login-card" style={{ background: "#fff", borderRadius: "24px", width: "100%", maxWidth: "440px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.35)", position: "relative" }}>
          {/* Top accent */}
          <div style={{ height: "4px", background: `linear-gradient(90deg, ${MCT_BLUE}, ${MCT_RED})` }} />

          {/* Header section */}
          <div style={{ background: "linear-gradient(135deg, #0f2540, #1a3c5e)", padding: "36px 32px 28px", textAlign: "center" }}>
            <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
              <div style={{ background: "#ffffff", padding: "8px 16px", borderRadius: "12px", display: "inline-flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(0,0,0,0.15)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mctlogo.png" alt="MCT IT Solutions" style={{ height: "42px", width: "auto", maxWidth: "100%", objectFit: "contain" }} />
              </div>
            </div>
            <div style={{ color: "#fff", fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "22px", letterSpacing: "2px", marginBottom: "6px" }}>
              ADMIN PANEL
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>Secure Access — MCT IT Solutions</div>
          </div>

          {/* Form */}
          <div className="admin-login-body" style={{ padding: "32px 40px 40px" }}>
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={{ display: "block", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "11px", color: "#374151", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Email Address
                </label>
                <div style={{ position: "relative" }}>
                  <Mail size={16} color="#9ca3af" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
                  <input
                    id="admin-username"
                    type="email"
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    placeholder="admin@mctitsolutions.com"
                    required
                    style={{ width: "100%", padding: "12px 14px 12px 42px", border: `1.5px solid ${loginError ? MCT_RED : "#e5e7eb"}`, borderRadius: "10px", fontFamily: "'Source Sans 3',sans-serif", fontSize: "14px", outline: "none", boxSizing: "border-box", transition: "border 0.2s" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "11px", color: "#374151", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Password
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    style={{ width: "100%", padding: "12px 44px 12px 14px", border: `1.5px solid ${loginError ? MCT_RED : "#e5e7eb"}`, borderRadius: "10px", fontFamily: "'Source Sans 3',sans-serif", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9ca3af", display: "flex" }}>
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {loginError && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", background: "#fef2f2", borderRadius: "8px", border: "1px solid #fecaca" }}>
                  <AlertCircle size={14} color={MCT_RED} />
                  <span style={{ fontSize: "13px", color: "#991b1b", fontFamily: "'Source Sans 3',sans-serif" }}>{loginError}</span>
                </div>
              )}

              <button
                id="admin-login-btn"
                type="submit"
                disabled={loggingIn}
                style={{ padding: "14px", borderRadius: "10px", border: "none", background: loggingIn ? "#93c5fd" : `linear-gradient(135deg, ${MCT_BLUE}, #1f6595)`, color: "#fff", cursor: loggingIn ? "not-allowed" : "pointer", fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "14px", letterSpacing: "1px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", transition: "all 0.2s" }}
              >
                {loggingIn ? (
                  <>
                    <div style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                    Signing In...
                  </>
                ) : (
                  <>Sign In <ChevronRight size={16} /></>
                )}
              </button>
            </form>

            <div style={{ marginTop: "20px", padding: "12px", background: "#f8f9fa", borderRadius: "8px", textAlign: "center" }}>
              <div style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "'Source Sans 3',sans-serif" }}>
                Set credentials in <span style={{ fontFamily: "monospace", color: MCT_BLUE, fontWeight: 600 }}>.env.local</span> →{" "}
                <span style={{ fontFamily: "monospace" }}>ADMIN_USERNAME</span> &{" "}
                <span style={{ fontFamily: "monospace" }}>ADMIN_PASSWORD</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          @keyframes slideUp { from { transform: translateY(20px); opacity:0; } to { transform: translateY(0); opacity:1; } }
        `}</style>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // MAIN ADMIN LAYOUT
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f6fa", fontFamily: "'Source Sans 3', sans-serif", position: "relative" }}>

      {/* Mobile Backdrop Overlay */}
      {sidebarOpen && (
        <div
          className="admin-sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 998,
            display: "none",
          }}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`admin-sidebar ${sidebarOpen ? "open" : "collapsed"}`}
        style={{
          width: sidebarOpen ? 280 : 76,
          background: "#ffffff",
          borderRight: "1px solid #e5e7eb",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          transition: "width 0.3s ease, transform 0.3s ease",
          overflow: "hidden",
          position: "sticky",
          top: 0,
          height: "100vh",
          zIndex: 999,
          boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
        }}
      >
        {/* Header matching website drawer style */}
        <div style={{ padding: sidebarOpen ? "22px 20px 16px" : "18px 10px 14px", borderBottom: "1px solid #f1f5f9" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
            {sidebarOpen ? (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", padding: "4px 0" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mctlogo.png" alt="MCT IT Solutions" style={{ height: "58px", width: "auto", maxWidth: "100%", objectFit: "contain" }} />
              </div>
            ) : (
              <div style={{ width: 48, height: 48, borderRadius: "12px", background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", padding: "4px", margin: "0 auto" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mct_icon.png" alt="MCT" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            )}

            {sidebarOpen && (
              <button
                className="admin-mobile-close-btn"
                onClick={() => setSidebarOpen(false)}
                style={{ background: "transparent", border: "none", color: "#64748b", cursor: "pointer", display: "none", padding: "4px", borderRadius: "6px" }}
              >
                <X size={20} />
              </button>
            )}
          </div>

          {sidebarOpen && (
            <div style={{ marginTop: "14px", padding: "7px 14px", background: "#f0f7fc", borderRadius: "10px", border: "1px solid #dbeafe", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: MCT_BLUE, fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "11px", letterSpacing: "1px" }}>MCT ADMIN</span>
              <span style={{ color: "#64748b", fontSize: "10px", fontFamily: "'Source Sans 3',sans-serif", fontWeight: 600 }}>Portal</span>
            </div>
          )}
        </div>

        {/* Navigation - Website style rounded light cards */}
        <nav style={{ flex: 1, padding: "16px 12px", display: "flex", flexDirection: "column", gap: "8px", overflowY: "auto" }}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            const newCount = item.id === "enquiries" ? enquiries.filter((e) => e.status === "New").length : 0;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (typeof window !== "undefined" && window.innerWidth < 1024) {
                    setSidebarOpen(false);
                  }
                }}
                title={!sidebarOpen ? item.label : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: sidebarOpen ? "12px 14px" : "12px",
                  borderRadius: "12px",
                  border: isActive ? `1.5px solid ${MCT_BLUE}` : "1px solid #f1f5f9",
                  cursor: "pointer",
                  background: isActive ? "#eff6ff" : "#f8fafc",
                  color: isActive ? MCT_BLUE : "#1e293b",
                  transition: "all 0.15s",
                  textAlign: "left",
                  width: "100%",
                  justifyContent: sidebarOpen ? "flex-start" : "center",
                  position: "relative",
                  boxShadow: isActive ? "0 2px 8px rgba(52,130,185,0.12)" : "none",
                }}
              >
                <item.icon size={18} color={isActive ? MCT_BLUE : "#64748b"} style={{ flexShrink: 0 }} />
                {sidebarOpen && (
                  <>
                    <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.5px", textTransform: "uppercase", flex: 1 }}>
                      {item.label}
                    </span>
                    {newCount > 0 && (
                      <span style={{ background: MCT_RED, color: "#fff", borderRadius: "20px", padding: "1px 7px", fontSize: "10px", fontWeight: 700 }}>
                        {newCount}
                      </span>
                    )}
                  </>
                )}
                {!sidebarOpen && newCount > 0 && (
                  <span style={{ position: "absolute", top: "6px", right: "6px", width: "8px", height: "8px", background: MCT_RED, borderRadius: "50%" }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer with Website Button matching 'Get in Touch' button */}
        <div style={{ padding: "14px 12px", borderTop: "1px solid #f1f5f9", display: "flex", flexDirection: "column", gap: "8px", background: "#fafafa" }}>
          {sidebarOpen ? (
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "10px 16px",
                borderRadius: "9999px",
                background: MCT_BLUE,
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "'Montserrat',sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                boxShadow: "0 2px 6px rgba(52,130,185,0.3)",
                transition: "all 0.15s",
              }}
            >
              <Globe size={15} />
              <span>View Website</span>
            </a>
          ) : (
            <a href="/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", borderRadius: "10px", color: MCT_BLUE, background: "#eff6ff" }}>
              <Globe size={18} />
            </a>
          )}
          <button
            onClick={handleLogout}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: sidebarOpen ? "8px 14px" : "8px",
              borderRadius: "8px",
              border: "none",
              background: "transparent",
              color: "#64748b",
              cursor: "pointer",
              transition: "all 0.15s",
              justifyContent: sidebarOpen ? "flex-start" : "center",
              width: "100%",
              fontFamily: "'Source Sans 3',sans-serif",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <LogOut size={15} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Top Bar */}
        <header className="admin-header" style={{ background: "#fff", borderBottom: "1px solid #f0f0f0", padding: "0 28px", height: "64px", display: "flex", alignItems: "center", gap: "16px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280", display: "flex", padding: "6px" }}>
            <Menu size={20} />
          </button>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "18px", color: "#111827" }}>
                {NAV_ITEMS.find((n) => n.id === activeTab)?.label}
              </span>
              {!googleConfigured && (
                <Badge label="Google Sheets not configured" color="#d97706" />
              )}
            </div>
          </div>

          {/* Search */}
          {activeTab !== "dashboard" && (
            <div style={{ position: "relative", width: "260px" }}>
              <Search size={16} color="#9ca3af" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)" }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${activeTab}...`}
                style={{ width: "100%", padding: "8px 12px 8px 36px", border: "1.5px solid #e5e7eb", borderRadius: "10px", fontFamily: "'Source Sans 3',sans-serif", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
              />
            </div>
          )}

          {/* Action Button */}
          {activeTab === "blogs" && (
            <button onClick={() => setBlogModal("new")} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 18px", borderRadius: "10px", border: "none", background: MCT_BLUE, color: "#fff", cursor: "pointer", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px" }}>
              <Plus size={15} /> New Blog
            </button>
          )}
          {activeTab === "projects" && (
            <button onClick={() => setProjectModal("new")} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 18px", borderRadius: "10px", border: "none", background: MCT_BLUE, color: "#fff", cursor: "pointer", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px" }}>
              <Plus size={15} /> New Project
            </button>
          )}

          {/* Refresh */}
          <button onClick={loadData} title="Refresh data" style={{ background: "#f5f6fa", border: "1.5px solid #e5e7eb", borderRadius: "10px", padding: "8px", cursor: "pointer", color: "#6b7280", display: "flex" }}>
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          </button>
        </header>

        {/* Page Content */}
        <div className="admin-page-content" style={{ flex: 1, padding: "28px", overflowY: "auto" }}>
          {loading ? (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "300px", gap: "12px", color: "#6b7280" }}>
              <div style={{ width: 32, height: 32, border: `2px solid ${MCT_BLUE}`, borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
              <span style={{ fontSize: "15px" }}>Loading data...</span>
            </div>
          ) : (
            <>
              {/* ── Dashboard ── */}
              {activeTab === "dashboard" && (
                <Dashboard
                  blogs={blogs}
                  projects={projects}
                  enquiries={enquiries}
                  googleConfigured={googleConfigured}
                  spreadsheetId={spreadsheetId}
                  onSeed={handleSeed}
                  seeding={seeding}
                  seedMsg={seedMsg}
                />
              )}

              {/* ── Blogs ── */}
              {activeTab === "blogs" && (
                <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid #f0f0f0", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div className="admin-table-container" style={{ overflowX: "auto", width: "100%" }}>
                    <table style={{ width: "100%", minWidth: "680px", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "#f9fafb", borderBottom: "1px solid #f0f0f0" }}>
                        {["Title", "Category", "Date", "Tags", "Status", "Actions"].map((h) => (
                          <th key={h} style={{ padding: "14px 18px", textAlign: "left", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "11px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.7px" }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBlogs.length === 0 ? (
                        <tr>
                          <td colSpan={6} style={{ padding: "60px", textAlign: "center", color: "#9ca3af", fontFamily: "'Source Sans 3',sans-serif", fontSize: "14px" }}>
                            {searchQuery ? "No blogs match your search." : "No blogs yet. Click \"New Blog\" to add one."}
                          </td>
                        </tr>
                      ) : (
                        filteredBlogs.map((blog, i) => (
                          <tr key={blog.slug} style={{ borderBottom: i < filteredBlogs.length - 1 ? "1px solid #f9fafb" : "none", transition: "background 0.15s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#fafbfc")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                          >
                            <td style={{ padding: "16px 18px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                {blog.image ? (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img src={blog.image} alt="" style={{ width: 44, height: 44, borderRadius: "8px", objectFit: "cover", border: "1px solid #f0f0f0", flexShrink: 0 }} />
                                ) : (
                                  <div style={{ width: 44, height: 44, borderRadius: "8px", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <FileText size={18} color={MCT_BLUE} />
                                  </div>
                                )}
                                <div>
                                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px", color: "#111827", marginBottom: "2px" }}>{blog.title}</div>
                                  <div style={{ fontSize: "11px", color: "#9ca3af", fontFamily: "monospace" }}>{blog.slug}</div>
                                </div>
                              </div>
                            </td>
                            <td style={{ padding: "16px 18px" }}>
                              {blog.category && <Badge label={blog.category} />}
                            </td>
                            <td style={{ padding: "16px 18px" }}>
                              <div style={{ fontSize: "13px", color: "#374151", fontFamily: "'Source Sans 3',sans-serif" }}>{formatDate(blog.date)}</div>
                              <div style={{ fontSize: "11px", color: "#9ca3af" }}>{blog.readTime}</div>
                            </td>
                            <td style={{ padding: "16px 18px" }}>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                                {(blog.tags || []).slice(0, 2).map((tag) => (
                                  <Badge key={tag} label={tag} color="#6b7280" />
                                ))}
                                {(blog.tags || []).length > 2 && (
                                  <span style={{ fontSize: "11px", color: "#9ca3af" }}>+{(blog.tags || []).length - 2}</span>
                                )}
                              </div>
                            </td>
                            <td style={{ padding: "16px 18px" }}>
                              <StatusBadge published={blog.published} />
                            </td>
                            <td style={{ padding: "16px 18px" }}>
                              <div style={{ display: "flex", gap: "6px" }}>
                                <button
                                  onClick={() => setBlogModal(blog)}
                                  style={{ display: "flex", alignItems: "center", gap: "5px", padding: "6px 12px", borderRadius: "7px", border: `1px solid ${MCT_BLUE}30`, background: `${MCT_BLUE}08`, color: MCT_BLUE, cursor: "pointer", fontFamily: "'Source Sans 3',sans-serif", fontWeight: 700, fontSize: "12px" }}
                                >
                                  <Pencil size={12} /> Edit
                                </button>
                                <button
                                  onClick={() => setConfirmDelete({ entity: "blogs", key: blog.slug, label: blog.title })}
                                  style={{ display: "flex", alignItems: "center", gap: "5px", padding: "6px 12px", borderRadius: "7px", border: `1px solid ${MCT_RED}30`, background: `${MCT_RED}08`, color: MCT_RED, cursor: "pointer", fontFamily: "'Source Sans 3',sans-serif", fontWeight: 700, fontSize: "12px" }}
                                >
                                  <Trash2 size={12} /> Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  </div>
                </div>
              )}

              {/* ── Projects ── */}
              {activeTab === "projects" && (
                <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid #f0f0f0", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div className="admin-table-container" style={{ overflowX: "auto", width: "100%" }}>
                    <table style={{ width: "100%", minWidth: "750px", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "#f9fafb", borderBottom: "1px solid #f0f0f0" }}>
                        {["Project", "Client", "Location", "Year", "Tags", "Actions"].map((h) => (
                          <th key={h} style={{ padding: "14px 18px", textAlign: "left", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "11px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.7px" }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProjects.length === 0 ? (
                        <tr>
                          <td colSpan={6} style={{ padding: "60px", textAlign: "center", color: "#9ca3af", fontFamily: "'Source Sans 3',sans-serif", fontSize: "14px" }}>
                            {searchQuery ? "No projects match your search." : "No projects yet. Click \"New Project\" to add one."}
                          </td>
                        </tr>
                      ) : (
                        filteredProjects.map((proj, i) => (
                          <tr key={proj.slug} style={{ borderBottom: i < filteredProjects.length - 1 ? "1px solid #f9fafb" : "none" }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#fafbfc")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                          >
                            <td style={{ padding: "16px 18px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                {proj.image ? (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img src={proj.image} alt="" style={{ width: 44, height: 44, borderRadius: "8px", objectFit: "cover", border: "1px solid #f0f0f0", flexShrink: 0 }} />
                                ) : (
                                  <div style={{ width: 44, height: 44, borderRadius: "8px", background: "#f5f3ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <Briefcase size={18} color="#7c3aed" />
                                  </div>
                                )}
                                <div>
                                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px", color: "#111827", marginBottom: "2px" }}>{proj.name}</div>
                                  <div style={{ fontSize: "11px", color: "#9ca3af" }}>{proj.solutionCategory}</div>
                                </div>
                              </div>
                            </td>
                            <td style={{ padding: "16px 18px", fontSize: "13px", color: "#374151", fontFamily: "'Source Sans 3',sans-serif" }}>{proj.client}</td>
                            <td style={{ padding: "16px 18px", fontSize: "13px", color: "#374151", fontFamily: "'Source Sans 3',sans-serif" }}>{proj.location}</td>
                            <td style={{ padding: "16px 18px", fontSize: "13px", color: "#374151", fontFamily: "'Source Sans 3',sans-serif" }}>{proj.year}</td>
                            <td style={{ padding: "16px 18px" }}>
                              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                                {(proj.tags || []).slice(0, 2).map((tag) => (
                                  <Badge key={tag} label={tag} color="#7c3aed" />
                                ))}
                                {(proj.tags || []).length > 2 && (
                                  <span style={{ fontSize: "11px", color: "#9ca3af" }}>+{(proj.tags || []).length - 2}</span>
                                )}
                              </div>
                            </td>
                            <td style={{ padding: "16px 18px" }}>
                              <div style={{ display: "flex", gap: "6px" }}>
                                <button
                                  onClick={() => setProjectModal(proj)}
                                  style={{ display: "flex", alignItems: "center", gap: "5px", padding: "6px 12px", borderRadius: "7px", border: `1px solid ${MCT_BLUE}30`, background: `${MCT_BLUE}08`, color: MCT_BLUE, cursor: "pointer", fontFamily: "'Source Sans 3',sans-serif", fontWeight: 700, fontSize: "12px" }}
                                >
                                  <Pencil size={12} /> Edit
                                </button>
                                <button
                                  onClick={() => setConfirmDelete({ entity: "projects", key: proj.slug, label: proj.name })}
                                  style={{ display: "flex", alignItems: "center", gap: "5px", padding: "6px 12px", borderRadius: "7px", border: `1px solid ${MCT_RED}30`, background: `${MCT_RED}08`, color: MCT_RED, cursor: "pointer", fontFamily: "'Source Sans 3',sans-serif", fontWeight: 700, fontSize: "12px" }}
                                >
                                  <Trash2 size={12} /> Delete
                                </button>
                                <a
                                  href={`/about/projects/${proj.slug}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ display: "flex", alignItems: "center", gap: "5px", padding: "6px 12px", borderRadius: "7px", border: "1px solid #e5e7eb", background: "#f9fafb", color: "#374151", textDecoration: "none", fontFamily: "'Source Sans 3',sans-serif", fontWeight: 700, fontSize: "12px" }}
                                >
                                  <ArrowUpRight size={12} /> View
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  </div>
                </div>
              )}

              {/* ── Services ── */}
              {activeTab === "services" && (
                <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid #f0f0f0", padding: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 20px", background: "#fffbeb", borderRadius: "12px", border: "1px solid #fde68a", marginBottom: "20px" }}>
                    <AlertCircle size={18} color="#d97706" />
                    <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: "13px", color: "#92400e" }}>
                      <strong>Services</strong> have a complex nested structure. Best managed directly in{" "}
                      <a href="https://sheets.google.com" target="_blank" rel="noopener noreferrer" style={{ color: "#d97706" }}>Google Sheets</a>{" "}
                      or by editing <code style={{ background: "#fef3c7", padding: "2px 6px", borderRadius: "4px" }}>/src/data/services.ts</code> directly.
                      Use the <strong>Seed button</strong> on Dashboard to push current static data to Sheets.
                    </div>
                  </div>
                  <div className="admin-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
                    {blogs.length === 0 && projects.length === 0 ? (
                      <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#9ca3af", padding: "40px", fontSize: "14px" }}>Load data first</div>
                    ) : (
                      ["Microsoft Dynamics 365", "ERP Solutions", "Custom Development", "Business Intelligence", "Mobile & Web", "Cloud Services"].map((s) => (
                        <div key={s} style={{ padding: "18px", borderRadius: "12px", border: "1px solid #f0f0f0", background: "#fafafa" }}>
                          <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "13px", color: "#111827", marginBottom: "6px" }}>{s}</div>
                          <div style={{ fontSize: "12px", color: "#9ca3af" }}>Manage in services.ts</div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* ── Enquiries ── */}
              {activeTab === "enquiries" && (
                <div style={{ background: "#fff", borderRadius: "16px", border: "1px solid #f0f0f0", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  {!googleConfigured && (
                    <div style={{ padding: "16px 20px", background: "#fef2f2", borderBottom: "1px solid #fecaca", display: "flex", alignItems: "center", gap: "10px" }}>
                      <AlertCircle size={16} color={MCT_RED} />
                      <span style={{ fontSize: "13px", color: "#991b1b", fontFamily: "'Source Sans 3',sans-serif" }}>
                        Configure Google Sheets to see enquiries. Contact form submissions will be stored there.
                      </span>
                    </div>
                  )}
                  <div className="admin-table-container" style={{ overflowX: "auto", width: "100%" }}>
                    <table style={{ width: "100%", minWidth: "800px", borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "#f9fafb", borderBottom: "1px solid #f0f0f0" }}>
                        {["ID", "Name", "Email", "Phone", "Service", "Message", "Date", "Status"].map((h) => (
                          <th key={h} style={{ padding: "14px 18px", textAlign: "left", fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: "11px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.7px", whiteSpace: "nowrap" }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredEnquiries.length === 0 ? (
                        <tr>
                          <td colSpan={8} style={{ padding: "60px", textAlign: "center", color: "#9ca3af", fontFamily: "'Source Sans 3',sans-serif", fontSize: "14px" }}>
                            No enquiries yet. Contact form submissions appear here.
                          </td>
                        </tr>
                      ) : (
                        filteredEnquiries.map((enq, i) => (
                          <tr key={enq.id} style={{ borderBottom: i < filteredEnquiries.length - 1 ? "1px solid #f9fafb" : "none" }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#fafbfc")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                          >
                            <td style={{ padding: "14px 18px" }}>
                              <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#9ca3af" }}>{enq.id}</span>
                            </td>
                            <td style={{ padding: "14px 18px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#fffbeb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <User size={14} color="#d97706" />
                                </div>
                                <span style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 600, fontSize: "13px", color: "#111827" }}>{enq.name}</span>
                              </div>
                            </td>
                            <td style={{ padding: "14px 18px" }}>
                              <a href={`mailto:${enq.email}`} style={{ fontSize: "13px", color: MCT_BLUE, textDecoration: "none", fontFamily: "'Source Sans 3',sans-serif" }}>{enq.email}</a>
                            </td>
                            <td style={{ padding: "14px 18px", fontSize: "13px", color: "#374151", fontFamily: "'Source Sans 3',sans-serif" }}>{enq.phone || "—"}</td>
                            <td style={{ padding: "14px 18px" }}>
                              {enq.service ? <Badge label={enq.service} /> : <span style={{ color: "#9ca3af", fontSize: "13px" }}>—</span>}
                            </td>
                            <td style={{ padding: "14px 18px", maxWidth: "200px" }}>
                              <div style={{ fontSize: "12px", color: "#6b7280", fontFamily: "'Source Sans 3',sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={enq.message}>
                                {enq.message}
                              </div>
                            </td>
                            <td style={{ padding: "14px 18px", fontSize: "12px", color: "#6b7280", fontFamily: "'Source Sans 3',sans-serif", whiteSpace: "nowrap" }}>
                              {formatDate(enq.submittedAt)}
                            </td>
                            <td style={{ padding: "14px 18px" }}>
                              <Badge label={enq.status || "New"} color={enq.status === "New" ? "#d97706" : "#16a34a"} />
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* ── Modals ── */}
      {blogModal && (
        <BlogModal
          initial={blogModal === "new" ? null : blogModal}
          onSave={saveBlog}
          onClose={() => setBlogModal(null)}
          onUploadImage={handleUploadImage}
        />
      )}
      {projectModal && (
        <ProjectModal
          initial={projectModal === "new" ? null : projectModal}
          onSave={saveProject}
          onClose={() => setProjectModal(null)}
          onUploadImage={handleUploadImage}
        />
      )}
      {confirmDelete && (
        <ConfirmDialog
          message={`Delete "${confirmDelete.label}"? This cannot be undone.`}
          onConfirm={async () => {
            if (confirmDelete.entity === "blogs") await deleteBlog(confirmDelete.key);
            if (confirmDelete.entity === "projects") await deleteProject(confirmDelete.key);
            setConfirmDelete(null);
          }}
          onCancel={() => setConfirmDelete(null)}
        />
      )}

      {/* ── Toast ── */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes slideUp { from { transform: translateY(20px); opacity:0; } to { transform: translateY(0); opacity:1; } }
        * { box-sizing: border-box; }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .admin-sidebar {
            position: fixed !important;
            top: 0 !important;
            bottom: 0 !important;
            left: 0 !important;
            height: 100vh !important;
            z-index: 1000 !important;
            box-shadow: 0 0 30px rgba(0,0,0,0.3) !important;
          }
          .admin-sidebar.collapsed {
            transform: translateX(-100%) !important;
            width: 240px !important;
          }
          .admin-sidebar.open {
            transform: translateX(0) !important;
            width: 260px !important;
          }
          .admin-sidebar-backdrop {
            display: block !important;
          }
          .admin-mobile-close-btn {
            display: flex !important;
          }
          .admin-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .admin-two-col-grid {
            grid-template-columns: 1fr !important;
          }
          .admin-services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .admin-header {
            padding: 0 16px !important;
            height: 56px !important;
          }
          .admin-page-content {
            padding: 16px !important;
          }
          .admin-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .admin-services-grid {
            grid-template-columns: 1fr !important;
          }
          .admin-login-card {
            max-width: 100% !important;
            border-radius: 16px !important;
          }
          .admin-login-body {
            padding: 24px 20px 28px !important;
          }
          .admin-modal-card {
            border-radius: 16px !important;
          }
          .admin-modal-body {
            padding: 18px 16px !important;
          }
          .admin-modal-grid-2,
          .admin-modal-grid-3,
          .admin-modal-grid-4 {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
