import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/shared/SectionTitle';
import { Map, Users, BookOpen, Building, Utensils, Landmark, Music, Palmtree } from 'lucide-react';

const Culture = () => {
  useEffect(() => {
    document.title = 'Budaya Kota Padang - Adat & Tradisi Minangkabau';
  }, []);

  // Cultural data
  const culturalHighlights = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Kuliner Legendaris",
      description: "Rendang, Sate Padang, Gulai Itiak, dan berbagai masakan Minang yang mendunia",
      image: "https://wallpapercave.com/wp/wp12249939.jpg"
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Rumah Gadang",
      description: "Arsitektur tradisional dengan atap gonjong yang ikonik",
      image: "https://www.ruparupa.com/blog/wp-content/uploads/2022/02/keunikan-rumah-gadang.jpeg"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sistem Matrilineal",
      description: "Warisan dan garis keturunan mengikuti pihak ibu",
      image: "https://packagepadang.com/wp-content/uploads/2024/08/Sejarah-dari-sistem-matrilineal-di-Minangkabau.jpg"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Seni Tradisional",
      description: "Tari Piring, Saluang, Randai, dan berbagai kesenian Minang",
      image: "https://cnc-magazine.oramiland.com/parenting/images/Keunikan_Tari_Piring.width-800.format-webp.webp"
    }
  ];

  const historicalPlaces = [
    {
      name: "Museum Adityawarman",
      description: "Museum budaya Minangkabau dengan koleksi benda-benda bersejarah",
      image: "https://mediaim.expedia.com/destination/2/3f791ed326b568ed634be5be05cffe75.jpg"
    },
    {
      name: "Pantai Padang",
      description: "Tempat wisata ikonik dengan sunset terindah dan jejak sejarah kolonial",
      image: "https://cdn0-production-images-kly.akamaized.net/JThT4hKPJiwFCNh0qDAcWJ6_4vs=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2762292/original/046020400_1553671627-pantai-padang.jpg"
    },
    {
      name: "Masjid Raya Sumatera Barat",
      description: "Masjid megah dengan arsitektur perpaduan modern dan tradisional Minang",
      image: "https://ik.imagekit.io/tvlk/blog/2024/07/shutterstock_2367961491.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2"
    }
  ];

  return (
    <div className="pt-16 bg-gradient-to-b bg-white">
      {/* Hero Section */}
      <section className="relative bg-padang-blue-800 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-black">
          <img 
            src="https://radarmukomuko.disway.id/upload/08577a1f68ed7fb6bd8089b8a0271c4e.jpg" 
            alt="Tari Piring Padang" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-minang">
              Budaya Padang
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Mengenal lebih dekat kekayaan adat Minangkabau di kota pantai yang memesona
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cultural Intro */}
      <section className="py-16 px-4 container mx-auto">
        <div className="text-center mb-16">
          <SectionTitle 
            icon={<BookOpen className="w-6 h-6 text-amber-600" />} 
            title="Adat Basandi Syarak, Syarak Basandi Kitabullah"
            subtitle="Filosofi hidup masyarakat Minangkabau"
          />
          
          <motion.p 
            className="text-lg text-gray-700 mt-6 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Kota Padang sebagai pintu gerbang Sumatera Barat menyimpan warisan budaya Minangkabau yang kaya. 
            Dari rumah gadang dengan atap gonjongnya, sistem kekerabatan matrilineal, hingga kuliner yang 
            mendunia, Padang memancarkan pesona budaya yang unik dan memikat.
          </motion.p>
        </div>

        {/* Cultural Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {culturalHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-amber-600 mb-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Traditional House */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-minang">
                Rumah Gadang
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Rumah Gadang adalah rumah tradisional Minangkabau dengan atap bergonjong menyerupai tanduk kerbau. 
                Strukturnya tahan gempa dengan sistem pasak tanpa paku. Rumah ini mencerminkan sistem matrilineal 
                dimana kamar disusun menurut garis keturunan ibu.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Atap gonjong melambangkan tanduk kerbau dari legenda Minangkabau</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Ukiran bermotif alam mencerminkan filosofi hidup masyarakat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Ruang bawah untuk musyawarah dan ruang atas untuk tempat tinggal</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://asset.kompas.com/crops/IU5Fr9hycf0_vV0LlrfVi80dk1s=/21x7:963x635/1200x800/data/photo/2021/09/01/612f052b1aae1.jpg" 
                alt="Rumah Gadang"
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* Historical Places */}
        <SectionTitle 
          icon={<Landmark className="w-6 h-6 text-amber-600" />} 
          title="Tempat Bersejarah di Padang"
          subtitle="Menyusuri jejak masa lalu kota ini"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {historicalPlaces.map((place, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg h-[400px]"
            >
              <img 
                src={place.image} 
                alt={place.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culinary Section */}
        <div className="bg-amber-50 rounded-2xl p-10 mb-20 border border-amber-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                icon={<Utensils className="w-6 h-6 text-amber-700" />} 
                title="Kuliner Khas Padang"
                subtitle="Rasa yang mendunia"
                className="mb-8 text-left"
              />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Masakan Padang terkenal dengan cita rasa rempah yang kuat dan teknik memasak yang unik. 
                Proses memasak yang lama membuat bumbu meresap sempurna. Makanan disajikan secara prasmanan 
                dengan konsep "hidang" dimana semua lauk disajikan sekaligus.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {['Rendang', 'Sate Padang', 'Dendeng Balado', 'Gulai Ikan', 'Ayam Pop', 'Itiak Lado Mudo'].map((food, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-800"
                  >
                    <span className="text-amber-600 mr-2">•</span>
                    <span>{food}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1,2,3,4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-xl overflow-hidden shadow-md ${i === 1 ? 'row-span-2' : ''}`}
                >
                  <img 
                    src={`https://images.pexels.com/photos/${7259904 + i}/pexels-photo-${7259904 + i}.jpeg`} 
                    alt={`Masakan Padang ${i}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Cultural Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-padang-blue-800 rounded-2xl p-12 text-center text-white mb-20"
        >
          <Palmtree className="w-12 h-12 mx-auto text-yellow-400 mb-6" />
          <blockquote className="text-2xl italic font-light max-w-3xl mx-auto leading-relaxed">
            "Alam takambang jadi guru - Alam terkembang menjadi guru. Filosofi Minang yang mengajarkan kita belajar dari alam sekitar."
          </blockquote>
          <p className="mt-6 text-yellow-200">- Petatah Petitih Minangkabau</p>
        </motion.div>
      </section>
    </div>
  );
};

export default Culture;