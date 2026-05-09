'use client';
import { useState } from 'react';
import { faqs } from '@/lib/data';
export function FAQAccordion(){const [open,setOpen]=useState(0);return <div className="luxury-container divide-y divide-cream/10">{faqs.map((f,i)=><div key={f[0]}><button onClick={()=>setOpen(open===i?-1:i)} className="flex w-full items-center justify-between py-8 text-left"><span className="font-display text-3xl tracking-tight md:text-5xl">{f[0]}</span><span className="text-sand">{open===i?'—':'+'}</span></button>{open===i&&<p className="max-w-3xl pb-8 text-lg leading-8 muted">{f[1]}</p>}</div>)}</div>}
