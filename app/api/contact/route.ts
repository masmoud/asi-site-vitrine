import { z } from "zod";

const contactSchema = z.object({
  service: z.string().min(2),
  name: z.string().min(2),
  societe: z.string().min(2),
  email: z.email(),
  phone: z.string().min(6),
  message: z.string().min(10),
  website: z.string().optional(), // honeypot
});

let lastRequestTime = 0; // basic rate limit

export async function POST(req: Request) {
  try {
    const now = Date.now();

    // Simple rate limit (3s between requests)
    if (now - lastRequestTime < 3000) {
      return Response.json(
        { success: false, message: "Too many requests" },
        { status: 429 },
      );
    }

    lastRequestTime = now;

    const body = await req.json();

    // Anti-bot honeypot
    if (body.website) {
      return Response.json({ success: true });
    }

    // Validation
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { success: false, message: "Invalid form data" },
        { status: 400 },
      );
    }

    const response = await fetch(
      `https://formspree.io/f/${process.env.FORMSPREE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          body: JSON.stringify(parsed.data),
        },
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Formspree error:", errorText);

      return Response.json(
        { success: false, message: "Form submission failed" },
        { status: 400 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("API Contact error", error);

    return Response.json({ success: false }, { status: 500 });
  }
}
