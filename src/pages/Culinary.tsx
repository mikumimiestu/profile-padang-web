import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Utensils, ChevronRight, Star, Flame, Clock, Map } from 'lucide-react';

const Culinary = () => {
  useEffect(() => {
    document.title = 'Kuliner Padang - Kelezatan Masakan Minangkabau';
  }, []);

  // Culinary data
  const popularFoods = [
    {
      name: "Rendang",
      description: "Rendang adalah masakan khas Minangkabau berbahan daging sapi yang dimasak lama dengan santan dan rempah. Rasanya kaya, gurih, dan pedas. Selain lezat, rendang juga punya makna budaya dan diakui sebagai salah satu makanan terenak di dunia.",
      origin: "Warisan Budaya UNESCO",
      level: "Pedas sedang",
      cookTime: "4-6 jam",
      image: "https://wallpapercave.com/wp/wp12249939.jpg"
    },
    {
      name: "Sate Padang",
      description: "Sate Padang adalah makanan khas Minangkabau yang terbuat dari daging sapi atau jeroan, dibakar lalu disajikan dengan kuah kental berbumbu rempah. Kuahnya yang khas, berwarna kuning atau kemerahan, punya rasa gurih dan pedas. Hidangan ini biasanya disajikan dengan lontong dan bawang goreng.",
      origin: "Khas Kota Padang",
      level: "Pedas",
      cookTime: "2-3 jam",
      image: "https://static.republika.co.id/uploads/images/inpicture_slide/0.30070000-1569219527-sate-padang-_161205102003-966.jpeg"
    },
    {
      name: "Dendeng Balado",
      description: "Dendeng balado adalah masakan khas Minangkabau yang terbuat dari irisan tipis daging sapi yang digoreng hingga kering, lalu disajikan dengan sambal cabai merah yang pedas dan sedikit asam. Sambalnya dibuat dari cabai merah, bawang merah, dan perasan jeruk nipis.",
      origin: "Sumatera Barat",
      level: "Sangat pedas",
      cookTime: "1-2 hari",
      image: "https://img.okezone.com/content/2021/02/26/301/2368632/dendeng-balado-pedesnya-nampol-banget-begini-resep-dan-cara-bikinnya-5k5eIj1HVT.jpg"
    },
    {
      name: "Gulai Ikan",
      description: "Gulai ikan Padang adalah masakan khas Minangkabau yang menggunakan ikan sebagai bahan utama, biasanya ikan kakap atau tongkol. Ikan dimasak dalam kuah santan yang kaya rempah seperti kunyit, jahe, lengkuas, serai, dan cabai, sehingga menghasilkan rasa yang gurih, pedas, dan aromatik.",
      origin: "Pesisir Sumatera",
      level: "Sedang",
      cookTime: "30-45 menit",
      image: "https://i.ytimg.com/vi/brPejxUYW54/maxresdefault.jpg"
    }
  ];

  const foodCategories = [
    { name: "Masakan Berkuah", count: 12, icon: "🍜" },
    { name: "Olahan Daging", count: 8, icon: "🍖" },
    { name: "Masakan Pedas", count: 15, icon: "🌶️" },
    { name: "Jajanan Tradisional", count: 5, icon: "🍡" }
  ];

  const restaurants = [
    {
      name: "Rumah Makan Sederhana",
      location: "Jl. Pondok No. 1 Padang",
      specialty: "Rendang & Gulai"
    },
    {
      name: "Sari Raso",
      location: "Jl. Batang Arau No. 69",
      specialty: "Sate Padang"
    },
    {
      name: "Lamun Ombak",
      location: "Kawasan Pantai Padang",
      specialty: "Seafood khas Minang"
    },
    {
      name: "Pagi Sore",
      location: "Multiple outlet",
      specialty: "Nasi Kapau"
    }
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="relative bg-amber-700 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-black">
          <img 
            src="https://th.bing.com/th/id/OIP.i7go3HB5rVStOk5_YSLyVAHaE8?pid=ImgDet&w=178&h=118&c=7&dpr=1,5" 
            alt="Kuliner Padang" 
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
            <div className="inline-flex items-center bg-white/20 text-white px-6 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Utensils className="w-5 h-5 mr-2" />
              <span className="font-medium">Kuliner Khas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Kuliner <span className="text-amber-200">Padang</span>
            </h1>
            <div className="w-24 h-1 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Kelezatan masakan Minangkabau yang mendunia dengan cita rasa rempah autentik
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular Foods */}
      <section className="py-16 px-4 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Hidangan <span className="text-amber-600">Legendaris</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jelajahi kekayaan kuliner Padang yang telah dikenal hingga mancanegara
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {popularFoods.map((food, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-gray-100"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={food.image} 
                  alt={food.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {food.name === "Rendang" && (
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    <span>UNESCO</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{food.name}</h3>
                <p className="text-gray-600 mb-4">{food.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-2">🌍</span>
                    <span>{food.origin}</span>
                  </div>
                  <div className="flex items-center">
                    <Flame className="w-4 h-4 mr-2 text-red-500" />
                    <span>Level: {food.level}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Waktu masak: {food.cookTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unique Features */}
        <div className="bg-amber-50 rounded-2xl p-10 mb-20 border border-amber-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Rahasia <span className="text-amber-600">Keunikan</span> Masakan Padang
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Bumbu rempah lengkap (kunyit, lengkuas, jahe, serai, cabai)",
                  "Teknik masak perlahan untuk hasil maksimal",
                  "Konsep 'hidang' - semua lauk disajikan sekaligus",
                  "Dominan rasa gurih, pedas, dan sedikit manis",
                  "Bahan dasar segar dari alam Sumatera"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                  >
                    <span className="bg-amber-100 text-amber-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://myweekendplan.asia/wp-content/uploads/2021/04/Beef-Rendang-Recipe.jpg" 
                alt="Proses Memasak Padang"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6">
                <p className="text-white/90"></p>
              </div>
            </div>
          </div>
        </div>

        {/* Food Categories */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Ragam <span className="text-amber-600">Kuliner</span> Padang
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {foodCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h4 className="font-bold text-lg mb-1">{category.name}</h4>
                <p className="text-amber-600 font-medium">{category.count}+ Variasi</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recommended Restaurants */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16">
              <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Map className="w-5 h-5 mr-2" />
                <span>Tempat Makan Terkenal</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Nikmati <span className="text-amber-600">Autentik</span> di Padang
              </h3>
              
              <div className="space-y-4">
                {restaurants.map((restaurant, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors group"
                  >
                    <div className="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 font-medium">
                      {i+1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium group-hover:text-amber-600 transition-colors">{restaurant.name}</h4>
                      <p className="text-sm text-gray-500">{restaurant.location}</p>
                      <p className="text-xs text-amber-600 mt-1">{restaurant.specialty}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 min-h-[400px] lg:min-h-full">
              <img 
                src="https://radarlampung.disway.id/upload/878b953ed26b0ce64cfa0b7ca53217a6.jpg" 
                alt="Rumah Makan Padang"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Siap Menjelajahi <span className="text-amber-600">Kuliner Padang</span>?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Temukan kelezatan sebenarnya dari masakan Minangkabau yang telah mendunia
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-amber-700 transition-colors"
          >
            Lihat Peta Kuliner Padang
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Culinary;