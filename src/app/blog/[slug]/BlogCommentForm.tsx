"use client";

import { useState, useEffect } from "react";
import { MessageSquare, User, Mail, Globe, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface BlogCommentFormProps {
  postSlug: string;
}

interface CommentItem {
  id: string;
  name: string;
  message: string;
  submittedAt: string;
}

export default function BlogCommentForm({ postSlug }: BlogCommentFormProps) {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    website: "",
    saveInfo: false,
  });

  const [comments, setComments] = useState<CommentItem[]>([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Load saved info from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedName = localStorage.getItem("mct_comment_name") || "";
      const savedEmail = localStorage.getItem("mct_comment_email") || "";
      const savedWebsite = localStorage.getItem("mct_comment_website") || "";
      if (savedName || savedEmail) {
        setFormData((prev) => ({
          ...prev,
          name: savedName,
          email: savedEmail,
          website: savedWebsite,
          saveInfo: true,
        }));
      }
    }
  }, []);

  // Fetch comments for this post
  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(`/api/blogs/comments?slug=${encodeURIComponent(postSlug)}`);
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.comments)) {
            setComments(data.comments);
          }
        }
      } catch (err) {
        console.warn("Failed to fetch comments:", err);
      } finally {
        setLoadingComments(false);
      }
    }
    fetchComments();
  }, [postSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!formData.message.trim() || !formData.name.trim() || !formData.email.trim()) {
      setStatusMessage({ type: "error", text: "Please enter your message, name, and a valid email." });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/blogs/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: postSlug,
          message: formData.message,
          name: formData.name,
          email: formData.email,
          website: formData.website,
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to submit comment");

      // Save info in browser if checkbox checked
      if (formData.saveInfo && typeof window !== "undefined") {
        localStorage.setItem("mct_comment_name", formData.name);
        localStorage.setItem("mct_comment_email", formData.email);
        localStorage.setItem("mct_comment_website", formData.website);
      } else if (typeof window !== "undefined") {
        localStorage.removeItem("mct_comment_name");
        localStorage.removeItem("mct_comment_email");
        localStorage.removeItem("mct_comment_website");
      }

      setStatusMessage({
        type: "success",
        text: "Thank you! Your comment has been submitted and posted successfully.",
      });

      // Append comment to local state immediately
      setComments((prev) => [
        ...prev,
        {
          id: result.comment?.id || `temp-${Date.now()}`,
          name: formData.name,
          message: formData.message,
          submittedAt: new Date().toISOString(),
        },
      ]);

      // Clear only message
      setFormData((prev) => ({ ...prev, message: "" }));
    } catch (err: any) {
      setStatusMessage({
        type: "error",
        text: err.message || "Failed to submit your comment. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-10 border-t border-slate-200 space-y-8">
      {/* Existing Comments List */}
      {comments.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
            <span>Comments</span>
            <span className="px-2.5 py-0.5 rounded-full text-xs bg-[#3482b9]/15 text-[#3482b9] font-bold">
              {comments.length}
            </span>
          </h4>
          <div className="space-y-3">
            {comments.map((c) => (
              <div key={c.id} className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200 text-sm space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#3482b9]" />
                    {c.name}
                  </span>
                  <span className="text-xs text-slate-400">
                    {c.submittedAt ? new Date(c.submittedAt).toLocaleDateString() : "Recently"}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed">{c.message}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Leave a Comment Header */}
      <div className="flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-[#3482b9]" />
        <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
          LEAVE <span className="text-[#3482b9]">A COMMENT</span>
        </h3>
      </div>

      {statusMessage && (
        <div
          className={`p-4 rounded-xl text-sm flex items-center gap-2 ${
            statusMessage.type === "success"
              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* Form with submit handler */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            rows={6}
            placeholder="Message *"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-4 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#3482b9] focus:ring-1 focus:ring-[#3482b9] resize-y bg-white text-slate-800 transition-all shadow-sm"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#3482b9] focus:ring-1 focus:ring-[#3482b9] bg-white text-slate-800 pr-10 shadow-sm"
            />
            <User className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Mail *"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#3482b9] focus:ring-1 focus:ring-[#3482b9] bg-white text-slate-800 pr-10 shadow-sm"
            />
            <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
          </div>

          <div className="relative">
            <input
              type="url"
              placeholder="Website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-[#3482b9] focus:ring-1 focus:ring-[#3482b9] bg-white text-slate-800 pr-10 shadow-sm"
            />
            <Globe className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
          <input
            type="checkbox"
            id="save-comment-info"
            checked={formData.saveInfo}
            onChange={(e) => setFormData({ ...formData, saveInfo: e.target.checked })}
            className="w-4 h-4 border-slate-300 rounded text-[#3482b9] focus:ring-[#3482b9] cursor-pointer"
          />
          <label htmlFor="save-comment-info" className="cursor-pointer select-none">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#3482b9] hover:bg-[#1f6595] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-[#3482b9]/30 hover:scale-105 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            <span>{isSubmitting ? "SENDING..." : "SEND COMMENT"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
