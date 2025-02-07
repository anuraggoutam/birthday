"use client";
import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

interface ActionButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  stage: number;
  isLightOn: boolean;
}

const ActionButton = ({ onClick, stage, isLightOn }: ActionButtonProps) => {
  const buttonText = [
    "Turn on the lights!",
    "Bring The Baloons",
    "Bring out the cake!",
    "Wishes For You!",
  ][stage];

  return (
    <motion.button
      className={`bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg text-xl ${
        !isLightOn && stage === 0 ? "animate-pulse" : ""
      }`}
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {buttonText}
    </motion.button>
  );
};

export default ActionButton;
