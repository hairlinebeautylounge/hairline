import Image from 'next/image';

const serviceCategories = [
  {
    section: "Hair Design",
    title: "Styling",
    services: [
      { name: "Brushing", price: "12" },
      { name: "Wave", price: "15" },
      { name: "Haircut", price: "25" },
      { name: "Demi chignon", price: "30" },
      { name: "Chignon", price: "40" },
      { name: "Extension 1 Piece", price: "20" },
      { name: "Wedding", price: "400" }
    ]
  },
  {
    section: "Hair Design",
    title: "Color",
    services: [
      { name: "Dye roots", price: "25" },
      { name: "Hair dye", price: "35+" },
      { name: "Majirel roots", price: "40" },
      { name: "Majirel complete", price: "50+" },
      { name: "Sans amoniac roots", price: "30" },
      { name: "Sans amoniac complete", price: "40+" },
      { name: "Inoa roots", price: "45" },
      { name: "Inoa complete", price: "55+" },
      { name: "Highlight", price: "100+" },
      { name: "Lowlight", price: "80+" },
      { name: "Highlight ombré", price: "120 - 170" },

    ]
  },
  {
    section: "Hair Design",
    title: "Hair Care",
    services: [
      { name: "Bain d'huile", price: "20+" },
      { name: "Keratine & Crystal", price: "120+" }
    ],
    hasImage: true
  },
  {
    section: "Institute Mery",
    title: "Hands & Feet",
    services: [
      { name: "Pose", price: "7" },
      { name: "Manicure", price: "10" },
      { name: "Pedicure", price: "15" },
      { name: "Gelish", price: "20" },
      { name: "Parafine hand", price: "8" },
      { name: "Parafine feet", price: "13" },
      { name: "Rubber + gelish", price: "25" },
      { name: "Xgel + gelish", price: "30" },
      { name: "Dipping powder", price: "25" },
      { name: "Fake nails", price: "15" }
    ]
  },
  {
    section: "Institute Mery",
    title: "Waxing (Cire)",
    services: [
      { name: "Main", price: "7 / 10" },
      { name: "Jambe", price: "10 / 15" },
      { name: "Aissele", price: "5" },
      { name: "Dos", price: "5 / 10" },
      { name: "Ventre", price: "5 / 10" },
      { name: "Bikini", price: "15" },
      { name: "Remove", price: "3" }
    ]
  },
  {
    section: "Institute Mery",
    title: "Face & Eyes",
    services: [
      { name: "Sourcils", price: "6" },
      { name: "Moustache", price: "2 / 3" },
      { name: "Eye lashes", price: "13" },
      { name: "Facial", price: "35" }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Curated <span className="text-brand-accent italic">Services</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Experience the pinnacle of hair artistry. From classic styling to avant-garde transformations,
              we tailor every service to your unique personality and aesthetic journey.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-px bg-brand-accent mb-2"></div>
            <p className="text-xs font-bold tracking-widest text-brand-accent uppercase">Excellence in Beauty</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-20">
            {/* Hair Design Section */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <h3 className="font-serif text-2xl font-bold text-brand-accent tracking-widest uppercase">01. Hair Design</h3>
                <div className="flex-grow h-px bg-brand-accent/20"></div>
              </div>
              <div className="space-y-16">
                {serviceCategories.filter(c => c.section === "Hair Design").map((category, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-center gap-4 mb-8">
                      <h4 className="font-serif text-3xl font-semibold text-white tracking-wide">{category.title}</h4>
                      <div className="flex-grow h-px bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="service-row">
                          <span className="name text-lg">{service.name}</span>
                          <span className="dots"></span>
                          <span className="price text-xl text-brand-accent">
                            {service.price} <span className="text-[10px] ml-1 opacity-70">USD</span>
                          </span>
                        </div>
                      ))}
                    </div>

                    {category.hasImage && (
                      <div className="mt-12 relative aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 group">
                        <Image
                          src="/services.jpg"
                          alt="Hair Care Excellence"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-10">
                          <p className="text-xl font-serif text-white italic">Professional care for extraordinary results.</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Institute Mery Section */}
            <div className="pt-20 border-t border-white/5">
              <div className="flex items-center gap-4 mb-12">
                <h3 className="font-serif text-2xl font-bold text-brand-accent tracking-widest uppercase">02. Institute Mery</h3>
                <div className="flex-grow h-px bg-brand-accent/20"></div>
              </div>
              <div className="space-y-16">
                {serviceCategories.filter(c => c.section === "Institute Mery").map((category, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-center gap-4 mb-8">
                      <h4 className="font-serif text-3xl font-semibold text-white tracking-wide">{category.title}</h4>
                      <div className="flex-grow h-px bg-white/10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="service-row">
                          <span className="name text-lg">{service.name}</span>
                          <span className="dots"></span>
                          <span className="price text-xl text-brand-accent">
                            {service.price} <span className="text-[10px] ml-1 opacity-70">USD</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <div className="bg-brand-accent/10 rounded-3xl p-8 border border-brand-accent/20 sticky top-32">
              <p className="text-white font-serif italic text-2xl mb-4">"Hair is the richest ornament of women."</p>
              <p className="text-brand-accent text-sm font-bold tracking-widest uppercase">— Martin Luther</p>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm leading-relaxed">
                  All treatments use premium products to ensure the health and vitality of your hair and skin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}