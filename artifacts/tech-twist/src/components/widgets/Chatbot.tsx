import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Minimize2 } from "lucide-react";
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
  location: "Our main office is located at Offic#312 Eden Tower Main Boulevard Gullberg 3 LHR .",
  default: "Thank you for reaching out! One of our human agents will get back to you shortly. Feel free to use the contact form for detailed inquiries.",

  appointment: "We'd love to discuss your project! Please leave your email in the contact form, and our team will schedule a discovery call within 2 business hours.",
  
  career: "Looking to join the Tech Twist team? Please send your CV to careers@techtwistglobal.com or check our LinkedIn page for open positions.",
  
  custom: "Absolutely! We specialize in custom solutions. Whether it's a specific Django backend or a unique React frontend, we can build it according to your needs.",
  
  process: "Our process is simple: Discovery -> Planning -> Development -> Quality Assurance -> Deployment. We keep you updated at every sprint!",
  
  techstack: "We work with modern technologies including Python (Django/FastAPI), React.js, Tailwind CSS, and various AI integrations to ensure high performance.",
  
  
  security: "Data security is our top priority. We implement the CIA triad and industry-standard encryption to keep your business and customer data safe.",
  
  freelance: "We are open to collaborations and freelance contracts via Upwork or Fiverr for specific development tasks. Let us know what you're looking for!",
  
  urgent: "For urgent technical support, please call our 24/7 hotline at 042-34551791 immediately.",
  
  social: "Follow us on LinkedIn and Instagram to stay updated with our latest tech innovations and company news!"
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
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 bg-primary text-white rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300",
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        )}
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] bg-white rounded-3xl shadow-2xl border border-border/50 flex flex-col transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right overflow-hidden",
          isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95 pointer-events-none"
        )}
      >
        {/* Header - Glassmorphism */}
        <div className="flex items-center justify-between p-5 bg-primary/95 backdrop-blur text-white shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Bot size={22} />
            </div>
            <div>
              <h3 className="font-bold text-base">Tech Twist Support</h3>
              <p className="text-xs text-white/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <Minimize2 size={16} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-slate-50">
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex", msg.isBot ? "justify-start" : "justify-end")}>
              <div className={cn(
                "max-w-[85%] p-4 text-[15px] leading-relaxed shadow-sm",
                msg.isBot 
                  ? "bg-white border border-border/50 text-foreground rounded-2xl rounded-tl-sm" 
                  : "bg-gradient-to-br from-primary to-blue-500 text-white rounded-2xl rounded-tr-sm"
              )}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-border/50 px-5 py-4 rounded-2xl rounded-tl-sm flex gap-1.5 items-center shadow-sm">
                <div className="w-2 h-2 bg-primary/60 rounded-full typing-dot"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full typing-dot"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full typing-dot"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-border/50 flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 bg-secondary/50 border-none rounded-2xl px-5 py-3.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-secondary/80 transition-colors"
          />
          <Button onClick={handleSend} size="icon" className="rounded-2xl shrink-0 h-[52px] w-[52px] shadow-md shadow-primary/20">
            <Send size={20} className="ml-1" />
          </Button>
        </div>
      </div>
    </>
  );
}
