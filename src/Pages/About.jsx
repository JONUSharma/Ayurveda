import { motion } from 'framer-motion';
import img4 from "/Images/img4.jpg"
export default function About() {
  return (
    <motion.div
      className="max-w-5xl mx-auto p-6  bg-green-200  bg-opacity-50 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold text-green-800 mb-6">About Our Clinic</h1>
      <p className="text-lg text-green-700 mb-4">
        At AyurVeda Clinic, we believe in restoring balance through the ancient wisdom of Ayurveda.
        Our serene environment and experienced practitioners offer personalized treatments to
        rejuvenate your body, mind, and spirit.
      </p>
      <img
        src={img4}
        alt="Clinic environment"
        className="rounded-lg shadow-lg my-6 mx-auto"
      />
      <h2 className="text-3xl font-semibold text-green-800 mt-8 mb-4">Our Philosophy</h2>
      <p className="text-lg text-green-700">
        We follow time-honored practices combined with modern approaches to promote holistic
        well-being. Every therapy and herbal remedy is curated to suit your individual constitution,
        ensuring natural and sustainable healing.
      </p>
    </motion.div>
  );
}
