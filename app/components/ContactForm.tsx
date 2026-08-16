'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconArrowRight, IconCheck } from './Icons';
import { serviceOptions } from '@/lib/services';

const budgetOptions = [
  'GHS 9,000–25,000 (USD 750–2,000)',
  'GHS 25,000–60,000 (USD 2,000–5,000)',
  'GHS 60,000–150,000 (USD 5,000–12,000)',
  'GHS 150,000+ (USD 12,000+)',
  'Not sure yet — help me scope it',
];

const fieldClass =
  'w-full rounded-lg border border-[var(--surface-hairline)] bg-[var(--surface-base)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-tertiary)] transition-colors focus:border-[var(--brand)] focus:outline-none focus:ring-1 focus:ring-[var(--brand)]/50 disabled:opacity-50';

const selectChevron = {
  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234A9FFF' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 0.85rem center',
  backgroundSize: '1.25em 1.25em',
  paddingRight: '2.75rem',
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organisation: '',
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return 'First name is required';
    if (!formData.lastName.trim()) return 'Last name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'A valid email is required';
    if (!formData.service) return 'Please select what you need';
    if (!formData.budget) return 'Please select a budget range';
    if (!formData.description.trim()) return 'Please tell us a little about your school';
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        // Only promise a confirmation email when one was actually sent — the
        // sandbox mail sender cannot deliver to visitors.
        setMessage(
          data.confirmationSent
            ? "Your message is with us. Check your inbox — we've sent a confirmation."
            : 'Your message is with us, and it has landed in our inbox.'
        );
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          organisation: '',
          service: '',
          budget: '',
          description: '',
        });
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to send. Please try again or use WhatsApp.');
        setTimeout(() => setStatus('idle'), 6000);
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again or reach us on WhatsApp.');
      setTimeout(() => setStatus('idle'), 6000);
    } finally {
      setIsLoading(false);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center py-14 text-center"
      >
        <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--success)]/15 text-[var(--success)]">
          <IconCheck className="h-7 w-7" />
        </span>
        <h3 className="font-display text-2xl text-[var(--text-primary)]">
          Message received
        </h3>
        <p className="mt-3 max-w-sm leading-relaxed text-[var(--text-secondary)]">{message}</p>
        <p className="mt-2 text-sm text-[var(--text-tertiary)]">
          We reply to every enquiry within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm font-semibold text-[var(--brand-bright)] underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-5"
      noValidate
    >
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="rounded-lg border border-[var(--danger)]/40 bg-[var(--danger)]/10 px-4 py-3 text-sm text-[var(--danger)]"
        >
          {message}
        </motion.p>
      )}

      <motion.div variants={item} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={handleChange}
            disabled={isLoading}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleChange}
            disabled={isLoading}
            className={fieldClass}
          />
        </div>
      </motion.div>

      <motion.div variants={item}>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          className={fieldClass}
        />
      </motion.div>

      <motion.div variants={item}>
        <label htmlFor="organisation" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
          School or organisation{' '}
          <span className="font-normal text-[var(--text-tertiary)]">(optional)</span>
        </label>
        <input
          id="organisation"
          type="text"
          name="organisation"
          autoComplete="organization"
          value={formData.organisation}
          onChange={handleChange}
          disabled={isLoading}
          className={fieldClass}
        />
      </motion.div>

      <motion.div variants={item}>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          disabled={isLoading}
          className={`${fieldClass} cursor-pointer appearance-none`}
          style={selectChevron}
        >
          <option value="">Select an option</option>
          {serviceOptions.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
          <option value="Several of these">Several of these</option>
          <option value="Work outside education">Work outside education</option>
        </select>
      </motion.div>

      <motion.div variants={item}>
        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
          Budget range
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          disabled={isLoading}
          className={`${fieldClass} cursor-pointer appearance-none`}
          style={selectChevron}
        >
          <option value="">Select a range</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div variants={item}>
        <label htmlFor="description" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
          Tell us about your school
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="How many students? What is costing your staff the most time right now?"
          value={formData.description}
          onChange={handleChange}
          disabled={isLoading}
          rows={5}
          className={`${fieldClass} resize-none`}
        />
      </motion.div>

      <motion.div variants={item}>
        <button
          type="submit"
          disabled={isLoading}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--brand)] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[var(--brand)]/25 transition-all hover:bg-[var(--brand-bright)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? (
            'Sending…'
          ) : (
            <>
              Send message
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
        <p className="mt-4 text-center text-xs text-[var(--text-tertiary)]">
          We reply within 24 hours. No mailing list, no follow-up spam.
        </p>
      </motion.div>
    </motion.form>
  );
}
