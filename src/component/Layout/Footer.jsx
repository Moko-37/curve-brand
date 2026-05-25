import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { siteData } from '../../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-dark-300 pt-20 pb-0">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-dark-700">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-heading text-2xl font-bold">
                C
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-white tracking-wider">CURVE</span>
                <span className="block text-[10px] tracking-[2px] uppercase text-dark-400">Construction & Design</span>
              </div>
            </Link>
            <p className="text-dark-400 leading-relaxed mb-6">
              Premium construction and interior design company under {siteData.company.fullName}.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebookF, href: siteData.socialLinks.facebook },
                { icon: FaInstagram, href: siteData.socialLinks.instagram },
                { icon: FaLinkedinIn, href: siteData.socialLinks.linkedin },
                { icon: FaTwitter, href: siteData.socialLinks.twitter },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-gold-400 hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-heading mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/projects', label: 'Projects' },
                { path: '/blog', label: 'Blog' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-dark-400 hover:text-gold-400 hover:pl-2 transition-all duration-300 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-heading mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold-400">
              Our Services
            </h4>
            <ul className="space-y-3">
              {['Building Construction', 'Interior Design', 'Aluminum & Glass', 'Renovation', 'Project Management'].map((service, i) => (
                <li key={i}>
                  <Link to="/services" className="text-dark-400 hover:text-gold-400 hover:pl-2 transition-all duration-300 text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-heading mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold-400">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-gold-400 mt-1 shrink-0" size={16} />
                <span className="text-dark-400 text-sm">{siteData.company.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-gold-400 shrink-0" size={16} />
                <a href={`tel:${siteData.company.phone}`} className="text-dark-400 hover:text-gold-400 transition-colors text-sm">
                  {siteData.company.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-gold-400 shrink-0" size={16} />
                <a href={`mailto:${siteData.company.email}`} className="text-dark-400 hover:text-gold-400 transition-colors text-sm">
                  {siteData.company.email}
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-white text-sm font-semibold mb-3">Newsletter</h5>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-3 bg-dark-800 border-none text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
                <button className="px-4 bg-gold-400 text-white hover:bg-gold-500 transition-colors">
                  <FiArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-400 text-sm">
            © {new Date().getFullYear()} Curve Brand — {siteData.company.fullName}. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-dark-400">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}