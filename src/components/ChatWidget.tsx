"use client";

import React, { useState, useCallback, memo } from 'react';
import { X, Send, Headphones } from 'lucide-react';

// Memoized WhatsApp Icon Component
const WhatsAppIcon = memo(() => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
  </svg>
));

WhatsAppIcon.displayName = 'WhatsAppIcon';

// Memoized Message Item Component
const MessageItem = memo(({ 
  message, 
  isSystemMessage = false 
}: { 
  message: string; 
  isSystemMessage?: boolean;
}) => (
  <div className="mb-3">
    <div 
      className={`p-3 rounded-lg text-sm ${
        isSystemMessage
          ? 'bg-gray-200 text-gray-800 mx-auto max-w-xs text-center'
          : 'bg-blue-500 text-white rounded-br-none ml-8'
      }`}
    >
      {message}
    </div>
  </div>
));

MessageItem.displayName = 'MessageItem';

// Memoized Chat Messages Container
const ChatMessages = memo(({ 
  messages 
}: { 
  messages: Array<{ text: string; isSystem: boolean }>;
}) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col">
      {messages.length === 0 ? (
        <div className="text-center m-auto">
          <div className="mb-3">
            <Headphones className="h-8 w-8 mx-auto text-gray-400" aria-hidden="true" />
          </div>
          <p className="text-gray-500 text-sm">Hi! How can we help you today?</p>
          <p className="text-gray-400 text-xs mt-1">We typically reply within a few minutes</p>
        </div>
      ) : (
        messages.map((msg, index) => (
          <MessageItem 
            key={index} 
            message={msg.text} 
            isSystemMessage={msg.isSystem}
          />
        ))
      )}
    </div>
  );
});

ChatMessages.displayName = 'ChatMessages';

// Memoized Input Section
const ChatInput = memo(({ 
  message, 
  onMessageChange, 
  onSendMessage 
}: { 
  message: string;
  onMessageChange: (value: string) => void;
  onSendMessage: (e: React.FormEvent) => void;
}) => {
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage(e as any);
    }
  }, [onSendMessage]);

  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <form onSubmit={onSendMessage} className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => onMessageChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
          aria-label="Chat message input"
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className="bg-[#e91e63] hover:bg-[#c2185b] disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-lg transition-all duration-200"
          aria-label="Send message"
        >
          <Send className="h-5 w-5" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
});

ChatInput.displayName = 'ChatInput';

// Memoized Chat Header
const ChatHeader = memo(({ 
  onClose 
}: { 
  onClose: () => void;
}) => (
  <div className="bg-[#e91e63] text-white p-4 flex items-center justify-between shrink-0">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-400 rounded-full" aria-hidden="true"></div>
      <span className="font-semibold">TechNasi Support</span>
    </div>
    <button 
      onClick={onClose} 
      className="text-white hover:text-pink-100 transition-colors duration-200"
      aria-label="Close chat"
    >
      <X className="h-5 w-5" />
    </button>
  </div>
));

ChatHeader.displayName = 'ChatHeader';

// Memoized Action Button
const ActionButton = memo(({ 
  href, 
  icon: Icon, 
  label, 
  tooltip,
  onClick,
  bgColor,
  hoverColor 
}: { 
  href?: string;
  icon: React.ComponentType<any>;
  label: string;
  tooltip: string;
  onClick?: () => void;
  bgColor: string;
  hoverColor: string;
}) => {
  const ButtonComponent = href ? 'a' : 'button';
  const props = href 
    ? { 
        href, 
        target: '_blank' as const, 
        rel: 'noopener noreferrer' 
      }
    : { 
        onClick,
        type: 'button' as const
      };

  return (
    <ButtonComponent
      {...props}
      className={`${bgColor} ${hoverColor} text-white p-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 group relative`}
      aria-label={label}
    >
      <Icon className="h-6 w-6" aria-hidden="true" />
      <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {tooltip}
      </span>
    </ButtonComponent>
  );
});

ActionButton.displayName = 'ActionButton';

const ChatWidget: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isSystem: boolean }>>([]);

  const toggleChat = useCallback(() => {
    setIsChatOpen(prev => !prev);
  }, []);

  const handleSendMessage = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Add user message
      setMessages(prev => [...prev, { text: message, isSystem: false }]);
      setMessage('');
      
      // Add system message after a short delay
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: 'Chat widget coming soon 🚀. Meanwhile, feel free to reach out via WhatsApp!', 
          isSystem: true 
        }]);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .transform {
            transform: none !important;
          }
          
          button, a {
            transition: none !important;
          }
        }

        @media (max-width: 480px) {
          .w-80 {
            width: 100vw;
            max-width: 100%;
            position: fixed;
            bottom: 0;
            right: 0;
            border-radius: 0;
          }

          .bottom-4 {
            bottom: 0;
            right: 0;
          }
        }

        /* Focus styles for accessibility */
        button:focus-visible, a:focus-visible {
          outline: 2px solid #e91e63;
          outline-offset: 2px;
        }

        /* Touch device optimization */
        @media (hover: none) and (pointer: coarse) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Print styles */
        @media print {
          [role="button"], button, a {
            display: none;
          }
        }
      `}</style>

      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4">
        {/* WhatsApp Button */}
        <ActionButton
          href="https://wa.me/254742580239"
          icon={WhatsAppIcon}
          label="Chat with us on WhatsApp"
          tooltip="WhatsApp Chat"
          bgColor="bg-[#25D366]"
          hoverColor="hover:bg-[#20b858]"
        />

        {/* Live Chat Toggle Button */}
        <ActionButton
          icon={isChatOpen ? X : Headphones}
          label={isChatOpen ? 'Close chat' : 'Open live chat'}
          tooltip={isChatOpen ? 'Close Chat' : 'Live Chat'}
          onClick={toggleChat}
          bgColor="bg-[#e91e63]"
          hoverColor="hover:bg-[#c2185b]"
        />

        {/* Chatbox */}
        {isChatOpen && (
          <div className="bg-white rounded-lg shadow-xl w-80 max-h-[400px] flex flex-col overflow-hidden border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-200">
            <ChatHeader onClose={toggleChat} />
            <ChatMessages messages={messages} />
            <ChatInput 
              message={message}
              onMessageChange={setMessage}
              onSendMessage={handleSendMessage}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default memo(ChatWidget);