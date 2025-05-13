import { Camera, Utensils, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';

const highlights = [
  {
    title: "Destinasi Wisata Memukau",
    description: "Nikmati keindahan pantai, pegunungan, dan tempat-tempat bersejarah di Kota Padang.",
    icon: <MapPin size={32} className="text-padang-blue-500" />,
    link: "/tourism",
    image: "https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Kuliner Lezat khas Padang",
    description: "Rasakan cita rasa masakan Padang yang mendunia dengan berbagai pilihan hidangan lezat.",
    icon: <Utensils size={32} className="text-padang-blue-500" />,
    link: "/culinary",
    image: "https://images.pexels.com/photos/5836429/pexels-photo-5836429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Budaya & Tradisi Minangkabau",
    description: "Pelajari kekayaan budaya dan tradisi Minangkabau yang dijunjung tinggi oleh masyarakat.",
    icon: <Camera size={32} className="text-padang-blue-500" />,
    link: "/culture",
    image: "https://images.pexels.com/photos/18896438/pexels-photo-18896438/free-photo-of-traditional-house-thatched-roof-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Acara & Festival Menarik",
    description: "Ikuti berbagai acara dan festival menarik yang diselenggarakan sepanjang tahun di Kota Padang.",
    icon: <Calendar size={32} className="text-padang-blue-500" />,
    link: "/events",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="section-padding bg-white">
      <div className="container-padding mx-auto">
        <SectionTitle 
          title="Highlights Kota Padang"
          subtitle="Temukan keunikan dan keindahan Kota Padang melalui berbagai pilihan wisata, kuliner, budaya, dan acara menarik."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="card h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-padang-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a 
                  href={item.link}
                  className="text-padang-blue-600 font-medium hover:text-padang-blue-800 transition-colors inline-flex items-center"
                >
                  Explore 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;