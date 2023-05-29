import Head from 'next/head';
import Header from '@/layout/header/Header';
import Vision from '@/layout/vision/Vision';
import Sponsors from '@/layout/sponsors/Sponsors';
import Projects from '@/layout/projects/Projects';
import Speeches from '@/layout/spehees/Speeches';
import Discussion from '@/layout/discussion/Discussion';
import Protocols from '@/layout/protocols/Protocols';
import Workshops from '@/layout/workshops/Workshops';
import Agenda from '@/layout/agenda/Agenda';
import Contact from '@/layout/contact/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>GASB</title>
        <meta
          name="description"
          content="this page for the Global Alliances for Sustainable Business
          Conference 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/GASB logo-01 (gold) (1) 1.png" />
      </Head>

      <main>
        <Header />
        <Vision />
        <hr />
        <Sponsors />
        <hr />
        <Projects />
        <Speeches />
        <Discussion />
        <Protocols />
        <Workshops />
        <Agenda />
        <Contact />
      </main>
    </>
  );
}
