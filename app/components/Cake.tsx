import { motion } from "framer-motion";

const Cake = () => {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      initial={{ rotateY: -90 }}
      animate={{ rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.rect
        x="40"
        y="120"
        width="120"
        height="60"
        rx="5"
        fill="#FFB6C1"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.rect
        x="50"
        y="80"
        width="100"
        height="40"
        rx="5"
        fill="#FF69B4"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.rect
        x="70"
        y="50"
        width="60"
        height="30"
        rx="5"
        fill="#FF1493"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <motion.rect
        x="95"
        y="20"
        width="10"
        height="30"
        fill="#FFA500"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      />
      <motion.circle
        cx="100"
        cy="20"
        r="5"
        fill="#FF4500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      />
      {[...Array(5)].map((_, index) => (
        <motion.circle
          key={index}
          cx={70 + index * 15}
          cy={50}
          r="3"
          fill="#FFD700"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{
            duration: 0.5,
            delay: 1 + index * 0.1,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
        />
      ))}
    </motion.svg>
  );
};

export default Cake;
