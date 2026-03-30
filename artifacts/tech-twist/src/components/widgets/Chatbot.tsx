import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  text: string;
  isBot: boolean;
};

const RESPONSES: Record<string, string> = {
  hello: "Hello! Welcome to Tech Twist. How can I help you today?",
  hi: "Hi there! How can I assist you with your BPO or Tech needs?",
  services: "We offer Call Center Services (Inbound/Outbound), Business Services (Tax Dispatch, Booking), and Tech Solutions (POS, Hardware, Biometrics).",
  contact: "You can reach us at info@techtwist.com or call us at +1 (555) 123-4567. Alternatively, use the contact form on our website!",
  about: "Tech Twist is a premier BPO and IT solutions company. We help businesses streamline operations with top-tier talent and cutting-edge tech.",
  pricing: "Our pricing depends on your specific requirements. Please fill out the contact form to get a custom quote!",
  hours: "Our call center operations run 24/7/365 to ensure your business never sleeps.",
  location: "Our main office is located at 123 Business Ave, Tech City, TX 75001.",
  default: "Thank you for reaching out! One of our human agents will get back to you shortly. Feel free to use the contact form for detailed inquiries."
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", text: "Hi! I'm the Tech Twist virtual assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const newUserMsg: Message = { id: Date.now().toString(), text: userText, isBot: false };
    
    setMessages(prev => [...prev, newUserMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate network delay
    setTimeout(() => {
      const lowercaseInput = userText.toLowerCase();
      let replyKey = "default";
      
      for (const key of Object.keys(RESPONSES)) {
        if (lowercaseInput.includes(key) && key !== "default") {
          replyKey = key;
          break;
        }
      }

      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        text: RESPONSES[replyKey], 
        isBot: true 
      };
      
      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 bg-primary text-white rounded-full shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300",
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        )}
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-2xl border border-border flex flex-col transition-all duration-300 origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-2xl">
          <div className="flex items-center gap-2">
            <Bot size={20} />
            <span className="font-semibold">Tech Twist Support</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-md transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex", msg.isBot ? "justify-start" : "justify-end")}>
              <div className={cn(
                "max-w-[80%] p-3 rounded-2xl text-sm",
                msg.isBot 
                  ? "bg-white border border-border text-foreground rounded-tl-sm" 
                  : "bg-primary text-primary-foreground rounded-tr-sm"
              )}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-border p-4 rounded-2xl rounded-tl-sm flex gap-1 items-center h-[42px]">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-border rounded-b-2xl flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 bg-secondary border-none rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Button onClick={handleSend} size="icon" className="rounded-xl shrink-0 h-10 w-10">
            <Send size={18} />
          </Button>
        </div>
      </div>
    </>
  );
}
