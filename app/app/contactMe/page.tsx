"use client";
import { useState } from "react";

const field = "w-full px-3 py-2.5 rounded-md border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section>
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Contact</h1>
      <p className="mt-3">Open to AI / computer vision roles and collaborations. Send me a message or email{" "}
        <a href="mailto:hassanrajput189@gmail.com" className="text-blue-600 hover:underline">hassanrajput189@gmail.com</a>.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <input name="name" required placeholder="Name" className={field} />
        <input name="email" type="email" required placeholder="Email" className={field} />
        <textarea name="message" required rows={5} placeholder="Message" className={field} />
        <button disabled={status === "sending"} className="px-5 py-2.5 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 disabled:opacity-50">
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "ok" && <p className="text-sm text-green-600">Message sent. I&apos;ll get back to you soon.</p>}
        {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again or email me directly.</p>}
      </form>
    </section>
  );
}
