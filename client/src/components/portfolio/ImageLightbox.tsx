import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PortfolioItem } from '@/data/portfolio';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  item: PortfolioItem | null;
  onClose: () => void;
}

const ImageLightbox = ({ isOpen, item, onClose }: ImageLightboxProps) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      // Prevent body scrolling when lightbox is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={handleBackdropClick}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-terracotta transition-colors focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl w-full flex flex-col items-center"
          >
            <img 
              src={item.largeImage || item.image} 
              alt={item.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            
            <div className="text-white text-center mt-6 max-w-2xl">
              <h3 className="text-xl font-bold mb-2 font-playfair">{item.title}</h3>
              <p>{item.description}</p>
              {item.details && (
                <p className="mt-4 text-sm text-gray-300">{item.details}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
