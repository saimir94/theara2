import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { CTASection } from '@/components/CTASection';
import { projects } from '@/lib/data';
export const metadata: Metadata={title:'Projekte',description:'Premium Portfolio: Branding, textile Anwendungen und Print Design für moderne Unternehmen.'};
export default function Projekte(){return <main className="pt-32"><SectionHeader eyebrow="Projekte" title="Case Studies mit Haltung, Materialität und klarer visueller Sprache." text="Keine Galerie, sondern Markenstorys: Herausforderung, Lösung und Anwendung werden als durchgängige Identität inszeniert."/>{projects.map((p,i)=><ProjectShowcase key={p[0]} project={p} index={i}/>)}<CTASection/></main>}
