import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { MIcon } from "./MIcon";
import { FadeUp } from "./FadeUp";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatPanelProps {
  initialScroll?: "top" | "bottom";
  animateMessagesIn?: boolean;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Welcome to Saim Dev! I build high-converting websites engineered to turn visitors into paying clients. How can I help your business grow today?",
  },
  {
    id: "2",
    role: "user",
    content:
      "I need a fast, modern website that ranks high on Google and generates more client inquiries.",
  },
  {
    id: "3",
    role: "assistant",
    content:
      "Excellent! We specialize in custom web architecture, instant page load speeds, SEO optimization, and seamless booking integrations. Let's build your growth engine!",
  },
];

export const ChatPanel = ({
  initialScroll = "top",
  animateMessagesIn = false,
}: ChatPanelProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      if (initialScroll === "bottom") {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      } else {
        scrollRef.current.scrollTop = 0;
      }
    }
  }, [initialScroll]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const assistantReply: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "Saim Dev architecture delivers high-converting UI, lightning-fast speeds, and seamless lead capture tailored specifically for your business.",
      };
      setMessages((prev) => [...prev, assistantReply]);

      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, 600);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="flex flex-col h-full rounded-2xl border border-white/10 overflow-hidden"
      style={{
        background: "rgba(8, 8, 10, 0.6)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 shrink-0">
        <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/80">
          <MIcon name="auto_awesome" size={14} />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-white leading-tight">
            Saim Dev AI Studio
          </span>
          <span className="text-[11px] text-white/40 leading-tight">
            Custom Web Architecture & Lead Generation
          </span>
        </div>
      </div>

      {/* Messages Scroll Container */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto scrollbar-hide px-4 py-5 space-y-4"
      >
        {messages.map((msg, i) => {
          const isUser = msg.role === "user";
          const bubble = (
            <div
              key={msg.id}
              className={`flex ${isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  isUser
                    ? "bg-white/15 text-white/90"
                    : "bg-white/5 text-white/70 border border-white/5"
                }`}
              >
                {msg.content}
              </div>
            </div>
          );

          if (animateMessagesIn) {
            return (
              <FadeUp key={msg.id} delay={i * 0.12} y={16}>
                {bubble}
              </FadeUp>
            );
          }

          return bubble;
        })}
      </div>

      {/* Input Row */}
      <div className="p-3 shrink-0">
        <div className="liquid-glass rounded-2xl p-2 flex items-center gap-2">
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about your project..."
            className="flex-1 bg-transparent text-sm text-white placeholder-white/40 focus:outline-none resize-none px-2 py-1 scrollbar-hide"
          />
          <button
            onClick={handleSend}
            className="bg-white text-black rounded-xl p-2 hover:bg-white/90 transition-colors shrink-0 flex items-center justify-center cursor-pointer"
          >
            <MIcon name="arrow_upward" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
