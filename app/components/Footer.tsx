"use client"

import { useEffect } from "react"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  useEffect(() => {
    // Scroll to top functionality
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const scrollButton = document.getElementById("scroll-to-top")
    if (scrollButton) {
      scrollButton.addEventListener("click", scrollToTop)
      return () => scrollButton.removeEventListener("click", scrollToTop)
    }
  }, [])

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Admissions", href: "#admissions" },
    { name: "Contact", href: "#contact" },
  ]

  const importantLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Student Portal", href: "#" },
    { name: "Faculty Portal", href: "#" },
    { name: "Alumni Network", href: "#" },
    { name: "Career Services", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold">CIITM</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering students to achieve academic success with professional resources, innovative teaching methods,
              and industry-focused curriculum.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">CIITM Campus, Dhanbad, Jharkhand</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">info@ciitm.edu.in</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Important Links</h3>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Connect With Us</h3>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for latest updates and announcements.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-sm"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-l-none px-4">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CIITM. All rights reserved. | Top BCA College in Dhanbad
            </p>

            {/* Scroll to Top Button */}
            <Button
              id="scroll-to-top"
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white rounded-full"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
