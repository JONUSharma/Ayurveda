import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import img1 from "/Images/img4.jpg"
import img2 from "/Images/img5.jpg"
import img3 from "/Images/img6.jpg"
import img4 from "/Images/img7.jpg"
export default function Hero() {
  const images = [
    img1,
    img2, img3,
    img4
  ];

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded ">
      {/* Background image slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full "
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center bg-opacity-55"
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900 bg-opacity-50 flex items-center justify-center z-10">
        <motion.div
          className="text-center text-white px-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to AyurVeda Healing</h1>
          <p className="text-lg md:text-xl mb-8">Your Path to Natural Wellness</p>
          <a href="/appointment">
            <button className="bg-green-600 hover:bg-green-700 transition text-white py-3 px-6 rounded shadow">
              Book Your Healing Session
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
