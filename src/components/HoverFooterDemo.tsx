"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  Globe,
} from "lucide-react";
import {
  FooterBackgroundGradient,
  TextHoverEffect,
} from "@/components/ui/hover-footer";

/**
 * HoverFooter demo component (original structure from 21st.dev).
 * Adapted for Currix - use Footer.tsx for production.
 */
function HoverFooterDemo() {
  const footerLinks = [
    {
      title: "About Us",
      links: [
        { label: "Company History", href: "#about" },
        { label: "Meet the Team", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "FAQs", href: "#" },
        { label: "Support", href: "#" },
        { label: "Live Chat", href: "#", pulse: true },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-primary" />,
      text: "info@currix.com",
      href: "mailto:info@currix.com",
    },
    {
      icon: <Phone size={18} className="text-primary" />,
      text: "+31 6 12345678",
      href: "tel:+31612345678",
    },
    {
      icon: <MapPin size={18} className="text-primary" />,
      text: "Amsterdam, The Netherlands",
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
    { icon: <Globe size={20} />, label: "Globe", href: "#" },
  ];

  return (
    <footer className="bg-card/30 relative rounded-3xl overflow-hidden m-4 sm:m-8 border border-border">
      <div className="max-w-7xl mx-auto p-8 sm:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-16 pb-12">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-primary text-3xl font-extrabold">&hearts;</span>
              <span className="text-foreground font-display text-3xl tracking-wider">CURRIX</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Not fast food. Food culture. Born in The Netherlands.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground font-display text-sm tracking-wider uppercase mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-foreground font-display text-sm tracking-wider uppercase mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground font-body text-sm">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-border my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-muted-foreground">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="text-muted-foreground font-body text-sm text-center md:text-left">
            © {new Date().getFullYear()} Currix. All rights reserved.
          </p>
        </div>
      </div>

      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36 min-h-[200px]">
        <TextHoverEffect text="CURRIX" className="z-50 w-full" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooterDemo;
