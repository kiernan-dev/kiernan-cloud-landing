
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, CloudLightning } from 'lucide-react';
import Meteors from '@/components/ui/Meteors';

const Hero = () => {
  return <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-[80vh] flex items-center justify-center">
      <Meteors number={20} />
      <div className="container mx-auto text-center relative z-10 select-none">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-8">
          <div className="inline-block mb-6">
            <motion.div 
              className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(147, 51, 234, 0.8), 0 0 60px rgba(147, 51, 234, 0.4)",
                  "0 0 50px rgba(147, 51, 234, 1), 0 0 100px rgba(147, 51, 234, 0.6)",
                  "0 0 30px rgba(147, 51, 234, 0.8), 0 0 60px rgba(147, 51, 234, 0.4)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <CloudLightning className="w-10 h-10 text-white" />
            </motion.div>
          </div>
          
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="hidden sm:block text-4xl sm:text-5xl md:text-7xl font-bold mb-6 gradient-text">Kiernan.Cloud</motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">Welcome to Kiernan.Cloud, a personal project offering a curated selection of integrated AI and Automation tools for invited users.</motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>AI Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <CloudLightning className="w-5 h-5 text-pink-400" />
              <span>Cloud Platform</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span>Exclusive Access</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;
