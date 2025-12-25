"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
  sources?: string[];
};

export default function WelcomeSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const question = input.trim();
    if (!question || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://lmoses20251208164123-dhe7ekevh0c4gxgc.canadacentral-01.azurewebsites.net/api/Chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question }),
        }
      );

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.answer ?? "No answer received.",
          sources: data.sources ?? [],
        },
      ]);
    } catch (err: any) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "⚠️ Error: could not reach the server.",
          sources: [],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div
      className="
        w-full h-[60vh] flex flex-col
        bg-gradient-to-r from-c-primary to-c-alternative
        text-white px-4 py-6
      "
    >
      <div className="w-4/5 mx-auto bg-c-black h-full rounded-2xl text-white flex flex-col p-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-blue-500/30 flex items-center justify-center">
            <span className="text-3xl">🤖</span>
          </div>
        </div>
        <h1 className="text-xl font-semibold text-center mb-4">
          Welcome to LMoses AI Chat
        </h1>

        {/* Chat area */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 px-2">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] px-4 py-3 rounded-2xl text-base leading-relaxed break-words whitespace-pre-wrap
                ${
                  m.role === "user"
                    ? "ml-auto bg-blue-600 text-right"
                    : "mr-auto bg-white/20 text-left"
                }`}
            >
              <div>{m.text}</div>

              {/* Sources for AI messages */}
              {m.role === "ai" && m.sources && m.sources.length > 0 && (
                <div className="mt-2 text-xs text-white/70">
                  <div className="font-semibold mb-1">Sources:</div>
                  <ul className="list-disc list-inside space-y-0.5">
                    {m.sources.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="mr-auto bg-white/20 px-4 py-3 rounded-2xl text-base">
              Typing…
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input area */}
        <div className="w-full flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask something..."
            className="
              flex-1 rounded-xl px-4 py-2 text-black bg-white
              focus:outline-none
            "
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="
              bg-blue-600 hover:bg-blue-700 disabled:opacity-50
              px-5 py-2 rounded-xl font-semibold
            "
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
