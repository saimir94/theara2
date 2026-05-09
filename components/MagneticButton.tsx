'use client';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MagneticButton({ href, children, variant='light' }: { href:string; children:React.ReactNode; variant?:'light'|'dark' }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  return <motion.div style={{ x, y }} onMouseMove={(e)=>{const r=ref.current?.getBoundingClientRect(); if(!r)return; x.set((e.clientX-r.left-r.width/2)*.18); y.set((e.clientY-r.top-r.height/2)*.18)}} onMouseLeave={()=>{x.set(0);y.set(0)}}>
    <Link ref={ref} href={href} className={`btn-focus inline-flex items-center justify-center rounded-full border px-6 py-3 text-xs uppercase tracking-[.24em] transition ${variant==='light'?'border-cream/20 bg-cream text-ink hover:bg-sand':'border-cream/20 text-cream hover:bg-cream hover:text-ink'}`}>{children}</Link>
  </motion.div>
}
