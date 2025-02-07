import { motion } from "framer-motion";
import { Music } from "lucide-react";

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const MusicButton = ({ onClick }) => {
  return (
    <motion.button
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold p-3 rounded-full shadow-lg"
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <Music size={24} />
    </motion.button>
  );
};

export default MusicButton;
