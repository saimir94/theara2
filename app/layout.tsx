import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { PageTransition } from '@/components/PageTransition';
import { Cursor } from '@/components/Cursor';
import { ScrollProgress } from '@/components/ScrollProgress';
import { CookieBanner } from '@/components/CookieBanner';
import { GsapInit } from '@/components/GsapInit';
import { site } from '@/lib/data';

export const metadata: Metadata = { metadataBase:new URL(site.url), title:{default:'THÈA RA MODE & DESIGN | Premium Branding & Firmenbekleidung Duisburg',template:'%s | THÈA RA MODE & DESIGN'}, description:site.description, keywords:['Firmenbekleidung Deutschland','Textildruck Duisburg','Branding Agentur Duisburg','Logo Design Deutschland','Werbeartikel Duisburg','moderne Firmenkleidung','Premium Branding Agentur','Corporate Design Deutschland'], openGraph:{title:'THÈA RA MODE & DESIGN',description:site.description,url:site.url,siteName:site.name,locale:'de_DE',type:'website'}, twitter:{card:'summary_large_image',title:site.name,description:site.description}, robots:{index:true,follow:true} };

export default function RootLayout({children}:{children:React.ReactNode}){ const schema={ '@context':'https://schema.org','@type':['LocalBusiness','Organization'], name:site.name, url:site.url, email:site.email, telephone:site.phone, address:{'@type':'PostalAddress',streetAddress:'Müllersgasse 4',postalCode:'47051',addressLocality:'Duisburg',addressCountry:'DE'}, areaServed:'Deutschland', description:site.description}; return <html lang="de"><body className="grain font-sans antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><SmoothScrollProvider><ScrollProgress/><Cursor/><GsapInit/><Navbar/><PageTransition>{children}</PageTransition><Footer/><CookieBanner/></SmoothScrollProvider></body></html> }
