"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

type Status = "idle" | "loading" | "success" | "error" | "duplicate";

export default function WaitlistSignup() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useGSAP(
    () => {
      if (!headlineRef.current) return;

      gsap.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setStatus("success");
        // Track conversion for Rybbit funnel
        try {
          const w = window as unknown as { rybbit?: { event: (name: string) => void } };
          w.rybbit?.event("waitlist_signup");
        } catch { /* analytics should never break signup */ }
      } else if (res.status === 200 && data.alreadyExists) {
        setStatus("duplicate");
      } else if (res.status === 429) {
        setErrorMessage("Too many requests. Please try again later.");
        setStatus("error");
      } else if (res.status === 400) {
        setErrorMessage(data.error || "Invalid email address.");
        setStatus("error");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  const showForm = status === "idle" || status === "loading" || status === "error";

  return (
    <section
      ref={sectionRef}
      id="waitlist"
      aria-label="Join the Waitlist"
      className="h-screen flex items-center justify-center text-center px-6"
    >
      <div className="max-w-2xl w-full">
        <h2
          ref={headlineRef}
          className="text-[clamp(2rem,5vw,4.5rem)] font-bold mb-4"
        >
          Be first through the glass wall.
        </h2>

        <p className="text-text-secondary text-lg max-w-lg mx-auto mb-10 whitespace-pre-line">
          {"Join the waitlist.\nYour email is encrypted at rest with AES-256.\nOur signup system is open source.\nAudit it."}
        </p>

        {showForm ? (
          <>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center"
            >
              <label htmlFor="waitlist-email" className="sr-only">Email address</label>
              <input
                id="waitlist-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="bg-bg-surface border border-bg-surface focus:border-accent outline-none rounded-full px-6 py-4 text-lg text-text-primary placeholder:text-text-secondary w-full max-w-md"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto bg-accent text-bg-primary font-semibold text-lg rounded-full px-8 py-4 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer whitespace-nowrap"
              >
                {status === "loading" ? "Joining..." : "Join the Waitlist"}
              </button>
            </form>
            {status === "error" && errorMessage && (
              <p className="text-danger mt-4 text-sm">{errorMessage}</p>
            )}
          </>
        ) : (
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-2">
              {status === "duplicate"
                ? "You're already on the list!"
                : "You're on the list."}
            </h3>
            <p className="text-text-secondary">
              We&apos;ll reach out when the glass wall goes up.
            </p>
          </div>
        )}

        <p className="text-text-secondary text-sm mt-8">
          No spam. No data sharing. Unsubscribe anytime.{" "}
          <a href="https://github.com/danthi123/PrivDNA" target="_blank" rel="noopener noreferrer" className="text-accent underline">
            View the source
          </a>
        </p>
      </div>
    </section>
  );
}
