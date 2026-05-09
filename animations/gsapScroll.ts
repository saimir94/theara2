'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export function initGsapScroll(){ if(typeof window==='undefined') return; gsap.registerPlugin(ScrollTrigger); gsap.utils.toArray<HTMLElement>('[data-gsap-reveal]').forEach((el)=>{ gsap.fromTo(el,{y:48,opacity:0},{y:0,opacity:1,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%'}}); }); }
