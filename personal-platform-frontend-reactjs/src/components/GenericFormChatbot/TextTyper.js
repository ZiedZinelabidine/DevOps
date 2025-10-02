import { useEffect, useState } from "react";

export default function TextTyper({ text = "", interval = 100, onComplete }) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let localTypingIndex = 0;
    const printer = setInterval(() => {
      if (localTypingIndex < text.length) {
        setTypedText((prev) => prev + text[localTypingIndex]);
        localTypingIndex += 1;
      } else {
        clearInterval(printer);
        if (onComplete) onComplete();
      }
    }, interval);
    return () => clearInterval(printer);
  }, [text, interval, onComplete]);

  return <span>{typedText}</span>;
}
