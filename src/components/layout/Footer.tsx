import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-padang-blue-900 text-white">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kota Padang</h3>
            <p className="text-gray-300 mb-4">
              Kota Padang adalah ibukota Provinsi Sumatera Barat, Indonesia. Kota ini merupakan pusat ekonomi, 
              pendidikan, dan budaya dengan keindahan alam pantai dan kuliner yang khas.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Tourism', 'Culture', 'Culinary', 'Events', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tourism */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Wisata</h3>
            <ul className="space-y-2">
              {[
                { name: 'Pantai Padang', link: '/tourism/#beaches' },
                { name: 'Pantai Air Manis', link: '/tourism/#beaches' },
                { name: 'Bukit Padang', link: '/tourism/#mountains' },
                { name: 'Jembatan Siti Nurbaya', link: '/tourism/#historical' },
                { name: 'Museum Adityawarman', link: '/tourism/#historical' },
                { name: 'Jam Gadang Padang', link: '/tourism/#historical' },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.link}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-padang-blue-300 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Jl. Bagindo Aziz Chan, Aie Pacah, Kec. Koto Tangah, Kota Padang, Sumatera Barat 25586
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-padang-blue-300 flex-shrink-0" />
                <p className="text-gray-300">(0751) 4640800</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-padang-blue-300 flex-shrink-0" />
                <a href="mailto:info@padang.go.id" className="text-gray-300 hover:text-white transition-colors">
                  info@padang.go.id
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-padang-blue-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pemerintah Kota Padang. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;