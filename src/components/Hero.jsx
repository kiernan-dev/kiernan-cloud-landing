
import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Cpu } from 'lucide-react';
import { techIconsList } from '@/components/TechImageIcons.jsx';
import ParticleIcon from '@/components/ParticleIcon';

const Hero = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  const handlePointerDown = useCallback((e) => {
    setIsPressed(true);
    const touch = e.touches?.[0];
    setPointerPos({
      x: touch?.clientX || e.clientX,
      y: touch?.clientY || e.clientY
    });
  }, []);

  const handlePointerUp = useCallback(() => {
    setIsPressed(false);
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!isPressed) return;
    
    const touch = e.touches?.[0];
    setPointerPos({
      x: touch?.clientX || e.clientX,
      y: touch?.clientY || e.clientY
    });
  }, [isPressed]);
  const iconsToRender = useMemo(() => {
    const iconCount = 20;
    const icons = [];
    const listLength = techIconsList.length;
    
    for (let i = 0; i < iconCount; i++) {
      icons.push({
        id: i,
        Icon: techIconsList[i % listLength]
      });
    }
    
    return icons;
  }, []);
  return <section className="pt-32 pb-20 px-4 relative overflow-hidden min-h-[80vh] flex items-center justify-center cursor-pointer" onMouseDown={handlePointerDown} onMouseUp={handlePointerUp} onMouseMove={handlePointerMove} onTouchStart={handlePointerDown} onTouchEnd={handlePointerUp} onTouchMove={handlePointerMove} onMouseLeave={handlePointerUp}>
      <div className="absolute inset-0 z-0 pointer-events-none">
        {iconsToRender.map(({
        id,
        Icon
      }) => <ParticleIcon key={id} isPressed={isPressed} pointerPos={pointerPos}>
            <Icon />
          </ParticleIcon>)}
      </div>
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
          <motion.div animate={{
          rotate: 360
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }} className="inline-block mb-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center dark:neon-glow-purple">
              <Cpu className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
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
              <Cpu className="w-5 h-5 text-pink-400" />
              <span>Curated Integrations</span>
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
