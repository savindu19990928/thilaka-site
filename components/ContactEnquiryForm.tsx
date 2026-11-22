"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  MapPin,
  Phone,
  RotateCcw,
} from "lucide-react";
import {
  BUSINESS_INFO,
  PRODUCT_CATEGORIES,
  PRODUCT_FORMS,
} from "@/lib/site-data";

const ENQUIRY_TYPES = [
  "General Question",
  "Product Information",
  "Product Availability",
] as const;

type EnquiryType = (typeof ENQUIRY_TYPES)[number];

interface FormErrors {
  fullName?: string;
  telephone?: string;
  email?: string;
  message?: string;
  consent?: string;
}

export function ContactEnquiryForm() {
  const searchParams = useSearchParams();
  const initialTopic = searchParams.get("topic") ?? "";
  const initialSubjectParam = searchParams.get("subject") ?? "";
  const initialSubject: EnquiryType = ENQUIRY_TYPES.includes(
    initialSubjectParam as EnquiryType
  )
    ? (initialSubjectParam as EnquiryType)
    : initialTopic
    ? "Product Availability"
    : "General Question";

  return (
    <ContactEnquiryFormInner
      key={`${initialSubject}|${initialTopic}`}
      initialSubject={initialSubject}
      initialTopic={initialTopic}
    />
  );
}

function ContactEnquiryFormInner({
  initialSubject,
  initialTopic,
}: {
  initialSubject: EnquiryType;
  initialTopic: string;
}) {
  const [fullName, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState<EnquiryType>(initialSubject);
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const errorSummaryRef = useRef<HTMLDivElement | null>(null);

  const topicOptions = [
    ...PRODUCT_CATEGORIES.map((c) => c.name),
    ...PRODUCT_FORMS.map((f) => `${f.name} (${f.subtitle})`),
    "Personalized Herbal Preparation",
    "Raw Herbal Ingredients",
  ];

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!fullName.trim()) {
      next.fullName = "Please enter your full name.";
    }
    if (!telephone.trim() || telephone.replace(/[^\d+]/g, "").length < 7) {
      next.telephone = "Please enter a valid contact telephone number.";
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please enter a valid email address or leave it blank.";
    }
    if (message.trim().length < 8) {
      next.message =
        "Please describe your question or product availability enquiry (at least 8 characters).";
    }
    if (!consent) {
      next.consent =
        "Please confirm consent for Thilaka Ayurveda to respond to your enquiry.";
    }
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) {
      requestAnimationFrame(() => {
        errorSummaryRef.current?.focus();
      });
      return;
    }
    setSubmitted(true);
  };

  const formattedSummary = [
    `Thilaka Ayurveda — Product / Shop Enquiry`,
    `Name: ${fullName.trim()}`,
    `Telephone: ${telephone.trim()}`,
    email.trim() ? `Email: ${email.trim()}` : null,
    `Enquiry Type: ${enquiryType}`,
    topic.trim() ? `Category / Product Focus: ${topic.trim()}` : null,
    `Message: ${message.trim()}`,
    `Note: Information enquiry only — customer understands purchases are made at No. 38, Main Street, Ruwanwella.`,
  ]
    .filter(Boolean)
    .join("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrors({});
    setFullName("");
    setTelephone("");
    setEmail("");
    setMessage("");
    setConsent(false);
    setCopied(false);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#0E4025]/25 bg-white p-6 shadow-sm sm:p-8 space-y-6">
        <div className="flex items-start gap-3.5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F0EA] text-[#0E4025]">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#845D18]">
              Enquiry Prepared
            </p>
            <h2 className="font-serif text-2xl font-semibold text-[#15231A] sm:text-3xl">
              Ready to Share with Our Ruwanwella Shop
            </h2>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-[#435449]">
          This website is a static digital catalogue and does not store online
          submissions or place product orders. To check current availability or
          ask your question directly, call our counter at{" "}
          <a
            href={BUSINESS_INFO.phoneHref}
            className="font-semibold text-[#0E4025] underline"
          >
            {BUSINESS_INFO.phoneDisplay}
          </a>{" "}
          or copy your formatted enquiry summary below to share with our staff.
        </p>

        <pre className="whitespace-pre-wrap rounded-2xl border border-[#E3DAC6] bg-[#FAF7F0] p-4 font-sans text-xs leading-relaxed text-[#15231A]">
          {formattedSummary}
        </pre>

        <div className="flex flex-wrap gap-3">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0E4025] px-5 py-2.5 text-xs font-semibold text-[#FAF7F0] hover:bg-[#155232]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#0E4025]/30 bg-white px-5 py-2.5 text-xs font-semibold text-[#0E4025] hover:bg-[#E8F0EA] cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-[#0E4025]" aria-hidden="true" />
                Copied Summary
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copy Enquiry Summary
              </>
            )}
          </button>
          <a
            href={BUSINESS_INFO.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#E3DAC6] bg-[#FAF7F0] px-4 py-2.5 text-xs font-semibold text-[#15231A] hover:bg-[#F2ECE0]"
          >
            <MapPin className="h-4 w-4 text-[#845D18]" aria-hidden="true" />
            Directions to Shop
          </a>
        </div>

        <div className="border-t border-[#E3DAC6]/70 pt-4">
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5F7065] hover:text-[#0E4025] cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Prepare another enquiry
          </button>
        </div>
      </div>
    );
  }

  const errorList = Object.entries(errors);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-[#E3DAC6] bg-white p-6 shadow-sm sm:p-8 space-y-5"
    >
      <div className="space-y-1.5 border-b border-[#E3DAC6]/70 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#845D18]">
          Information &amp; Availability Enquiry
        </p>
        <h2 className="font-serif text-2xl font-semibold text-[#15231A] sm:text-3xl">
          Prepare Your Shop Enquiry
        </h2>
        <p className="text-xs leading-relaxed text-[#5F7065]">
          This form helps prepare an information or availability enquiry. It does
          not create an order, reserve stock, or initiate delivery.
        </p>
      </div>

      {errorList.length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-2xl border border-red-300 bg-red-50 p-4 text-xs text-red-900 space-y-1.5"
        >
          <p className="flex items-center gap-2 font-semibold">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            Please review the following fields:
          </p>
          <ul className="list-disc pl-5 space-y-0.5">
            {errorList.map(([key, text]) => (
              <li key={key}>
                <a href={`#field-${key}`} className="underline">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="field-fullName"
            className="block text-xs font-semibold text-[#15231A] mb-1.5"
          >
            Full Name <span className="text-[#845D18]">*</span>
          </label>
          <input
            id="field-fullName"
            type="text"
            required
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            className="min-h-11 w-full rounded-xl border border-[#E3DAC6] bg-[#FAF7F0] px-3.5 py-2 text-sm text-[#15231A] focus:border-[#0E4025] focus:bg-white focus:outline-none"
            placeholder="Your full name"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-700">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="field-telephone"
            className="block text-xs font-semibold text-[#15231A] mb-1.5"
          >
            Telephone Number <span className="text-[#845D18]">*</span>
          </label>
          <input
            id="field-telephone"
            type="tel"
            required
            autoComplete="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            aria-invalid={Boolean(errors.telephone)}
            className="min-h-11 w-full rounded-xl border border-[#E3DAC6] bg-[#FAF7F0] px-3.5 py-2 text-sm text-[#15231A] focus:border-[#0E4025] focus:bg-white focus:outline-none"
            placeholder="+94 7X XXX XXXX"
          />
          {errors.telephone && (
            <p className="mt-1 text-xs text-red-700">{errors.telephone}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="field-email"
            className="block text-xs font-semibold text-[#15231A] mb-1.5"
          >
            Email Address{" "}
            <span className="text-[#5F7065] font-normal">(Optional)</span>
          </label>
          <input
            id="field-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            className="min-h-11 w-full rounded-xl border border-[#E3DAC6] bg-[#FAF7F0] px-3.5 py-2 text-sm text-[#15231A] focus:border-[#0E4025] focus:bg-white focus:outline-none"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-700">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="field-enquiryType"
            className="block text-xs font-semibold text-[#15231A] mb-1.5"
          >
            Enquiry Type
          </label>
          <select
            id="field-enquiryType"
            value={enquiryType}
            onChange={(e) => setEnquiryType(e.target.value as EnquiryType)}
            className="min-h-11 w-full rounded-xl border border-[#E3DAC6] bg-[#FAF7F0] px-3.5 py-2 text-sm text-[#15231A] focus:border-[#0E4025] focus:bg-white focus:outline-none cursor-pointer"
          >
            {ENQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="field-topic"
          className="block text-xs font-semibold text-[#15231A] mb-1.5"
        >
          Product Category or Preparation Form of Interest{" "}
          <span className="text-[#5F7065] font-normal">(Optional)</span>
        </label>
        <input
          id="field-topic"
          type="text"
          list="thilaka-topic-options"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="min-h-11 w-full rounded-xl border border-[#E3DAC6] bg-[#FAF7F0] px-3.5 py-2 text-sm text-[#15231A] focus:border-[#0E4025] focus:bg-white focus:outline-none"
          placeholder="Select or enter a category (e.g., Digestive Health, Medicated Oils)"
        />
        <datalist id="thilaka-topic-options">
          {topicOptions.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      </div>

      <div>
        <label
          htmlFor="field-message"
          className="block text-xs font-semibold text-[#15231A] mb-1.5"
        >
          Your Question or Availability Enquiry{" "}
          <span className="text-[#845D18]">*</span>
        </label>
        <textarea
          id="field-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          className="w-full rounded-xl border border-[#E3DAC6] bg-[#FAF7F0] px-3.5 py-2.5 text-sm text-[#15231A] focus:border-[#0E4025] focus:bg-white focus:outline-none"
          placeholder="Ask about opening hours, directions, product categories, or current availability..."
        />
        <p className="mt-1 text-[11px] text-[#5F7065]">
          Please do not include sensitive medical histories or personal health
          records in your message.
        </p>
        {errors.message && (
          <p className="mt-1 text-xs text-red-700">{errors.message}</p>
        )}
      </div>

      <div className="rounded-xl border border-[#E3DAC6] bg-[#FAF7F0] p-3.5">
        <label className="flex items-start gap-3 text-xs leading-relaxed text-[#15231A] cursor-pointer">
          <input
            id="field-consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            className="mt-0.5 h-4 w-4 rounded border-[#0E4025] text-[#0E4025] focus:ring-[#0E4025]"
          />
          <span>
            I understand this website is an informational catalogue only,
            purchases must be made in person at{" "}
            <strong>{BUSINESS_INFO.shortAddress}</strong>, and I consent to
            using these contact details to enquire with Thilaka Ayurveda.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 pl-7 text-xs text-red-700">{errors.consent}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#0E4025] px-6 py-2.5 text-sm font-semibold text-[#FAF7F0] shadow-xs transition-colors hover:bg-[#155232] cursor-pointer"
        >
          Prepare Enquiry Summary
        </button>
        <a
          href={BUSINESS_INFO.phoneHref}
          className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[#0E4025] hover:text-[#845D18]"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          Or call {BUSINESS_INFO.phoneDisplay} directly
        </a>
      </div>
    </form>
  );
}
