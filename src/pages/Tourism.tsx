import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Map, MapPin, Compass, Info } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';
import PhotoCard from '../components/shared/PhotoCard';

// Tourism data
const categories = [
  {
    id: 'beaches',
    name: 'Pantai',
    icon: <Map size={20} />,
  },
  {
    id: 'mountains',
    name: 'Pegunungan & Air Terjun',
    icon: <Compass size={20} />,
  },
  {
    id: 'historical',
    name: 'Tempat Bersejarah',
    icon: <Info size={20} />,
  },
  {
    id: 'parks',
    name: 'Taman & Rekreasi',
    icon: <MapPin size={20} />,
  }
];

const tourismData = {
  beaches: [
    {
      title: 'Pantai Padang',
      description: 'Pantai yang terkenal dengan pemandangan matahari terbenam yang menakjubkan.',
      image: 'https://images.pexels.com/photos/15371815/pexels-photo-15371815/free-photo-of-aerial-shot-of-padang-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kota Padang',
      details: 'Pantai Padang terletak di pusat kota dan merupakan destinasi favorit warga kota untuk menikmati sore hari. Dengan panjang sekitar 7 km, pantai ini menawarkan pemandangan yang indah, terutama saat matahari terbenam.',
    },
    {
      title: 'Pantai Air Manis',
      description: 'Tempat legendaris batu Malin Kundang dengan pemandangan indah.',
      image: 'https://images.pexels.com/photos/635359/pexels-photo-635359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Padang Selatan',
      details: 'Pantai Air Manis terkenal dengan legenda Malin Kundang, seorang anak yang dikutuk menjadi batu karena durhaka kepada ibunya. Pengunjung dapat melihat batu yang konon adalah tubuh Malin Kundang yang telah membatu.',
    },
    {
      title: 'Pantai Carolina',
      description: 'Pantai yang tenang dengan pasir putih dan air jernih.',
      image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Bungus Teluk Kabung',
      details: 'Pantai Carolina menawarkan suasana yang lebih tenang dibandingkan dengan pantai-pantai lain di Padang. Dengan pasir putihnya yang bersih dan air laut yang jernih, pantai ini cocok untuk berenang dan bersantai.',
    },
    {
      title: 'Pantai Pasir Jambak',
      description: 'Pantai dengan pasir putih yang luas dan belum terlalu ramai.',
      image: 'https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Koto Tangah',
      details: 'Pantai Pasir Jambak terkenal dengan hamparan pasir putihnya yang luas dan suasana yang masih relatif sepi. Pantai ini cocok bagi mereka yang mencari ketenangan dan privasi.',
    },
  ],
  mountains: [
    {
      title: 'Bukit Nobita',
      description: 'Bukit dengan pemandangan kota Padang yang spektakuler.',
      image: 'https://images.pexels.com/photos/8908372/pexels-photo-8908372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Lubuk Begalung',
      details: 'Bukit Nobita menawarkan pemandangan panorama Kota Padang dari ketinggian. Tempat ini sangat populer bagi pemburu foto matahari terbit dan terbenam.',
    },
    {
      title: 'Air Terjun Lembah Anai',
      description: 'Air terjun menakjubkan di tengah hutan hujan tropis.',
      image: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Perbatasan Kota Padang',
      details: 'Air Terjun Lembah Anai terletak di kawasan cagar alam dan memiliki ketinggian sekitar 30 meter. Airnya yang sejuk dan pemandangan hutan di sekitarnya membuat tempat ini menjadi tujuan favorit untuk melepas penat.',
    },
    {
      title: 'Gunung Padang',
      description: 'Gunung dengan jalur pendakian yang populer di kalangan pendaki.',
      image: 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Padang Barat',
      details: 'Gunung Padang menawarkan jalur pendakian yang relatif mudah dan cocok untuk pemula. Dari puncaknya, pengunjung dapat menikmati pemandangan Kota Padang dan laut lepas.',
    },
    {
      title: 'Air Terjun Lubuak Hitam',
      description: 'Air terjun tersembunyi dengan kolam alami yang menyegarkan.',
      image: 'https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Lubuk Kilangan',
      details: 'Air Terjun Lubuak Hitam merupakan air terjun yang masih alami dan belum banyak dikunjungi wisatawan. Airnya yang jernih dan sejuk sangat menyegarkan, terutama di musim panas.',
    },
  ],
  historical: [
    {
      title: 'Jembatan Siti Nurbaya',
      description: 'Jembatan ikonik yang menghubungkan kota Padang dengan Gunung Padang.',
      image: 'https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Padang Selatan',
      details: 'Jembatan Siti Nurbaya dibangun pada tahun 1970 dan dinamai sesuai dengan tokoh utama dalam novel "Siti Nurbaya" karya Marah Rusli. Jembatan ini menyeberangi Sungai Batang Arau dan menghubungkan pusat kota dengan Gunung Padang.',
    },
    {
      title: 'Museum Adityawarman',
      description: 'Museum yang menyimpan benda-benda bersejarah dari Sumatera Barat.',
      image: 'https://images.pexels.com/photos/3647137/pexels-photo-3647137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Padang Utara',
      details: 'Museum Adityawarman didirikan pada tahun 1977 dan dinamai sesuai dengan Raja Adityawarman yang pernah memerintah Kerajaan Pagaruyung. Museum ini menyimpan berbagai koleksi benda bersejarah, seni, dan budaya Minangkabau.',
    },
    {
      title: 'Benteng Fort de Kock',
      description: 'Benteng peninggalan Belanda yang menyimpan sejarah kolonial.',
      image: 'https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Padang Barat',
      details: 'Benteng Fort de Kock dibangun oleh Belanda pada abad ke-19 sebagai pertahanan terhadap serangan lokal. Dari benteng ini, pengunjung dapat melihat pemandangan Kota Padang dari ketinggian.',
    },
    {
      title: 'Jam Gadang Padang',
      description: 'Jam menara ikonik yang menjadi simbol Kota Padang.',
      image: 'https://images.pexels.com/photos/69903/pexels-photo-69903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Padang Barat',
      details: 'Jam Gadang Padang adalah salah satu bangunan bersejarah yang menjadi ikon Kota Padang. Dibangun pada masa kolonial Belanda, jam ini masih berfungsi hingga saat ini dan menjadi objek wisata populer.',
    },
  ],
  parks: [
    {
      title: 'Taman Melati',
      description: 'Taman kota yang asri dengan berbagai fasilitas rekreasi.',
      image: 'https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Padang Utara',
      details: 'Taman Melati adalah salah satu taman kota di Padang yang dilengkapi dengan berbagai fasilitas rekreasi seperti area bermain anak, jogging track, dan gazebo untuk bersantai.',
    },
    {
      title: 'Taman Imam Bonjol',
      description: 'Taman yang terletak di pusat kota dengan monumen bersejarah.',
      image: 'https://images.pexels.com/photos/460680/pexels-photo-460680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Padang Barat',
      details: 'Taman Imam Bonjol dinamai sesuai dengan pahlawan nasional Tuanku Imam Bonjol. Taman ini sering menjadi tempat berkumpul warga kota dan berbagai kegiatan sosial.',
    },
    {
      title: 'Kebun Binatang Bukittinggi',
      description: 'Kebun binatang tertua di Indonesia dengan berbagai koleksi satwa.',
      image: 'https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Dekat Kota Padang',
      details: 'Meskipun terletak di Bukittinggi, kebun binatang ini sering dikunjungi oleh wisatawan yang berkunjung ke Padang. Kebun binatang ini memiliki berbagai koleksi satwa dan menawarkan pemandangan yang indah.',
    },
    {
      title: 'Taman Muaro Lasak',
      description: 'Taman tepi pantai dengan pemandangan laut yang indah.',
      image: 'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'Kecamatan Padang Barat',
      details: 'Taman Muaro Lasak terletak di tepi Pantai Padang dan menawarkan berbagai fasilitas rekreasi serta kuliner. Taman ini ramai dikunjungi pada sore hari untuk menikmati matahari terbenam.',
    },
  ],
};

const Tourism = () => {
  const [activeCategory, setActiveCategory] = useState('beaches');
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  useEffect(() => {
    document.title = 'Destinasi Wisata Kota Padang';
    
    // Set active category based on hash
    const hash = window.location.hash.substring(1);
    if (hash && categories.some(cat => cat.id === hash)) {
      setActiveCategory(hash);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-20 px-4" style={{ backgroundImage: 'url(https://images.pexels.com/photos/15371815/pexels-photo-15371815/free-photo-of-aerial-shot-of-padang-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Destinasi Wisata
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Jelajahi keindahan alam dan tempat-tempat menarik di Kota Padang dan sekitarnya.
          </motion.p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-8 sticky top-16 z-30 shadow-md">
        <div className="container-padding mx-auto">
          <div className="flex overflow-x-auto pb-2 hide-scrollbar gap-4 justify-center">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className={`flex items-center px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-padang-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(category.id);
                  const element = document.getElementById(category.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  // Update URL hash without scrolling
                  window.history.pushState(null, '', `#${category.id}`);
                }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-padding mx-auto py-12">
        {/* Beaches */}
        <section id="beaches" className="mb-16">
          <SectionTitle 
            title="Pantai"
            subtitle="Nikmati keindahan pantai-pantai di Kota Padang dengan pemandangan matahari terbenam yang menakjubkan."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourismData.beaches.map((place, index) => (
              <div 
                key={place.title} 
                onClick={() => setSelectedPlace(place)}
                className="cursor-pointer"
              >
                <PhotoCard 
                  imageUrl={place.image} 
                  title={place.title} 
                  description={place.description}
                  delay={index}
                />
              </div>
            ))}
          </div>
        </section>
        
        {/* Mountains */}
        <section id="mountains" className="mb-16">
          <SectionTitle 
            title="Pegunungan & Air Terjun"
            subtitle="Jelajahi keindahan alam pegunungan dan air terjun di sekitar Kota Padang."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourismData.mountains.map((place, index) => (
              <div 
                key={place.title} 
                onClick={() => setSelectedPlace(place)}
                className="cursor-pointer"
              >
                <PhotoCard 
                  imageUrl={place.image} 
                  title={place.title} 
                  description={place.description}
                  delay={index}
                />
              </div>
            ))}
          </div>
        </section>
        
        {/* Historical */}
        <section id="historical" className="mb-16">
          <SectionTitle 
            title="Tempat Bersejarah"
            subtitle="Kunjungi tempat-tempat bersejarah di Kota Padang yang menyimpan cerita masa lalu."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourismData.historical.map((place, index) => (
              <div 
                key={place.title} 
                onClick={() => setSelectedPlace(place)}
                className="cursor-pointer"
              >
                <PhotoCard 
                  imageUrl={place.image} 
                  title={place.title} 
                  description={place.description}
                  delay={index}
                />
              </div>
            ))}
          </div>
        </section>
        
        {/* Parks */}
        <section id="parks" className="mb-16">
          <SectionTitle 
            title="Taman & Rekreasi"
            subtitle="Bersantai di taman-taman kota dan tempat rekreasi di Kota Padang."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourismData.parks.map((place, index) => (
              <div 
                key={place.title} 
                onClick={() => setSelectedPlace(place)}
                className="cursor-pointer"
              >
                <PhotoCard 
                  imageUrl={place.image} 
                  title={place.title} 
                  description={place.description}
                  delay={index}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Travel Tips */}
      <section className="bg-gray-50 py-16">
        <div className="container-padding mx-auto">
          <SectionTitle 
            title="Tips Perjalanan"
            subtitle="Beberapa tips yang berguna untuk perjalanan Anda di Kota Padang."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "Waktu Terbaik untuk Berkunjung",
                content: "Waktu terbaik untuk mengunjungi Kota Padang adalah selama musim kemarau (April hingga Oktober). Hindari musim hujan (November hingga Maret) karena dapat mengganggu aktivitas outdoor Anda.",
              },
              {
                title: "Transportasi",
                content: "Anda dapat menggunakan angkutan umum seperti angkot atau bus untuk berkeliling kota. Namun, untuk kenyamanan lebih, Anda dapat menyewa mobil atau menggunakan layanan ojek online.",
              },
              {
                title: "Penginapan",
                content: "Kota Padang memiliki berbagai pilihan penginapan, mulai dari hotel berbintang hingga homestay yang lebih ekonomis. Pastikan untuk memesan jauh hari, terutama saat musim liburan.",
              },
              {
                title: "Kuliner",
                content: "Jangan lewatkan kuliner khas Padang seperti Rendang, Sate Padang, dan Nasi Kapau. Cari rumah makan yang ramai oleh penduduk lokal untuk mendapatkan cita rasa yang autentik.",
              },
              {
                title: "Budaya Lokal",
                content: "Hormati budaya dan adat istiadat lokal. Masyarakat Padang mayoritas beragama Islam, jadi berpakaian sopan dan menghormati waktu ibadah adalah hal yang penting.",
              },
              {
                title: "Oleh-oleh",
                content: "Bawa pulang oleh-oleh khas Padang seperti keripik sanjai, rendang kemasan, atau kain songket Minangkabau sebagai kenang-kenangan dari perjalanan Anda.",
              },
            ].map((tip, index) => (
              <motion.div 
                key={tip.title}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-padang-blue-700 mb-4">{tip.title}</h3>
                <p className="text-gray-700">{tip.content}</p>
              </motion.div>
            ))}
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
            Rencanakan Kunjungan Anda
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Jelajahi keindahan Kota Padang dan rasakan pengalaman liburan yang tak terlupakan.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <a href="/gallery" className="btn bg-white text-padang-blue-700 hover:bg-gray-100">
              Lihat Galeri
            </a>
            <a href="/contact" className="btn bg-padang-blue-600 text-white border border-white hover:bg-padang-blue-800">
              Hubungi Kami
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal for place details */}
      {selectedPlace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={() => setSelectedPlace(null)}>
          <motion.div 
            className="bg-white rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={selectedPlace.image} 
                alt={selectedPlace.title} 
                className="w-full h-full object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setSelectedPlace(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <h3 className="text-2xl font-semibold text-padang-blue-700 mb-2">{selectedPlace.title}</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={16} className="mr-1" />
                <span>{selectedPlace.location}</span>
              </div>
              <p className="text-gray-700 mb-4">{selectedPlace.details}</p>
              <div className="flex justify-end">
                <button 
                  className="btn btn-primary"
                  onClick={() => setSelectedPlace(null)}
                >
                  Tutup
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Tourism;