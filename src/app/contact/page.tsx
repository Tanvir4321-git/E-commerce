'use client';
import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#12061f] min-h-screen flex items-center py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c084fc] font-medium tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            Contact <span className="text-[#c084fc]">Us</span>
          </h1>
          <p className="text-white/50 mt-4 max-w-md mx-auto">
            Have a question or need help? We are always here for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left - Info */}
          <div className="space-y-6">
            {[
              { icon: '📍', label: 'Address', value: 'Agrabad, Chittagong, Bangladesh' },
              { icon: '📞', label: 'Phone', value: '+880 1234-567890' },
              { icon: '📧', label: 'Email', value: 'info@e-commerce.com' },
              { icon: '🕐', label: 'Working Hours', value: 'Sat – Thu: 9AM – 8PM' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#c084fc]/50 transition-all duration-300"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-[#c084fc] text-xs uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                <span className="text-5xl">✅</span>
                <h3 className="text-white text-xl font-bold">Message Sent!</h3>
                <p className="text-white/50 text-sm">We will get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                  className="mt-4 text-[#c084fc] text-sm underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-widest mb-2 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Rafi Ahmed"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c084fc] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-widest mb-2 block">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="rafi@example.com"
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c084fc] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-widest mb-2 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c084fc] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold py-3 rounded-xl transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;