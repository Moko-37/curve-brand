import { FaWhatsapp } from 'react-icons/fa';
import { siteData } from '../../data/siteData';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteData.company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-[#25D366]/40 z-50 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="absolute right-16 bg-white text-dark-900 px-3 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}