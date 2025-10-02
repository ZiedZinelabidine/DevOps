import { ChatbotContainer, ChatbotMessage } from "./ChatbotTextEffect.style";

const ChatbotTextEffect = ({ message, onComplete }) => {
  // Call onComplete immediately since we're not animating
  if (onComplete) {
    onComplete();
  }

  return (
    <ChatbotContainer>
      <ChatbotMessage>{message}</ChatbotMessage>
    </ChatbotContainer>
  );
};

export default ChatbotTextEffect;
