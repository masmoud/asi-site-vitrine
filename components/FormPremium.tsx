"use client";

import { Building, Mail, MessageCircle, Phone, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

const FormPremium = () => {
  const [loading, setLoading] = useState(false);

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-red-700 transition";

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast.success("Nous vous contacterons dans les plus brefs délais.");
        e.currentTarget.reset();
      } else {
        toast.error("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Contact form error:", error.message);
      } else {
        console.error("Unknown error:", error);
      }

      toast.error("Erreur serveur. Veuillez réessayer");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-lg mx-auto"
    >
      <Select name="service" required>
        <SelectTrigger className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700">
          <SelectValue placeholder="Sélectionnez le service..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Demande de devis/tarifs">
            Demande de devis/tarifs
          </SelectItem>
          <SelectItem value="Questions sur nos services">
            Questions sur nos services
          </SelectItem>
          <SelectItem value="Autres">Autres</SelectItem>
        </SelectContent>
      </Select>

      <div className="relative">
        <User
          className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <Input
          type="text"
          name="name"
          required
          placeholder="Nom complet"
          className={inputClass}
        />
      </div>

      <div className="relative">
        <Building
          className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <Input
          type="text"
          name="societe"
          required
          placeholder="Société"
          className={inputClass}
        />
      </div>

      <div className="relative">
        <Mail
          className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <Input
          type="email"
          name="email"
          required
          placeholder="Adresse e-mail"
          className={inputClass}
        />
      </div>

      <div className="relative">
        <Phone
          className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <Input
          type="tel"
          name="phone"
          required
          placeholder="Numéro de téléphone"
          className={inputClass}
        />
      </div>

      <div className="relative">
        <MessageCircle
          className="absolute top-3 left-3 text-gray-400"
          size={18}
        />
        <Textarea
          name="message"
          required
          rows={5}
          placeholder="Votre message..."
          className="w-full border border-gray-300 rounded-lg px-3 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-700 transition resize-none"
        />
      </div>

      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Button
        type="submit"
        disabled={loading}
        className="mt-4 w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition"
      >
        {loading ? "En cours..." : "Envoyer"}
      </Button>
    </form>
  );
};

export default FormPremium;
