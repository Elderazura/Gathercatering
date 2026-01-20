"use client";

import Section from "@/components/Section";
import Container from "@/components/Container";
import MenuAccordion from "@/components/MenuAccordion";
import { menusCopy } from "@/lib/copy";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Menus() {
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
              Our Menus
            </h1>
            <p className="text-xl text-[#988A78] max-w-3xl mx-auto leading-relaxed">
              {menusCopy.intro.description}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Categories */}
      <Section background="off-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#141414] mb-6">
              Menu Categories
            </h2>
            <p className="text-lg text-[#988A78] max-w-2xl mx-auto">
              Explore our diverse culinary offerings
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menusCopy.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sample Menus */}
      <Section>
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#141414] mb-6">
              Sample Menus
            </h2>
            <p className="text-lg text-[#988A78] max-w-2xl mx-auto">
              Examples of our international-forward approach. All menus are
              customizable to your preferences and dietary needs.
            </p>
          </motion.div>
          <MenuAccordion menus={menusCopy.sampleMenus} />
        </Container>
      </Section>
    </>
  );
}
