import { motion } from 'framer-motion';
import SectionTitle from '../shared/SectionTitle';

const foods = [
  {
    name: 'Rendang',
    description: 'Hidangan daging yang dimasak dengan rempah-rempah kaya dan santan hingga kering.',
    image: 'https://images.pexels.com/photos/5836429/pexels-photo-5836429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Sate Padang',
    description: 'Sate dengan saus kental berbumbu yang khas dari Padang.',
    image: 'https://images.pexels.com/photos/8995688/pexels-photo-8995688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Gulai Ikan',
    description: 'Ikan yang dimasak dengan kuah santan kental dan bumbu rempah khas Padang.',
    image: 'https://images.pexels.com/photos/4553033/pexels-photo-4553033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Gulai Ayam',
    description: 'Ayam yang dimasak dengan bumbu rempah dan santan kental.',
    image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const CulinaryPreview = () => {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-padang-sand-100 rounded-full -mr-32 -mt-32 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-padang-blue-100 rounded-full -ml-48 -mb-48 opacity-50" />
      
      <div className="container-padding mx-auto relative z-10">
        <SectionTitle 
          title="Kuliner Lezat"
          subtitle="Padang terkenal dengan kulinernya yang kaya rempah dan cita rasa yang khas. Berikut beberapa hidangan yang wajib Anda coba."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {foods.map((food, index) => (
            <motion.div
              key={food.name}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:w-1/2 h-60 md:h-auto overflow-hidden">
                <img 
                  src={food.image} 
                  alt={food.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-padang-blue-700 mb-2">{food.name}</h3>
                <p className="text-gray-600 mb-4">{food.description}</p>
                <a 
                  href="/culinary"
                  className="text-padang-blue-600 font-medium hover:text-padang-blue-800 transition-colors inline-flex items-center mt-auto"
                >
                  Pelajari Lebih Lanjut
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
            href="/culinary"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jelajahi Kuliner Padang
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CulinaryPreview;