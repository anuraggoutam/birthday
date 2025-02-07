"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Confetti = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const colors = [
      "#FF69B4",
      "#FF1493",
      "#FFB6C1",
      "#FFA500",
      "#FF4500",
      "#FFD700",
      "#00CED1",
      "#FFFFFF",
    ];
    const newConfetti = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * 100,
      size: Math.random() * 8 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            left: piece.x,
            top: piece.y,
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: window.innerHeight + 20,
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
