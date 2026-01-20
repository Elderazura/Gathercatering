"use client";

import Section from "@/components/Section";
import Container from "@/components/Container";
import ServiceCard from "@/components/ServiceCard";
import { servicesCopy } from "@/lib/copy";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-[#141414] mb-8">
              {servicesCopy.title}
            </h1>
            <p className="text-xl text-[#988A78] max-w-2xl mx-auto">
              Complete hosting responsibility from planning to execution
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Responsibilities */}
      <Section background="off-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#141414] mb-12 text-center">
              What We Handle
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesCopy.responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-white/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0E564C]/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-[#0E564C]" />
                  </div>
                  <p className="text-lg text-[#141414] font-medium leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Packages */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#141414] mb-6">
              Our Packages
            </h2>
            <p className="text-lg text-[#988A78] max-w-2xl mx-auto">
              Choose the level of hosting support that fits your gathering
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesCopy.packages.map((pkg, index) => (
              <ServiceCard
                key={index}
                name={pkg.name}
                description={pkg.description}
                bullets={pkg.bullets}
                bestFor={pkg.bestFor}
                index={index}
              />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
