import React, { useState } from 'react';

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleChatMessageChange = (e) => {
    setChatMessage(e.target.value);
  };

  const handleChatSubmit = () => {
    alert(`Your message: ${chatMessage}`);
    setChatMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        className="chat-button p-2 bg-blue-500 text-white rounded-full"
        onClick={handleChatToggle}
      >
        Chat with Us
      </button>

      {isChatOpen && (
        <div className="chat-dialog p-4 bg-white shadow-lg rounded-lg mt-2 relative">
          <button 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={handleChatToggle}
          >
            &times;
          </button>
          <textarea 
            value={chatMessage} 
            onChange={handleChatMessageChange} 
            placeholder="Type your message here..." 
            className="w-full p-2 border rounded mb-2"
          />
          <button 
            onClick={handleChatSubmit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default Chat;
