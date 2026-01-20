"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/menus", label: "Menus" },
  { href: "/gallery", label: "Gallery" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[#C1B9AA]/20"
          : "bg-white/60 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="font-serif text-2xl md:text-3xl font-semibold text-[#141414] hover:text-[#0E564C] transition-colors"
          >
            Gather Catering
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                  pathname === link.href
                    ? "text-[#0E564C] bg-[#0E564C]/10"
                    : "text-[#988A78] hover:text-[#0E564C] hover:bg-[#F4F3F1]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="ml-4">
              <button className="px-6 py-2.5 bg-[#0E564C] text-white rounded-full text-sm font-medium hover:bg-[#0a453d] shadow-lg hover:shadow-xl hover:shadow-[#0E564C]/20 hover:-translate-y-0.5 transition-all duration-300">
                Enquire
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#141414] p-2 hover:bg-[#F4F3F1] rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#C1B9AA]/20 bg-white/95 backdrop-blur-md"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-xl transition-all",
                    pathname === link.href
                      ? "text-[#0E564C] bg-[#0E564C]/10"
                      : "text-[#988A78] hover:text-[#0E564C] hover:bg-[#F4F3F1]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="mt-4 w-full px-6 py-3 bg-[#0E564C] text-white rounded-full text-sm font-medium hover:bg-[#0a453d] shadow-lg transition-all">
                  Enquire
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
