import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 relative z-10">
              <Image
                src="/2.jpg"
                alt="Hairline Beauty Lounge Interior"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 border-2 border-brand-accent/30 rounded-3xl -z-0"></div>
          </div>

          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-sm">Legacy of Excellence</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Crafted by <br />
              <span className="text-brand-accent italic text-3xl md:text-4xl">Andre Choueiry & Roger Chamata</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Located in the heart of <span className="text-gray-200 font-medium italic">Ballouneh</span>, Hairline Beauty Lounge is more than just a salon—it's a sanctuary of artistry founded on over <span className="text-brand-accent font-bold">20 years of elite experience</span>.
              </p>
              <p>
                Led by master designers <span className="text-gray-200">Andre Choueiry</span> and <span className="text-gray-200">Roger Chamata</span>, our team is dedicated to the constant pursuit of perfection. Every cut, color, and style is an artisanal masterpiece tailored to your unique identity.
              </p>
              <p className="text-base italic opacity-80 border-l-2 border-brand-accent/30 pl-6">
                "Where two decades of craftsmanship meet the modern vision of beauty."
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <Link href="https://wa.me/9613046224" target="_blank" className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-accent/20 hover:bg-brand-gold-dark transition-all hover:scale-105 active:scale-95">
                Book Consultation
              </Link>
              <Link href="#gallery" className="text-white font-medium hover:text-brand-accent transition-colors flex items-center gap-2 group">
                View Portfolio
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}