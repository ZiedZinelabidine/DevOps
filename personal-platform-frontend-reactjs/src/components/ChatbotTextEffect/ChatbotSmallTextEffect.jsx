import { useEffect, useState } from "react";
import { ChatbotContainer, ChatbotMessage } from "./ChatbotTextEffect.style";

const ChatbotSmallTextEffect = ({ message }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText(message.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === message.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [message]);

  return (
    <ChatbotContainer>
      <ChatbotMessage>{displayedText}</ChatbotMessage>
    </ChatbotContainer>
  );
};

export default ChatbotSmallTextEffect;
