"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".testimonial-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".testimonials-container",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const testimonials = [
    {
      name: "Sameer Kumar",
      role: "Frontend Developer at TCS",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "I recently completed the BCA program at CIITM, and I'm so glad I did! The learning experience was incredible. The faculty is very knowledgeable and supportive. The practical approach to learning helped me gain the skills I needed for my career.",
      company: "TCS",
    },
    {
      name: "Abhishek Gupta",
      role: "Backend Developer at Infosys",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "I had an amazing experience at CIITM. The courses were well-structured, and the faculty was very knowledgeable and approachable. The practical labs and industry exposure helped me gain the skills I needed for my career in software development.",
      company: "Infosys",
    },
    {
      name: "Priya Sharma",
      role: "Full Stack Developer at Wipro",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "CIITM provided me with excellent education and practical experience. The placement support was outstanding, and I was able to secure a great job right after graduation. The faculty and staff are truly dedicated to student success.",
      company: "Wipro",
    },
    {
      name: "Rahul Singh",
      role: "Data Analyst at Accenture",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      content:
        "The AI/ML specialization program at CIITM was exactly what I needed to kickstart my career in data science. The curriculum is up-to-date with industry trends, and the hands-on projects gave me real-world experience.",
      company: "Accenture",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="testimonials-container">
          {/* Header */}
          <div className="testimonial-section text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
              Student Success Stories
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Transforming Lives,
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                One Story at a Time!
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See why students love learning with us and how we've made a difference in their careers. Real stories from
              real students who achieved their dreams at CIITM.
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="testimonial-section relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12 mx-4">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <blockquote className="text-lg lg:text-xl text-center text-gray-100 mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white/20">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white text-lg">{testimonial.name}</div>
                          <div className="text-blue-300 text-sm">{testimonial.role}</div>
                          <div className="text-gray-400 text-xs">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-blue-400 w-8" : "bg-white/30 hover:bg-white/50"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="testimonial-section grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto">
            {[
              { number: "500+", label: "Happy Students" },
              { number: "95%", label: "Satisfaction Rate" },
              { number: "4.8/5", label: "Average Rating" },
              { number: "100+", label: "Success Stories" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}
