import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';

const tourismSpots = [
  {
    id: 'beaches',
    name: 'Pantai',
    places: [
      {
        title: 'Pantai Padang',
        description: 'Pantai yang terkenal dengan pemandangan matahari terbenam yang indah.',
        image: 'https://images.pexels.com/photos/15371815/pexels-photo-15371815/free-photo-of-aerial-shot-of-padang-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        title: 'Pantai Air Manis',
        description: 'Terkenal dengan legenda Batu Malin Kundang.',
        image: 'https://images.pexels.com/photos/635359/pexels-photo-635359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        title: 'Pantai Carolina',
        description: 'Pantai yang tenang dengan pasir putih yang bersih.',
        image: 'https://images.pexels.com/photos/1770775/pexels-photo-1770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  },
  {
    id: 'mountains',
    name: 'Pegunungan',
    places: [
      {
        title: 'Bukit Nobita',
        description: 'Bukit dengan pemandangan kota Padang yang menakjubkan.',
        image: 'https://images.pexels.com/photos/8908372/pexels-photo-8908372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        title: 'Gunung Padang',
        description: 'Jalur pendakian yang populer dengan pemandangan alam yang indah.',
        image: 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        title: 'Lembah Anai',
        description: 'Area konservasi dengan air terjun yang mengagumkan.',
        image: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  },
  {
    id: 'historical',
    name: 'Tempat Bersejarah',
    places: [
      {
        title: 'Jembatan Siti Nurbaya',
        description: 'Jembatan ikonik yang menghubungkan kota Padang dengan Gunung Padang.',
        image: 'https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        title: 'Museum Adityawarman',
        description: 'Museum yang menyimpan benda-benda bersejarah dari Sumatera Barat.',
        image: 'https://images.pexels.com/photos/3647137/pexels-photo-3647137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        title: 'Benteng Fort de Kock',
        description: 'Benteng peninggalan Belanda dengan nilai sejarah yang tinggi.',
        image: 'https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ],
  },
];

const TourismPreview = () => {
  const [activeTab, setActiveTab] = useState('beaches');
  
  return (
    <section className="section-padding bg-white">
      <div className="container-padding mx-auto">
        <SectionTitle 
          title="Destinasi Wisata"
          subtitle="Padang menawarkan berbagai destinasi wisata menarik, mulai dari pantai, pegunungan, hingga tempat-tempat bersejarah."
          center
        />
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {tourismSpots.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === category.id
                  ? 'bg-padang-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Content */}
        {tourismSpots.map((category) => (
          <div 
            key={category.id} 
            className={activeTab === category.id ? 'block' : 'hidden'}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.places.map((place, index) => (
                <motion.div
                  key={place.title}
                  className="card overflow-hidden h-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-padang-blue-700 mb-2">{place.title}</h3>
                    <p className="text-gray-600 mb-4">{place.description}</p>
                    <a 
                      href={`/tourism/#${category.id}`}
                      className="text-padang-blue-600 font-medium hover:text-padang-blue-800 transition-colors inline-flex items-center"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <motion.a
                href="/tourism"
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Semua Destinasi
              </motion.a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourismPreview;