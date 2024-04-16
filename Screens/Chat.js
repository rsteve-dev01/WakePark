import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import gpt from '../src/api/gpt';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadWelcomeMessage();
  }, []);

  const loadWelcomeMessage = () => {
    const initialMessage = {
      _id: 0,
      text: "Hello! Welcome to our support service. How can we assist you today?",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Assistant",
        avatar: 'https://i.pravatar.cc/300?img=4'
      },
      quickReplies: {
        type: 'radio',
        keepIt: false,
        values: [
          { title: 'Inquiry About Prices', value: 'pricing' },
          { title: 'Locate Parking', value: 'find a parking spot' },
          { title: 'Safety and Security Info', value: 'privacy,safety and security'},
          { title: 'Request Support', value: 'support' },
          { title: 'Connect with a Representative', value: 'agent' },
        ],
      },
    };
    setMessages([initialMessage]);
  };

  const handleQuickReply = (replies) => {
    replies.forEach(reply => {
      fetchResponse(reply.value);
    });
  };

  const fetchResponse = async (query) => {
    const prompt = `Please provide detailed information on "${query}" for a customer inquiry.`;
    try {
      const response = await gpt.post('', {
        prompt,
        max_tokens: 150
      });
      const responseText = response.data.choices[0].text.trim();
      const followUpMessage = {
        _id: Math.random().toString(36).substring(7),
        text: responseText,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Assistant",
          avatar: 'https://i.pravatar.cc/300?img=5'
        }
      };
      setMessages(previousMessages => GiftedChat.append(previousMessages, [followUpMessage]));
    } catch (error) {
      console.error('Failed to fetch response from GPT-3:', error);
      // Proper error handling here
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => setMessages(GiftedChat.append(messages, newMessages))}
      onQuickReply={handleQuickReply}
      user={{ _id: 1, name: "User", avatar: 'https://i.pravatar.cc/300' }}
    />
  );
}

export default Chat;
