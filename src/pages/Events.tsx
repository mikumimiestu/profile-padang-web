import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Users,
} from "lucide-react";

const Events = () => {
  useEffect(() => {
    document.title =
      "Events Kota Padang - Agenda Kegiatan & Festival di Kota Padang";
  }, []);

  // Events data
  const upcomingEvents = [
    {
      name: "Festival Tabuik",
      description:
        "Festival Tabuik adalah acara budaya yang sangat khas dan unik yang diadakan setiap tahun kalender Hijriah sebagai peringatan tragedi Karbala.",
      location: "Pantai Padang",
      date: "1 - 10+ Muharram",
      attendees: "10.000+ pengunjung",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Tabuik_festival.jpg",
    },
    {
      name: "Tour de Singkarak",
      description:
        "Balap sepeda internasional yang menantang melintasi pegunungan danau Singkarak dengan pemandangan alam yang memukau.",
      location: "Start: Kota Padang",
      date: "Juli - Agustus",
      attendees: "Ratusan atlet internasional",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Tour_De_Singkarak_2017_start.jpg",
    },
    {
      name: "Festival Siti Nurbaya",
      description:
        "Perayaan sastra dan budaya yang mengangkat karya Marah Rusli, penulis novel Siti Nurbaya, sekaligus memperingati HUT Kota Padang.",
      location: "Jembatan Siti Nurbaya",
      date: "Februari",
      attendees: "5.000+ pengunjung",
      image:
        "https://picture.triptrus.com/image/2025/01/festival-siti-nurbaya-2025.jpg",
    },
    {
      name: " HUT kota padang",
      description:
        "Perayaan ini memperingati peristiwa perlawanan masyarakat Padang terhadap penjajahan Belanda pada tahun 1669.",
      location: "Kota Padang",
      date: "7 Agustus",
      attendees: "15.000+ pengunjung",
      image:
        "https://semenpadang.co.id/images/post/0507181214_marching-band-sp-meriahkan-hut-ke-60-.jpg",
    },
  ];

  const eventCategories = [
    { name: "Festival Budaya", count: 8, icon: "🎭" },
    { name: "Olahraga", count: 5, icon: "🏆" },
    { name: "Musik & Seni", count: 6, icon: "🎵" },
    { name: "Kuliner", count: 4, icon: "🍽️" },
  ];

  const eventVenues = [
    {
      name: "Pantai Padang",
      location: "Sepanjang Pesisir Barat Kota",
      capacity: "Venue terbuka",
    },
    {
      name: "Taman Budaya Sumatera Barat",
      location: "Jl. Diponegoro No.12",
      capacity: "2.000 orang",
    },
    {
      name: "GOR H. Agus Salim",
      location: "Jl. Khatib Sulaiman",
      capacity: "5.000 orang",
    },
    {
      name: "Jembatan Siti Nurbaya",
      location: "Batang Arau",
      capacity: "Venue terbuka",
    },
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-700 py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-black">
          <img
            src="https://dinsos.padang.go.id/gb-file/uploads/02.jpg"
            alt="Events Kota Padang"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center">
            <div className="inline-flex items-center bg-white/20 text-white px-6 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="font-medium">Agenda Kegiatan</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Events <span className="text-blue-200">Kota Padang</span>
            </h1>
            <div className="w-24 h-1 bg-blue-300 mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Jadwal lengkap festival, pertunjukan, dan kegiatan menarik di Kota
              Padang
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Agenda <span className="text-blue-600">Mendatang</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jelajahi berbagai acara menarik yang akan diselenggarakan di Kota
            Padang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-gray-100">
              <div className="h-48 relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {event.name === "Tour de Singkarak" && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    <span>Internasional</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {event.name}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-red-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Waktu: {event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-green-500" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Highlights */}
        <div className="bg-blue-50 rounded-2xl p-10 mb-20 border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Keistimewaan <span className="text-blue-600">Festival</span> di
                Kota Padang
              </h3>

              <ul className="space-y-4">
                {[
                  "Perpaduan kearifan lokal dan kebudayaan Minangkabau",
                  "Lokasi strategis dengan panorama alam yang indah",
                  "Melibatkan partisipasi aktif masyarakat setempat",
                  "Dukungan penuh dari pemerintah kota",
                  "Menampilkan kesenian tradisional dan modern",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://i.pinimg.com/736x/e5/13/5e/e5135ea729afe0c7784e38cb3f283fae.jpg"
                alt="Festival Tabuik Padang"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6">
                <p className="text-white/90">
                  Festival Tabuik - salah satu tradisi budaya terbesar di Padang
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Categories */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Ragam <span className="text-blue-600">Kegiatan</span> di Padang
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {eventCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all border border-gray-100">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h4 className="font-bold text-lg mb-1">{category.name}</h4>
                <p className="text-blue-600 font-medium">
                  {category.count}+ Events
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Event Venues */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16">
              <div className="inline-flex items-center bg-green-50 text-green-600 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Lokasi Utama Event</span>
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Venue <span className="text-blue-600">Populer</span> di Padang
              </h3>

              <div className="space-y-4">
                {eventVenues.map((venue, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors group">
                    <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4 font-medium">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                        {venue.name}
                      </h4>
                      <p className="text-sm text-gray-500">{venue.location}</p>
                      <p className="text-xs text-blue-600 mt-1">
                        {venue.capacity}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 min-h-[400px] lg:min-h-full">
              <img
                src="https://sofyanhotel.com/wp-content/uploads/2018/08/Jembatan-Siti-nurbaya.jpg"
                alt="Venue Events Padang"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Closing Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Siap Menghadiri{" "}
            <span className="text-blue-600">Event di Kota Padang</span>?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Temukan kemeriahan festival dan acara menarik yang memperkenalkan
            budaya Minangkabau dan tradisi lokal.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-blue-700 transition-colors">
            Lihat Kalender Event Padang
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Events;
