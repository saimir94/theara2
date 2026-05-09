'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
export function Cursor(){const x=useSpring(useMotionValue(-100),{stiffness:180,damping:24}); const y=useSpring(useMotionValue(-100),{stiffness:180,damping:24}); useEffect(()=>{const f=(e:MouseEvent)=>{x.set(e.clientX-14);y.set(e.clientY-14)}; window.addEventListener('mousemove',f); return()=>window.removeEventListener('mousemove',f)},[x,y]); return <motion.div aria-hidden className="pointer-events-none fixed z-[90] hidden h-7 w-7 rounded-full border border-sand/50 mix-blend-difference lg:block" style={{x,y}}/>}
