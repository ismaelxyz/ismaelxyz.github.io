import emailjs from "@emailjs/browser";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

function assertEnv() {
  const missing: string[] = [];
  if (!SERVICE_ID) missing.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
  if (!TEMPLATE_ID) missing.push("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
  if (!PUBLIC_KEY) missing.push("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");
  if (missing.length) {
    throw new Error(
      `Missing EmailJS env vars: ${missing.join(", ")}. Check your .env.local.`,
    );
  }
}

export async function sendContactEmail(payload: ContactPayload) {
  assertEnv();

  const templateParams = {
    name: payload.name,
    email: payload.email,
    time: new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZoneName: "short",
    }).format(new Date()),
    message: payload.message,
  } as Record<string, string>;

  emailjs.init({ publicKey: PUBLIC_KEY! });

  const result = await emailjs.send(SERVICE_ID!, TEMPLATE_ID!, templateParams);

  return result;
}
