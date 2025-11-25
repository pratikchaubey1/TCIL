import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [index, setIndex] = useState(0);
  // Intro (first page) dikhane ke liye state
  const [showIntro, setShowIntro] = useState(true);

  const greetings = [
    "नमस्ते, मैं प्रब हूँ",
    "Hello, I am Prab",
    "سلام، میں پرب ہوں",
    "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ, ਵਿੱਚ ਪ੍ਰਭ ਹਾਂ  ",
    "வணக்கம், நான் பிரப்",
    "নমস্কার, আমি প্রব",
    "నమస్కారం, నేను ప్రబ్",
    "કેમ છો, હું પ્રબ છું",
    "ನಮಸ್ಕಾರ, ನಾನು ಪ್ರಬ್",
    "ନମସ୍କାର, ମୁଁ ପ୍ରବ୍",
  ];

  // Text ko har 400ms me change karne ke liye
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 300);

    return () => clearInterval(id); // cleanup jab unmount ho
  }, [greetings.length]);

  const value = {
    user,
    setUser,
    greetings,
    index,
    showIntro,
    setShowIntro,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
