'use client';
import { motion } from 'framer-motion';
export function RevealText({ children, className='' }: { children:React.ReactNode; className?:string }) {
  return <motion.div className={className} initial={{ y: 34, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true, margin:'-80px' }} transition={{ duration:.8, ease:[.22,1,.36,1] }}>{children}</motion.div>
}
