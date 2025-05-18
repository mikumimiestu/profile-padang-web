import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, ChevronRight, Star, MapPin, Eye, Grid, Grid2X2, Grid3X3 } from 'lucide-react';

const Gallery = () => {
  useEffect(() => {
    document.title = 'Gallery Kota Padang - Keindahan Wisata Kota Padang';
  }, []);

  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
  const [activeCategory, setActiveCategory] = useState('Semua');

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      title: "Pantai Padang",
      description: "Pemandangan matahari terbenam di sepanjang pantai barat Sumatera",
      location: "Sepanjang Pesisir Barat Kota",
      category: "Alam",
      likes: 1250,
      views: 5600,
      photographer: "Budi Santoso",
      image: "https://img.okezone.com/content/2022/09/13/408/2666735/10-wisata-pantai-cantik-di-padang-pesonanya-bikin-jatuh-cinta-KsUSeHL3WX.jpg"
    },
    {
      id: 2,
      title: "Jembatan Siti Nurbaya",
      description: "Landmark ikonik yang menghubungkan pusat kota dengan Gunung Padang",
      location: "Batang Arau",
      category: "Landmark",
      likes: 980,
      views: 4300,
      photographer: "Rina Putri",
      image: "https://rentalmobilpadang.co.id/wp-content/uploads/2019/12/Jembatan-Siti-Nurbaya-1.jpg"
    },
    {
      id: 3,
      title: "Bukit Nobita",
      description: "Pemandangan kota Padang dari ketinggian dengan latar Samudera Hindia",
      location: "Air Manis, Padang Selatan",
      category: "Alam",
      likes: 1430,
      views: 6200,
      featured: true,
      photographer: "Deni Kurniawan",
      image: "https://images.bisnis.com/upload/img/a%20Lifestyle%20:)/bukit_nobita.jpg"
    },
    {
      id: 4,
      title: "Festival Tabuik",
      description: "Momen puncak perayaan tradisional Tabuik yang penuh warna",
      location: "Pantai Padang",
      category: "Budaya",
      likes: 1670,
      views: 7800,
      photographer: "Siti Rahma",
      image: "https://i.pinimg.com/originals/ad/cb/90/adcb90989579a59c3c4d83fa937201d9.jpg"
    },
    {
      id: 5,
      title: "Masjid Raya Sumatera Barat",
      description: "Arsitektur megah perpaduan Islam dan kearifan lokal Minangkabau",
      location: "Jl. Khatib Sulaiman",
      category: "Arsitektur",
      likes: 2100,
      views: 9400,
      featured: true,
      photographer: "Ahmad Fadli",
      image: "https://i.pinimg.com/originals/32/a8/ed/32a8ed7b77cf6f7000cdf962aa22f03a.jpg"
    },
    {
      id: 6,
      title: "Air Terjun Lembah Anai",
      description: "Pesona air terjun di kaki Gunung Tandikat dengan air yang jernih",
      location: "Kecamatan Tanjung Aur",
      category: "Alam",
      likes: 1560,
      views: 6700,
      photographer: "Lisa Paramita",
      image: "https://th.bing.com/th/id/OIP.cgLYYw4Th8gHlVB6cHMOWwHaE7?cb=iwc2&rs=1&pid=ImgDetMain"
    },
    {
      id: 7,
      title: "Rumah Gadang",
      description: "Arsitektur tradisional Minangkabau dengan atap gonjong khasnya",
      location: "Kawasan Wisata Bukittinggi",
      category: "Arsitektur",
      likes: 870,
      views: 3900,
      photographer: "Fajar Pratama",
      image: "https://th.bing.com/th/id/OIP.B3hMbw_CgiQ-_s3ptFAs0QHaE1?cb=iwc2&rs=1&pid=ImgDetMain"
    },
    {
      id: 8,
      title: "Rendang Padang",
      description: "Kuliner khas Minangkabau yang mendunia dengan rempah khasnya",
      location: "Pusat Kuliner Padang",
      category: "Kuliner",
      likes: 2340,
      views: 10200,
      featured: true,
      photographer: "Indah Permata",
      image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/13044906/resep-rendang-daging-khas-padang-yang-sehat-dan-menggugah-selera.jpg"
    }
  ];

  const categories = [
    { name: "Semua", count: galleryItems.length },
    { name: "Alam", count: galleryItems.filter(item => item.category === "Alam").length },
    { name: "Landmark", count: galleryItems.filter(item => item.category === "Landmark").length },
    { name: "Budaya", count: galleryItems.filter(item => item.category === "Budaya").length },
    { name: "Arsitektur", count: galleryItems.filter(item => item.category === "Arsitektur").length },
    { name: "Kuliner", count: galleryItems.filter(item => item.category === "Kuliner").length },
  ];

  const filteredItems = activeCategory === 'Semua' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const featuredItems = galleryItems.filter(item => item.featured);

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-700 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-black">
          <img 
            src="https://superlive.id/storage/articles/mobile/mobile_d6ab157f-c152-456b-bdbb-641664dd869f.jpg" 
            alt="Gallery Kota Padang" 
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
              <Camera className="w-5 h-5 mr-2" />
              <span className="font-medium">Koleksi Foto</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Gallery <span className="text-blue-200">Kota Padang</span>
            </h1>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Jelajahi keindahan wisata, budaya, dan pesona Kota Padang melalui lensa fotografi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-16 px-4 container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Foto <span className="text-blue-600">Unggulan</span>
            </h2>
            <p className="text-gray-600">
              Koleksi pilihan yang menghadirkan keindahan terbaik Kota Padang
            </p>
          </div>
          <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
            <span>Lihat Semua</span>
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featuredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-lg h-80"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-3 w-fit">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-white/80 text-sm mb-3">{item.description}</p>
                <div className="flex items-center text-white/70 text-sm">
                  <span className="flex items-center mr-4">
                    <Heart className="w-4 h-4 mr-1 text-red-400" />
                    {item.likes}
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-4 h-4 mr-1 text-blue-400" />
                    {item.views}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Main Section */}
        <div className="mb-10">
          <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Eksplorasi <span className="text-blue-600">Gallery</span>
            </h2>
            <div className="flex space-x-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-md ${viewMode === 'masonry' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeCategory === category.name 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className={`grid ${viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' 
            : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-max gap-6'}`}>
            
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 group
                  ${viewMode === 'masonry' && index % 3 === 0 ? 'row-span-2' : ''}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className={`w-full object-cover
                      ${viewMode === 'masonry' && index % 3 === 0 ? 'h-72' : 'h-48'}`}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white/80 text-blue-600 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-600/70 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1 mb-2">
                    <MapPin className="w-4 h-4 mr-1 text-red-500" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Foto oleh: {item.photographer}</span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Heart className="w-3 h-3 mr-1 text-red-400" />
                      {item.likes}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photography Tips */}
        <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 mb-20 border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Tips Fotografi <span className="text-blue-600">Destinasi Padang</span>
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Kunjungi Pantai Padang saat golden hour untuk hasil terbaik",
                  "Gunakan lensa wide untuk arsitektur Rumah Gadang",
                  "Cari sudut unik di Jembatan Siti Nurbaya",
                  "Eksplor Bukit Nobita untuk panorama kota terbaik",
                  "Tangkap momen autentik festival budaya lokal"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                  >
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://cdn.idntimes.com/content-images/community/2017/09/sunset-pantai-air-manis-03429c1daca7867db07e79f87767932b.jpg" 
                alt="Fotografi Pantai Padang"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6">
                <p className="text-white/90">Matahari terbenam di Pantai Padang - waktu terbaik untuk fotografi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Photographers */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10">
            Fotografer <span className="text-blue-600">Populer</span> Kota Padang
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Budi Santoso", specialty: "Landscape", photos: 120, followers: "10K+", image: "https://media.istockphoto.com/id/1182717077/photo/real-malaysian-man-with-happy-expression-looking-at-camera.jpg?s=612x612&w=0&k=20&c=GV2QVwjqFvuRZYnzhkQdsLUwOIzvvRZH_BwGkOt3YdI=" },
              { name: "Rina Putri", specialty: "Street", photos: 85, followers: "8.5K+", image: "https://th.bing.com/th/id/OIP.DWDpRDVdBzQJ2Hs5NzMlEwHaLH?cb=iwc2&rs=1&pid=ImgDetMain" },
              { name: "Ahmad Fadli", specialty: "Architecture", photos: 96, followers: "12K+", image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01hzwawwhzh8t2z7rayfc7agyy.jpg" },
              { name: "Siti Rahma", specialty: "Culture", photos: 110, followers: "9K+", image: "https://cdn.pixabay.com/photo/2024/02/18/09/00/ai-generated-8580798_1280.jpg" }
            ].map((photographer, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <img 
                    src={photographer.image} 
                    alt={photographer.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                    <Star className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-bold text-gray-800">{photographer.name}</h4>
                <p className="text-blue-600 text-sm">{photographer.specialty}</p>
                <p className="text-gray-500 text-xs mt-1">{photographer.photos} foto · {photographer.followers} pengikut</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Submit Photos Section */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center mb-20">
          <div className="max-w-xl mx-auto">
            <Camera className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Punya Foto Indah <span className="text-blue-600">Kota Padang</span>?
            </h3>
            <p className="text-gray-600 mb-8">
              Bagikan karya fotografi terbaikmu dan jadilah bagian dari gallery kami. Foto-foto terpilih akan ditampilkan di halaman utama.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors"
            >
              Unggah Foto Anda
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;