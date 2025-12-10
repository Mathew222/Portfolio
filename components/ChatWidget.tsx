import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse } from '@google/genai';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hi! I'm Mathew's AI Assistant. Ask me anything about his projects, skills, or experience!",
      timestamp: Date.now()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Create a placeholder message for streaming
      const botMessageId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, {
        id: botMessageId,
        role: 'model',
        text: '',
        timestamp: Date.now()
      }]);

      const streamResult = await sendMessageToGemini(userMessage.text);
      let fullText = '';

      for await (const chunk of streamResult) {
        const chunkText = (chunk as GenerateContentResponse).text;
        if (chunkText) {
          fullText += chunkText;
          setMessages(prev =>
            prev.map(msg =>
              msg.id === botMessageId ? { ...msg, text: fullText } : msg
            )
          );
        }
      }

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "I'm having trouble connecting right now. Please try again later.",
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-[400px] h-[500px] max-h-[70vh] bg-white dark:bg-zinc-900 border-2 border-black dark:border-zinc-700 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] flex flex-col overflow-hidden animate-fade-in origin-bottom-right transition-colors duration-300">
          {/* Header */}
          <div className="p-4 bg-black dark:bg-zinc-950 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <h3 className="font-bold font-display uppercase tracking-wider">AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-zinc-900">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 border-2 border-black dark:border-zinc-700 ${msg.role === 'user' ? 'bg-black text-white dark:bg-white dark:text-black' : 'bg-white text-black dark:bg-zinc-800 dark:text-white'}`}>
                  {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                </div>
                <div className={`max-w-[80%] p-3 text-sm font-medium border-2 border-black dark:border-zinc-700 ${msg.role === 'user'
                    ? 'bg-white text-black dark:bg-zinc-800 dark:text-white'
                    : 'bg-black text-white dark:bg-white dark:text-black'
                  }`}>
                  {msg.role === 'user' ? (
                    msg.text
                  ) : (
                    isLoading && msg.id === messages[messages.length - 1].id && !msg.text ? (
                      <span className="animate-pulse">Thinking...</span>
                    ) : (
                      <ReactMarkdown
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc ml-4 mb-2 space-y-1">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal ml-4 mb-2 space-y-1">{children}</ol>,
                          li: ({ children }) => <li>{children}</li>,
                          strong: ({ children }) => <span className="font-bold text-accent">{children}</span>,
                          a: ({ node, ...props }) => <a {...props} className="underline text-accent hover:text-white transition-colors" target="_blank" rel="noopener noreferrer" />
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    )
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t-2 border-black dark:border-zinc-700 bg-white dark:bg-zinc-900">
            <div className="relative flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about my experience..."
                className="flex-1 bg-gray-100 dark:bg-zinc-800 text-black dark:text-white placeholder-gray-500 px-4 py-3 border-2 border-transparent focus:border-black dark:focus:border-white focus:outline-none transition-all font-medium text-sm md:text-base"
              />
              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className="p-3 bg-black dark:bg-white text-white dark:text-black hover:bg-accent dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-2 border-black dark:border-white hover:border-accent"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group p-4 bg-black dark:bg-white text-white dark:text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 border-2 border-black dark:border-white ${isOpen ? 'rotate-90 scale-0 opacity-0 absolute' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 bg-white dark:bg-zinc-900 text-black dark:text-white border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
        >
          <X className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;