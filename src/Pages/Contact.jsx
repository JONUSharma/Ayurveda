import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "42a0bed0-761e-4b89-975d-42d6e1764cc4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setSubmitted(true);   
    }
  };

  const treatments = [
    'Panchakarma',
    'Shirodhara',
    'Abhyanga',
    'Herbal Steam Therapy',
    'Yoga'
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl text-green-800 font-bold mb-6 text-center">Contact us / Services</h1>

      {submitted ? (
        <div className="bg-green-100 border border-green-300 text-green-800 p-6 rounded text-center">
          <h2 className="text-2xl font-semibold mb-4">Appointment Booked Successfully!</h2>
          <p>We’ll contact you soon to confirm your booking.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-green-50 p-6 rounded-lg shadow space-y-4">
          <div>
            <label className="block text-green-800 font-medium mb-1">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-green-800 font-medium mb-1">Phone Number *</label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-green-800 font-medium mb-1">Query about specific treatment *</label>
            <select
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              required
              className="w-full p-3 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select a treatment</option>
              {treatments.map((treatment, index) => (
                <option key={index} value={treatment}>{treatment}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-green-800 font-medium mb-1">Health Concern / Message (optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded font-medium hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
