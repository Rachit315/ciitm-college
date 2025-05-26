"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"

export default function Contact() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".contact-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Campus",
      details: ["CIITM Campus, Dhanbad", "Jharkhand, India - 826001"],
      color: "blue",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9876543210", "+91 9876543211"],
      color: "green",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["admissions@ciitm.edu.in", "info@ciitm.edu.in"],
      color: "purple",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "orange",
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="contact-section">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
              Get in Touch
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Journey?
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about our programs or admission process? We're here to help! Reach out to us and take the
              first step towards your bright future in technology.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="contact-item bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r from-${info.color}-100 to-${info.color}-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <info.icon className={`w-7 h-7 text-${info.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="contact-item">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input
                        placeholder="Enter your first name"
                        className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input
                        placeholder="Enter your last name"
                        className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Program of Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-blue-500 focus:outline-none">
                      <option>Select a program</option>
                      <option>BCA (General)</option>
                      <option>BCA with AI/ML Specialization</option>
                      <option>BCA with Cloud Computing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your questions or interests..."
                      rows={4}
                      className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl text-lg font-semibold"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="contact-item space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Find Us on Map</h3>
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Interactive Map Coming Soon</p>
                    <p className="text-sm text-gray-500 mt-2">CIITM Campus, Dhanbad, Jharkhand</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl text-white">
                <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-blue-100 mb-6">
                  Our admission counselors are available to answer your questions and guide you through the application
                  process.
                </p>

                <div className="space-y-4">
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 rounded-xl font-semibold">
                    <Phone className="mr-2 w-4 h-4" />
                    Call Now: +91 9876543210
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-blue-600 rounded-xl"
                  >
                    Schedule Campus Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
