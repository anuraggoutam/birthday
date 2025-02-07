"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const wishes = [
  "Happy birthday Dear Anjii🥰!",
  "May your birthday be the start of a year filled with good luck, good health, and much happiness.",
  "!",
  "May all your dreams come true this year!",
  "Sending you lots of love and happiness on your special day!",
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
