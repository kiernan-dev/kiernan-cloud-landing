import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Zap } from 'lucide-react';
const Footer = () => {
  return <motion.footer initial={{
    opacity: 0
  }} whileInView={{
    opacity: 1
  }} transition={{
    duration: 0.8
  }} viewport={{
    once: true
  }} className="py-12 px-4 border-t border-white/10 glass">
      <div className="container mx-auto text-center">
        <motion.div whileHover={{
        scale: 1.05
      }} className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold">K</span>
          </div>
          <span className="text-lg font-semibold gradient-text">Kiernan.Cloud</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Code className="w-4 h-4 text-blue-400" />
            <span>Built with React & Tailwind</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-purple-400" />
            <span>Powered by Innovation</span>
          </div>
        </div>

        <motion.div className="text-muted-foreground flex items-center justify-center space-x-2" whileHover={{
        scale: 1.02
      }}>
          <span>Made with</span>
          <motion.span animate={{
          scale: [1, 1.2, 1]
        }} transition={{
          duration: 1,
          repeat: Infinity
        }} className="inline-block">
            <Heart className="w-4 h-4 text-red-400 fill-current" />
          </motion.span>
          <span>for the future &nbsp;&nbsp; of [AI]</span>
        </motion.div>

        <div className="mt-8 text-xs text-muted-foreground">
          <span>© 2025 Kiernan Cloud Lab. Exploring the boundaries of technology.</span>
        </div>
      </div>
    </motion.footer>;
};
export default Footer;