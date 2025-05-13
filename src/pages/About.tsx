import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/shared/SectionTitle';
import { Map, Users, BookOpen, Building } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = 'Tentang Kota Padang - Sejarah & Informasi';
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-padang-blue-800 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/15371815/pexels-photo-15371815/free-photo-of-aerial-shot-of-padang-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Padang City" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tentang Kota Padang
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Mengenal lebih dekat ibukota Provinsi Sumatera Barat yang kaya akan sejarah, budaya, dan keindahan alam.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container-padding mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle title="Sekilas Kota Padang" />
              <div className="space-y-4 text-gray-700">
                <p>
                  Kota Padang adalah ibukota Provinsi Sumatera Barat yang terletak di pantai barat Pulau Sumatera, Indonesia. 
                  Kota ini memiliki luas wilayah sekitar 694,96 km² dengan populasi lebih dari 900.000 jiwa.
                </p>
                <p>
                  Sebagai pusat ekonomi dan pendidikan di Sumatera Barat, Padang memiliki pelabuhan laut dan bandara internasional 
                  yang menghubungkannya dengan kota-kota lain di Indonesia dan luar negeri.
                </p>
                <p>
                  Kota Padang terkenal dengan kuliner khasnya, seperti Rendang dan Nasi Padang yang telah mendunia. Selain itu, 
                  kota ini juga kaya akan keindahan alam dan warisan budaya Minangkabau yang unik.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/15371815/pexels-photo-15371815/free-photo-of-aerial-shot-of-padang-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Kota Padang" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding mx-auto">
          <SectionTitle 
            title="Fakta Singkat" 
            subtitle="Beberapa informasi penting tentang Kota Padang"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {[
              {
                icon: <Map size={36} className="text-padang-blue-500" />,
                title: "Geografi",
                facts: [
                  "Luas: 694,96 km²",
                  "Terletak di pantai barat Sumatera",
                  "11 Kecamatan",
                  "104 Kelurahan",
                ]
              },
              {
                icon: <Users size={36} className="text-padang-blue-500" />,
                title: "Demografi",
                facts: [
                  "Populasi: > 900.000 jiwa",
                  "Mayoritas suku Minangkabau",
                  "Bahasa: Indonesia & Minang",
                  "Agama: Mayoritas Islam",
                ]
              },
              {
                icon: <BookOpen size={36} className="text-padang-blue-500" />,
                title: "Sejarah",
                facts: [
                  "Didirikan pada abad ke-17",
                  "Pernah menjadi pusat perdagangan",
                  "Terdampak gempa bumi 2009",
                  "Kota tertua di Sumatera Barat",
                ]
              },
              {
                icon: <Building size={36} className="text-padang-blue-500" />,
                title: "Ekonomi",
                facts: [
                  "Pusat perdagangan Sumatera Barat",
                  "Sektor utama: jasa & perdagangan",
                  "Memiliki pelabuhan internasional",
                  "Pariwisata berkembang pesat",
                ]
              },
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-padang-blue-700 mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.facts.map((fact, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-padang-blue-500 mr-2">•</span>
                      <span className="text-gray-700">{fact}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="container-padding mx-auto">
          <SectionTitle 
            title="Sejarah Kota Padang" 
            subtitle="Perjalanan Kota Padang dari masa ke masa"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-2 space-y-6 text-gray-700"
            >
              <div>
                <h3 className="text-xl font-semibold text-padang-blue-700 mb-2">Masa Awal</h3>
                <p>
                  Padang mulai dikenal sebagai pelabuhan dagang kecil pada abad ke-16. Pada masa itu, daerah ini masih berupa perkampungan 
                  kecil yang dihuni oleh masyarakat Minangkabau yang mengandalkan hasil bumi dan perikanan sebagai sumber mata pencaharian.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-padang-blue-700 mb-2">Masa Kolonial</h3>
                <p>
                  Pada tahun 1667, Belanda (VOC) mendirikan pos dagang di Padang. Kota ini kemudian berkembang menjadi pusat perdagangan penting 
                  di pantai barat Sumatera. Pada masa penjajahan Belanda, Padang menjadi pusat pemerintahan Karesidenan Sumatera Barat.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-padang-blue-700 mb-2">Masa Kemerdekaan</h3>
                <p>
                  Setelah Indonesia merdeka, Padang ditetapkan sebagai ibukota Provinsi Sumatera Tengah. Pada tahun 1957, Padang resmi menjadi 
                  ibukota Provinsi Sumatera Barat setelah Provinsi Sumatera Tengah dibagi menjadi tiga provinsi.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-padang-blue-700 mb-2">Era Modern</h3>
                <p>
                  Kota Padang terus berkembang sebagai pusat ekonomi, pendidikan, dan kebudayaan di Sumatera Barat. Namun, kota ini juga pernah 
                  mengalami bencana gempa bumi besar pada tahun 2009 yang mengakibatkan kerusakan parah di beberapa wilayah.
                </p>
                <p className="mt-2">
                  Saat ini, Kota Padang sedang giat membangun berbagai infrastruktur dan mulai fokus pada pengembangan sektor pariwisata dengan 
                  memanfaatkan potensi keindahan alam dan kekayaan budaya yang dimiliki.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="sticky top-20 space-y-4">
                <img 
                  src="https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Bangunan Bersejarah" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <img 
                  src="https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Jembatan Bersejarah" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding mx-auto">
          <SectionTitle 
            title="Pemerintahan" 
            subtitle="Struktur pemerintahan dan administrasi Kota Padang"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-10">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-padang-blue-700 mb-4">Struktur Pemerintahan</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-padang-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Walikota dan Wakil Walikota</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-padang-blue-500 mr-2">•</span>
                      <span className="text-gray-700">DPRD Kota Padang</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-padang-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Satuan Kerja Perangkat Daerah (SKPD)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-padang-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Kecamatan (11 Kecamatan)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-padang-blue-500 mr-2">•</span>
                      <span className="text-gray-700">Kelurahan (104 Kelurahan)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-padang-blue-700 mb-4">Kecamatan</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Bungus Teluk Kabung",
                      "Lubuk Kilangan",
                      "Lubuk Begalung",
                      "Padang Selatan",
                      "Padang Timur",
                      "Padang Barat",
                      "Padang Utara",
                      "Nanggalo",
                      "Kuranji",
                      "Pauh",
                      "Koto Tangah",
                    ].map((kecamatan, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-padang-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{kecamatan}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-padang-blue-700 mb-4">Visi dan Misi</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-padang-blue-600">Visi:</h4>
                    <p className="text-gray-700">"Mewujudkan Kota Padang sebagai Kota Pendidikan, Perdagangan, dan Pariwisata yang Sejahtera, Religius, dan Berbudaya."</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-padang-blue-600">Misi:</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <span className="text-padang-blue-500 mr-2">1.</span>
                        <span className="text-gray-700">Meningkatkan kualitas sumber daya manusia berbasis pendidikan, kesehatan dan kebudayaan.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-padang-blue-500 mr-2">2.</span>
                        <span className="text-gray-700">Meningkatkan kesejahteraan masyarakat dan pengentasan kemiskinan.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-padang-blue-500 mr-2">3.</span>
                        <span className="text-gray-700">Mewujudkan Kota Padang yang nyaman, aman, dan menarik sebagai kota perdagangan dan pariwisata.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-padang-blue-500 mr-2">4.</span>
                        <span className="text-gray-700">Meningkatkan tata kelola pemerintahan yang baik, bersih, dan melayani.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-padang-blue-700 text-white">
        <div className="container-padding mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Jelajahi Keindahan Kota Padang
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Temukan pesona keindahan alam, kekayaan budaya, dan kelezatan kuliner yang ditawarkan oleh Kota Padang.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <a href="/tourism" className="btn bg-white text-padang-blue-700 hover:bg-gray-100">
              Destinasi Wisata
            </a>
            <a href="/culinary" className="btn bg-padang-blue-600 text-white border border-white hover:bg-padang-blue-800">
              Kuliner Lezat
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;