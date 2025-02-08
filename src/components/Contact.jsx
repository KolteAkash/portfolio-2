// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import markerIconPng from "leaflet/dist/images/marker-icon.png";
// import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     setIsSubmitting(false);
//     setSubmitMessage(
//       "Thank you for your message! I will get back to you soon."
//     );
//     setFormData({ name: "", email: "", message: "" });
//   };

//   // Your location coordinates (latitude, longitude)
//   const myLocation = [19.038, 75.41]; // Replace with your actual coordinates

//   return (
//     <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
//         >
//           Get In Touch
//         </motion.h2>
//         <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
//           {/* Left Side - Contact Info and Map */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="w-full lg:w-1/2"
//           >
//             <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
//               Contact Information
//             </h3>
//             <p className="mb-4 text-gray-700 dark:text-gray-300">
//               Feel free to reach out to me for any inquiries or opportunities.
//             </p>
//             <div className="flex items-center mb-2">
//               <FaEnvelope className="mr-2 text-indigo-600 dark:text-indigo-400" />
//               <a
//                 href="mailto:akashkolte240899@gmail.com"
//                 className="text-indigo-600 dark:text-indigo-400 hover:underline"
//               >
//                 akashkolte240899@gmail.com
//               </a>
//             </div>
//             <div className="flex items-center mb-2">
//               <FaGithub className="mr-2 text-indigo-600 dark:text-indigo-400" />
//               <a
//                 href="https://github.com/KolteAkash"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-indigo-600 dark:text-indigo-400 hover:underline"
//               >
//                 github.com/KolteAkash
//               </a>
//             </div>
//             <div className="flex items-center mb-8">
//               <FaLinkedin className="mr-2 text-indigo-600 dark:text-indigo-400" />
//               <a
//                 href="https://linkedin.com/in/akash-kolte-029382230"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-indigo-600 dark:text-indigo-400 hover:underline"
//               >
//                 linkedin.com/in/akash-kolte-029382230
//               </a>
//             </div>

//             {/* Map Section */}
//             <div className="w-full h-64 mb-8 rounded-lg overflow-hidden">
//               <MapContainer
//                 center={myLocation}
//                 zoom={13}
//                 style={{ height: "100%", width: "100%" }}
//               >
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <Marker
//                   position={myLocation}
//                   icon={L.icon({
//                     iconUrl: markerIconPng,
//                     shadowUrl: markerShadowPng,
//                     iconSize: [25, 41],
//                     iconAnchor: [12, 41],
//                   })}
//                 >
//                   <Popup>📍 Akash Kolte's Location</Popup>
//                 </Marker>
//               </MapContainer>
//             </div>
//           </motion.div>

//           {/* Right Side - Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="w-full lg:w-1/2"
//           >
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={4}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                 ></textarea>
//               </div>
//               <motion.button
//                 type="submit"
//                 disabled={isSubmitting}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </motion.button>
//             </form>
//             {submitMessage && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
//               >
//                 {submitMessage}
//               </motion.div>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setSubmitMessage("⚠️ Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_0vn437g", // Replace with your actual service ID
        "template_dvgtw68", // Replace with your actual template ID
        {
          from_name: formData.name,
          reply_to: formData.email, // Ensures sender's email is mapped
          message: formData.message,
        },
        "Pr3VXGGuDrIUQ0Epy" // Replace with your public key
      );

      setSubmitMessage(
        "Thank you for your message! I will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitMessage("❌ Oops! Something went wrong. Please try again.");
      console.error("EmailJS Error:", error);
    }

    setIsSubmitting(false);
  };

  const myLocation = [19.038, 75.41];

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
        >
          Get In Touch
        </motion.h2>
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
              Contact Information
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Feel free to reach out to me for any inquiries or opportunities.
            </p>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2 text-indigo-600 dark:text-indigo-400" />
              <a
                href="mailto:akashkolte240899@gmail.com"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                akashkolte240899@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-2">
              <FaGithub className="mr-2 text-indigo-600 dark:text-indigo-400" />
              <a
                href="https://github.com/KolteAkash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                github.com/KolteAkash
              </a>
            </div>
            <div className="flex items-center mb-8">
              <FaLinkedin className="mr-2 text-indigo-600 dark:text-indigo-400" />
              <a
                href="https://linkedin.com/in/akash-kolte-029382230"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                linkedin.com/in/akash-kolte-029382230
              </a>
            </div>
            <div className="w-full h-64 mb-8 rounded-lg overflow-hidden">
              <MapContainer
                center={myLocation}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  position={myLocation}
                  icon={L.icon({
                    iconUrl: markerIconPng,
                    shadowUrl: markerShadowPng,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })}
                >
                  <Popup>📍 Akash Kolte's Location</Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <motion.form
              onSubmit={handleSubmit}
              className={`space-y-4 ${isShaking ? "animate-shake" : ""}`}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>

            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
              >
                {submitMessage}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
