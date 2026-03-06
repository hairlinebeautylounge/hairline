import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/4.jpg"
            alt="Luxury Hair Design"
            fill
            className="object-cover scale-110 animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
            priority
          />
        </div>
        {/* Sophisticated Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-brand-accent"></div>
            <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-sm">Welcome to Excellence</span>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
            The Art of <br />
            <span className="text-brand-accent italic">Hair Design</span>
          </h1>

          <p className="text-xl md:text-2xl font-light max-w-xl mb-12 text-gray-300 leading-relaxed">
            Where your unique beauty meets our expert craftsmanship.
            Experience a transformation tailored specifically to you.
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://wa.me/9613046224"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-accent px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-brand-accent/20 hover:bg-brand-gold-dark transition-all hover:scale-105 active:scale-95"
            >
              Book Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-10 py-5 text-lg font-bold text-white hover:bg-white/10 transition-all"
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 text-white/40">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes ken-burns {
          from { transform: scale(1); }
          to { transform: scale(1.15) translate(1%, 1%); }
        }
      `}</style>
    </section>
  );
}