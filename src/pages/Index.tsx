import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import voiceGuideIcon from '@/assets/voice-guide-icon.png';
import screenReaderIcon from '@/assets/screen-reader-icon.png';
import alertsIcon from '@/assets/alerts-icon.png';
import wheelchairRoutesIcon from '@/assets/wheelchair-routes-icon.png';
import communityIcon from '@/assets/community-icon.png';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 'voice-guide',
      title: 'Voice-Guided Navigation',
      description: 'Turn-by-turn audio navigation for public transport',
      icon: voiceGuideIcon,
      route: '/voice-guide',
      ariaLabel: 'Access voice-guided navigation for public transport with audio directions'
    },
    {
      id: 'screen-reader',
      title: 'Screen Reader Compatibility',
      description: 'Optimized interface for screen reader users',
      icon: screenReaderIcon,
      route: '/screen-reader',
      ariaLabel: 'Access screen reader compatible interface for better accessibility'
    },
    {
      id: 'alerts',
      title: 'Real-time Accessibility Alerts',
      description: 'Live updates on accessibility features and disruptions',
      icon: alertsIcon,
      route: '/alerts',
      ariaLabel: 'View real-time accessibility alerts and service disruptions'
    },
    {
      id: 'wheelchair-routes',
      title: 'Wheelchair-Accessible Route Planner',
      description: 'Find the best wheelchair-friendly paths and transport',
      icon: wheelchairRoutesIcon,
      route: '/wheelchair-routes',
      ariaLabel: 'Plan wheelchair accessible routes using public transport'
    },
    {
      id: 'community',
      title: 'In-app Community Support',
      description: 'Connect with other users and get help when needed',
      icon: communityIcon,
      route: '/community',
      ariaLabel: 'Connect with community for support and assistance'
    }
  ];

  const handleFeatureClick = (route: string, title: string) => {
    // For now, we'll show an alert since routes aren't implemented
    alert(`Navigating to ${title} - Route: ${route}`);
    // navigate(route);
  };

  const handleKeyDown = (event: React.KeyboardEvent, route: string, title: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleFeatureClick(route, title);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5">
      {/* Header Section */}
      <header className="relative pt-12 pb-8 px-4 text-center" role="banner">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Accessible Chennai
          </h1>
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto leading-relaxed"
            cite="https://www.un.org/disabilities/"
          >
            "Accessibility is not about accommodating disabilities; it's about creating a world where everyone belongs."
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-base md:text-lg text-foreground/80 max-w-3xl mx-auto"
          >
            Making Chennai's public transport inclusive and accessible for everyone. 
            Navigate with confidence using our comprehensive accessibility tools.
          </motion.p>
        </motion.div>
      </header>

      {/* Main Features Section */}
      <main 
        className="px-4 pb-16"
        role="main"
        aria-label="Accessibility features"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-12"
          >
            Choose Your Accessibility Tool
          </motion.h2>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            role="grid"
            aria-label="Accessibility features grid"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.6 + (index * 0.1), 
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="relative"
                role="gridcell"
              >
                <motion.button
                  onClick={() => handleFeatureClick(feature.route, feature.title)}
                  onKeyDown={(e) => handleKeyDown(e, feature.route, feature.title)}
                  className="w-full bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-feature transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary group"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "var(--shadow-feature)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={feature.ariaLabel}
                  role="button"
                  tabIndex={0}
                >
                  {/* Icon Container */}
                  <div className="relative mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center group-hover:bg-gradient-primary/20 transition-colors duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <img 
                        src={feature.icon} 
                        alt=""
                        className="w-8 h-8 object-contain"
                        aria-hidden="true"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      initial={false}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.1, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-2">
                    <h3 className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-primary rounded-full group-hover:w-8 transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: 32 }}
                  />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer 
        className="mt-16 py-8 px-4 text-center border-t border-border/50"
        role="contentinfo"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-sm text-muted-foreground">
            Built with ❤️ for an inclusive Chennai. 
            <span className="block mt-1">
              Empowering accessibility in public transportation.
            </span>
          </p>
        </motion.div>
      </footer>

      {/* Skip to main content link for screen readers */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium z-50"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default Index;