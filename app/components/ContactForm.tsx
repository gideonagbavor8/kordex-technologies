'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    budget: '',
    description: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return 'First name is required';
    if (!formData.lastName.trim()) return 'Last name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Valid email is required';
    if (!formData.service) return 'Please select a service';
    if (!formData.budget) return 'Please select a budget range';
    if (!formData.description.trim()) return 'Project description is required';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setStatus('error');
      setMessage(validationError);
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    setIsLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage("Message sent! We'll respond within 24 hours.");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: '',
          budget: '',
          description: '',
        });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to send message. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Status Messages */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-green-900/30 border border-green-700/50 rounded-lg text-green-300 text-sm"
        >
          ✓ {message}
        </motion.div>
      )}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-900/30 border border-red-700/50 rounded-lg text-red-300 text-sm"
        >
          ✗ {message}
        </motion.div>
      )}

      {/* First and Last Name */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          disabled={isLoading}
          className="px-4 py-3 bg-[#112040] border border-[#1E6FD9]/20 rounded-lg text-[#F5F7FA] placeholder-[#8BA5C8] focus:outline-none focus:border-[#1E6FD9] focus:ring-1 focus:ring-[#1E6FD9]/50 transition-colors disabled:opacity-50"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          disabled={isLoading}
          className="px-4 py-3 bg-[#112040] border border-[#1E6FD9]/20 rounded-lg text-[#F5F7FA] placeholder-[#8BA5C8] focus:outline-none focus:border-[#1E6FD9] focus:ring-1 focus:ring-[#1E6FD9]/50 transition-colors disabled:opacity-50"
        />
      </motion.div>

      {/* Email */}
      <motion.div variants={itemVariants}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-3 bg-[#112040] border border-[#1E6FD9]/20 rounded-lg text-[#F5F7FA] placeholder-[#8BA5C8] focus:outline-none focus:border-[#1E6FD9] focus:ring-1 focus:ring-[#1E6FD9]/50 transition-colors disabled:opacity-50"
        />
      </motion.div>

      {/* Service Dropdown */}
      <motion.div variants={itemVariants}>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-3 bg-[#112040] border border-[#1E6FD9]/20 rounded-lg text-[#F5F7FA] focus:outline-none focus:border-[#1E6FD9] focus:ring-1 focus:ring-[#1E6FD9]/50 transition-colors disabled:opacity-50 appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234A9FFF' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1.5em 1.5em',
            paddingRight: '2.5rem',
          }}
        >
          <option value="">Select a service</option>
          <option value="Web & App Development">Web & App Development</option>
          <option value="AI & Automation">AI & Automation</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Education Technology">Education Technology</option>
          <option value="Multiple services">Multiple services</option>
        </select>
      </motion.div>

      {/* Budget Dropdown */}
      <motion.div variants={itemVariants}>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          disabled={isLoading}
          className="w-full px-4 py-3 bg-[#112040] border border-[#1E6FD9]/20 rounded-lg text-[#F5F7FA] focus:outline-none focus:border-[#1E6FD9] focus:ring-1 focus:ring-[#1E6FD9]/50 transition-colors disabled:opacity-50 appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234A9FFF' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1.5em 1.5em',
            paddingRight: '2.5rem',
          }}
        >
          <option value="">Select budget range</option>
          <option value="Under GHS 2,000">Under GHS 2,000</option>
          <option value="GHS 2,000–5,000">GHS 2,000–5,000</option>
          <option value="GHS 5,000–10,000">GHS 5,000–10,000</option>
          <option value="GHS 10,000+">GHS 10,000+</option>
          <option value="Let's discuss">Let's discuss</option>
        </select>
      </motion.div>

      {/* Description */}
      <motion.div variants={itemVariants}>
        <textarea
          name="description"
          placeholder="Tell us about your project"
          value={formData.description}
          onChange={handleChange}
          disabled={isLoading}
          rows={5}
          className="w-full px-4 py-3 bg-[#112040] border border-[#1E6FD9]/20 rounded-lg text-[#F5F7FA] placeholder-[#8BA5C8] focus:outline-none focus:border-[#1E6FD9] focus:ring-1 focus:ring-[#1E6FD9]/50 transition-colors resize-none disabled:opacity-50"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={itemVariants}>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-8 py-3 bg-gradient-to-r from-[#1E6FD9] to-[#4A9FFF] text-[#0A1628] font-semibold rounded-lg hover:from-[#4A9FFF] hover:to-[#1E6FD9] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Send Message →'}
        </button>
      </motion.div>
    </motion.form>
  );
}
