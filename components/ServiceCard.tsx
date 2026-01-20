"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  bullets: string[];
  bestFor: string;
  index?: number;
}

export default function ServiceCard({
  name,
  description,
  bullets,
  bestFor,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full border-[#C1B9AA]/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
        <CardHeader>
          <CardTitle className="text-2xl">{name}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <ul className="space-y-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start text-sm text-[#988A78] group-hover:text-[#141414] transition-colors">
                <Check className="h-5 w-5 text-[#0E564C] mr-3 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-[#C1B9AA]/30">
            <Badge variant="outline" className="text-xs font-medium">
              Best for: {bestFor}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
