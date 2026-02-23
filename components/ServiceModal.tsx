"use client";

import { serviceDetails } from "@/lib/data"; // tes détails de services
import { X } from "lucide-react";

interface ServiceModalProps {
  serviceId: string | null;
  onClose: () => void;
}

const ServiceModal = ({ serviceId, onClose }: ServiceModalProps) => {
  if (!serviceId) return null;
  const service = serviceDetails.find((s) => s.id === serviceId);
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-red-700 transition"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          {service.overview}
        </h3>
        <h4 className="font-semibold mb-2 text-gray-800">Avantages :</h4>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          {service.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <h4 className="font-semibold mb-2 text-gray-800">Processus :</h4>
        <p className="text-gray-700">{service.process}</p>
      </div>
    </div>
  );
};

export default ServiceModal;
