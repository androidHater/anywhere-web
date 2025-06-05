import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Anywhere s.r.o.</title>
      </Head>
      <main className="bg-white text-black">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  )
}
