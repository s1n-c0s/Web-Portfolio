import { motion } from "framer-motion";

interface BubbleButtonProps {
  children: React.ReactNode;
  className?: string;
}

const BubbleButton = ({ children, className = "" }: BubbleButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, y: -2 }} // Gentle "float up" bubble effect
      whileTap={{ scale: 0.9 }}         // Squash effect on click
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`
        px-4 py-2 rounded-full text-xs font-medium 
        bg-neutral-800 border border-neutral-700 
        hover:bg-neutral-700 hover:border-neutral-600
        transition-colors duration-200
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

export default BubbleButton;