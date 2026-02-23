"use client";

import { data } from "@/lib/data";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-8 lg:px-32 bg-white">
      <SectionHeader
        title="Nos Services"
        subtitle="Des solutions de sécurité fiables et conformes aux réglementations,
        adaptées aux entreprises, commerces et événements en Île-de-France."
      />

      <div className="space-y-40 mt-24">
        {data.services.map((service, index) => {
          const details = data.serviceDetails.find((d) => d.id === service.id);

          const isReversed = index % 2 !== 0;

          return (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-20 ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full lg:w-1/2 h-115 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <div className="w-12 h-0.75 bg-red-700 mb-6" />

                <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
                  {service.name}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {details?.overview}
                </p>

                <ul className="space-y-4 mb-8">
                  {details?.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-red-700 rounded-full mt-3 mr-4"></span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                  {details?.process}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
