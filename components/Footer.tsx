import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-gray-400 pt-32 pb-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="relative w-72 mb-10 group">
              <Logo className="w-full h-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
            <p className="text-gray-500 leading-relaxed mb-8">
              The premier destination for luxury hair design and personalized care. We're dedicated to making you look and feel your absolute best through artisan craftsmanship.
            </p>
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a href="https://www.instagram.com/hairlinebeautylounge" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-accent hover:bg-white/10 transition-all border border-white/5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.2.1 4.8 1.7 4.9 4.9.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.2-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-3.2 1.7-4.8 4.9-4.9 1.3-.1 1.7-.1 4.9-.1Zm0-2.2C8.7 0 8.3 0 7 .1 2.6.3.2 2.7 0 7 .0 8.3 0 8.7 0 12s.0 3.7.1 5c.2 4.3 2.6 6.7 7 6.9 1.3.1 1.7.1 5 .1s3.7 0 5-.1c4.4-.2 6.8-2.6 7-6.9.1-1.3.1-1.7.1-5s0-3.7-.1-5C23.8 2.7 21.4.3 17 .1 15.7 0 15.3 0 12 0ZM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4Z" /></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/9613046224" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-brand-accent hover:bg-white/10 transition-all border border-white/5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32"><path d="M19.11 17.16c-.27-.13-1.57-.77-1.82-.86-.25-.09-.43-.13-.61.13-.18.27-.7.86-.86 1.03-.16.18-.32.2-.59.07-.27-.13-1.12-.41-2.13-1.32-.79-.7-1.32-1.57-1.48-1.83-.16-.27-.02-.41.11-.54.11-.11.27-.29.41-.43.13-.14.18-.23.27-.39.09-.18.05-.32-.02-.45-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28s.99 2.64 1.14 2.82c.14.18 1.96 2.99 4.75 4.2.66.29 1.18.46 1.58.59.66.21 1.26.18 1.74.11.53-.08 1.57-.64 1.79-1.26.23-.61.23-1.13.16-1.25-.07-.12-.25-.2-.52-.32zM27.57 4.43C24.94 1.8 21.58.4 18 .4 9.89.4 3.4 6.89 3.4 15c0 2.58.67 5.09 1.94 7.31L3 29l6.86-2.28A14.52 14.52 0 0 0 18 29.6C26.11 29.6 32.6 23.11 32.6 15c0-3.58-1.4-6.94-4.03-9.57zM18 27.2c-2.38 0-4.66-.69-6.63-2l-.47-.31-4.06 1.35 1.35-3.96-.32-.49A12.2 12.2 0 0 1 5.8 15C5.8 8.03 11.03 2.8 18 2.8c3.27 0 6.34 1.27 8.66 3.6 2.32 2.32 3.6 5.39 3.6 8.6 0 6.97-5.23 12.2-12.26 12.2z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-auto">
            <h4 className="font-serif text-xl font-semibold mb-8 text-white">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-brand-accent transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-brand-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-8 text-white">Availability</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-500">Tue - Sat</span>
                <span className="text-gray-300">08:00 - 19:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-500">Sunday</span>
                <span className="text-brand-accent italic font-medium text-[10px] uppercase tracking-wider">Half Day</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-500">Monday</span>
                <span className="text-brand-accent italic font-medium">Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-8 text-white">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-accent border border-white/5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Salon Location</p>
                  <p className="text-gray-500 text-sm mt-1">Ballouneh, Main Road next to Pizza Nini</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-accent border border-white/5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Booking Line</p>
                  <p className="text-gray-500 text-sm mt-1">+961 3 046 224</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex justify-center items-center">
          <p className="text-xs text-gray-600 tracking-widest uppercase text-center">&copy; 2024 Hairline Beauty Lounge. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}