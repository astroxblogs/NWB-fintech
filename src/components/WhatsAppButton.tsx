import React from "react";

export const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919116116269"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 group"
            aria-label="Chat with us on WhatsApp"
        >
            {/* Replaced with real WhatsApp icon */}
            <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
            >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.72 13.59c-.21.58-1.21 1.11-1.66 1.17-.42.06-.96.09-3.09-.66-2.72-1.02-4.47-3.52-4.6-3.69-.12-.17-1.01-1.34-1.01-2.55 0-1.21.63-1.8.85-2.04.22-.23.48-.29.64-.29.17 0 .33 0 .48.01.17.01.39-.06.61.46.21.51.73 1.78.79 1.91.06.12.1.27.02.44-.08.17-.12.27-.25.42-.12.15-.26.33-.37.44-.12.12-.24.25-.1.5.15.25.66 1.09 1.42 1.76.98.86 1.8 1.13 2.06 1.26.25.12.4.1.55-.06.15-.17.63-.73.79-.98.17-.25.33-.21.56-.12.23.08 1.45.68 1.7.81.25.12.42.19.48.29.06.1.06.58-.15 1.16z" />
            </svg>

            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-semibold ml-0 group-hover:ml-2">
                Chat with us
            </span>
        </a>
    );
};
