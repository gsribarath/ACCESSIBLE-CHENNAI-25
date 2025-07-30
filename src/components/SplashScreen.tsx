import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <motion.div 
        className="flex flex-col items-center justify-center text-center px-8 md:px-12 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut"
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut"
          }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/3074886f-ff8b-43bc-96c3-1792db4bbb2d.png"
            alt="Accessible Chennai Logo"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
          />
        </motion.div>
        
        {/* App Title */}
        <motion.h1 
          className="text-white font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut"
          }}
        >
          Accessible Chennai
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-blue-100 font-poppins font-light text-base md:text-lg lg:text-xl mt-4 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: "easeOut"
          }}
        >
          Making public transport inclusive for everyone
        </motion.p>
        
        {/* Loading indicator */}
        <motion.div 
          className="mt-12 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.2
          }}
        >
          <motion.div 
            className="w-3 h-3 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0
            }}
          />
          <motion.div 
            className="w-3 h-3 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.2
            }}
          />
          <motion.div 
            className="w-3 h-3 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.4
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;