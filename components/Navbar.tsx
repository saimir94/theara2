'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems, site } from '@/lib/data';

export function Navbar() {
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const on=()=>setScrolled(window.scrollY>24); on(); window.addEventListener('scroll',on,{passive:true}); return()=>window.removeEventListener('scroll',on)},[]);
  return <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled?'bg-ink/58 backdrop-blur-xl border-b border-cream/10':'bg-transparent'}`}><nav className="luxury-container flex h-20 items-center justify-between"><Link href="/" className="font-display text-xl tracking-tight">{site.name}</Link><div className="hidden gap-8 md:flex">{navItems.map(i=><Link key={i.href} href={i.href} className="text-xs uppercase tracking-[.24em] text-cream/72 transition hover:text-cream">{i.label}</Link>)}</div><button aria-label="Menü öffnen" onClick={()=>setOpen(!open)} className="md:hidden text-xs uppercase tracking-[.24em]">{open?'Schließen':'Menü'}</button></nav><AnimatePresence>{open&&<motion.div initial={{height:0}} animate={{height:'100vh'}} exit={{height:0}} className="overflow-hidden bg-ink/96 backdrop-blur-2xl md:hidden"><div className="luxury-container pt-12">{navItems.map(i=><Link onClick={()=>setOpen(false)} className="block border-b border-cream/10 py-6 font-display text-5xl tracking-luxury" key={i.href} href={i.href}>{i.label}</Link>)}</div></motion.div>}</AnimatePresence></header>
}
