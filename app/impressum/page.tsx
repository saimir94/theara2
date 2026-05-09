import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';
import { LegalLayout } from '@/components/LegalLayout';
export const metadata: Metadata={title:'Impressum',description:'Impressum von THÈA RA MODE & DESIGN.'};
export default function Impressum(){return <LegalLayout title="Impressum"><p><strong>THÈA RA MODE & DESIGN</strong><br/>Müllersgasse 4<br/>47051 Duisburg<br/>Germany</p><h2>Inhaber</h2><p>Saimir Aliaj</p><h2>Kontakt</h2><p>E-Mail: kontakt@thea-ra.de<br/>Telefon: +49 176 55981468</p><h2>Umsatzsteuer-ID</h2><p>USt-IdNr.: DE452942832</p><h2>Verantwortlich für den Inhalt</h2><p>Saimir Aliaj, Anschrift wie oben.</p><h2>Hinweis</h2><p>Diese lokal entwickelte Website enthält strukturierte Pflichtangaben. Für eine rechtsverbindliche Veröffentlichung sollte eine juristische Prüfung durch eine qualifizierte Stelle erfolgen.</p></LegalLayout>}
