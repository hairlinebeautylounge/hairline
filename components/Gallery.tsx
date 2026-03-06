import Image from 'next/image';

const galleryItems = [
  { src: "/1.jpg" },
  { src: "/3.jpg" },
  { src: "/4.jpg" },
  { src: "/5.jpg" },
  { src: "/6.jpg" },
  { src: "/7.jpg" },
  { src: "/8.jpg" },
  { src: "/gallery-1.jpg" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-brand-accent"></div>
              <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-sm">Our Portfolio</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight">
              Where Artistry <br />
              <span className="text-brand-accent italic">Meets Vision</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-500 text-right max-w-xs italic text-lg">
              "A collection of our finest moments and transformations."
            </p>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid relative group overflow-hidden rounded-3xl glass-panel animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full">
                <Image
                  src={item.src}
                  alt="Gallery Image"
                  width={800}
                  height={1200}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* Overlay - purely visual backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>

              {/* Border shine effect always preserved for premium feel */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-gold-dark rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <a
              href="https://wa.me/9613046224"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center rounded-full bg-brand-dark border border-white/10 px-12 py-5 text-lg font-bold text-white hover:bg-white/5 transition-all"
            >
              Request Custom Style
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}