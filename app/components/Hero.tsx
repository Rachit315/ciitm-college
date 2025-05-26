"use client"

import { useEffect } from "react"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"

export default function Hero() {
  useEffect(() => {
    // Hero content animation
    const tl = gsap.timeline({ delay: 0.5 })

    tl.fromTo(".hero-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
      .fromTo(".hero-subtitle", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .fromTo(".hero-buttons", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")

    // Floating animation for stats
    gsap.to(".floating-stat", {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    })
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800"
    >
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Shape Tomorrow with
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Quality Education
            </span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering students to achieve academic success with professional resources, innovative teaching methods,
            and industry-focused curriculum at CIITM Dhanbad.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full group"
            >
              Apply for Admission
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full group"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Campus Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "500+", label: "Students Enrolled" },
              { number: "50+", label: "Expert Faculty" },
              { number: "95%", label: "Placement Rate" },
              { number: "10+", label: "Years of Excellence" },
            ].map((stat, index) => (
              <div key={index} className="floating-stat text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
