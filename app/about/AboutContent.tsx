"use client";

import Section from "@/components/Section";
import Container from "@/components/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { aboutCopy } from "@/lib/copy";
import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function AboutContent() {
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
              Our Story
            </h1>
            <p className="text-xl text-[#988A78] max-w-2xl mx-auto">
              Born from a belief that great gatherings aren&apos;t just about food
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Story with Image */}
      <Section background="off-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImagePlaceholder
                alt="Hospitality Team"
                category="Details"
                className="w-full h-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {aboutCopy.story.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-[#988A78] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Legacy */}
      <Section>
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#141414] mb-8">
              {aboutCopy.legacy.title}
            </h2>
            <div className="space-y-6 text-lg text-[#988A78] max-w-3xl mx-auto">
              {aboutCopy.legacy.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Principles */}
      <Section background="taupe">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6">
              {aboutCopy.principles.title}
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              The values that guide every gathering we host
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutCopy.principles.items.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-white/20 bg-white/10 backdrop-blur-md shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/90 text-base leading-relaxed">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
