import { FC, memo, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { sendContactEmail } from "@/services/email";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const { t } = useTranslation();
  const defaultData = useMemo(
    () => ({
      name: "",
      email: "",
      message: "",
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [sending, setSending] = useState(false);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(
      event: React.ChangeEvent<T>,
    ): void => {
      const { name, value } = event.target;

      const fieldData: Partial<FormData> = { [name]: value };

      setData((prev) => ({ ...prev, ...fieldData }));
    },
    [],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setSending(true);

      await toast
        .promise(sendContactEmail(data), {
          loading: t("contact.form.submit", { defaultValue: "Sending…" }),
          success: t("contact.form.success", {
            defaultValue: "Your message has been sent successfully.",
          }),
          error: (err) =>
            `${t("contact.form.error", {
              defaultValue: "We couldn't send your message. Please try again.",
            })}${err?.message ? ` (${err.message})` : ""}`,
        })
        .then(() => {
          setData(defaultData);
        })
        .catch((err: unknown) => {
          console.error("Failed to send contact message", err);
        })
        .finally(() => setSending(false));
    },
    [data, defaultData, t],
  );

  const inputClasses =
    "bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm px-3 py-2 md:px-4 md:py-3";

  return (
    <form
      className="grid min-h-[320px] grid-cols-1 gap-y-4"
      method="POST"
      onSubmit={handleSendMessage}
    >
      <input
        className={inputClasses}
        name="name"
        onChange={onChange}
        placeholder={t("contact.form.name")}
        value={data.name}
        required
        type="text"
      />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder={t("contact.form.email")}
        value={data.email}
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder={t("contact.form.message")}
        value={data.message}
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
        disabled={sending}
      >
        {sending ? t("contact.form.submit") + "…" : t("contact.form.submit")}
      </button>
      {/* Toasts handle feedback; keep DOM clean */}
    </form>
  );
});

ContactForm.displayName = "ContactForm";
export default ContactForm;
