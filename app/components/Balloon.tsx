import { motion } from "framer-motion";

const Balloon = ({
  color,
  delay,
  initialY = 100,
}: {
  color: string;
  delay: number;
  initialY?: number;
}) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${Math.random() * 100}%`,
        bottom: `-${Math.random() * 20 + 10}%`,
      }}
      initial={{ y: initialY, opacity: 0 }}
      animate={{ y: [initialY, -10, 0], opacity: 1 }}
      transition={{
        y: {
          delay,
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        },
        opacity: { delay, duration: 0.5 },
      }}
    >
      <svg width="50" height="60" viewBox="0 0 50 60">
        <motion.path
          d="M25 0 C 10 0 0 15 0 30 C 0 45 10 55 25 55 C 40 55 50 45 50 30 C 50 15 40 0 25 0 Z"
          fill={color}
        />
        <motion.path
          d="M25 55 L 25 60"
          stroke={color}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        />
      </svg>
    </motion.div>
  );
};

export default Balloon;
