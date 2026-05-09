import { RevealText } from './RevealText';
export function SectionHeader({ eyebrow, title, text }: { eyebrow:string; title:string; text?:string }) {
 return <div className="luxury-container mb-14 grid gap-8 md:grid-cols-[.8fr_1.2fr]"><RevealText><p className="text-xs uppercase tracking-[.32em] text-sand">{eyebrow}</p></RevealText><RevealText><h2 className="max-w-5xl font-display text-[clamp(3rem,8vw,8rem)] leading-[.86] tracking-luxury text-balance">{title}</h2>{text&&<p className="mt-6 max-w-2xl text-lg leading-8 muted">{text}</p>}</RevealText></div>
}
