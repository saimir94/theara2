'use client';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
export function SmoothScrollProvider({children}:{children:React.ReactNode}){useEffect(()=>{const lenis=new Lenis({lerp:.08,smoothWheel:true}); let raf=0; const loop=(t:number)=>{lenis.raf(t); raf=requestAnimationFrame(loop)}; raf=requestAnimationFrame(loop); return()=>{cancelAnimationFrame(raf); lenis.destroy()}},[]); return <>{children}</>}
