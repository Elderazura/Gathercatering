"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  index?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full border-[#C1B9AA]/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-8">
          <Quote className="h-8 w-8 text-[#0E564C]/20 mb-4" />
          <p className="text-lg text-[#141414] mb-6 leading-relaxed font-serif italic">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="pt-6 border-t border-[#C1B9AA]/30">
            <p className="font-semibold text-[#141414]">{author}</p>
            <p className="text-sm text-[#988A78] mt-1">{role}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
