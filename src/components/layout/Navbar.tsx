import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Map, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTourismOpen, setIsTourismOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Tourism', path: '/tourism', hasSubmenu: true },
    { title: 'Culture', path: '/culture' },
    { title: 'Culinary', path: '/culinary' },
    { title: 'Events', path: '/events' },
    { title: 'Gallery', path: '/gallery' },
  ];

  const tourismSubmenu = [
    { title: 'Beaches', path: '/tourism/#beaches', icon: <Map size={16} /> },
    { title: 'Mountains', path: '/tourism/#mountains', icon: <Compass size={16} /> },
    { title: 'Historical Sites', path: '/tourism/#historical', icon: <Map size={16} /> },
    { title: 'Parks', path: '/tourism/#parks', icon: <Compass size={16} /> },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-padding mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className={`text-2xl font-bold font-montserrat ${isScrolled ? 'text-padang-blue-700' : 'text-padang-blue-400'}`}>
            KOTA PADANG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              {item.hasSubmenu ? (
                <button 
                  className={`flex items-center gap-1 ${
                    isScrolled ? 'nav-link' : 'text-black hover:text-black/80'
                  }`}
                  onClick={() => setIsTourismOpen(!isTourismOpen)}
                >
                  {item.title}
                  <ChevronDown size={16} />
                </button>
              ) : (
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => `
                    ${isScrolled 
                      ? (isActive ? 'nav-link-active' : 'nav-link') 
                      : (isActive ? 'text-black font-semibold' : 'text-black hover:text-black/80')
                    }
                  `}
                >
                  {item.title}
                </NavLink>
              )}

              {item.hasSubmenu && (
                <div className="absolute left-0 mt-2 w-48 origin-top-left invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {tourismSubmenu.map((subItem) => (
                      <a 
                        key={subItem.title}
                        href={subItem.path}
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-padang-blue-50 hover:text-padang-blue-600"
                      >
                        {subItem.icon}
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className={isScrolled ? 'text-gray-700' : 'text-black'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-700' : 'text-black'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white overflow-hidden"
          >
            <div className="container-padding py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.title}>
                  {item.hasSubmenu ? (
                    <>
                      <button 
                        className="flex items-center justify-between w-full py-2 text-gray-700"
                        onClick={() => setIsTourismOpen(!isTourismOpen)}
                      >
                        {item.title}
                        <ChevronDown 
                          className={`transition-transform ${isTourismOpen ? 'rotate-180' : ''}`} 
                          size={18} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isTourismOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-2 space-y-2 border-l-2 border-padang-blue-100"
                          >
                            {tourismSubmenu.map((subItem) => (
                              <a 
                                key={subItem.title}
                                href={subItem.path}
                                className="flex items-center gap-2 py-2 text-gray-600 hover:text-padang-blue-600"
                              >
                                {subItem.icon}
                                {subItem.title}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink 
                      to={item.path}
                      className={({ isActive }) => `block py-2 ${
                        isActive ? 'text-padang-blue-600 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {item.title}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;