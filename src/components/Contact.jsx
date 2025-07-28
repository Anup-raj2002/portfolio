import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // NOTE: Replace with your actual EmailJS service ID, template ID, and user ID
    // You need to sign up for EmailJS and configure your email template
    emailjs
      .send(
        'service_id', // Replace with your service ID
        'template_id', // Replace with your template ID
        {
          from_name: form.name,
          to_name: 'Anup Raj',
          from_email: form.email,
          to_email: 'rajanup835@gmail.com',
          message: form.message,
        },
        'user_id' // Replace with your user ID
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError(true);
      });
  };

  // Demo submission handler (for preview purposes)
  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({
        name: '',
        email: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Feel free to reach out if you have any questions or would like to work together.
            I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold">Get In Touch</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Want to work together or have any questions? Feel free to reach out through any of the following methods or use the contact form.
            </p>

            <div className="space-y-4 mt-6 sm:mt-8">
              <div className="flex items-center">
                <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">Phone</h4>
                  <p className="text-gray-300 text-sm sm:text-base">+91 7903693971</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">Email</h4>
                  <p className="text-gray-300 text-sm sm:text-base">rajanup835@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/20 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">Location</h4>
                  <p className="text-gray-300 text-sm sm:text-base">Greater Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleDemoSubmit}
              className="glass p-4 sm:p-6 lg:p-8 rounded-lg"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-primary text-sm sm:text-base"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-primary text-sm sm:text-base"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2 text-sm sm:text-base">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-primary resize-none text-sm sm:text-base"
                  required
                />
              </div>
              
              {success && (
                <div className="mb-4 p-3 bg-success/20 text-success rounded-lg text-sm sm:text-base">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {error && (
                <div className="mb-4 p-3 bg-error/20 text-error rounded-lg text-sm sm:text-base">
                  Something went wrong. Please try again later.
                </div>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/80 text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={16} className="sm:w-[18px] sm:h-[18px] mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;