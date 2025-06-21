import { motion } from 'framer-motion';
import yoga from "/Images/yogo.jpg"
export default function TreatmentCards() {
  const treatments = [
    {
      name: 'Panchakarma',
      image: 'https://picsum.photos/200?panchakarma,therapy',
      description: 'A comprehensive detoxification program designed to cleanse the body of toxins and restore balance.',
      benefits: 'Improves digestion, boosts immunity, promotes mental clarity.',
      duration: '7-21 Days',
    },
    {
      name: 'Shirodhara',
      image: 'https://picsum.photos/400/300?shirodhara,ayurveda',
      description: 'A relaxing therapy where warm herbal oil is poured gently over the forehead.',
      benefits: 'Relieves stress, insomnia, anxiety, and enhances focus.',
      duration: '45-60 Minutes',
    },
    {
      name: 'Abhyanga',
      image: 'https://picsum.photos/200/300?abhyanga,massage',
      description: 'A traditional full-body oil massage that revitalizes the body and improves circulation.',
      benefits: 'Detoxifies, nourishes skin, relieves muscle tension.',
      duration: '60-90 Minutes',
    },
    {
      name: 'Herbal Steam Therapy',
      image: 'https://images.pexels.com/videos/1448735/free-video-1448735.jpg?fit=crop&w=1200&h=630&auto=compress&cs=tinysrgb ',
      description: 'Uses medicinal herbs in steam form to open pores, detoxify and relax muscles.',
      benefits: 'Clears skin, promotes detox, reduces joint pain.',
      duration: '20-30 Minutes',
    },
    {
      name: 'Yoga',
      image: yoga,
      description: 'Yoga is an ancient physical, mental, and spiritual practice that originated in India.  ',
      benefits: 'Improves flexibility and strength, Reduces stress and anxiety',
      duration: '20-30 Minutes',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl text-green-800 font-bold mb-6 text-center">Our Treatments</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {treatments.map((treatment, index) => (
          <motion.div
            key={index}
            className="bg-green-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
          >
            <img src={treatment.image} alt={treatment.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-green-800">{treatment.name}</h3>
              <p className="text-green-700 mt-2">{treatment.description}</p>
              <div className="mt-4 text-green-600">
                <p><span className="font-medium">Benefits:</span> {treatment.benefits}</p>
                <p><span className="font-medium">Duration:</span> {treatment.duration}</p>
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
