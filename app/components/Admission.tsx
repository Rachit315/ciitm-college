"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { FileText, UserCheck, CreditCard, GraduationCap, Calendar, Clock, ArrowRight, Download } from "lucide-react"

export default function Admission() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate process steps
    gsap.fromTo(
      ".process-step",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".admission-process",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Animate timeline
    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".admission-timeline",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const admissionSteps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete the online application form with all required documents and academic records.",
      color: "blue",
    },
    {
      icon: UserCheck,
      title: "Document Verification",
      description: "Our admission team will verify your documents and academic qualifications.",
      color: "green",
    },
    {
      icon: CreditCard,
      title: "Fee Payment",
      description: "Pay the admission fee and secure your seat in your preferred program.",
      color: "purple",
    },
    {
      icon: GraduationCap,
      title: "Welcome to CIITM",
      description: "Attend orientation and begin your journey towards a successful career in technology.",
      color: "orange",
    },
  ]

  const timeline = [
    { date: "March 1", event: "Application Opens", status: "completed" },
    { date: "May 15", event: "Application Deadline", status: "current" },
    { date: "May 30", event: "Document Verification", status: "upcoming" },
    { date: "June 15", event: "Admission Confirmation", status: "upcoming" },
    { date: "July 1", event: "Classes Begin", status: "upcoming" },
  ]

  const requirements = [
    "12th Pass with minimum 50% marks",
    "Mathematics as a subject in 12th",
    "Valid ID proof (Aadhar/Passport)",
    "Transfer Certificate from previous institution",
    "Character Certificate",
    "Passport size photographs",
  ]

  return (
    <section id="admissions" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-6">
            Admissions Open
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Start Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Tech Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join CIITM and embark on a transformative educational experience. Our streamlined admission process makes it
            easy to secure your future in technology.
          </p>
        </div>

        {/* Admission Process */}
        <div className="admission-process mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">Simple Admission Process</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="process-step relative">
                <div className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r from-${step.color}-100 to-${step.color}-200 rounded-full flex items-center justify-center mx-auto mb-6 relative`}
                  >
                    <step.icon className={`w-10 h-10 text-${step.color}-600`} />
                    <div
                      className={`absolute -top-2 -right-2 w-8 h-8 bg-${step.color}-600 text-white rounded-full flex items-center justify-center text-sm font-bold`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>

                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 transform translate-x-4">
                    <div
                      className={`h-full bg-gradient-to-r from-${step.color}-400 to-${admissionSteps[index + 1].color}-400 w-1/2`}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Requirements and Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Requirements */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Eligibility Requirements</h3>
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>

            <Button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl">
              <Download className="mr-2 w-4 h-4" />
              Download Prospectus
            </Button>
          </div>

          {/* Timeline */}
          <div className="admission-timeline">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Timeline 2024</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item flex items-center">
                  <div className="flex items-center mr-6">
                    <div
                      className={`w-4 h-4 rounded-full mr-4 ${
                        item.status === "completed"
                          ? "bg-green-500"
                          : item.status === "current"
                            ? "bg-blue-500"
                            : "bg-gray-300"
                      }`}
                    ></div>
                    <div className="w-20 text-sm font-medium text-gray-600">{item.date}</div>
                  </div>
                  <div
                    className={`flex-1 p-4 rounded-xl ${
                      item.status === "current" ? "bg-blue-50 border border-blue-200" : "bg-gray-50"
                    }`}
                  >
                    <div className={`font-medium ${item.status === "current" ? "text-blue-900" : "text-gray-900"}`}>
                      {item.event}
                      {item.status === "current" && (
                        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">Current</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait! Secure your seat in one of the top BCA programs in Dhanbad. Limited seats available for the
            upcoming academic year.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold">
              Apply Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Campus Visit
            </Button>
          </div>

          <div className="flex items-center justify-center mt-6 text-blue-100">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">Application deadline: May 15, 2024</span>
          </div>
        </div>
      </div>
    </section>
  )
}
