"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, Building, Users, Trophy, Briefcase, Globe, CheckCircle } from "lucide-react"

export default function WhyChooseUs() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate feature cards
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Animate stats
    gsap.fromTo(
      ".stat-number",
      { textContent: 0 },
      {
        textContent: (i, target) => target.getAttribute("data-value"),
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
      },
    )
  }, [])

  const features = [
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description: "Learn from industry professionals with years of experience in technology and education.",
      color: "blue",
    },
    {
      icon: Building,
      title: "Modern Infrastructure",
      description: "State-of-the-art labs, smart classrooms, and cutting-edge technology for optimal learning.",
      color: "purple",
    },
    {
      icon: Briefcase,
      title: "95% Placement Rate",
      description: "Strong industry connections ensuring excellent placement opportunities for our graduates.",
      color: "green",
    },
    {
      icon: Globe,
      title: "Industry Partnerships",
      description: "Collaborations with leading tech companies for internships and job placements.",
      color: "orange",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with optimal student-to-faculty ratio for better learning outcomes.",
      color: "pink",
    },
    {
      icon: Trophy,
      title: "Award-Winning Programs",
      description: "Recognized curriculum and teaching methodology that produces industry-ready professionals.",
      color: "indigo",
    },
  ]

  const stats = [
    { number: 500, suffix: "+", label: "Students Graduated" },
    { number: 95, suffix: "%", label: "Placement Rate" },
    { number: 50, suffix: "+", label: "Industry Partners" },
    { number: 10, suffix: "+", label: "Years of Excellence" },
  ]

  const achievements = [
    "AICTE Approved Programs",
    "Industry-Recognized Curriculum",
    "Experienced Faculty Team",
    "Modern Lab Facilities",
    "Strong Alumni Network",
    "Regular Industry Workshops",
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            Why Choose CIITM
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Success is
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Our Priority
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what makes CIITM the preferred choice for BCA education in Dhanbad. Our commitment to excellence
            ensures your bright future in technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r from-${feature.color}-100 to-${feature.color}-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-section bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  <span className="stat-number" data-value={stat.number}>
                    0
                  </span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Achievements & Recognitions</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                CIITM has consistently maintained high standards in education, earning recognition from industry leaders
                and educational bodies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-10 h-10 text-yellow-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">Best BCA College in Dhanbad</h4>
                  <p className="text-blue-100 text-sm">
                    Recognized for excellence in computer applications education and outstanding placement records.
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
