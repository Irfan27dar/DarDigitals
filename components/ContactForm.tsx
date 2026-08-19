"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, ArrowUpRight } from "lucide-react";
import { ease } from "@/lib/motion";

type Fields = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  need: string;
  budget: string;
  date: string;
};

const empty: Fields = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  need: "",
  budget: "",
  date: "",
};

const budgets = [
  "Not sure yet",
  "Under $5k",
  "$5k – $15k",
  "$15k – $40k",
  "$40k+",
];

const inputBase =
  "w-full rounded-xl border border-white/12 bg-white/[0.02] px-4 py-3 text-bone placeholder:text-slate/70 transition-colors focus:border-signal/60 focus:bg-white/[0.04] focus:outline-none";
const labelBase = "mb-2 block text-sm font-medium text-bone/90";
const errorBase = "mt-1.5 text-xs text-[#ff8a8a]";

export default function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  function update<K extends keyof Fields>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) next.name = "Please tell us your name.";
    if (!values.email.trim()) {
      next.email = "We need an email to reply.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "That email doesn't look right.";
    }
    if (!values.need.trim() || values.need.trim().length < 10) {
      next.need = "A sentence or two helps us prepare.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex flex-col items-start rounded-2xl border border-signal/30 bg-signal/[0.06] p-10"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-signal text-white shadow-glow-sm">
              <Check size={26} />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-bone">
              Enquiry sent — thank you.
            </h3>
            <p className="mt-3 max-w-md text-slate">
              We&apos;ve got your details and will be in touch within one working
              day. In the meantime, feel free to reply to the confirmation with
              anything else that&apos;s useful.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal"
            >
              Send another <ArrowUpRight size={16} />
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            noValidate
            className="grid gap-5 sm:grid-cols-2"
          >
            <div>
              <label htmlFor="name" className={labelBase}>
                Name <span className="text-gold">*</span>
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={!!errors.name}
                className={inputBase}
                placeholder="Your name"
              />
              {errors.name && <p className={errorBase}>{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="company" className={labelBase}>
                Company
              </label>
              <input
                id="company"
                type="text"
                autoComplete="organization"
                value={values.company}
                onChange={(e) => update("company", e.target.value)}
                className={inputBase}
                placeholder="Company name"
              />
            </div>

            <div>
              <label htmlFor="email" className={labelBase}>
                Email <span className="text-gold">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={!!errors.email}
                className={inputBase}
                placeholder="you@company.com"
              />
              {errors.email && <p className={errorBase}>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="whatsapp" className={labelBase}>
                WhatsApp
              </label>
              <input
                id="whatsapp"
                type="tel"
                autoComplete="tel"
                value={values.whatsapp}
                onChange={(e) => update("whatsapp", e.target.value)}
                className={inputBase}
                placeholder="+971 …"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="need" className={labelBase}>
                What do you need help with? <span className="text-gold">*</span>
              </label>
              <textarea
                id="need"
                rows={4}
                value={values.need}
                onChange={(e) => update("need", e.target.value)}
                aria-invalid={!!errors.need}
                className={`${inputBase} resize-none`}
                placeholder="Tell us a little about the project, the business and what success looks like."
              />
              {errors.need && <p className={errorBase}>{errors.need}</p>}
            </div>

            <div>
              <label htmlFor="budget" className={labelBase}>
                Budget range
              </label>
              <select
                id="budget"
                value={values.budget}
                onChange={(e) => update("budget", e.target.value)}
                className={`${inputBase} appearance-none`}
              >
                <option value="" disabled>
                  Select a range
                </option>
                {budgets.map((b) => (
                  <option key={b} value={b} className="bg-midnight-800">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="date" className={labelBase}>
                Target date
              </label>
              <input
                id="date"
                type="date"
                value={values.date}
                onChange={(e) => update("date", e.target.value)}
                className={`${inputBase} [color-scheme:dark]`}
              />
            </div>

            <div className="mt-2 sm:col-span-2">
              {status === "error" && (
                <p className="mb-4 rounded-lg border border-[#ff8a8a]/30 bg-[#ff8a8a]/10 px-4 py-3 text-sm text-[#ffb3b3]">
                  Something went wrong sending your enquiry. Please try again, or
                  email us directly.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-8 py-4 text-sm font-semibold text-white shadow-glow-sm transition-colors hover:bg-signal-600 disabled:opacity-70 sm:w-auto"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={17} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send Project Enquiry
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
