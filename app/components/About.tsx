"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Award, Users, BookOpen, Target } from "lucide-react"
import Image from "next/image"

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // About section animations
    gsap.fromTo(
      ".about-content",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.fromTo(
      ".about-images",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Values cards animation
    gsap.fromTo(
      ".value-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const values = [
    {
      icon: Award,
      title: "Innovation",
      description:
        "Delivering top-notch education for success with cutting-edge technology and modern teaching methods.",
    },
    {
      icon: Users,
      title: "Integrity",
      description:
        "Building a foundation of trust and ethics in all our educational practices and student interactions.",
    },
    {
      icon: BookOpen,
      title: "Excellence",
      description: "Setting the benchmark for quality education with industry-focused curriculum and expert faculty.",
    },
    {
      icon: Target,
      title: "Diversity",
      description: "Celebrating cultures, ideas, and perspectives to create an inclusive learning environment.",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main About Section */}
        <div className="about-section grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Content */}
          <div className="about-content">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
              About CIITM
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Young Minds,
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Shaping Bright Futures
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              CIITM has been a cornerstone of quality education for over a decade. We believe in nurturing young minds
              with innovative teaching methods, a caring environment, and opportunities for holistic growth.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is to inspire students to achieve academic success, develop strong character, and contribute
              positively to society through comprehensive BCA programs and industry partnerships.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Images */}
          <div className="about-images relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Students in computer lab working on programming projects"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=200"
                    alt="CIITM campus building and facilities"
                    width={200}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="w-full h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=200"
                    alt="Modern computer lab with latest technology"
                    width={200}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-48 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Students participating in coding competitions and tech events"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <div className="text-center mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our educational philosophy and shape our commitment to student success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
