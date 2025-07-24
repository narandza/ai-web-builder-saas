import { useEffect, useState } from "react";

const ShimmerMessages = () => {
  const messages = [
    "Thinking...",
    "Loading...",
    "Generating...",
    "Analzying your request",
    "Building your website...",
    "Crafting components...",
    "Optimizing layout...",
    "Adding final touches",
    "Almost ready...",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);
};

export const MessageLoading = () => {
  return <div className=""></div>;
};
