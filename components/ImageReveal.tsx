'use client';
import { motion } from 'framer-motion';
export function ImageReveal({ label='BRAND MATERIAL' }: { label?:string }) {
 return <motion.div className="visual-card min-h-[360px] rounded-[2rem]" initial={{ clipPath:'inset(18% 0 18% 0)', opacity:.55 }} whileInView={{ clipPath:'inset(0% 0 0% 0)', opacity:1 }} viewport={{ once:true }} transition={{ duration:1.1, ease:[.22,1,.36,1] }}><div className="absolute inset-x-8 bottom-8 z-10 flex items-end justify-between"><span className="text-xs uppercase tracking-[.28em] text-cream/70">{label}</span><span className="font-display text-6xl tracking-luxury text-cream/20">THÈA</span></div><div className="absolute left-[18%] top-[18%] h-28 w-28 rounded-full border border-cream/20"/><div className="absolute right-[18%] top-[26%] h-44 w-24 rotate-12 rounded-full bg-cream/10 blur-xl"/></motion.div>
}
