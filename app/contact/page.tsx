"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contactCopy } from "@/lib/copy";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    location: "",
    guestCount: "",
    eventType: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Section>
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-[#141414] mb-8">
              {contactCopy.title}
            </h1>
            <p className="text-xl text-[#988A78] max-w-2xl mx-auto leading-relaxed">
              {contactCopy.description}
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section background="off-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-[#C1B9AA]/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Enquiry Form</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-[#141414] mb-2"
                        >
                          {contactCopy.form.name}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-[#141414] mb-2"
                        >
                          {contactCopy.form.phone}
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-[#141414] mb-2"
                      >
                        {contactCopy.form.email}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="eventDate"
                          className="block text-sm font-semibold text-[#141414] mb-2"
                        >
                          {contactCopy.form.eventDate}
                        </label>
                        <Input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="guestCount"
                          className="block text-sm font-semibold text-[#141414] mb-2"
                        >
                          {contactCopy.form.guestCount}
                        </label>
                        <Input
                          id="guestCount"
                          name="guestCount"
                          type="number"
                          value={formData.guestCount}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-semibold text-[#141414] mb-2"
                      >
                        {contactCopy.form.location}
                      </label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="eventType"
                        className="block text-sm font-semibold text-[#141414] mb-2"
                      >
                        {contactCopy.form.eventType}
                      </label>
                      <Input
                        id="eventType"
                        name="eventType"
                        type="text"
                        value={formData.eventType}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="notes"
                        className="block text-sm font-semibold text-[#141414] mb-2"
                      >
                        {contactCopy.form.notes}
                      </label>
                      <Textarea
                        id="notes"
                        name="notes"
                        rows={5}
                        value={formData.notes}
                        onChange={handleChange}
                      />
                    </div>

                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 bg-[#0E564C]/10 border-2 border-[#0E564C]/30 rounded-2xl text-[#0E564C] text-base font-medium"
                      >
                        Thank you! We&apos;ve received your enquiry and will get back
                        to you within 24 hours.
                      </motion.div>
                    )}

                    <Button type="submit" size="lg" className="w-full">
                      {contactCopy.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Card className="border-[#C1B9AA]/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Get in Touch</CardTitle>
                  <CardDescription className="text-base">
                    Prefer to reach out directly? We&apos;re here to help.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0E564C]/10 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-[#0E564C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#141414] mb-2 text-lg">
                        WhatsApp
                      </h3>
                      <a
                        href={`https://wa.me/${contactCopy.whatsapp.number.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#0E564C] hover:underline font-medium"
                      >
                        {contactCopy.whatsapp.text}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0E564C]/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-[#0E564C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#141414] mb-2 text-lg">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@gathercatering.com"
                        className="text-[#0E564C] hover:underline font-medium"
                      >
                        hello@gathercatering.com
                      </a>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#C1B9AA]/30">
                    <p className="text-sm text-[#988A78] leading-relaxed mb-4">
                      <strong className="text-[#141414]">Note:</strong> This
                      form is currently a placeholder. To connect it to an email
                      service, update the form submission handler in{" "}
                      <code className="text-xs bg-[#F4F3F1] px-2 py-1 rounded font-mono">
                        app/contact/page.tsx
                      </code>
                      . Consider using services like SendGrid, Resend, or
                      Formspree.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
