"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Programs from "./components/Programs"
import WhyChooseUs from "./components/WhyChooseUs"
import Admission from "./components/Admission"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  useEffect(() => {
    // Initialize scroll-triggered animations
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <Admission />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
