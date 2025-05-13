import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <motion.div
        className="w-16 h-16 border-4 border-padang-blue-200 border-t-padang-blue-600 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="mt-4 text-padang-blue-600 font-medium">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;