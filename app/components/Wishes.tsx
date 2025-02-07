"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const wishes = [
  "🎉 Happy Birthday, Dear Anjii! 🥰🎂 Wishing you endless joy and laughter today and always!",
  "✨ May this special day mark the beginning of a year filled with luck, good health, and boundless happiness! 💖🎂",
  "🎁 You are a true gift to the world! Consider this a reverse birthday wish—Happy Birthday! 🥳🎈",
  "👫 You are the one who made me believe that a boy and a girl can truly be best friends! 💙 Happy Birthday! 🎉",
  "💫 Our bond is simply incredible, and I’m grateful for every moment of it! 💖🎂",
  "😊 In a world full of stress and worries, your smile is the perfect cure! 🌸💖 Happy Birthday! 🎂",
  "🤞 No matter what happens, I’ll always be by your side! 💕 Happy Birthday! 🥳🎈",
  "🌟 May all your dreams turn into reality this year! ✨🎂",
  "💌 Sending you endless love, happiness, and laughter on your special day! 🥰🎉",
];

const Wishes = () => {
  const [currentWish, setCurrentWish] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWish((prev) => (prev + 1) % wishes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentWish}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-white text-center font-semibold max-w-md"
        >
          {wishes[currentWish]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default Wishes;
