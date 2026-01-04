'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaEnvelope, FaUser, FaComment, FaPaperPlane } from 'react-icons/fa';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send message",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-primary">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-h2 text-primary font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-body-large text-secondary">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you!
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-label font-medium text-primary mb-2"
              >
                <FaUser className="w-4 h-4" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 border border-primary rounded-button bg-background-primary text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors duration-200"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-label font-medium text-primary mb-2"
              >
                <FaEnvelope className="w-4 h-4" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-primary rounded-button bg-background-primary text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors duration-200"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-label font-medium text-primary mb-2"
              >
                <FaComment className="w-4 h-4" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project or collaboration idea..."
                className="w-full px-4 py-3 border border-primary rounded-button bg-background-primary text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors duration-200 resize-none"
              />
            </div>

            {/* Status Message */}
            {status.type && (
              <div
                className={`p-4 rounded-button flex items-center gap-2 ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
                role="alert"
              >
                {status.type === "success" ? (
                  <FaEnvelope className="w-5 h-5" />
                ) : (
                  <FaComment className="w-5 h-5" />
                )}
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-primary text-white font-medium rounded-button hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
            >
              <FaPaperPlane className="w-4 h-4" />
              Send Message
            </button>
          </form>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactMe;
