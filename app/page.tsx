"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Users, Image, Trophy, ChevronRight } from "lucide-react"
import FadeIn from "./components/transitions/fade-in"
import SlideIn from "./components/transitions/slide-in"
import LoadingSpinner from "./components/loading-spinner"
import { websiteData } from "@/app/lib/data-service"
import ContactSection from "./components/contact-section"
import SponsorsBar from "./components/sponsors-bar"
import HeroSlider from "./components/hero-slider"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular tiempo de carga
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  if (isLoading) {
    return <LoadingSpinner message="Cargando..." />
  }

  // Usar los datos del hero si están disponibles
  const heroImages = websiteData?.hero?.backgroundImages || [
    {
      url: "/bg_photo/home_bg4.webp",
      alt: "Maycam Evolve",
    },
    {
      url: "/bg_photo/home_bg2.webp",
      alt: "Equipo Profesional",
    },
  ]

  return (
    <div>
      <HeroSlider />

    <SponsorsBar />

        {/* 2. NOTICIAS SECTION */}
        <section className="py-20 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <FadeIn>
            <div className="flex items-center mb-12">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
              <h2 className="text-3xl font-bold text-white mx-4 font-title flex items-center">
                <Users className="h-6 w-6 mr-2 text-violet-500" />
                NOTICIAS
              </h2>
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
            </div>
          </FadeIn>

          {/* 2_2. LINKEDIN SLIDER SECTION */}
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div className="elfsight-app-622032dd-25d1-4dfd-a3b8-b9efa4fb4faa" data-elfsight-app-lazy></div>
          </div>

          {/* 2_2. INSTAGRAM SLIDER SECTION */}
          <div className="flex justify-center mt-4 w-full max-w-[1800px] mx-auto ">
          <div className="w-full max-w-[1290px] mb-0 "> {/* Cambia el max-w-[900px] al mismo tamaño que el de LinkedIn */}
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div className="elfsight-app-845495eb-d958-403d-8d17-87a5d7d70ade" data-elfsight-app-lazy></div>
          </div>
          </div>

          </section>

      {/* 3. SOBRE NOSOTROS SECTION */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <FadeIn>
            <div className="flex items-center mb-12">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
              <h2 className="text-3xl font-bold text-white mx-4 font-title">SOBRE NOSOTROS</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <SlideIn direction="left">
              <div className="relative h-[400px] overflow-hidden rounded-sm border border-violet-900">
                <img
                  src="/bg_photo/home_bg2.webp"
                  alt="Equipo Maycam Evolve"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-title">
                    {websiteData?.teamInfo?.name || "Maycam Evolve"}
                  </h3>
                  <p className="text-violet-400 italic font-title">
                    "{websiteData?.teamInfo?.slogan || "Evoluciona. Compite. Conquista."}"
                  </p>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed font-text">
                  {websiteData?.teamInfo?.description ||
                    "Maycam Evolve es un equipo profesional de esports fundado con la misión de revolucionar la escena competitiva. Nuestro enfoque se centra en el desarrollo de talento y la creación de una comunidad apasionada por los deportes electrónicos."}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 p-4 border border-violet-900 rounded-sm">
                    <h4 className="text-violet-400 font-bold mb-2 font-title">MISIÓN</h4>
                    <p className="text-gray-300 text-sm font-text">
                      {websiteData?.teamInfo?.mission?.substring(0, 100) + "..." ||
                        "Desarrollar jugadores de élite y equipos competitivos que representen con orgullo nuestra marca..."}
                    </p>
                  </div>
                  <div className="bg-gray-900/50 p-4 border border-violet-900 rounded-sm">
                    <h4 className="text-violet-400 font-bold mb-2 font-title">VISIÓN</h4>
                    <p className="text-gray-300 text-sm font-text">
                      {websiteData?.teamInfo?.vision?.substring(0, 100) + "..." ||
                        "Ser reconocidos como el equipo de esports líder, impulsando la profesionalización del sector..."}
                    </p>
                  </div>
                </div>

                <Link
                  href="/sobre-nosotros"
                  className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors font-medium font-title"
                >
                  Conoce más sobre nosotros
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* 4. STAFF SECTION */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-90">
        <div className="container px-4 md:px-6 mx-auto">
          <FadeIn>
            <div className="flex items-center mb-12">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
              <h2 className="text-3xl font-bold text-white mx-4 font-title flex items-center">
                <Users className="h-6 w-6 mr-2 text-violet-500" />
                STAFF TÉCNICO
              </h2>
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {websiteData?.staff?.staffMembers?.slice(0, 3).map((member, index) => (
              <SlideIn key={member.id} direction="up" delay={index * 0.1}>
                <div className="bg-gray-900/50 border border-violet-900 hover:border-violet-500 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/20">
                  {/* Role badge */}
                  <div className="absolute top-0 right-0 bg-violet-900 px-3 py-1 text-xs text-white z-10 font-title">
                    {member.role}
                  </div>

                  {/* Image with overlay */}
                  <div className="relative h-50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                    {member.image && (
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                      <h3 className="text-xl font-bold text-white mb-1 font-title">{member.name}</h3>
                      <div className="w-12 h-1 bg-violet-600 mb-2"></div>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/staff"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-violet-900/20 text-white font-medium rounded-sm border border-violet-600 shadow-lg hover:shadow-violet-600/20 transition-all duration-300 transform hover:-translate-y-1 font-title"
            >
              Ver todo el staff
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* 6. CONTACTO SECTION - Ahora al final antes del footer */}
      <ContactSection title={""} subtitle={""} buttonText={""} buttonLink={""} />
    </div>
  )
}