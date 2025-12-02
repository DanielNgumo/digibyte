"use client";

import React, { useState } from 'react';
import {  X, Send,  Headphones } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
      // Here you can add logic to send the message to a backend or chatbot service
    }
  };

  // WhatsApp SVG Icon Component
  const WhatsAppIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
    </svg>
  );

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/254742580239"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20b858] text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 group"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          WhatsApp Chat
        </span>
      </a>


      {/* Live Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="bg-[#e91e63] hover:bg-[#c2185b] text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 group"
        aria-label={isChatOpen ? 'Close chat' : 'Open live chat'}
      >
        {isChatOpen ? <X className="h-6 w-6" /> : <Headphones className="h-6 w-6" />}
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          {isChatOpen ? 'Close Chat' : 'Live Chat'}
        </span>
      </button>

      {/* Chatbox */}
      {isChatOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 max-h-[400px] flex flex-col overflow-hidden border border-gray-200">
          {/* Chat Header */}
          <div className="bg-[#e91e63] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="font-semibold">TechNasi Support</span>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-pink-100">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center">
                <div className="mb-3">
                  <Headphones className="h-8 w-8 mx-auto text-gray-400" />
                </div>
                <p className="text-gray-500 text-sm">Hi! How can we help you today?</p>
                <p className="text-gray-400 text-xs mt-1">We typically reply within a few minutes</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="mb-3">
                  <div className="bg-blue-500 text-white p-3 rounded-lg rounded-br-none ml-8 text-sm">
                    {msg}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="bg-[#e91e63] hover:bg-[#c2185b] disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-all duration-200"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;