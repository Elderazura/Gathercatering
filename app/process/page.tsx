"use client";

import Section from "@/components/Section";
import Container from "@/components/Container";
import FAQAccordion from "@/components/FAQAccordion";
import { processCopy } from "@/lib/copy";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Process() {
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
              {processCopy.title}
            </h1>
            <p className="text-xl text-[#988A78] max-w-2xl mx-auto">
              From enquiry to execution, we handle every detail
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Steps */}
      <Section background="off-white">
        <Container>
          <div className="space-y-16 max-w-5xl mx-auto">
            {processCopy.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0E564C] to-[#0a453d] text-white flex items-center justify-center font-serif text-3xl font-semibold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-serif font-semibold text-[#141414] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-[#988A78] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Planning Details */}
      <Section>
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#141414] mb-12 text-center">
              {processCopy.planningDetails.title}
            </h2>
            <Card className="border-[#C1B9AA]/30 shadow-xl">
              <CardContent className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {processCopy.planningDetails.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0E564C]/10 flex items-center justify-center mt-1">
                        <Check className="h-5 w-5 text-[#0E564C]" />
                      </div>
                      <p className="text-lg text-[#141414] font-medium leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="taupe">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl">
              <FAQAccordion items={processCopy.faq} />
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
