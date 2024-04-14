import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci/completions';
  const OPENAI_API_KEY = ''; // Make sure to secure your API key appropriately

  useEffect(() => {
    loadInitialMessages();
  }, []);

  const loadInitialMessages = () => {
    const welcomeMessage = {
      _id: 0,
      text: "Welcome to the wakepark support page! We're here to help you with any questions or concerns you may have. Please let us know how we can assist you today.",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Support Bot",
        avatar: 'https://i.pravatar.cc/300?img=4'
      },
      quickReplies: {
        type: 'radio',
        keepIt: false,
        values: [
          { title: 'Pricing Inquiry', value: 'pricing' },
          { title: 'find a parking spot', value: 'find a parking spot' },
          { title: 'privacy,safety and security', value: 'privacy,safety and security'},
          { title: 'Support Request', value: 'support' },
          { title: 'Talk to an Agent', value: 'agent' },
        ],
      },
    };
    setMessages([welcomeMessage]);
  };

  const onQuickReply = replies => {
    replies.forEach(reply => {
      generateGPTContent(reply.value);
    });
  };

  const generateGPTContent = async (topic) => {
    const prompt = `Generate a detailed response for a customer asking about "${topic}"`;
    try {
      const response = await axios.post(
        OPENAI_API_URL,
        {
          prompt: prompt,
          max_tokens: 150
        },
        {
          headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      const gptText = response.data.choices[0].text.trim();
      const newMessage = {
        _id: Math.random().toString(36).substring(7),
        text: gptText,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "GPT-3",
          avatar: 'https://i.pravatar.cc/300?img=5'
        }
      };
      setMessages(previousMessages => GiftedChat.append(previousMessages, [newMessage]));
    } catch (error) {
      console.error('Error generating GPT-3 content:', error);
      // Handle errors appropriately here
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => setMessages(GiftedChat.append(messages, newMessages))}
      onQuickReply={onQuickReply}
      user={{ _id: 1, name: "User", avatar: 'https://i.pravatar.cc/300' }}
    />
  );
}
