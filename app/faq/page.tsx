import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';
import { SectionHeader } from '@/components/SectionHeader';
import { FAQAccordion } from '@/components/FAQAccordion';
export const metadata: Metadata={title:'FAQ',description:'Antworten zu Lieferzeiten, Textildruck, Stickerei, Mindestmengen, Branding, Preisen und Datenformaten.'};
export default function FAQ(){return <main className="pt-32"><SectionHeader eyebrow="FAQ" title="Antworten für klare Entscheidungen vor Projektbeginn." text="Häufige Fragen zu Firmenkleidung, Textildruck, Stickerei, Branding, Werbeprodukten, Preisen und Datenformaten."/><FAQAccordion/></main>}
