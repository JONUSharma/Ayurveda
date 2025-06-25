import { motion } from 'framer-motion';
import sameer from "/Images/sameera.webp"
import sneha from "/Images/sneha patil.jpg"
import arti from "/Images/pach_doctor.webp"
import rajiv from "/Images/herbal_doctor.webp"
export default function Doctors() {
  const doctors = [
    {
      name: 'Dr. Aarti Sharma',
      specialty: 'Panchakarma Expert',
      image: arti,
      qualifications: 'BAMS, MD (Ayurveda)',
      experience: '12 Years',
      bio: 'Specializes in detox therapies and lifestyle management through Ayurveda.',
    },
    {
      name: 'Dr. Rajiv Menon',
      specialty: 'Herbal Medicine Specialist',
      image: rajiv,
      qualifications: 'BAMS, Diploma in Herbal Pharmacology',
      experience: '15 Years',
      bio: 'Known for personalized herbal prescriptions and immune-boosting therapies.',
    },
    {
      name: 'Dr. Sneha Patil',
      specialty: 'Rejuvenation & Stress Management',
      image: sneha,
      qualifications: 'BAMS, Certificate in Holistic Wellness',
      experience: '9 Years',
      bio: 'Expert in Shirodhara and therapeutic massages to manage anxiety and chronic fatigue.',
    },
    {
      name: 'Dr. Sameer Joshi',
      specialty: 'Diet & Lifestyle Consultant',
      image: sameer,
      qualifications: 'BAMS, MSc (Nutrition)',
      experience: '10 Years',
      bio: 'Focuses on Ayurvedic dietary corrections and long-term lifestyle modifications.',
    },
  ];


  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl text-green-800 font-bold mb-6 text-center">Doctors</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => (
          <motion.div
            key={index}
            className="bg-green-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{scale : 0.98}}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 , ease: 'easeInOut' }}
          >
            <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-green-800">{doctor.name}</h3>
              <p className="text-green-700 mt-2">{doctor.specialty}</p>
              <div className="mt-4 text-green-600">
                <p><span className="font-medium">Bio:</span> {doctor.bio}</p>
                <p><span className="font-medium">Qualificaton:</span> {doctor.qualifications}</p>
                <p><span className="font-medium">Experience:</span> {doctor.experience}</p>
              </div>
              <a
                href="/appointment"
                className="block mt-4 text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
