import React, { useState, useEffect } from 'react';
import { GiftedChat, InputToolbar, Composer, Send } from 'react-native-gifted-chat';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import axios from 'axios';
import gpt from '../src/api/gpt'; // Import the OpenAI GPT-3 API
import { useNavigation } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";



const Chat = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

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
          { title: 'Connect with a Representative', value: 'agent' }
        ],
      },
    };
    setMessages([initialMessage]);
  };


  const goToHome = () => {
    navigation.navigate('HomePage');
  };

  const handleQuickReply = (replies) => {
    replies.forEach(reply => {
      if (reply.value === 'agent') {
        requestChatAssignment();
      } else {
        fetchResponse(reply.value);
      }
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
      console.error('Failed to fetch response:', error);
    }
  };

  const requestChatAssignment = async () => {
    try {
      const res = await axios.post('http://localhost:3000/new-chat');
      const newMessage = {
        _id: Math.random().toString(36).substring(7),
        text: `A representative will join you shortly. You have been connected to team member ${res.data.member} who is ready to assist you.`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Support Team",
          avatar: 'https://i.pravatar.cc/300?img=2'
        }
      };
      setMessages(previousMessages => GiftedChat.append(previousMessages, [newMessage]));
      console.log(`Chat assigned to team member ${res.data.member} with ${res.data.activeChats} active chats.`);
    } catch (error) {
      console.error('Failed to assign chat:', error);
    }
  };

  /*const closeChat = () => {
    setIsOpen(false);
  }; */

  if (!isOpen) return null;



    const renderInputToolbar = (props) => (
        <InputToolbar
            {...props}
            containerStyle={{
                borderWidth: 1,
                borderColor: '#e2e2e2',
                padding: 2,
                backgroundColor: '#E4E8EE',
                borderRadius: 20,
            }}
        />
    );

    // Custom composer styling
    const renderComposer = (props) => (
        <Composer
            {...props}
            textInputStyle={{
                color: '#082651', 
                borderRadius: 20, 
                paddingHorizontal: 12, 
                paddingTop: 8, 
                marginRight: 10
            }}
        />
    );

    // Custom send button styling
    const renderSend = (props) => (
        <Send {...props}>
            <View style={{ marginRight: 10, marginBottom: 5 }}>
                <Ionicons name="send" size={30} color="#08326F" />
            </View>
        </Send>
    );

  return (
    <View style={{ flex: 1,padding: 5,margin:5,color:'f3f3f3' }}>
      <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#DEE7F4',color:'f3f3f3'  }}>
        <View style={{ flexDirection: 'row', alignItems: 'center',height:50,width:50,borderRadius:50 }}>
          <Image source={require('../assets/icon.png')} style={{ width:'100%', height: '100%',borderRadius:50  }} />
        </View>
        
        <TouchableOpacity onPress={goToHome}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <GiftedChat
        messages={messages}
        onSend={newMessages => setMessages(GiftedChat.append(messages, newMessages))}
        onQuickReply={handleQuickReply}
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
        renderSend={renderSend}
        user={{ _id: 1, name: "User", avatar: 'https://i.pravatar.cc/300' }}
      />
    </View>
  );
}

export default Chat;
