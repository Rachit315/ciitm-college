"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Clock, Users, Award, ArrowRight } from "lucide-react"

export default function Programs() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".program-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".programs-section",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const programs = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      students: "150+ Students",
      rating: "4.8/5",
      description:
        "Comprehensive computer science program covering programming, software development, database management, and emerging technologies.",
      highlights: [
        "Industry-relevant curriculum",
        "Hands-on programming labs",
        "Internship opportunities",
        "Placement assistance",
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "BCA with Specialization in AI/ML",
      duration: "3 Years",
      students: "80+ Students",
      rating: "4.9/5",
      description:
        "Advanced program focusing on Artificial Intelligence, Machine Learning, and Data Science with practical project experience.",
      highlights: ["AI/ML specialization", "Industry mentorship", "Research projects", "Tech company partnerships"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "BCA with Cloud Computing",
      duration: "3 Years",
      students: "60+ Students",
      rating: "4.7/5",
      description:
        "Specialized program in cloud technologies, DevOps, and modern infrastructure management with AWS and Azure certifications.",
      highlights: ["Cloud certifications", "DevOps training", "Live project work", "Industry exposure"],
      gradient: "from-green-500 to-blue-600",
    },
  ]

  return (
    <section id="programs" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
            Our Programs
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Career Path
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our industry-focused BCA programs designed to prepare you for the digital future with cutting-edge
            curriculum and practical experience.
          </p>
        </div>

        <div className="programs-section grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="program-card group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${program.gradient}`}></div>

              <div className="p-8 flex flex-col flex-1">
                {/* Program Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {program.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {program.students}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-yellow-600">
                    <Award className="w-4 h-4 mr-1" />
                    {program.rating}
                  </div>
                </div>

                {/* Program Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Program Highlights:</h4>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full bg-gradient-to-r ${program.gradient} hover:opacity-90 text-white rounded-xl group-hover:scale-105 transition-all duration-300 mt-auto`}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Not sure which program is right for you?</p>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full"
          >
            Schedule a Counseling Session
          </Button>
        </div>
      </div>
    </section>
  )
}
