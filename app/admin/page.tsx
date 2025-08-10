"use client";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const pass = promptSessionPass();
    setAuthorized(!!pass);
  }, []);

  function promptSessionPass() {
    if (typeof window === "undefined") return null;
    let pass = sessionStorage.getItem("ADMIN_PASS");
    if (!pass) {
      pass =
        window.prompt("Admin password (set ADMIN_PASS in .env.local)") || "";
      if (pass) sessionStorage.setItem("ADMIN_PASS", pass);
    }
    return pass;
  }

  async function askAI() {
    setLoading(true);
    setAnswer(null);
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setAnswer(data.reply || data.error || "No response");
    } catch (e) {
      setAnswer("Request failed");
    } finally {
      setLoading(false);
    }
  }

  if (!authorized) {
    return (
      <div className="max-w-xl mx-auto">
        <h1 className="text-xl font-semibold">Admin</h1>
        <p className="text-gray-600 mt-2">
          Reload and enter the admin password to continue.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Ask AI (E‑Comm E2E)</h1>
      <textarea
        className="w-full h-40 border rounded-xl p-3"
        placeholder="Ask about architecture, UI, payments, SEO, etc."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={askAI}
        className="px-4 py-2 rounded-lg border bg-black text-white disabled:opacity-50"
        disabled={loading || !prompt}
      >
        {loading ? "Thinking…" : "Ask"}
      </button>
      {answer && (
        <div className="border rounded-xl p-4 whitespace-pre-wrap bg-gray-50">
          {answer}
        </div>
      )}
      <p className="text-xs text-gray-500">
        Tip: refine <code>src/lib/ecommPrompt.ts</code> to change the AI’s
        behavior.
      </p>
    </div>
  );
}
