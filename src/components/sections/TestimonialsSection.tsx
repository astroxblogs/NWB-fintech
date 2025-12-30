import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "NWB transformed our payment infrastructure. We went from processing 10,000 transactions daily to over 500,000 with zero downtime.",
    author: "Priya Sharma",
    title: "CTO, PayFlow India",
    avatar: "/indian-woman-1.png",
  },
  {
    quote:
      "The developer experience is unmatched. We integrated their APIs in under a week and launched our fintech product months ahead of schedule.",
    author: "Rahul Mehta",
    title: "Founder, NeoBank",
    avatar: "/indian-man-1.png",
  },
  {
    quote:
      "Their fraud detection saved us millions. The AI-powered system catches suspicious transactions that our previous provider completely missed.",
    author: "Anita Desai",
    title: "Head of Risk, SecurePay",
    avatar: "/indian-woman-2.png",
  },
  {
    quote:
      "Exceptional compliance tools that made our regulatory reporting seamless. NWB's platform handles complexity so we can focus on growth.",
    author: "Vikram Singh",
    title: "Compliance Officer, FinSecure",
    avatar: "/indian-man-2.png",
  },
  {
    quote:
      "The analytics dashboard provides insights we never had before. Our decision-making improved dramatically overnight.",
    author: "Kavita Patel",
    title: "Data Analyst, BankPlus",
    avatar: "/indian-woman-3.png",
  },
];

// Put these files in: /public/logos/...
// Example files: hdfc.svg, paytm.svg, razorpay.svg, phonepe.svg, icici.svg
const logos = [
  { name: "HDFC Bank", src: "/hdfc-bank-logo.svg" },
  { name: "Paytm", src: "/paytm-1.svg" },
  { name: "Razorpay", src: "/razorpay.svg" },
  { name: "PhonePe", src: "/phonepe-logo.svg" },
  { name: "ICICI", src: "/icici-1.svg" },
];

export const TestimonialsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  // Testimonials marquee (seamless loop)
  const marqueeItems = useMemo(() => [...testimonials, ...testimonials], []);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [halfWidth, setHalfWidth] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;

    const calc = () => {
      const w = el.scrollWidth / 2; // 1-set width
      setHalfWidth(w);
    };

    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const speedPxPerSec = 70;
  const tDuration = halfWidth ? halfWidth / speedPxPerSec : 20;

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold mb-4 block text-sm tracking-wider uppercase">
            TESTIMONIALS
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              industry leaders
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about transforming their financial
            operations with NWB.
          </p>
        </motion.div>

        {/* Testimonials Auto-scroll (Right -> Left) */}
        <div className="relative mb-20">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          <div
            className="overflow-hidden"
            onMouseEnter={(e) => {
              const el = e.currentTarget.querySelector(
                "[data-marquee='testimonials']"
              ) as HTMLElement | null;
              if (el) el.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget.querySelector(
                "[data-marquee='testimonials']"
              ) as HTMLElement | null;
              if (el) el.style.animationPlayState = "running";
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div
                ref={trackRef}
                data-marquee="testimonials"
                className="flex gap-6 w-max"
                style={
                  prefersReducedMotion || !halfWidth
                    ? undefined
                    : ({
                      animation: `marquee-left ${tDuration}s linear infinite`,
                      willChange: "transform",
                    } as React.CSSProperties)
                }
              >
                {marqueeItems.map((t, idx) => (
                  <div
                    key={`${t.author}-${idx}`}
                    className="relative w-[320px] sm:w-[380px] md:w-[420px] flex-shrink-0"
                  >
                    <div className="bg-white rounded-2xl p-7 h-full shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                        <Quote className="w-6 h-6 text-blue-600" />
                      </div>

                      <blockquote className="text-gray-700 text-[15px] mb-7 leading-relaxed">
                        “{t.quote}”
                      </blockquote>

                      <div className="flex items-center gap-4">
                        <img
                          src={t.avatar}
                          alt={`${t.author} avatar`}
                          className="w-12 h-12 rounded-full object-cover shadow-md"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">
                            {t.author}
                          </p>
                          <p className="text-sm text-gray-600">{t.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reduced motion fallback */}
              {prefersReducedMotion && (
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  {testimonials.map((t) => (
                    <div
                      key={t.author}
                      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                        <Quote className="w-6 h-6 text-blue-600" />
                      </div>
                      <blockquote className="text-gray-700 text-base mb-8 leading-relaxed">
                        “{t.quote}”
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <img
                          src={t.avatar}
                          alt={`${t.author} avatar`}
                          className="w-12 h-12 rounded-full object-cover shadow-md"
                          loading="lazy"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">
                            {t.author}
                          </p>
                          <p className="text-sm text-gray-600">{t.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Team Photo Illustration (fixed + cleaner floating stats) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative max-w-5xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600"
              alt="Fintech team collaborating in modern office"
              className="w-full h-auto rounded-3xl shadow-xl border border-gray-100 object-cover aspect-video"
              loading="lazy"
            />

            {/* keep inside image bounds so it doesn't look broken */}
            <motion.div
              className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/95 backdrop-blur rounded-2xl shadow-lg px-4 py-3 border border-gray-100"
              initial={{ opacity: 0, scale: 0.9, y: -8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <div className="text-2xl font-bold text-green-600 leading-none">
                98%
              </div>
              <div className="text-xs text-gray-600">Satisfaction</div>
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/95 backdrop-blur rounded-2xl shadow-lg px-4 py-3 border border-gray-100"
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
            >
              <div className="text-2xl font-bold text-blue-600 leading-none">
                24/7
              </div>
              <div className="text-xs text-gray-600">Support</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Logos Section (realistic logos + ping-pong auto scroll L->R then R->L) */}
        <LogosPingPong
          logos={logos}
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>

      {/* Scoped keyframes */}
      <style>
        {`
          @keyframes marquee-left {
            0% { transform: translate3d(0,0,0); }
            100% { transform: translate3d(-${halfWidth || 0}px,0,0); }
          }
        `}
      </style>
    </section>
  );
};

const LogosPingPong: React.FC<{
  logos: { name: string; src: string }[];
  prefersReducedMotion: boolean | null;
}> = ({ logos, prefersReducedMotion }) => {
  // duplicate for wider track (looks more “alive”)
  const items = useMemo(() => [...logos, ...logos, ...logos], [logos]);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [maxShift, setMaxShift] = useState(0);

  useEffect(() => {
    const vp = viewportRef.current;
    const tr = trackRef.current;
    if (!vp || !tr) return;

    const calc = () => {
      const shift = Math.max(0, tr.scrollWidth - vp.clientWidth);
      setMaxShift(shift);
    };

    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(vp);
    ro.observe(tr);
    return () => ro.disconnect();
  }, []);

  // speed control for logos
  const speedPxPerSec = 60;
  const duration = maxShift ? Math.max(10, maxShift / speedPxPerSec) : 12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="mt-24"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* cool container */}
        <div className="relative rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
          {/* subtle background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.08),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.07),transparent_45%)]" />

          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="relative px-6 py-10 md:px-10">
            <div className="text-center mb-8">
              <p className="text-gray-600 font-medium">
                Trusted by leading companies across the globe
              </p>
            </div>

            <div ref={viewportRef} className="overflow-hidden">
              <div
                ref={trackRef}
                data-marquee="logos"
                className="flex items-center gap-10 w-max"
                style={
                  prefersReducedMotion || !maxShift
                    ? undefined
                    : ({
                      animation: `logos-pingpong ${duration}s ease-in-out infinite alternate`,
                      willChange: "transform",
                    } as React.CSSProperties)
                }
              >
                {items.map((l, idx) => (
                  <LogoItem key={`${l.name}-${idx}`} name={l.name} src={l.src} />
                ))}
              </div>

              {/* Reduced motion fallback */}
              {prefersReducedMotion && (
                <div className="flex flex-wrap items-center justify-center gap-10">
                  {logos.map((l) => (
                    <LogoItem key={l.name} name={l.name} src={l.src} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* keyframes for ping-pong */}
        <style>
          {`
            @keyframes logos-pingpong {
              0% { transform: translate3d(-${maxShift || 0}px,0,0); } /* start: left->right */
              100% { transform: translate3d(0,0,0); }
            }
          `}
        </style>
      </div>
    </motion.div>
  );
};

const LogoItem: React.FC<{ name: string; src: string }> = ({ name, src }) => {
  const [broken, setBroken] = useState(false);

  return (
    <div className="flex items-center justify-center px-4 py-2">
      {!broken ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setBroken(true)}
          className="
          h-7 md:h-8 w-auto
          opacity-100 grayscale-0
          transition-transform duration-300
          hover:scale-[1.03]
        "
        />

      ) : (
        // fallback if you haven't added logo files yet
        <div
          className="text-lg md:text-xl font-bold text-gray-300 hover:text-gray-600 transition-colors"
          style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
        >
          {name}
        </div>
      )}
    </div>
  );
};
