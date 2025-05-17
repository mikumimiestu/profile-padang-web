import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';

const AboutPreview = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Kota Padang"
              subtitle="Ibukota Provinsi Sumatera Barat yang kaya akan keindahan alam dan budaya."
            >
              <div className="space-y-4 text-gray-700">
                <p>
                  Padang adalah ibukota Provinsi Sumatera Barat yang terletak di pantai barat Pulau Sumatera. 
                  Kota ini memiliki luas wilayah sekitar 694,96 km² dengan populasi lebih dari 900.000 jiwa.
                </p>
                <p>
                  Dikenal sebagai kota dengan kuliner yang lezat, terutama Nasi Padang yang telah mendunia. 
                  Selain itu, Padang juga memiliki keindahan alam yang luar biasa, mulai dari pantai-pantai 
                  yang indah hingga perbukitan yang hijau.
                </p>
                <p>
                  Masyarakat Padang menjunjung tinggi nilai-nilai budaya Minangkabau, dengan sistem kekerabatan 
                  matrilineal yang unik. Budaya dan tradisi mereka tercermin dalam berbagai aspek kehidupan, 
                  termasuk arsitektur, seni, dan kehidupan sehari-hari.
                </p>
              </div>
              
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <a href="/about" className="btn btn-primary">
                  Pelajari Lebih Lanjut
                </a>
              </motion.div>
            </SectionTitle>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <img 
                src="https://asset-2.tstatic.net/tribunpekanbarutravel/foto/bank/images/Kawasan-Pantai-Padang-Sumbar.jpg" 
                alt="Pantai Padang" 
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/18896438/pexels-photo-18896438/free-photo-of-traditional-house-thatched-roof-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Rumah Gadang" 
                className="w-full h-56 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.pexels.com/photos/5836429/pexels-photo-5836429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Kuliner Padang" 
                className="w-full h-56 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Festival Budaya" 
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;