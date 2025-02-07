"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Cake from "./components/Cake";
import Balloon from "./components/Balloon";
import Confetti from "./components/Confetti";
import ActionButton from "./components/ActionButton";
import Wishes from "./components/Wishes";
import MusicButton from "./components/MusicButton";

export default function Home() {
  const [stage, setStage] = useState(0);
  const [isLightOn, setIsLightOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const advanceStage = () => {
    setStage((prevStage) => prevStage + 1);
    if (stage === 0) {
      setIsLightOn(true);
    }
    if (stage === 1) {
      toggleMusic();
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden p-4"
      animate={{
        backgroundColor: isLightOn
          ? ["#000000", "#FFC0CB", "#FFB6C1", "#FFA07A"]
          : "#000000",
      }}
      transition={{ duration: 2 }}
    >
      <Head>
        <title>Happy Birthday Anjii🥳🎂🎀!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <audio ref={audioRef} src="/mp3/videoplayback.weba" loop />

      <AnimatePresence>
        {isLightOn && (
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-8 text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            Happy Birthday Anjii🥳🎂🎀!
          </motion.h1>
        )}
      </AnimatePresence>

      {stage >= 1 && <Confetti />}

      <AnimatePresence>
        {stage >= 2 && (
          <motion.div
            className="fixed bottom-0 left-0 w-full h-1/2 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(15)].map((_, index) => (
              <Balloon
                key={index}
                color={`hsl(${index * 24}, 100%, 70%)`}
                delay={index * 0.2}
                initialY={100}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage >= 3 && (
          <motion.div
            className="relative w-64 h-64 mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Cake />
          </motion.div>
        )}
      </AnimatePresence>

      {stage >= 4 && <Wishes />}

      <AnimatePresence>
        {stage < 4 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <ActionButton
              onClick={advanceStage}
              stage={stage}
              isLightOn={isLightOn}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {isLightOn && stage === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MusicButton onClick={toggleMusic} />
        </motion.div>
      )}
    </motion.div>
  );
}
