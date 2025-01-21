import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductHeroProps {
  title: string;
  description: string;
  imagePath: string;
}

const ProductHero = ({ title, description, imagePath }: ProductHeroProps) => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
    }
  };

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  return (
    <section className="relative w-full" style={{ height: 'min(70vh, calc(100vw / 2.2))' }}>
      <Image
        src={imagePath}
        alt={title}
        fill
        className="object-cover"
        priority
        quality={100}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="mt-20 sm:mt-0 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-wide max-w-5xl mx-auto hero-text-hover [text-shadow: 2px_2px_0_rgb(0,0,0)] break-words sm:whitespace-nowrap px-2 sm:px-0"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 tracking-wider max-w-4xl mx-auto hero-text-hover [text-shadow: 1px_1px_0_rgb(0,0,0)] whitespace-normal px-4"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
