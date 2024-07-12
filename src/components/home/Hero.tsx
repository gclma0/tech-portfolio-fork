// components/home/Hero.tsx
import { ChevronRight } from 'lucide-react';
import React from 'react';
import AnimatedDrawing from '../AnimatedDrawing';
import BlurFade from '@/components/magicui/blur-fade';
import { AuroraBackground } from '../ui/aurora-background';

const Hero: React.FC = () => {
  return (
    <AuroraBackground>
    <div className='px-16'>
        <AnimatedDrawing />
        <BlurFade delay={0.25} inView>
        <h1 className='text-3xl py-8'>We drive business transformation by engineering custom applications and pioneering product innovations.</h1>
        <a className='flex items-center gap-2 text-xl cursor-pointer hover:gap-4 hover:text-teal-400 transition-all duration-300'>Let's Talk 👋<ChevronRight /></a>
      </BlurFade> 
    </div>
    </AuroraBackground>
  );
}

export default Hero;
