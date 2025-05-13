import { motion } from 'framer-motion';

interface PhotoCardProps {
  imageUrl: string;
  title: string;
  description?: string;
  delay?: number;
}

const PhotoCard = ({ imageUrl, title, description, delay = 0 }: PhotoCardProps) => {
  return (
    <motion.div 
      className="card group overflow-hidden h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-padang-blue-800 mb-2">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </motion.div>
  );
};

export default PhotoCard;