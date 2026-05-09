'use client';
import { useEffect } from 'react';
import { initGsapScroll } from '@/animations/gsapScroll';
export function useGsapReveal(){ useEffect(()=>{ initGsapScroll(); },[]); }
