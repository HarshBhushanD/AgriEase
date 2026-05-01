

import React, { useState, useCallback } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0084ff',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0084ff',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const config = {
  width: "400px",
  height: "500px",
  floating: true,
};

export function ChatBot1() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = useCallback(() => {
    setShowChat(prev => !prev);
  }, []);

  const steps = [
    {
      id: 'Greet',
      message: 'Hello! Welcome to AgriEase Support. How can I assist you today?',
      trigger: 'Ask Name',
    },
    {
      id: 'Ask Name',
      message: 'Before we begin, may I know your name?',
      trigger: 'waiting1',
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Its great to meet you, {previousValue}! What would you like help with today?',
      trigger: 'Main Menu',
    },
    {
      id: 'Main Menu',
      options: [
        { value: 'products', label: 'Product Information', trigger: 'Products' },
        { value: 'pricing', label: 'Pricing Details', trigger: 'Pricing' },
        { value: 'support', label: 'Technical Support', trigger: 'Support' },
      ],
    },
    {
      id: 'Products',
      message: 'We offer a wide range of products. Which category are you interested in?',
      trigger: 'Product Options',
    },
    {
      id: 'Product Options',
      options: [
        { value: 'electronics', label: 'Electronics', trigger: 'Electronics Info' },
        { value: 'clothing', label: 'Clothing', trigger: 'Clothing Info' },
        { value: 'books', label: 'Books', trigger: 'Books Info' },
      ],
    },
    {
      id: 'Electronics Info',
      message: 'Our electronics range from smartphones to laptops. What specific item are you looking for?',
      trigger: 'End',
    },
    {
      id: 'Clothing Info',
      message: 'We have a great selection of clothing for all ages and styles. Any particular type you are interested in?',
      trigger: 'End',
    },
    {
      id: 'Books Info',
      message: 'Our bookstore covers various genres from fiction to academic texts. What kind of books are you looking for?',
      trigger: 'End',
    },
    {
      id: 'Pricing',
      message: 'Our pricing is competitive and we often have great deals. Would you like to know about our current promotions?',
      trigger: 'Pricing Options',
    },
    {
      id: 'Pricing Options',
      options: [
        { value: 'yes', label: 'Yes, tell me about promotions', trigger: 'Promotions' },
        { value: 'no', label: 'No, just general pricing', trigger: 'General Pricing' },
      ],
    },
    {
      id: 'Promotions',
      message: 'Great! We currently have a summer sale with up to 50% off on selected items. Would you like me to send you a link to the sale page?',
      trigger: 'End',
    },
    {
      id: 'General Pricing',
      message: 'Our prices range from budget-friendly options to premium products. Is there a specific product you did like pricing for?',
      trigger: 'End',
    },
    {
      id: 'Support',
      message: 'I am sorry to hear you are having trouble. What kind of support do you need?',
      trigger: 'Support Options',
    },
    {
      id: 'Support Options',
      options: [
        { value: 'account', label: 'Account Issues', trigger: 'Account Support' },
        { value: 'product', label: 'Product Support', trigger: 'Product Support' },
        { value: 'other', label: 'Other Issues', trigger: 'Other Support' },
      ],
    },
    {
      id: 'Account Support',
      message: 'For account-related issues, please visit our account support page or contact our customer service. Would you like me to provide the contact information?',
      trigger: 'End',
    },
    {
      id: 'Product Support',
      message: 'For product support, please let me know which product you need help with, and I will guide you to the right resources.',
      trigger: 'End',
    },
    {
      id: 'Other Support',
      message: 'For other issues, please describe your problem, and I will do my best to assist you or direct you to the right department.',
      trigger: 'End',
    },
    {
      id: 'End',
      message: 'Is there anything else I can help you with?',
      trigger: 'Final Options',
    },
    {
      id: 'Final Options',
      options: [
        { value: 'yes', label: 'Yes, I have another question', trigger: 'Main Menu' },
        { value: 'no', label: 'No, that is all for now', trigger: 'Goodbye' },
      ],
    },
    {
      id: 'Goodbye',
      message: 'Thank you for chatting with us today. Have a great day!',
      end: true,
    },
  ];
  const renderChatbot = () => (
    <ThemeProvider theme={theme}>
      <ChatBot 
        steps={steps}
        {...config}
        headerTitle="Chat Support"
        recognitionEnable={true}
        speechSynthesis={{ enable: true, lang: 'en' }}
        opened={showChat}
        toggleFloating={toggleChat}
        key="chatbot-instance"
      />
    </ThemeProvider>
  );

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      {!showChat ? (
        <button
          onClick={toggleChat}
          style={{
            padding: '15px 25px',
            fontSize: '18px',
            textAlign: 'center',
            cursor: 'pointer',
            outline: 'none',
            color: '#fff',
            backgroundColor: '#0084ff',
            border: 'none',
            borderRadius: '15px',
            boxShadow: '0 9px #999',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0084ff'}
          onMouseDown={(e) => {
            e.target.style.backgroundColor = '#003d80';
            e.target.style.boxShadow = '0 5px #666';
            e.target.style.transform = 'translateY(4px)';
          }}
          onMouseUp={(e) => {
            e.target.style.backgroundColor = '#0084ff';
            e.target.style.boxShadow = '0 9px #999';
            e.target.style.transform = 'translateY(0px)';
          }}
        >
          Chat with Us!
        </button>
      ) : renderChatbot()}
    </div>
  );
}