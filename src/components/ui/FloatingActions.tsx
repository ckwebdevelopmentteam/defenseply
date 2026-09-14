"use client";
import { useState } from "react";
import { ChevronRight, X } from "lucide-react";
export function FloatingActions() {
  const [chat, setChat] = useState(false);
  return (
    <>
      <a
        className="quote-tab"
        href="#contact"
      >
        Request a quote <ChevronRight size={24} />
      </a>
      <div className="chat-widget">
        {chat ? (
          <section className="chat-panel" aria-label="Cosentino help">
            <header>
              Cosentino{" "}
              <button aria-label="Close help" onClick={() => setChat(false)}>
                <X size={19} />
              </button>
            </header>
            <p>How can we help you?</p>
            <a href="#contact">Contact us</a>
            <a href="#product">
              Find a showroom
            </a>
            <a href="#contact">
              Request a quote
            </a>
          </section>
        ) : (
          <button className="chat-prompt" onClick={() => setChat(true)}>
            Can we help you?
          </button>
        )}
        <button
          className="chat-launcher"
          aria-label={chat ? "Close chat" : "Open chat"}
          aria-expanded={chat}
          onClick={() => setChat(!chat)}
        >
          {chat ? <X /> : <span className="chat-symbol">C</span>}
        </button>
      </div>
    </>
  );
}
