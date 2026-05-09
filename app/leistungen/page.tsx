import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceBlock } from '@/components/ServiceBlock';
import { CTASection } from '@/components/CTASection';
import { services } from '@/lib/data';
export const metadata: Metadata={title:'Leistungen',description:'Firmenbekleidung, Branding & Design, Print Design und Werbeartikel von THÈA RA MODE & DESIGN in Duisburg.'};
export default function Leistungen(){return <main className="pt-32"><SectionHeader eyebrow="Leistungen" title="Marken sichtbar machen – auf Stoff, Papier und im Gedächtnis." text="Wir verbinden moderne Gestaltung mit professioneller Produktion: vom ersten Logoentwurf bis zur hochwertigen Teamkleidung."/>{services.map((s,i)=><ServiceBlock key={s.slug} service={s} index={i}/>)}<CTASection/></main>}
