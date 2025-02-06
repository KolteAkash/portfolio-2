
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaChevronUp } from "react-icons/fa";
import { answerQuestion } from "../utils/chatbotUtils";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Akash's AI assistant. How can I help you today?", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Generate bot response
    setTimeout(() => {
      const botResponse = { text: answerQuestion(input), isBot: true };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesEndRef]);

  return (
    <div>
      <motion.button
        className="bg-indigo-600 text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <FaRobot size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="bg-indigo-600 text-white p-3 flex justify-between items-center">
              <h3 className="font-bold">Chat with AI Assistant</h3>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="h-80 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-700">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.isBot ? "text-left" : "text-right"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg text-sm ${
                      message.isBot
                        ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
                        : "bg-indigo-600 text-white"
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="p-3 border-t dark:border-gray-600">
              <div className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white p-2 rounded-r-lg hover:bg-indigo-700 transition duration-300"
                >
                  <FaChevronUp />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
