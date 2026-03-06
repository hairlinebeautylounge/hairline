import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = '9613046224';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <div className="fixed bottom-8 right-8 z-[100] group">
            {/* Tooltip */}
            <div className="absolute right-full mr-4 bottom-1/2 translate-y-1/2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
                Chat with us
            </div>

            {/* Pulsing effect */}
            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping group-hover:animate-none"></div>

            {/* Main Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-500 hover:scale-110 active:scale-90 group-hover:rotate-12"
            >
                <svg
                    viewBox="0 0 32 32"
                    className="w-8 h-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19.11 17.16c-.27-.13-1.57-.77-1.82-.86-.25-.09-.43-.13-.61.13-.18.27-.7.86-.86 1.03-.16.18-.32.2-.59.07-.27-.13-1.12-.41-2.13-1.32-.79-.7-1.32-1.57-1.48-1.83-.16-.27-.02-.41.11-.54.11-.11.27-.29.41-.43.13-.14.18-.23.27-.39.09-.18.05-.32-.02-.45-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28s.99 2.64 1.14 2.82c.14.18 1.96 2.99 4.75 4.2.66.29 1.18.46 1.58.59.66.21 1.26.18 1.74.11.53-.08 1.57-.64 1.79-1.26.23-.61.23-1.13.16-1.25-.07-.12-.25-.2-.52-.32zM27.57 4.43C24.94 1.8 21.58.4 18 .4 9.89.4 3.4 6.89 3.4 15c0 2.58.67 5.09 1.94 7.31L3 29l6.86-2.28A14.52 14.52 0 0 0 18 29.6C26.11 29.6 32.6 23.11 32.6 15c0-3.58-1.4-6.94-4.03-9.57zM18 27.2c-2.38 0-4.66-.69-6.63-2l-.47-.31-4.06 1.35 1.35-3.96-.32-.49A12.2 12.2 0 0 1 5.8 15C5.8 8.03 11.03 2.8 18 2.8c3.27 0 6.34 1.27 8.66 3.6 2.32 2.32 3.6 5.39 3.6 8.6 0 6.97-5.23 12.2-12.26 12.2z" />
                </svg>
            </a>
        </div>
    );
};

export default WhatsAppButton;
